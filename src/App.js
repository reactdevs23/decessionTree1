import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    mainBg: "#fff",
    arrowColor: "#000",
    step1: {
      label: "Start",
      color: "#000",
      bg: "#FEDF89",
    },
    step2: {
      label: "Should we start this Initiative",
      color: "#000",
      bg: "#FEDF89",
    },

    step3a: {
      label: "Decision",
      color: "#000",
      bg: "#FEDF89",
    },

    step3b: {
      label: "Will it be important for the company this quarter?",
      color: "#000",
      bg: "#FAC515",
    },
    step4a: {
      label: "Positive outcome",
      color: "#000",
      bg: "#73E2A3",
    },
    step4b: {
      label: "Negative outcome",
      color: "#000",
      bg: "#FDA29B",
    },
    step4c: {
      label: "Relevant ressources",
      color: "#000",
      bg: "#FEDF89",
    },
    step4d: {
      label: "Significant learning",
      color: "#000",
      bg: "#FEDF89",
    },
    step5a: {
      label: "Outcome",
      color: "#000",
      bg: "#B2CCFF",
    },
    step5b: {
      label: "Outcome",
      color: "#000",
      bg: "#B2CCFF",
    },
    step5c: {
      label: "Outcome",
      color: "#000",
      bg: "#B2CCFF",
    },
    step5d: {
      label: "Outcome",
      color: "#000",
      bg: "#B2CCFF",
    },
    data: [
      {
        info: "Spend a few minutes discussing the decision you need to make.",
        infoColor: "#000",
        title: "5 min together",
        titleColor: "#000",
        bg: "#F2F4F7",
      },
      {
        info: 'Think of each decision node as an "if-then" statement. Explore alternative outcomes as you move down the branches.',

        infoColor: "#000",
        title: "15 min together",
        titleColor: "#000",
        bg: "#F2F4F7",
      },
      {
        info: "If you need to think, stop the discussion and brainstorm outcomes for 3 minutes individually before regrouping.",
        infoColor: "#000",
        title: "20 min together",
        titleColor: "#000",
        bg: "#F2F4F7",
      },
      {
        info: "Discuss possible outcomes and their consequences.",
        infoColor: "#000",
        title: "10 min together",
        titleColor: "#000",
        bg: "#F2F4F7",
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
