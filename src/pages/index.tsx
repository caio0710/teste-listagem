import Head from "next/head";

import ListWithMultipleWinnerCard from "@/components/Dashboard/ListWithMultipleWinnerCard";
import TopThreeStudiosWithWinnerCard from "@/components/Dashboard/TopThreeStudiosWithWinnerCard";
import ProducersCard from "@/components/Dashboard/ProducersCard";
import WinnersByYearCard from "@/components/Dashboard/WinnersByYearCard";

export default function Home() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                <ListWithMultipleWinnerCard />
                <TopThreeStudiosWithWinnerCard />
                <ProducersCard />
                <WinnersByYearCard />
            </div>
        </>
    );
}
