import { render, fireEvent } from "@testing-library/react";

import SearchInput from "@/components/SearchInput";

describe("Testing components/SearchInput", () => {
    const handleClickSearch = jest.fn();

    beforeEach(() => {
        handleClickSearch.mockReset();
    });

    it("should render", async () => {
        const { container } = render(<SearchInput placeholder="Text input" onClickSearch={handleClickSearch} />);

        expect(container.querySelector("input")).toBeInTheDocument();
        expect(container.querySelector("button")).toBeInTheDocument();
    });

    it("should handle input events", async () => {
        const { getByTestId } = render(<SearchInput placeholder="Text input" onClickSearch={handleClickSearch} />);
        const searchInput = getByTestId("search-input");

        fireEvent.change(searchInput, { target: { value: "test" } });

        expect(searchInput).toHaveValue("test");
        expect(handleClickSearch).toHaveBeenCalledTimes(0);

        fireEvent.keyDown(searchInput, { key: "Esc" });
        expect(handleClickSearch).toHaveBeenCalledTimes(0);

        fireEvent.keyDown(searchInput, { key: "Enter" });
        expect(handleClickSearch).toHaveBeenCalledTimes(1);
    });

    it("should handle button click", async () => {
        const { getByTestId } = render(<SearchInput placeholder="Text input" onClickSearch={handleClickSearch} />);
        const searchButton = getByTestId("search-button");

        fireEvent.click(searchButton);
        expect(handleClickSearch).toHaveBeenCalledTimes(1);
    });
});
