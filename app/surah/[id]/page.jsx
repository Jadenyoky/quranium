"use client";
import axios from "axios";
import _ from "lodash";
import moment from "moment";
import { useEffect, useRef, useState } from "react";

export default function Home(p) {
  console.log(p);

  const aud = useRef();
  const [dura, setdura] = useState(1000);

  const [verses, setverses] = useState([]);
  const [verseImg, setverseImg] = useState([]);
  const images = [];

  const chapter = async () => {
    const apiA = await axios.get(
      `https://api.qurancdn.com/api/qdc/verses/by_chapter/${p.params.id}?words=true&reciter=7&per_page=all&fields=text_uthmani%2Cchapter_id%2Chizb_number%2Ccode_v1%2Ccode_v2%2Ctext_imlaei_simple&reciter=7&word_translation_language=en&word_fields=verse_key%2Cverse_id%2Cpage_number%2Clocation%2Ccode_v2%2Ctext_uthmani%2C&mushaf=10`
    );
    console.log(apiA.data);
    setverses(apiA.data.verses);

    apiA.data.verses.forEach((verse) => {
      verse.words.forEach((word) => {
        images.push({
          img: `https://static.qurancdn.com/images/${word.text}`,
          text: word.text_uthmani,
          translation: word.translation.text,
          key: word.verse_key,
          id: word.verse_id,
        });
        setverseImg(_.uniqWith(images, _.isEqual));
        console.log(images, verseImg);

        console.log(document.images.length);
      });
    });
  };

  const byVerse = async (key) => {
    const apiA = await axios.get(
      `https://api.quran.com/api/v4/quran/verses/uthmani?verse_key=${key}`
    );
    navigator.clipboard.writeText(
      `${apiA.data.verses[0].text_uthmani} - [ ${key} ]`
    );
    console.log(apiA.data);
  };

  useEffect(() => {
    // chapter();
  }, []);

  return (
    <>
      <div>surah {p.params.id} </div>
      <button onClick={() => console.log(verseImg)}>click</button>
      <div className="word">
        {verseImg.map((e, k) => {
          return (
            <div
              id={`verse_${e.id}`}
              key={k}
              onClick={(s) => {
                byVerse(e.key);
                const t = document.querySelectorAll(`#verse_${e.id}`);
                t.forEach((elem) => {
                  elem.classList.add("active");
                  console.log(elem);
                });
              }}
            >
              <img src={`${e.img}`} alt={`${e.key}`} />
            </div>
          );
        })}
      </div>

      <div
        onClick={() =>
          aud.current.paused ? aud.current.play() : aud.current.pause()
        }
      >
        play
      </div>

      <audio
        ref={aud}
        src="https://download.quranicaudio.com/qdc/abdul_baset/mujawwad/3.mp3"
        autoPlay
        controls
        onPlay={(e) =>
          console.log(
            e.currentTarget.currentTime,
            e.eventPhase.toString(),
            moment(990530).format("mm:ss"),
            e.currentTarget.volume,
            e.currentTarget.currentTime,
            e.currentTarget.seeking,
            e.currentTarget.defaultPlaybackRate,
            e.currentTarget.ended && console.log("it is ended"),
            e.currentTarget.duration.toFixed(),
            setdura(e.currentTarget.duration.toFixed()),
            e
          )
        }
      />
      {aud.current && (
        <div>
          to volume
          <input
            type="range"
            defaultValue={0}
            min="0"
            max="1"
            step={"0.10"}
            onChange={(e) => {
              aud.current.volume = e.currentTarget.value;
              console.log(e.currentTarget.value, aud.current.volume);
            }}
          />
          to duration
          <input
            type="range"
            defaultValue={0}
            min="0"
            max={aud.current.duration}
            step={"10"}
            onClick={(e) => {
              // e.currentTarget.max = aud.current.duration;
              aud.current.currentTime = e.currentTarget.value;
              console.log(e.currentTarget.value, aud.current.currentTime);
            }}
            onChange={(e) => {
              // e.currentTarget.max = aud.current.duration;
              aud.current.currentTime = e.currentTarget.value;
              console.log(e.currentTarget.value, aud.current.currentTime);
            }}
          />
          to play / pause
          <input
            type="button"
            onClick={(e) => {
              aud.current.paused ? aud.current.play() : aud.current.pause();
            }}
          />
        </div>
      )}
    </>
  );
}
