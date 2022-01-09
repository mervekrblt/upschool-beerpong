const Search = ({debounce, setName}) => {
  const update = debounce(function(e) {
    //console.log(e.target.value);
    setName(e.target.value);
  }, 1000);

  return (
    <>
      <div className="container my-5">
        <form className="mx-auto">
          <input
            type="search"
            className="form-control w-75 my-3 mx-auto clear"
            autocomplete="off"
            onChange={(e)=>{ e.persist(); update(e); }}
          />
          <div className="text-center">
            <button className="btn btn-light me-3" type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Search;
