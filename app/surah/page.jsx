"use client";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <h1>Surah Page</h1>
      <Link href={"/"}>to home</Link>
      <Link href={"/surah/99"}>to surah 99</Link>
    </>
  );
};

export default Page;
