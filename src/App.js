import Menu from "./Components/Menu";
import Search from "./Components/Search";

function App() {
  return (
    <div className="w-screen h-screen">
      <Menu />

      <div className=" w-full  ">
        <div className="max-w-6xl w-full mx-auto">
          <p className="text-5xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh
            nulla, finibus non consequat vel, feugiat quis ligula. Praesent orci
            lacus, malesuada ac neque in, scelerisque lacinia nibh.
          </p>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
