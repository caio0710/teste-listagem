import { render, screen } from "@testing-library/react";

import ListWithMultipleWinnerCard from "@/components/Dashboard/ListWithMultipleWinnerCard";

describe("Testing components/Dashboard/ListWithMultipleWinnerCard", () => {
    it("should render", async () => {
        render(<ListWithMultipleWinnerCard />);

        expect(screen.getByTestId("card")).toBeInTheDocument();
        expect(screen.getByTestId("table")).toBeInTheDocument();
    });
});
