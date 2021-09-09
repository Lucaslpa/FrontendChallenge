import { ConvertDate } from "../../utils/ConvertDate";
import PropTypes from "prop-types";

function List({ patients }) {
  const ths = ["Name", "Gender", "Birth", "Actions"];

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
              <tr key={patient.email}>
                <td className="text-4xl text-center p-5 border-l-1  border-r-1 border-b-1 border-gray-300">{`${patient.name.first} ${patient.name.last}`}</td>
                <td className="text-4xl text-center p-5 border-l-1  border-r-1 border-b-1 border-gray-300">
                  {patient.gender}
                </td>
                <td className="text-4xl text-center p-5 border-l-1 border-r-1 border-b-1 border-gray-300">
                  {ConvertDate(patient.dob.date)}
                </td>
                <td className="text-4xl text-center p-5 border-l-1  border-r-1 border-b-1 border-gray-300">
                  <a
                    href="/pastel"
                    className="text-4xl bg-pink-600 p-2 px-5 h-auto rounded-1xl text-white hover:bg-pink-500"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {!patients || !patients.length ? (
        <div className="justify-center p-5">
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
