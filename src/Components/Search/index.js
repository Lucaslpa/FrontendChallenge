import SearchSVG from "../../assets/search.svg";
import { getPatientByNationalityOrName, getPatients } from "../../api/Patients";
import { usePatientsContext } from "../../Contexts/Patients";
import { buildActions } from "../../Contexts/Patients/BuildActions";
import { useRef } from "react";

function Search() {
  const [, dispatch] = usePatientsContext();
  const actions = buildActions(dispatch);
  const searchInput = useRef();

  async function handleSearch(search) {
    if (search) {
      try {
        actions.SET_LOADING();
        const filterPatients = await getPatientByNationalityOrName(search);
        actions.SET_PATIENTS(filterPatients);
        actions.SET_LOADING();
      } catch (e) {}
    } else {
      actions.SET_LOADING();
      const patients = await getPatients(1);
      actions.SET_PATIENTS(patients);
      actions.SET_LOADING();
    }
  }

  return (
    <div className="w-full my-16 bg-white ">
      <form className="items-center border-1 bg-white border-gray-300 flex p-2">
        <input
          ref={searchInput}
          type="search"
          placeholder="Searching"
          className=" outline-none w-full p-3 text-4xl"
        />
        <button
          className="p-5 bg-pink-600 border-0"
          onClick={(e) => {
            e.preventDefault();
            handleSearch(searchInput.current.value);
          }}
        >
          <img
            alt="Search"
            className="w-full max-w-2 cursor-pointer "
            src={SearchSVG}
            onClick={() => handleSearch(searchInput.current.value)}
          />
        </button>
      </form>
    </div>
  );
}

export default Search;
