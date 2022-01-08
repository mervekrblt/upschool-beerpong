import { Slider, Switch } from "antd";
import { useState } from "react";

const SrmSlider = ({ srm, setSrm }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="d-flex flex-row align-items-center">
      <Switch
        className="me-3"
        size="small"
        checked={disabled}
        onChange={() => setDisabled(!disabled)}
      />
      <Slider
        className="w-100"
        onAfterChange={(e) => setSrm(e)}
        defaultValue={srm}
        disabled={!disabled}
      />
    </div>
  );
};
export default SrmSlider;
