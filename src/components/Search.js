const Search = ({debounce, setName, setButton, setVolume, setPh, setSrm}) => {
  const update = debounce(function(e) {
    setName(e.target.value);
  }, 300);

  const handleReset = () => {
    setName("")
    setButton("none")
    setVolume(20)
    setPh([0, 7])
    setSrm(0)
  }

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
            <button className="btn btn-light me-3" onClick={handleReset} type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Search;
