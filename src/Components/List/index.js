import { ConvertDate } from "../../utils/ConvertDate";
import { Link, useLocation } from "react-router-dom";
import { getPatient } from "../../api/Patients";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { usePatientModalContext } from "../../Contexts/PatientModal";
import { buildActions } from "../../Contexts/PatientModal/BuildActions";

function List({ patients }) {
  const ths = ["Name", "Gender", "Birth", "Actions"];
  const location = useLocation();
  const [, dispatch] = usePatientModalContext();
  const PatientActions = buildActions(dispatch);

  async function handleOpenModal(uuid) {
    const patient = await getPatient(uuid);
    PatientActions.SET_PATIENT(patient);
    PatientActions.SET_OPEN_MODAL();
  }

  useEffect(() => {
    const PatientUUID = location.pathname.match(
      /\b(?!\bPatient\b)[^/].*\b/g
    );
    if (PatientUUID) {
      handleOpenModal(PatientUUID[0]);
    }
  }, []);

  return (
    <div className="text-4xl overflow-x-scroll md:overflow-x-hidden  w-full">
      <table className="text-4xl  w-full">
        <thead>
          <tr className="min-w-500">
            {ths.map((name) => (
              <th key={name} className="text-4xl p-3 border-1 border-gray-300">
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patients &&
            patients.length > 0 &&
            patients.map((patient) => (
              <tr key={patient.login.uuid}>
                <td className="text-4xl text-center p-5 border-l-1  border-r-1 border-b-1 border-gray-300">{`${patient.name.first} ${patient.name.last}`}</td>
                <td className="text-4xl text-center p-5 border-l-1  border-r-1 border-b-1 border-gray-300">
                  {patient.gender}
                </td>
                <td className="text-4xl text-center p-5 border-l-1 border-r-1 border-b-1 border-gray-300">
                  {ConvertDate(patient.dob.date)}
                </td>
                <td className="text-4xl text-center p-5 border-l-1  border-r-1 border-b-1 border-gray-300">
                  <Link
                    to={`/Patient/${patient.login.uuid}`}
                    className="text-4xl bg-pink-600 p-2 px-5 h-auto rounded-1xl text-white hover:bg-pink-500"
                    onClick={() => handleOpenModal(patient.login.uuid)}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {!patients || !patients.length > 0 ? (
        <div className=" p-5">
          <strong className="text-4xl">no patients</strong>
        </div>
      ) : null}
    </div>
  );
}

List.propTypes = {
  patients: PropTypes.array,
};

export default List;
