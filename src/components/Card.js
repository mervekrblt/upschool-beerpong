const Card = ({ name, img, brew }) => {
  return (
    <>
      <div className="col mb-5">
        <div className="text-center p-3 custom-card bg-light h-100">
          <img
            src={img}
            style={{ height: "10rem" }}
            className="mx-auto"
            alt="a beer"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">First brewed in {brew}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
