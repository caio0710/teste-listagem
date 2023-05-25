import type { NextApiRequest, NextApiResponse } from "next";
import { PaginatedResponse, fetchFromApi } from "@/utils/api";

type Movie = {
    id: number;
    year: number;
    title: string;
    studios: string[];
    produces: string[];
    winner: boolean;
};

type MoviesResponse = PaginatedResponse<Movie[]>;

type MoviesRequestQuery = {
    page?: number;
    size?: number;
    winner?: boolean;
    year?: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<MoviesResponse>) {
    const requestQuery = req.query as MoviesRequestQuery;
    const responseData: MoviesResponse = await fetchFromApi({
        page: requestQuery.page,
        size: requestQuery.size,
        winner: requestQuery.winner || "",
        year: requestQuery.year || ""
    });

    res.json(responseData);
}
