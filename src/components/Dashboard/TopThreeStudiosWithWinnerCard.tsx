import { FunctionComponent } from "react";

import Card from "@/components/Card";
import Table from "@/components/Table/Table";

const TopThreeStudiosWithWinnerCard: FunctionComponent = () => {
    return (
        <Card title="Top 3 studios with winners">
            <Table
                columns={[
                    { id: "name", name: "Name" },
                    { id: "winCount", name: "Win Count" }
                ]}
                apiPath="api/studios-with-win-count"
                apiParams={{ top: 3 }}
            />
        </Card>
    );
};

export default TopThreeStudiosWithWinnerCard;
