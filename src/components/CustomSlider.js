import { Slider } from "antd";

const CustomSlider = ({ volume, setVolume }) => {
  console.log(volume);
  return (
    <>
      <Slider
        onAfterChange={(e) => setVolume(e)}
        className="color-primary"
        defaultValue={volume}
      />
    </>
  );
};
export default CustomSlider;
