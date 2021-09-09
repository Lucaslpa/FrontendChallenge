import PropTypes from "prop-types";
import { ConvertDate } from "../../utils/ConvertDate";
import { usePatientModalContext } from "../../Contexts/PatientModal";
import { buildActions } from "../../Contexts/PatientModal/BuildActions";
import Loading from "../Loading";
import { useEffect } from "react";

const Text = ({ children, title }) => (
  <div className="md:text-3xl text-3xl    w-auto md:p-3   p-1 m-5">
    <h4 className="md:text-3xl text-3xl  text-pink-600">{title}</h4>
    {children}
  </div>
);

Text.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
};

function Modal() {
  const [PatientState, dispatch] = usePatientModalContext();
  const PatientActions = buildActions(dispatch);

  const patient = PatientState.patient;

  useEffect(() => console.log(patient, PatientState), [patient]);

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
        {PatientState.loading ? (
          <Loading />
        ) : (
          <div className="w-full md:w-full md:h-auto  flex flex-col relative items-center max-w-500 bg-white">
            <strong className="text-5xl  p-10">
              {" "}
              algo de errado aconteceu{" "}
            </strong>
            <button
              onClick={() => PatientActions.SET_OPEN_MODAL()}
              className="transform right-5 -top-5  p-5 absolute text-white  bg-pink-600 text-3xl hover:bg-pink-500"
            >
              X{" "}
            </button>
          </div>
        )}
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
    <article className="absolute top-0 w-screen h-screen  flex justify-center items-center  bg-gray-500 bg-opacity-25  ">
      {PatientState.loading ? (
        <Loading />
      ) : (
        <div className="w-full md:w-full h-auto p-10 pt-10 flex flex-col relative items-center max-w-500 bg-white">
          <img
            alt="Patient"
            className="rounded-full  transform absolute w-full max-w-10 -translate-y-40 "
            src={patient.picture.large}
          />
          <button
            onClick={() => PatientActions.SET_OPEN_MODAL()}
            className="transform right-5 -top-5  p-5 absolute text-white  bg-pink-600 text-3xl hover:bg-pink-500"
          >
            X
          </button>
          <div className="h-auto w-auto block rounded-3xl flex flex-wrap">
            <h2 className="md:text-4xl text-4xl text-3xl w-full text-center my-5 md:my-7">
              {`${patient.name.first} ${patient.name.last}`}
            </h2>
            <div className="flex flex-wrap h-32 overflow-y-scroll md:overflow-hidden md:h-auto">
              <Text title="id">{patient.id.value}</Text>
              <Text title="Nationality">{patient.location.country}</Text>
              <Text title="Gender">{patient.gender}</Text>
              <Text title="Email">{patient.email}</Text>

              <Text title="Birth">{ConvertDate(patient.dob.date)}</Text>
              <Text title="Phone">{patient.phone}</Text>
            </div>
            <Text title="Address">
              {" "}
              {`street: ${patient.location.street.number}, ${patient.location.street.name}. 
              City: ${patient.location.city}. 
              State: ${patient.location.state}. 
              Country: ${patient.location.country}. 
              Postcode: ${patient.location.postcode}.`}
            </Text>

            <div className="md:text-4xl text-3xl w-full md:p-2 md:m-1  p-2 my-7 flex flex-col">
              <input
                readOnly
                id="inputToCopy"
                defaultValue={window.location.href}
                className="border-1 p-3 outline-none md:w-full"
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
      )}
    </article>
  );
}
Modal.propTypes = {
  patient: PropTypes.object,
};
export default Modal;
