import { render, screen } from "@testing-library/react";

import TablePagination from "@/components/Table/TablePagination";

describe("Testing components/Table/TablePagination", () => {
    const onClickPage = jest.fn();
    const onClickPrevious = jest.fn();
    const onClickNext = jest.fn();

    it("should render with no pages", async () => {
        render(
            <TablePagination
                numberOfPages={0}
                activePage={0}
                onClickPage={onClickPage}
                onClickPrevious={onClickPrevious}
                onClickNext={onClickNext}
            />
        );

        expect(screen.queryAllByTestId("pagination-item")).toHaveLength(2);
    });

    it("should render with 5 pages", async () => {
        render(
            <TablePagination
                numberOfPages={5}
                activePage={1}
                onClickPage={onClickPage}
                onClickPrevious={onClickPrevious}
                onClickNext={onClickNext}
            />
        );

        expect(screen.queryAllByTestId("pagination-item")).toHaveLength(7);
    });

    it("should render with 10 pages and active page is below 5", async () => {
        render(
            <TablePagination
                numberOfPages={10}
                activePage={3}
                onClickPage={onClickPage}
                onClickPrevious={onClickPrevious}
                onClickNext={onClickNext}
            />
        );

        expect(screen.queryAllByTestId("pagination-item")).toHaveLength(9);
        expect(screen.queryByTestId("ellipsis-before")).not.toBeInTheDocument();
        expect(screen.queryByTestId("ellipsis-after")).toBeInTheDocument();
    });

    it("should render with 10 pages and active page is between 5 and the number of pages", async () => {
        render(
            <TablePagination
                numberOfPages={10}
                activePage={5}
                onClickPage={onClickPage}
                onClickPrevious={onClickPrevious}
                onClickNext={onClickNext}
            />
        );

        expect(screen.queryAllByTestId("pagination-item")).toHaveLength(9);
        expect(screen.queryByTestId("ellipsis-before")).toBeInTheDocument();
        expect(screen.queryByTestId("ellipsis-after")).toBeInTheDocument();
    });

    it("should render with 10 pages and active page is closer to the end", async () => {
        render(
            <TablePagination
                numberOfPages={10}
                activePage={9}
                onClickPage={onClickPage}
                onClickPrevious={onClickPrevious}
                onClickNext={onClickNext}
            />
        );

        expect(screen.queryAllByTestId("pagination-item")).toHaveLength(9);
        expect(screen.queryByTestId("ellipsis-before")).toBeInTheDocument();
        expect(screen.queryByTestId("ellipsis-after")).not.toBeInTheDocument();
    });
});
