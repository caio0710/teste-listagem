import { render, fireEvent, screen } from "@testing-library/react";

import Select from "@/components/Select";

describe("Testing components/Select", () => {
    const handleSelectChange = jest.fn();

    beforeEach(() => {
        handleSelectChange.mockReset();
    });

    it("should render", async () => {
        const { container } = render(<Select placeholder="Text select" />);

        expect(container.querySelector("select")).toBeInTheDocument();
        expect(handleSelectChange).toHaveBeenCalledTimes(0);
    });

    it("should render with options", async () => {
        const mockOptions = [
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" }
        ];
        const { container } = render(<Select placeholder="Text select" options={mockOptions} />);

        expect(container.querySelector("select")).toBeInTheDocument();
        expect(container.querySelectorAll("option")).toHaveLength(3);
    });

    it("should render handle change", async () => {
        const mockOptions = [
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" }
        ];
        render(<Select placeholder="Text select" options={mockOptions} onChange={handleSelectChange} />);

        fireEvent.change(screen.getByTestId(/select-input/i), { target: { value: "1" } });
        expect(handleSelectChange).toHaveBeenCalledTimes(1);
    });
});
