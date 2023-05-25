import { FunctionComponent } from "react";

import Card from "@/components/Card";
import Table from "@/components/Table/Table";

const ProducersCard: FunctionComponent = () => {
    return (
        <Card title="Producers with longest and shortest interval between wins">
            <h5 className="mb-2 text-base text-gray-900">Maximum</h5>
            <Table
                columns={[
                    { id: "producer", name: "Producer" },
                    { id: "interval", name: "Interval" },
                    { id: "previousWin", name: "Previous Year" },
                    { id: "followingWin", name: "Following Year" }
                ]}
                apiPath="api/max-win-interval-for-producters"
            />
            <h5 className="mb-2 text-base text-gray-900 mt-4">Minimum</h5>
            <Table
                columns={[
                    { id: "producer", name: "Producer" },
                    { id: "interval", name: "Interval" },
                    { id: "previousWin", name: "Previous Year" },
                    { id: "followingWin", name: "Following Year" }
                ]}
                apiPath="api/min-win-interval-for-producters"
            />
        </Card>
    );
};

export default ProducersCard;
