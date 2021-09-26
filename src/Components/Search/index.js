import SearchSVG from "../../assets/search.svg";
import { usePatientsContext } from "../../Contexts/Patients";
import { buildActions } from "../../Contexts/Patients/BuildActions";
import { useRef } from "react";
import { handleSearch } from "../../utils/handleSearch";

function Search() {
  const [, dispatch] = usePatientsContext();
  const actions = buildActions(dispatch);
  const searchInput = useRef();

  return (
    <div className="w-full my-16 bg-white ">
      <form className="items-center border-1 bg-white border-gray-300 flex p-2">
        <input
          ref={searchInput}
          type="search"
          placeholder="Searching"
          aria-label='Search box'
          className=" outline-none w-full p-3 text-4xl"
        />
        <button
          className="p-5 bg-pink-600 hover:bg-pink-500 border-0"
          aria-label='Search button'
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            handleSearch(searchInput.current.value, actions);
          }}
        >
          <img
            alt="Search"
            className="w-full max-w-2 cursor-pointer "
            src={SearchSVG}
            onClick={() => handleSearch(searchInput.current.value, actions)}
          />
        </button>
      </form>
    </div>
  );
}

export default Search;
