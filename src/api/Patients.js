export async function getPatients(page) {
  const Patients = await fetch(
    `https://randomuser.me/api/?page=${page}&results=50&seed=abc`
  )
    .then((response) => response.json())
    .then((json) => json.results);

  return Patients;
}

export async function getPatient(PatientUUID) {
  console.log(PatientUUID);

  let page = 1;
  let Patient = null;
  while (!Patient && page < 6) {
    const Patients = await getPatients(page);
    const filtredPatient = Patients.filter(
      (patient) => patient.login.uuid === PatientUUID
    );
    if (filtredPatient.length === 0) {
      page++;
    }
    Patient = filtredPatient[0];
  }
  return Patient;
}
