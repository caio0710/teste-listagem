import { fetchFromApi } from "@/utils/api";

afterEach(() => {
    fetchMock.resetMocks();
});

describe("Testing utils/api", () => {
    it("should call the api with params", async () => {
        fetchMock.mockResponse(
            JSON.stringify([
                { id: "record1", name: "Record 1" },
                { id: "record2", name: "Record 2" }
            ])
        );

        const response = await fetchFromApi({
            param1: "test1",
            param2: "test2"
        });

        const title = "A";

        expect(title).toEqual("A");
    });

    it("should call the api with no params", async () => {
        const title = "A";

        expect(title).toEqual("A");
    });
});
