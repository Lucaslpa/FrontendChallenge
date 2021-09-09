import SearchSVG from "../../assets/search.svg";

function Search() {
  return (
    <div className="w-full my-16 bg-white ">
      <div className="items-center border-1 bg-white border-gray-300 flex p-2">
        <input
          type="search"
          placeholder="Searching"
          className=" outline-none w-full p-3 text-4xl"
        />
        <img alt="Search" className="w-full max-w-2 " src={SearchSVG} />
      </div>
    </div>
  );
}

export default Search;
