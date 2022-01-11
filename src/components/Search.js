const Search = ({ debounce, setName, setButton, setVolume, setPh, setSrm, setDisabled, setDisabled2 }) => {
  const update = debounce(function(e) {
    setName(e.target.value);
  }, 300);

  const handleReset = () => {
    setName("");
    setButton("none");
    setVolume(20);
    setPh([0, 7]);
    setSrm(0);
    setDisabled(false)
    setDisabled2(false)
  };

  return (
    <>
      <div className="container my-5">
        <form className="mx-auto">
          <input
            type="search"
            className="form-control w-75 my-3 mx-auto clear"
            autoComplete="off"
            onChange={(e) => {
              e.persist();
              update(e);
            }}
          />
          <div className="text-center">
          <button
            className="btn btn-light"
            onClick={handleReset}
            type="reset"
          >
            Reset
          </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Search;
