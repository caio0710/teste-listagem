import { render, screen } from "@testing-library/react";

import TableBody from "@/components/Table/TableBody";

describe("Testing components/Table/TableBody", () => {
    it("should render with no rows", async () => {
        render(
            <table>
                <TableBody columns={[]} rows={[]} />
            </table>
        );

        expect(screen.queryAllByRole("row")).toHaveLength(0);
    });

    it("should render with rows", async () => {
        render(
            <table>
                <TableBody
                    columns={[
                        { id: "year", name: "Year" },
                        {
                            id: "winnerCount",
                            name: "Win Count",
                            formatter: (value) => (value === 2 ? value + 1 : value)
                        }
                    ]}
                    rows={[
                        { year: 2023, winnerCount: 1 },
                        { year: 2022, winnerCount: 1 },
                        { year: 2021, winnerCount: 2 },
                        { year: 2020, winnerCount: 1 }
                    ]}
                />
            </table>
        );

        expect(screen.queryAllByRole("row")).toHaveLength(4);
        expect(screen.queryAllByRole("row")[2]).toHaveTextContent("3");
    });
});
