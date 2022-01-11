import { Slider } from "antd";

const CustomSlider = ({ volume, setVolume }) => {
  return (
    <>
      <Slider
        onAfterChange={(e) => setVolume(e)}
        className="color-primary mb-5"
        defaultValue={20}
      />
    </>
  );
};
export default CustomSlider;
