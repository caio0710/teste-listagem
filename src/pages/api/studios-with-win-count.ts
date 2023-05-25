import type { NextApiRequest, NextApiResponse } from "next";
import { fetchFromApi } from "@/utils/api";

type Studio = {
    name: string;
    winCount: number;
};

type StudioWithWinCountResponse = {
    studios: Studio[];
};

type StudioWithWinCountRequestQuery = {
    top?: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Studio[]>) {
    const requestQuery = req.query as StudioWithWinCountRequestQuery;
    const requestTop = Number(requestQuery.top);

    const responseData: StudioWithWinCountResponse = await fetchFromApi({
        projection: "studios-with-win-count"
    });

    let studios = responseData.studios;

    if (!isNaN(requestTop)) {
        studios = studios.sort((a, b) => a.winCount + b.winCount).filter((studio, index) => index < requestTop);
    }

    res.json(studios);
}
