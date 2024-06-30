"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const verse = useRef();
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [num, setnum] = useState(1);
  // const [url, seturl] = useState(
  //   `https://api.quran.com/api/v4/quran/verses/code_v2?juz_number=${num}`
  // );
  const apiVerse = async function (url) {
    setloading(false);

    const apiA = await axios.get(url);
    setdata(apiA.data.verses);
    console.log(apiA.data);

    setloading(true);
    console.log(url, num);
  };

  return (
    <>
      <div>QURANIUM</div>
      <button
        onClick={() => {
          const url = `https://api.quran.com/api/v4/quran/verses/code_v2?juz_number=${num}`;
          setnum(num + 1);
          apiVerse(url);
        }}
      >
        get
      </button>
      {loading && data[0].v2_page > 0 ? (
        <div>
          {data.map((e, k) => {
            return (
              <div key={k}>
                <h2
                  style={{
                    direction: "rtl",
                    fontFamily: `page_${e.v2_page}`,
                  }}
                  ref={verse}
                >
                  {e.code_v2}
                </h2>
              </div>
            );
          })}
          <h5
            onClick={() => {
              setnum(num + 1);
              const url = `https://api.quran.com/api/v4/quran/verses/code_v2?juz_number=${num}`;
              apiVerse(url);
            }}
          >
            Get next JUZ ({num})
          </h5>

          {num >= 1 ? (
            <h5
              onClick={() => {
                setnum(num - 1);
                const url = `https://api.quran.com/api/v4/quran/verses/code_v2?juz_number=${
                  num - 1
                }`;
                apiVerse(url);
              }}
            >
              Get prev JUZ ({num - 1})
            </h5>
          ) : (
            "nothing"
          )}
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </>
  );
}
