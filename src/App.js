import Menu from "./Components/Menu";
import Search from "./Components/Search";
import List from "./Components/List";
import { useEffect } from "react";
import { usePatientsContext } from "./Contexts/Patients";
import { buildActions } from "./Contexts/Patients/BuildActions";
import Loading from "./Components/Loading";

import { getPatients } from "./api/Patients";

function App() {
  const [PatientsState, dispatch] = usePatientsContext();
  const PatientsActions = buildActions(dispatch);

  async function handleSetPatients() {
    const currentPageToGET = PatientsState.page;
    const PatientsFromApi = await getPatients(currentPageToGET);
    PatientsActions.SET_PATIENTS(PatientsFromApi);
    PatientsActions.SET_LOADING();
  }

  async function handleGetMorePatients() {
    const currentPageToGET = PatientsState.page + 1;
    PatientsActions.SET_LOADING_GM();
    const PatientsFromApi = await getPatients(currentPageToGET);
    PatientsActions.SET_PATIENTS(PatientsFromApi);
    PatientsActions.SET_LOADING_GM();
    PatientsActions.SET_PAGE(currentPageToGET);
  }

  useEffect(() => {
    handleSetPatients();
  }, []);

  return (
    <div className="w-full h-full relative">
      <header>
        <Menu />
      </header>

      <main className=" w-full pt-20  ">
        <div className="max-w-6xl px-7  md:px-0 w-full mx-auto">
          <p className="text-4xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh
            nulla, finibus non consequat vel, feugiat quis ligula. Praesent orci
            lacus, malesuada ac neque in, scelerisque lacinia nibh.
          </p>
          <Search />

          {PatientsState.loading ? (
            <Loading />
          ) : (
            <List patients={PatientsState.patients} />
          )}

          <div className="w-full py-20 flex justify-center p-5">
            <button
              onClick={() => handleGetMorePatients()}
              className="text-4xl bg-pink-600 p-8 rounded-1xl text-white hover:bg-pink-500"
            >
              {PatientsState.loadingGM ? "loading..." : "More Patients"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
