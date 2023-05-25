import Head from "next/head";

import Card from "@/components/Card";
import Table from "@/components/Table/Table";

export default function List() {
    return (
        <>
            <Head>
                <title>List</title>
            </Head>
            <Card title="List movies">
                <Table
                    hasPagination={true}
                    columns={[
                        { id: "id", name: "ID" },
                        { id: "year", name: "Year", filter: { type: "number", placeholder: "Filter by year" } },
                        { id: "title", name: "Title" },
                        {
                            id: "winner",
                            name: "Winner",
                            formatter: (value) => (value ? "Yes" : "No"),
                            filter: {
                                type: "select",
                                placeholder: "Yes/No",
                                options: [
                                    { value: "true", label: "Yes" },
                                    { value: "false", label: "No" }
                                ]
                            }
                        }
                    ]}
                    apiPath="api/movies"
                />
            </Card>
        </>
    );
}
