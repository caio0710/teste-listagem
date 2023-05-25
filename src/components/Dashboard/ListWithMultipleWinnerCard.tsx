import { FunctionComponent } from "react";

import Card from "@/components/Card";
import Table from "@/components/Table/Table";

const ListWithMultipleWinnerCard: FunctionComponent = () => {
    return (
        <Card title="List years with multiple winners">
            <Table
                columns={[
                    { id: "year", name: "Year" },
                    { id: "winnerCount", name: "Win Count" }
                ]}
                apiPath="api/years-with-multiple-winners"
            />
        </Card>
    );
};

export default ListWithMultipleWinnerCard;
