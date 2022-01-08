import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import volumeData from "../data/volumeData";
import Card from "../components/Card";
import CustomSlider from "../components/CustomSlider";
import BASE_URL from "../BASE_URL";
import VolumeButton from "../components/VolumeButton";
import PhSlider from "../components/PhSlider";
import SrmSlider from "../components/SrmSlider";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [button, setButton] = useState("none");
  const [volume, setVolume] = useState(20);
  const [ph, setPh] = useState([0, 7]);
  const [srm, setSrm] = useState(0);

  const PER_PAGE = 3;
  const offset = currentPage * PER_PAGE;
  const currentPageData = data
    .filter(
      (item) =>
        (ph[0] <= item.ph &&
        ph[1] >= item.ph) &&
        item.srm >= srm 
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

  /*useEffect(() => {
    console.log("filter based on ph", ph, ph[0]);
    const filteredData = data.filter(
      (item) => ph[0] <= item.ph &&  ph[1] >= item.ph 
    );
    setData(filteredData)
    console.log(filteredData)
  }, [ph]);*/

  console.log(data);
  console.log(currentPageData)
  return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 col-12 text-center bg-danger">
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
            <PhSlider ph={ph} setPh={setPh}></PhSlider>
            <SrmSlider srm={srm} setSrm={setSrm}></SrmSlider>
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
              </div>
            </div>
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
          </div>
        </div>
      </div>
  );
};
export default Home;
