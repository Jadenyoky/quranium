"use client";
import axios from "axios";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";

export default function Home() {
  const router = useRouter();
  const path = usePathname();
  const params = useParams();

  const [surahs, setsurahs] = useState([]);
  const surahs2 = [];

  const [chaper2, setchapter2] = useState([]);
  const [searching, setsearching] = useState([]);
  let searching2 = [];
  const [query, setquery] = useState("");
  const [surahNum, setsurahNum] = useState(1);

  const [result, setresult] = useState("loading");

  const surahsNames = () => {
    for (let i = 1; i <= 114; i++) {
      surahs2.push({
        id: i,
        num: i >= 100 ? i : i >= 10 ? `0${i}` : `00${i}`,
      });
      const ss = _.uniqWith(surahs2, _.isEqual);
      setsurahs(ss);
      console.log(ss);
    }
  };
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

  const chapter = async (id) => {
    const apiA = await axios.get(
      `https://api.quran.com/api/v4/quran/verses/code_v2?chapter_number=${id}`
    );
    const num = apiA.data.verses.map((e) => e.v2_page);
    isEqual(_.uniq(num));
    // console.log(apiA.data);
    setchapter2(apiA.data.verses);
    console.log(apiA.data);
  };

  const url2 = `https://api.quran.com/api/v4/search?q=${query}`;
  const search = async () => {
    const apiA = await axios.get(url2);
    const num = apiA.data.search.results.map((e) => e.verse_key);
    num.forEach((elem) => {
      async function ver(elem) {
        const apiA = await axios.get(
          `https://api.quran.com/api/v4/quran/verses/code_v2?verse_key=${elem}`
        );
        const num = apiA.data.verses.map((e) => e.v2_page);
        isEqual(_.uniq(num));

        searching2.push(apiA.data.verses);
        setsearching(_.flatMap(searching2));
        console.log(searching2, searching);
      }
      ver(elem);
    });

    setquery("");
  };

  return (
    <>
      <div onClick={() => surahsNames()}>Quranium</div>
      <button
        onClick={() => {
          router.push(`player`);
        }}
      >
        to player
      </button>
      <button
        onClick={() => {
          router.push(`surah/5`);
        }}
      >
        to surah
      </button>
      {surahs.map((e, k) => {
        return (
          <div key={k}>
            <h3
              onClick={() => {
                // chapter(e.id);
                router.push(`surah/${e.id}`);
              }}
            >
              {e.num}
            </h3>
          </div>
        );
      })}
      {/* <div
        onClick={() => {
          chapter();
        }}
      >
        Chapter 2
      </div> */}
      {chaper2.map((e, k) => {
        return (
          <span key={k}>
            {result === "loaded" ? (
              <span
                style={{
                  fontFamily: `page_${e.v2_page}`,
                  fontSize: "40px",
                }}
              >
                {e.code_v2}
              </span>
            ) : (
              <div>loading</div>
            )}
          </span>
        );
      })}
      ------------
      <input
        style={{
          border: "1px solid #000",
        }}
        type="text"
        onChange={(e) => {
          setquery(e.target.value);
        }}
      />
      <div
        onClick={() => {
          query !== "" && search();
        }}
      >
        Search
      </div>
      {searching.map((e, k) => {
        return (
          <div
            key={k}
            style={{
              fontFamily: `page_${e.v2_page}`,
            }}
          >
            {result === "loaded" ? (
              <span>{e.code_v2}</span>
            ) : (
              <div>loading</div>
            )}
          </div>
        );
      })}
    </>
  );
}
