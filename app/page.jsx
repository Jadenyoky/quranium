"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href={"/surah"}>to surah</Link>
      <Link href={"/surah/77"}>to surah 77</Link>
    </>
  );
}
