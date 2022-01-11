import { Slider, Switch } from "antd";

const PhSlider = ({ disabled, setDisabled, setPh }) => {

  const handlerPh = (e) => {
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
