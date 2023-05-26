import { render, screen } from "@testing-library/react";

import TopThreeStudiosWithWinnerCard from "@/components/Dashboard/TopThreeStudiosWithWinnerCard";

describe("Testing components/Dashboard/TopThreeStudiosWithWinnerCard", () => {
    it("should render", async () => {
        render(<TopThreeStudiosWithWinnerCard />);

        expect(screen.getByTestId("card")).toBeInTheDocument();
        expect(screen.getByTestId("table")).toBeInTheDocument();
    });
});
