const Card = ({name, img}) => {
  return (
    <>
      <div className="col border-warning">
        <div className="card">
          <img src={img} style={{width: "3rem", height: "10rem"}} className="card-img-top" alt="a beer photo" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
