import { Slider, Switch } from "antd";
import { useState } from "react";

const PhSlider = ({ ph, setPh }) => {
  const [disabled, setDisabled] = useState(false);

  const handlerPh = (e) => {
    //console.log(e); 
    //console.log(ph) why undefined logged
    setPh(e)
  };
  return (
    <div className="d-flex flex-row align-items-center mb-5">
      <Switch
        className="me-3"
        size="small"
        checked={disabled}
        onChange={() => setDisabled(!disabled)}
      />
      <Slider
        className="w-100"
        onAfterChange={handlerPh}
        range
        min={0}
        max={7}
        defaultValue={[0, 7]}
        disabled={!disabled}
      />
    </div>
  );
};
export default PhSlider;
