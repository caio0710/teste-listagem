import { render } from "@testing-library/react";

import AppSidebar from "@/components/AppSidebar";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            pathname: "/list"
        };
    }
}));

describe("Testing components/AppSidebar", () => {
    it("should render", async () => {
        const { queryAllByRole, container } = render(<AppSidebar />);

        expect(queryAllByRole("listitem")).toHaveLength(2);
        expect(container.getElementsByClassName("text-blue-500")).toHaveLength(1);
    });
});
