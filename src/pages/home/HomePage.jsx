import { useState } from "react";
import { LayoutPicker } from "./LayoutPicker";
import { SoccerField } from "./SoccerField";
import { ChooseLayoutButton } from "./ChooseLayoutButton";
import './HomePage.css';

export function HomePage() {
  const [layoutIndex, setLayoutIndex] = useState(0);
  const layoutOptions = [
    '4-4-2',
    '4-2-3-1',
    '4-3-3',
    '4-3-2-1',
    '4-1-4-1',
    '3-5-2'
  ]
  const chosenLayout = layoutOptions[layoutIndex];

  return (
    <>
      <LayoutPicker
        layoutIndex={layoutIndex}
        setLayoutIndex={setLayoutIndex}
        layoutOptions={layoutOptions}
      />
      <SoccerField layout={chosenLayout} />
      <ChooseLayoutButton layout={chosenLayout} />
    </>
  );
}