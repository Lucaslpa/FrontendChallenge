import Menu from "./Components/Menu";
import Search from "./Components/Search";
import List from "./Components/List";
import Modal from "./Components/Modal";
import Loading from "./Components/Loading";
import { patient } from "./patient";
import { useEffect, useState } from "react";
import { usePatientsContext } from "./Contexts/Patients";
import { buildActions } from "./Contexts/Patients/BuildActions";

function App() {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(!openModal);
  }
  const [patientsState, dispatch] = usePatientsContext();
  const patientsActions = buildActions(dispatch);

  useEffect(() => {
    patientsActions.SET_PATIENTS([patient, patient]);
    patientsActions.SET_LOADING();
    patientsActions.SET_LOADING();
  }, []);

  useEffect(() => {
    console.log(patientsState);
  }, [patientsState]);

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
          {patientsState.loading ? (
            <Loading />
          ) : (
            <List patientsState={patientsState.patients} />
          )}
          <div className="w-full py-20 flex justify-center p-5">
            {openModal && <Modal />}
            <button
              onClick={() => handleOpenModal()}
              className="text-4xl bg-pink-600 p-8 rounded-1xl text-white hover:bg-pink-500"
            >
              More Posts
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
