import { FunctionComponent, useCallback, useState } from "react";
import useSWR from "swr";

import { ColumnType } from "./types";

import TablePagination from "./TablePagination";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface TableProps {
    columns: ColumnType[];
    hasPagination?: boolean;
    apiPath: string;
    apiParams?: { [key: string]: any };
}

const Table: FunctionComponent<TableProps> = ({ apiPath, apiParams, columns, hasPagination }) => {
    const [page, setPage] = useState(1);
    const [tableFilters, setTableFilters] = useState({});

    const { data } = useSWR(() => {
        let params = apiParams || {};

        if (hasPagination) {
            params.page = page - 1;
            params.size = 10;
        }

        params = { ...params, ...tableFilters };
        return `${apiPath}?${new URLSearchParams(params).toString()}`;
    });

    const handleClickPage = useCallback(
        (pageNumber: number) => {
            setPage(pageNumber);
        },
        [setPage]
    );

    const handleClickPrevious = useCallback(() => {
        setPage(page - 1);
    }, [page, setPage]);

    const handleClickNext = useCallback(() => {
        setPage(page + 1);
    }, [page, setPage]);

    const handleChangeFilter = useCallback(
        (filterName: string, filterValue: string) => {
            setTableFilters({ ...tableFilters, [filterName]: filterValue });
        },
        [tableFilters, setTableFilters]
    );

    return (
        <div className="relative">
            <table className="w-full text-sm text-left text-gray-500 border" data-testid="table">
                <TableHeader columns={columns} onChangeFilter={handleChangeFilter} />
                <TableBody columns={columns} rows={hasPagination ? data?.content : data} />
            </table>
            {hasPagination && (
                <TablePagination
                    activePage={page}
                    numberOfPages={data?.totalPages}
                    onClickPage={handleClickPage}
                    onClickPrevious={handleClickPrevious}
                    onClickNext={handleClickNext}
                ></TablePagination>
            )}
        </div>
    );
};

export default Table;
