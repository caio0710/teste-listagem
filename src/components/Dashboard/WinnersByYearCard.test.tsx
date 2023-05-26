import { render, screen } from "@testing-library/react";

import WinnersByYearCard from "@/components/Dashboard/WinnersByYearCard";

describe("Testing components/Dashboard/WinnersByYearCard", () => {
    it("should render", async () => {
        render(<WinnersByYearCard />);

        expect(screen.getByTestId("card")).toBeInTheDocument();
        expect(screen.getByTestId("search-input")).toBeInTheDocument();
        expect(screen.getByTestId("table")).toBeInTheDocument();
    });
});
