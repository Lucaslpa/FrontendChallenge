import { screen } from "@testing-library/dom";
import Modal from ".";
import { renderWithContextsAndLinks } from "../../utils/renderWithContextsAndLinks";
import * as PatientsModal from "../../Contexts/PatientModal";
import { patient } from "../../patient";

const spyPatientModal = jest.spyOn(PatientsModal, "usePatientModalContext");

describe("test Modal Component", () => {
  it("should show a error if not find a patient", async () => {
    spyPatientModal.mockImplementation(() => [{}, () => {}]);

    renderWithContextsAndLinks(<Modal />);
    const error = await screen.findByText("algo de errado aconteceu");
    expect(error).toBeInTheDocument();
  });

  it("should render a patient if find a patient", () => {
    spyPatientModal.mockImplementation(() => [{ patient }, () => {}]);

    renderWithContextsAndLinks(<Modal />);
    const error = screen.queryByText("algo de errado aconteceu");
    const name = screen.getByRole("heading", { name: /Aubrey Martin/i });
    expect(error).not.toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
