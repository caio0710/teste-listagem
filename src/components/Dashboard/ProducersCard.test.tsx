import { render, screen } from "@testing-library/react";

import ProducersCard from "@/components/Dashboard/ProducersCard";

describe("Testing components/Dashboard/ProducersCard", () => {
    it("should render", async () => {
        render(<ProducersCard />);

        expect(screen.getByTestId("card")).toBeInTheDocument();
        expect(screen.getAllByTestId("table")).toHaveLength(2);
    });
});
