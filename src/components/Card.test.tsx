import { render } from "@testing-library/react";

import Card from "@/components/Card";

describe("Testing components/Card", () => {
    it("should render with title", async () => {
        const { queryByRole } = render(<Card title="Test card" />);

        expect(queryByRole("heading", { name: /test card/i })).toBeInTheDocument();
    });

    it("should render with no title", async () => {
        const { queryByRole } = render(<Card />);

        expect(queryByRole("heading")).toBeNull();
    });

    it("should render with children", async () => {
        const { queryByTestId } = render(
            <Card>
                <span data-testid="content-span">Content</span>
            </Card>
        );

        expect(queryByTestId("content-span")).toBeInTheDocument();
    });
});
