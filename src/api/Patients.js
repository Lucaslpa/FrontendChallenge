export async function getPatients(page) {
  const Patients = await fetch(
    `https://randomuser.me/api/?page=${page}&results=50&seed=abc`
  )
    .then((response) => response.json())
    .then((json) => json.results);

  return Patients;
}
