import type { NextApiRequest, NextApiResponse } from "next";
import { fetchFromApi } from "@/utils/api";

type YearWithMultipleWinners = {
    name: string;
    winCount: number;
};

type YearsWithMultipleWinnersResponse = {
    years: YearWithMultipleWinners[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<YearWithMultipleWinners[]>) {
    const responseData: YearsWithMultipleWinnersResponse = await fetchFromApi({
        projection: "years-with-multiple-winners"
    });

    res.json(responseData.years);
}
