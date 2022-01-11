import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import volumeData from "../data/volumeData";
import Card from "../components/Card";
import CustomSlider from "../components/CustomSlider";
import BASE_URL from "../BASE_URL";
import VolumeButton from "../components/VolumeButton";
import PhSlider from "../components/PhSlider";
import SrmSlider from "../components/SrmSlider";
import Search from "../components/Search";
import NotFound from "./NotFound";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [button, setButton] = useState("none");
  const [volume, setVolume] = useState(20);
  const [disabled, setDisabled] = useState(false);
  const [ph, setPh] = useState([0, 7]);
  const [disabled2, setDisabled2] = useState(false);
  const [srm, setSrm] = useState(0);

  const [name, setName] = useState("");

  const debounce = (func, delay) => {
    let debounceTimer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const currentPageData = data
    .filter((item) => item.name.toLowerCase().includes(name))
    .filter(
      (item) =>
        ph[0] <= item.ph &&
        ph[1] >= item.ph &&
        (item.srm >= srm || item.srm == null)
    )
    .slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(data.length / PER_PAGE);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  useEffect(() => {
    console.log(button, `${BASE_URL}&${button}=${volume}`);
    fetch(`${BASE_URL}&${button}=${volume}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [button, volume]);

  console.log(volume);
  return (
    <div className="container my-5">
      <div className="mx-auto">
        <Search
          debounce={debounce}
          setName={setName}
          setButton={setButton}
          setVolume={setVolume}
          setPh={setPh}
          setSrm={setSrm}
          setDisabled= {setDisabled}
          setDisabled2= {setDisabled2}
        ></Search>
      </div>

      <div className="row">
        <div className="col-lg-4 col-12 text-center filter-card h-150">
          {volumeData.map((data) => (
            <VolumeButton
              key={data.id}
              name={data.name}
              btnName={data.btnName}
              button={button}
              active={data.active}
              setButton={setButton}
            ></VolumeButton>
          ))}
          <CustomSlider volume={volume} setVolume={setVolume}></CustomSlider>
          <PhSlider disabled={disabled} setDisabled={setDisabled} setPh={setPh}></PhSlider>
          <SrmSlider disabled={disabled2} setDisabled={setDisabled2} srm={srm} setSrm={setSrm}></SrmSlider>
        </div>
        <div className="col-lg-8 col-12 mt-5 mt-lg-0">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3">
              {currentPageData.map((item, index) => {
                return (
                  <Card
                    key={index}
                    name={item.name}
                    img={item.image_url}
                    brew={item.first_brewed}
                  ></Card>
                );
              })}
              {currentPageData?.length === 0 && <NotFound />}
            </div>
          </div>
          {currentPageData.length !== 0 && (
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
