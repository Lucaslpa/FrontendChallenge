import { screen, act } from "@testing-library/react";
import List from ".";
import { renderWithContextsAndLinks } from "../../utils/renderWithContextsAndLinks";
import { patient } from "../../patient";

import * as GetPatients from "../../api/Patients";

jest.mock("react-router-dom", () => {
  const originals = jest.requireActual("react-router-dom");
  return {
    ...originals,
    useParams: () => {
      return { uuid: "232" };
    },
  };
});

const spyGetPatients = jest.spyOn(GetPatients, 'getPatient')
spyGetPatients.mockImplementation(() => console.log('no call'))

describe("test List component", () => {
  it("should show no patients if api call returns nothing", () => {
    renderWithContextsAndLinks(<List />);
    expect(screen.getByText(/no patients/i)).toBeInTheDocument();
  });

  it("should render patients list", () => {
    act(() => {
      renderWithContextsAndLinks(<List patients={[patient]} />);
    });
    expect(screen.getByRole("link", { name: /View/i })).toBeInTheDocument();
  });

  it("should search a patient if uuid exists", () => {
    act(() => {
      renderWithContextsAndLinks(<List patients={[patient]} />);
    });

    expect(spyGetPatients).toHaveBeenCalledTimes(1);
  });
});
