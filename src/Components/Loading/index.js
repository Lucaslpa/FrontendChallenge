import LoadingSVG from "../../assets/loading.gif";

function Loading() {
  return (
    <div className="w-full ">
      <img alt="Loading" className='mx-auto' src={LoadingSVG} />
    </div>
  );
}

export default Loading;
