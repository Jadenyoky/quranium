"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function Home() {
  const verse = useRef();
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);

  const url = "https://api.quran.com/api/v4/quran/verses/code_v2?page_number=4";
  const apiVerse = async function () {
    setloading(false);

    const apiA = await axios.get(url);
    setdata(apiA.data.verses);
    console.log(apiA);
    setloading(true);
  };

  return (
    <>
      <div>QURANIUM</div>
      <button onClick={() => apiVerse()}>get</button>
      {loading ? (
        data.map((e, k) => {
          return (
            <h2 ref={verse} key={k}>
              {e.code_v2}
            </h2>
          );
        })
      ) : (
        <h2>loading</h2>
      )}
    </>
  );
}
