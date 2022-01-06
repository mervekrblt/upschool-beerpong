import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import volumeData from "../data/volumeData";
import Card from "../components/Card";
import BASE_URL from "../BASE_URL";
import VolumeButton from "../components/VolumeButton";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [button, setButton] = useState("none");

  const PER_PAGE = 9;
  const offset = currentPage * PER_PAGE;
  const currentPageData = data.slice(offset, offset + PER_PAGE);
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
    console.log(button, "apiye istek at");
    fetch(`${BASE_URL}&${button}=2`)
    .then(res => res.json())
    .then(data => setData(data))
  }, [button]);

  return (
    <>
      {volumeData.map((data) => (
        <VolumeButton
          key={data.id}
          name={data.name}
          btnName={data.btnName}
          button = {button}
          active={data.active}
          setButton={setButton}
        ></VolumeButton>
      ))}

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {currentPageData.map((item, index) => {
            return (
              <Card key={index} name={item.name} img={item.image_url}></Card>
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
    </>
  );
};
export default Home;
