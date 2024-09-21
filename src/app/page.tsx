"use client";
import Header from "@/components/Header";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Header />
      <div className="w-full h-full">
        <Section />
      </div>
    </div>
  );
}
