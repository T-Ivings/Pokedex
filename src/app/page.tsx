import React, { useEffect } from "react";
import MainBanner from "./components/Banner/MainBanner";
import CardContainer from "./components/Card/CardContainer";
import Prose from "./components/Prose/Prose"
export default function Home() {
  return (
      <div className="w-full h-full relative overflow-y-hidden">
        <main>
          <MainBanner />
          <Prose/>
          <CardContainer />
            
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
      </div>
  );
}
