"use client";
import axios from "axios";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";

export default function Home(p) {
  console.log(p);

  const [verses, setverses] = useState([]);
  const [verseImg, setverseImg] = useState([]);
  const images = [];

  const chapter = async () => {
    const apiA = await axios.get(
      `https://api.qurancdn.com/api/qdc/verses/by_chapter/${p.params.id}?words=true&per_page=all&fields=text_uthmani%2Cchapter_id%2Chizb_number%2Ctext_imlaei_simple&reciter=7&word_translation_language=en&word_fields=verse_key%2Cverse_id%2Cpage_number%2Clocation%2Ctext_uthmani%2C&mushaf=11`
    );
    console.log(apiA.data.verses);
    setverses(apiA.data.verses);

    apiA.data.verses.forEach((verse) => {
      verse.words.forEach((word) => {
        images.push({
          img: `https://static.qurancdn.com/images/${word.text}`,
          text: word.text_uthmani,
          translation: word.translation.text,
          key: word.verse_key,
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
    chapter();
  }, []);

  return (
    <>
      <div>surah {p.params.id} </div>
      <button onClick={() => console.log(verseImg)}>click</button>
      <div className="word">
        {verseImg.map((e, k) => {
          return (
            <div
              key={k}
              onClick={() => {
                byVerse(e.key);
              }}
            >
              <img src={`${e.img}`} alt={`${e.key}`} />
            </div>
          );
        })}
      </div>
    </>
  );
}
