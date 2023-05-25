import type { NextApiRequest, NextApiResponse } from "next";
import { fetchFromApi } from "@/utils/api";

type Producer = {
    producer: string;
    interval: number;
    previousWin: number;
    followingWin: number;
};

type MaxMinWinIntervalForProducersResponse = {
    min: Producer;
    max: Producer;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Producer>) {
    const responseData: MaxMinWinIntervalForProducersResponse = await fetchFromApi({
        projection: "max-min-win-interval-for-producers"
    });

    res.json(responseData.min);
}
