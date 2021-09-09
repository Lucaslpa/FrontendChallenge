import PropTypes from "prop-types";
import { ConvertDate } from "../../utils/ConvertDate";

const Text = ({ children }) => (
  <div className="md:text-4xl text-3xl  w-full md:p-4 md:m-4  p-1 my-7">
    {children}
  </div>
);

Text.propTypes = {
  children: PropTypes.string,
};

function Modal({ patient }) {
  if (
    !patient ||
    !patient.picture.large ||
    !patient.name.first ||
    !patient.name.last ||
    !patient.dob.date ||
    !patient.location.country ||
    !patient.gender ||
    !patient.id ||
    !patient.phone ||
    !patient.location.street.number ||
    !patient.location.street.name ||
    !patient.location.city ||
    !patient.location.state ||
    !patient.location.country ||
    !patient.location.postcode
  ) {
    return (
      <article className="absolute w-full h-full  flex justify-center items-center  bg-gray-500 bg-opacity-25 top-px ">
        <div className="w-full md:w-full md:h-auto  flex flex-col relative items-center max-w-500 bg-white">
          <strong className='text-5xl p-10'> algo de errado aconteceu </strong>
          <button className="transform right-5 -top-5  p-5 absolute text-white  bg-pink-600 text-3xl hover:bg-pink-500">
            X{" "}
          </button>
        </div>
      </article>
    );
  }

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
          src={patient.picture.large}
        />
        <button className="transform right-5 -top-5  p-5 absolute text-white  bg-pink-600 text-3xl hover:bg-pink-500">
          X
        </button>
        <div className="h-auto w-auto block rounded-3xl">
          <h2 className="md:text-5xl text-4xl text-3xl w-full text-center my-5 md:my-14">
            {`${patient.name.first} ${patient.name.last}`}
          </h2>
          <Text>id: {patient.id}</Text>
          <Text>Nationality: {patient.location.country}</Text>
          <Text>Gender: {patient.gender}</Text>
          <Text>BirthDay: {ConvertDate(patient.dob.date)}</Text>
          <Text>Phone: {patient.phone}</Text>
          <Text>
            Address:{" "}
            {`street: ${patient.location.street.number}, ${patient.location.street.name}. City: ${patient.location.city}. State: ${patient.location.state}. Country: ${patient.location.country}}. Postcode: ${patient.location.postcode} `}
          </Text>
          <div className="md:text-4xl text-3xl w-full md:p-4 md:m-4  p-2 my-7 flex flex-col">
            <input
              readOnly
              id="inputToCopy"
              defaultValue={window.URL}
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
Modal.propTypes = {
  patient: PropTypes.object,
};
export default Modal;
