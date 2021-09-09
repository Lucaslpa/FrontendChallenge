import Menu from "./Components/Menu";
import Search from "./Components/Search";
import List from "./Components/List";
import { patient } from "./patient";

function App() {
  return (
    <div className="w-screen h-screen">
      <header>
        <Menu />
      </header>

      <main className=" w-full mt-20 ">
        <div className="max-w-6xl px-7  md:px-0 w-full mx-auto">
          <p className="text-5xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh
            nulla, finibus non consequat vel, feugiat quis ligula. Praesent orci
            lacus, malesuada ac neque in, scelerisque lacinia nibh.
          </p>
          <Search />
          <List patients={[patient, patient, patient, patient, patient]} />
        </div>
      </main>
    </div>
  );
}

export default App;
