import { render, fireEvent, screen } from "@testing-library/react";

import Input from "@/components/Input";

describe("Testing components/Input", () => {
    const handleInputChange = jest.fn();

    it("should render", async () => {
        const { container } = render(<Input placeholder="Text input" />);

        fireEvent.change(screen.getByPlaceholderText(/text input/i), { target: { value: "a" } });

        expect(container.querySelector("input")).toBeInTheDocument();
        expect(handleInputChange).toHaveBeenCalledTimes(0);
    });

    it("should render and call change if defined", async () => {
        const { container } = render(<Input placeholder="Text input" onChange={handleInputChange} />);

        fireEvent.change(screen.getByPlaceholderText(/text input/i), { target: { value: "a" } });

        expect(container.querySelector("input")).toBeInTheDocument();
        expect(handleInputChange).toHaveBeenCalledTimes(1);
        expect(handleInputChange).toHaveBeenCalledWith("a");
    });
});
