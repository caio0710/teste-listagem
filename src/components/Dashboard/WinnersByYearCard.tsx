import { FunctionComponent, useCallback, useState } from "react";

import Card from "@/components/Card";
import Table from "@/components/Table/Table";
import SearchInput from "@/components/SearchInput";

const WinnersByYearCard: FunctionComponent = () => {
    const [searchYear, onChangeSearchYear] = useState<number | undefined>();

    const handleClickSearch = useCallback(
        (searchValue: string) => {
            onChangeSearchYear(searchValue ? parseInt(searchValue, 10) : undefined);
        },
        [onChangeSearchYear]
    );

    return (
        <Card title="List movie winners by year">
            <SearchInput placeholder="Search by year" inputType="number" onClickSearch={handleClickSearch} />
            <Table
                columns={[
                    { id: "id", name: "ID" },
                    { id: "year", name: "Year" },
                    { id: "title", name: "Title" }
                ]}
                apiPath="api/winner-movie-by-year"
                apiParams={{ year: searchYear }}
            />
        </Card>
    );
};

export default WinnersByYearCard;
