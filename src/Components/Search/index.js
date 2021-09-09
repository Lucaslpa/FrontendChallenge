import SearchSVG from "../../assets/search.svg";

function Search() {
  return (
    <div className="w-full my-16 ">
      <div className="items-center border-2 border-blue-800 flex p-2">
        <input
          type="search"
          placeholder="Searching"
          className=" outline-none w-full text-4xl"
        />
        <img alt="Search" className="w-full max-w-2 " src={SearchSVG} />
      </div>
    </div>
  );
}

export default Search;
