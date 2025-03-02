import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        onChange={(color) => (state.color = color.hex)}
        disableAlpha
        presetColors={[
          "#800000",
          "#008000",
          "#000080",
          "#800080",
          "#FF7F50",
          "#D2691E",
          "#FFB6C1",
          "#89CfE0",
          "#FFDAC9",
          "#98FFCC",
          "#808000",
          "#00BFFF",
        ]}
      />
    </div>
  );
};

export default ColorPicker;
