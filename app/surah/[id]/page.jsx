"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Home(p) {
  console.log(p);
  return (
    <>
      <div>surah {p.params.id} </div>
      
    </>
  );
}
