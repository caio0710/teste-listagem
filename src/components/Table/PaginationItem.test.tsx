import { render, screen } from "@testing-library/react";

import PaginationItem from "@/components/Table/PaginationItem";

describe("Testing components/Table/PaginationItem", () => {
    it("should render", async () => {
        render(<PaginationItem />);

        const paginationItem = screen.getByTestId("pagination-item");

        expect(paginationItem).toBeInTheDocument();
        expect(paginationItem).toHaveClass("text-gray-500");
        expect(paginationItem).not.toHaveClass("rounded-l-lg");
        expect(paginationItem).not.toHaveClass("rounded-r-lg");
    });

    it("should render active", async () => {
        render(<PaginationItem active />);

        const paginationItem = screen.getByTestId("pagination-item");

        expect(paginationItem).toBeInTheDocument();
        expect(paginationItem).toHaveClass("text-blue-600");
        expect(paginationItem).not.toHaveClass("rounded-l-lg");
        expect(paginationItem).not.toHaveClass("rounded-r-lg");
    });

    it("should render as first item", async () => {
        render(<PaginationItem isFirstItem />);

        const paginationItem = screen.getByTestId("pagination-item");

        expect(paginationItem).toBeInTheDocument();
        expect(paginationItem).toHaveClass("rounded-l-lg");
        expect(paginationItem).not.toHaveClass("rounded-r-lg");
    });

    it("should render as last item", async () => {
        render(<PaginationItem isLastItem />);

        const paginationItem = screen.getByTestId("pagination-item");

        expect(paginationItem).toBeInTheDocument();
        expect(paginationItem).not.toHaveClass("rounded-l-lg");
        expect(paginationItem).toHaveClass("rounded-r-lg");
    });
});
