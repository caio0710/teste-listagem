import type { NextApiRequest, NextApiResponse } from "next";
import { fetchFromApi } from "@/utils/api";

type WinnerMovieByYear = {
    id: number;
    year: number;
    title: string;
    studios: string[];
    produces: string[];
    winner: boolean;
};

type WinnerMovieByYearResponse = WinnerMovieByYear[];

type WinnerMovieByYearRequestQuery = {
    year?: number | string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<WinnerMovieByYear[]>) {
    const requestQuery = req.query as WinnerMovieByYearRequestQuery;
    const requestYear = Number(requestQuery.year);

    if (isNaN(requestYear)) {
        res.json([]);
        return;
    }

    const responseData: WinnerMovieByYearResponse = await fetchFromApi({
        winner: true,
        year: requestYear
    });

    res.json(responseData);
}
