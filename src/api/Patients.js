export async function getPatients(page) {
  const Patients = await fetch(
    `https://randomuser.me/api/?page=${page}&results=50&seed=abc`
  )
    .then((response) => response.json())
    .then((json) => json.results);

  return Patients;
}

export async function getPatient(PatientUUID) {
  console.log('calling')
  let page = 1;
  let Patient = null;
  while (!Patient && page < 6) {
    const Patients = await getPatients(page);
    const filteredPatient = Patients.filter(
      (patient) => patient.login.uuid === PatientUUID
    );
    if (filteredPatient.length === 0) {
      page++;
    }
    Patient = filteredPatient[0];
  }
  return Patient;
}
export async function getPatientByGender(Patients) {
  const filteredPatients = Patients.filter(
    (patient) => patient.gender === gender
  );

  return filteredPatients;
}

function verifySearch(search, patient) {
  const searchToLowerCase = search.toLowerCase();
  const verifyNationality = patient.location.country
    .toLowerCase()
    .includes(searchToLowerCase);
  const verifyFirstName = patient.name.first
    .toLowerCase()
    .includes(searchToLowerCase);
  const verifyLastName = patient.name.last
    .toLowerCase()
    .includes(searchToLowerCase);

  if (verifyFirstName || verifyLastName || verifyNationality) {
    return true;
  }
}

export async function getPatientByNationalityOrName(search) {
  let page = 1;
  const filteredPatients = [];
  while (page < 6) {
    const Patients = await getPatients(page);
    Patients.forEach((patient) => {
      const VerifyOK = verifySearch(search, patient);
      if (VerifyOK) {
        filteredPatients.push(patient);
      }
    });
    page++;
  }
  return filteredPatients;
}
