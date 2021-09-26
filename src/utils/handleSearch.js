import { getPatientByNationalityOrName, getPatients } from "../api/Patients";

export async function handleSearch(search, actions) {
    if (search) {
      try {
        actions.SET_LOADING();
        const filterPatients = await getPatientByNationalityOrName(search);
        actions.SET_PATIENTS(filterPatients);
        actions.SET_LOADING();
      } catch (e) {}
    } else {
      actions.SET_LOADING();
      const patients = await getPatients(1);
      actions.SET_PATIENTS(patients);
      actions.SET_LOADING();
    }
  }
