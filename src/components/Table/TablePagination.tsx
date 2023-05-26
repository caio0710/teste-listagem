import { FunctionComponent } from "react";
import { ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

import PaginationItem from "./PaginationItem";

interface TablePaginationProps {
    numberOfPages: number;
    activePage: number;
    onClickPage: (pageNumber: number) => void;
    onClickPrevious: () => void;
    onClickNext: () => void;
}

const TablePagination: FunctionComponent<TablePaginationProps> = ({
    numberOfPages,
    activePage,
    onClickPage,
    onClickPrevious,
    onClickNext
}) => {
    const pagesRange = [...Array(numberOfPages).keys()];
    const isInFirstPage = activePage === 1;
    const isInLastPage = activePage === numberOfPages;
    let pagesToShow: number[] = [];
    let hasEllipsisBefore = false;
    let hasEllipsisAfter = false;

    if (pagesRange.length > 5) {
        if (activePage < 5) {
            hasEllipsisAfter = true;
            pagesToShow = pagesRange.slice(0, 5);
        } else if (activePage >= 5 && activePage < pagesRange.length - 4) {
            hasEllipsisBefore = true;
            hasEllipsisAfter = true;
            pagesToShow = pagesRange.slice(activePage - 2, activePage + 1);
        } else {
            hasEllipsisBefore = true;
            pagesToShow = pagesRange.slice(pagesRange.length - 5);
        }
    } else {
        pagesToShow = pagesRange;
    }

    return (
        <div className="relative">
            <nav className="flex justify-center pt-4">
                <ul className="inline-flex items-center -space-x-px">
                    <PaginationItem onClickItem={onClickPrevious} disabled={isInFirstPage}>
                        <ChevronLeftIcon className="h-5 w-5" />
                    </PaginationItem>
                    {hasEllipsisBefore && (
                        <>
                            <PaginationItem onClickItem={onClickPage.bind(null, 1)}>{1}</PaginationItem>
                            <PaginationItem disabled>
                                <EllipsisHorizontalIcon className="h-5 w-5" data-testid="ellipsis-before" />
                            </PaginationItem>
                        </>
                    )}
                    {pagesToShow.map((page) => {
                        const pageNumber = page + 1;

                        return (
                            <PaginationItem
                                key={`page${page}`}
                                onClickItem={onClickPage.bind(null, pageNumber)}
                                active={activePage === pageNumber}
                            >
                                {pageNumber}
                            </PaginationItem>
                        );
                    })}
                    {hasEllipsisAfter && (
                        <>
                            <PaginationItem disabled>
                                <EllipsisHorizontalIcon className="h-5 w-5" data-testid="ellipsis-after" />
                            </PaginationItem>
                            <PaginationItem onClickItem={onClickPage.bind(null, numberOfPages)}>
                                {numberOfPages}
                            </PaginationItem>
                        </>
                    )}
                    <PaginationItem onClickItem={onClickNext} disabled={isInLastPage}>
                        <ChevronRightIcon className="h-5 w-5" />
                    </PaginationItem>
                </ul>
            </nav>
        </div>
    );
};

export default TablePagination;
