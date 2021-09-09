function Modal() {
  function copyToClipboard() {
    const copyText = document.getElementById("inputToCopy");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the Link: " + copyText.value);
  }

  return (
    <article className="absolute w-full h-full  flex justify-center items-center  bg-gray-500 bg-opacity-25 top-px ">
      <div className="w-full md:w-full md:h-auto h-3/4 pt-24 flex flex-col relative items-center max-w-500 bg-white">
        <img
          alt="Patient"
          className="rounded-full  transform absolute w-full max-w-10 -translate-y-40 "
          src="https://randomuser.me/api/portraits/women/69.jpg"
        />
        <button className="transform right-5 -top-5  p-5 absolute text-white  bg-pink-600 text-3xl hover:bg-pink-500">
          X
        </button>
        <div className="h-auto w-auto block rounded-3xl">
          <h2 className="md:text-5xl text-4xl text-3xl w-full text-center my-5 md:my-14">
            Name Completo
          </h2>
          <div className="md:text-4xl text-3xl  w-full md:p-4 md:m-4  p-1 my-7">
            Data de nascimento: 30/20/20
          </div>
          <div className="md:text-4xl text-3xl  w-full md:p-4 md:m-4  p-2 my-7">
            Genero
          </div>
          <div className="md:text-4xl text-3xl w-full md:p-4 md:m-4  p-2 my-7">
            Telefone
          </div>
          <div className="md:text-4xl text-3xl w-full md:p-4 md:m-4  p-2 my-7">
            Nacionalidade
          </div>
          <div className="md:text-4xl text-3xl w-full md:p-4 md:m-4  p-2 my-7">
            Endereço
          </div>
          <div className="md:text-4xl text-3xl w-full md:p-4 md:m-4  p-2 my-7">
            id
          </div>
          <div className="md:text-4xl text-3xl w-full md:p-4 md:m-4  p-2 my-7 flex flex-col">
            <input
              readOnly
              id="inputToCopy"
              defaultValue="Link to copyLink to copyLink to copyLink to copyLink to copyLink to copyLink to copyLink to copy"
              className="border-1 p-5 outline-none md:w-full"
            />
            <button
              onClick={() => copyToClipboard()}
              className="text-4xl bg-pink-600 p-3 rounded-1xl text-white hover:bg-pink-500"
            >
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Modal;
