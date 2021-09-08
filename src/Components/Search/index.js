import SearchSVG from "../../assets/search.svg";

function Search() {
  return (
    <div className="w-full  ">
      <div className="items-center border-2 border-blue-800 flex">
        <input
          type="search"
          placeholder="Searching"
          className="p-2 outline-none w-full text-4xl"
        />
        <img alt="Search" className="w-full max-w-2 " src={SearchSVG} />
      </div>
    </div>
  );
}

export default Search;
