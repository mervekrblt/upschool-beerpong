import volumeData from "../data/volumeData";

const VolumeButton = ({ name, btnName, setButton, active, button }) => {
  const handleButton = () => {
    console.log(btnName);
    console.log(volumeData);
    //console.log(button)
    setButton(btnName);
    //console.log(button)
  };
  volumeData.map((item) =>
    item.btnName === button ? (item.active = true) : (item.active = false)
  );

  const makeDisable = active ? "active btn-light" : "btn-dark ";

  return (
    <>
      <button
        className={`btn mb-5 me-2 px-3 ${makeDisable}`}
        onClick={handleButton}
        name={btnName}
      >
        {name}
      </button>
    </>
  );
};
export default VolumeButton;
