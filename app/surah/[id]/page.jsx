"use client";
import axios from "axios";
import _ from "lodash";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScroll from "react-infinite-scroller";

export default function Home(p) {
  console.log(p);

  const [change, setchange] = useState(false);
  const aud = useRef();

  const [verses, setverses] = useState([]);
  const [verseImg, setverseImg] = useState([]);
  const images = [];
  const [total, settotal] = useState(1);
  const [next, setnext] = useState(1);

  const [audioVerses, setaudioVerses] = useState([]);
  const [result, setresult] = useState("loading");

  async function isEqual(num) {
    setresult("loading");
    num.forEach((element) => {
      const font = new FontFace(
        `page_${element}`,
        `url(https://quran.com/fonts/quran/hafs/v2/woff2/p${element}.woff2)`
      );
      font.load();
      document.fonts.add(font);
      document.fonts.ready.then(() => {
        setresult("loaded");
      });
    });
  }
  const chapter = async () => {
    const apiA = await axios.get(
      `https://api.qurancdn.com/api/qdc/verses/by_chapter/${p.params.id}?words=true&translation_fields=resource_name%2Clanguage_id&fields=text_uthmani%2Cchapter_id%2Chizb_number%2Ctext_imlaei_simple&translations=85&reciter=7&word_translation_language=en&page=${next}&word_fields=verse_key%2Cverse_id%2Cpage_number%2Clocation%2Ctext_uthmani%2Ctajweed%2Cqpc_uthmani_hafs&mushaf=11`
    );

    settotal(apiA.data.pagination.total_pages);
    setnext(apiA.data.pagination.next_page);
    console.log(apiA.data, total, next);

    // const apiA2 = await axios.get(
    //   `https://api.quran.com/api/v4/quran/verses/code_v2?chapter_number=${p.params.id}`
    // );
    // const num = apiA2.data.verses.map((e) => e.v2_page);
    // isEqual(_.uniq(num));

    // console.log(apiA2.data);
    // setverses(apiA2.data.verses);
    // console.log(verses);

    apiA.data.verses.forEach((verse) => {
      verse.words.forEach((word) => {
        images.push({
          img: `https://static.qurancdn.com/images/${word.text}`,
          text: word.text_uthmani,
          translation: word.translation.text,
          key: word.verse_key,
          id: word.verse_id,
        });
        setverseImg(verseImg.concat(_.uniqWith(images, _.isEqual)));
        // console.log(images, verseImg);

        // console.log(document.images.length);
      });
    });
  };

  const chapterWord = async () => {
    const apiA2 = await axios.get(
      `https://api.quran.com/api/v4/quran/verses/code_v2?chapter_number=${p.params.id}`
    );
    const num = apiA2.data.verses.map((e) => e.v2_page);
    isEqual(_.uniq(num));

    console.log(apiA2.data);
    setverses(verses.concat(apiA2.data.verses));
    console.log(verses);
  };
  const nextPage = async () => {
    const apiA = await axios.get(
      `https://api.qurancdn.com/api/qdc/verses/by_chapter/${p.params.id}?words=true&translation_fields=resource_name%2Clanguage_id&fields=text_uthmani%2Cchapter_id%2Chizb_number%2Ctext_imlaei_simple&translations=85&reciter=7&word_translation_language=en&page=${next}&word_fields=verse_key%2Cverse_id%2Cpage_number%2Clocation%2Ctext_uthmani%2Ctajweed%2Cqpc_uthmani_hafs&mushaf=11`
    );
    console.log(apiA.data);
    setnext(apiA.data.pagination.next_page);

    console.log(total, next);

    apiA.data.verses.forEach((verse) => {
      verse.words.forEach((word) => {
        images.push({
          img: `https://static.qurancdn.com/images/${word.text}`,
          text: word.text_uthmani,
          translation: word.translation.text,
          key: word.verse_key,
          id: word.verse_id,
        });
        setverseImg(verseImg.concat(images));
        // console.log(images, verseImg);

        // console.log(document.images.length);
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

  const audioByVerse = async (key) => {
    const apiA = await axios.get(
      `https://api.qurancdn.com/api/qdc/audio/reciters/7/audio_files?chapter=${p.params.id}&segments=true`
    );
    const array = apiA.data.audio_files[0];
    const src = apiA.data.audio_files[0].audio_url;
    const filter = _.filter(array.verse_timings, {
      verse_key: key,
    });
    const from = filter[0].timestamp_from;
    const to = filter[0].timestamp_to;

    const audion = document.querySelector("#audion");

    audion.src = src;
    audion.setAttribute("controls", true);
    // audion.currentTime = from / 1000;
    // audion.play();

    // audion.style.cssText = `width: 90%; display: block; margin: 20px auto;`;

    console.log(array, src, filter, from, audion);
  };
  const audioToVerse = async (key) => {
    const apiA = await axios.get(
      `https://api.qurancdn.com/api/qdc/audio/reciters/7/audio_files?chapter=${p.params.id}&segments=true`
    );
    const array = apiA.data.audio_files[0];
    const filter = _.filter(array.verse_timings, {
      verse_key: key,
    });
    const from = filter[0].timestamp_from;
    const audion = document.querySelector("#audion");
    audion.currentTime = from / 1000;
    audion.play();
    console.log(from);
  };

  useEffect(() => {
    chapterWord();
    chapter();
    audioByVerse(`${p.params.id}:1`);
  }, []);

  return (
    <>
      <div>surah {p.params.id} </div>
      <button
        onClick={() => {
          setchange(!change);
        }}
      >
        click to change --
      </button>
      <button
        onClick={() => {
          // audioByVerse(`${p.params.id}:1`);
          audioToVerse(`${p.params.id}:1`);
        }}
      >
        -- click to play
      </button>
      <audio style={{ position: "fixed", bottom: "0" }} id="audion" />

      {change === false ? (
        <div className="word">
          <InfiniteScroll
            className="infinity"
            pageStart={0}
            loadMore={chapterWord}
            hasMore={next === null ? false : true}
            loader={
              <div key={0} className="divLoader">
                <div className="loader"></div>
              </div>
            }
          >
            {verses.map((e, k) => {
              return (
                <span
                  className="verseWord"
                  id={`verse_${e.verse_id}`}
                  key={k}
                  style={{ fontFamily: `page_${e.v2_page}` }}
                  onClick={() => {
                    byVerse(e.verse_key);
                    // audioByVerse(e.verse_key);
                    audioToVerse(e.verse_key);
                  }}
                >
                  {result === "loaded" ? e.code_v2 : "loading"}
                </span>
              );
            })}
          </InfiniteScroll>
        </div>
      ) : (
        <div className="word">
          <InfiniteScroll
            className="infinity"
            pageStart={0}
            loadMore={chapter}
            hasMore={next === null ? false : true}
            loader={
              <div key={0} className="divLoader">
                <div className="loader"></div>
              </div>
            }
          >
            {verseImg.map((e, k) => (
              <div
                className="verseImg"
                id={`verse_${e.id}`}
                key={k}
                onClick={() => {
                  byVerse(e.key);
                  // audioByVerse(e.key);
                  audioToVerse(e.key);
                }}
              >
                <img src={`${e.img}`} alt={`${e.key}`} />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      )}
    </>
  );
}
