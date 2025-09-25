import { useState } from "react";
import { LayoutPicker } from "./LayoutPicker";
import { SoccerField } from "./SoccerField";
import { ChooseLayoutButton } from "./ChooseLayoutButton";
import { layoutOptions } from "../../data/layoutPositions";
import './HomePage.css';

export function HomePage({ playerAmount }) {
  const [layoutIndex, setLayoutIndex] = useState(0);
  const chosenLayout = layoutOptions[layoutIndex];

  return (
    <>
      <LayoutPicker
        layoutIndex={layoutIndex}
        setLayoutIndex={setLayoutIndex}
        layoutOptions={layoutOptions}
      />
      <SoccerField layout={chosenLayout} playerAmount={playerAmount} />
      <ChooseLayoutButton layout={chosenLayout} />
    </>
  );
}