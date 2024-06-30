"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const verse = useRef();
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  let num = 1;
  const [url, seturl] = useState(
    `https://api.quran.com/api/v4/quran/verses/code_v2?juz_number=${num}`
  );
  const apiVerse = async function () {
    setloading(false);

    const apiA = await axios.get(url);
    setdata(apiA.data.verses);
    console.log(apiA.data);

    setloading(true);
  };

  return (
    <>
      <div>QURANIUM</div>
      <button onClick={() => apiVerse()}>get</button>
      {loading && data[0].v2_page > 0 ? (
        <div>
          {data.map((e, k) => {
            return (
              <div>
                <h2
                  style={{
                    padding: "10px",
                    direction: "rtl",
                    fontFamily: `page_${e.v2_page}`,
                  }}
                  ref={verse}
                  key={k}
                >
                  {e.code_v2}
                </h2>
              </div>
            );
          })}
          <h5
            onClick={() => {
              seturl(
                `https://api.quran.com/api/v4/quran/verses/code_v2?juz_number=${
                  num + 1
                }`
              );
              apiVerse();
            }}
          >
            Get next JUZ ({num + 1})
          </h5>
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </>
  );
}
