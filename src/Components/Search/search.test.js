import * as handleSearch from "../../utils/handleSearch";
import Search from ".";
import { screen } from "@testing-library/dom";
import { renderWithContextsAndLinks } from "../../utils/renderWithContextsAndLinks";

const spyHandleSearch = jest.spyOn(handleSearch, "handleSearch");

describe("Search Component", () => {
  it("should handle with searching", async () => {
    spyHandleSearch.mockImplementation(() => {});
    renderWithContextsAndLinks(<Search />);
    const searchButton = await screen.findByLabelText(/Search button/i);
    searchButton.click();
    expect(spyHandleSearch).toBeCalledTimes(1);
  });
});
