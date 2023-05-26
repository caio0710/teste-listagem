type Pageable = {
    sort: {
        sorted: boolean;
        unsorted: boolean;
    };
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
};

export type PaginatedResponse<T> = {
    content: T;
    pageable: Pageable;
    totalElements: number;
    totalPages: number;
    first: boolean;
    last: boolean;
    sort: {
        sorted: boolean;
        unsorted: boolean;
    };
    number: number;
    numberOfElements: number;
    size: number;
};

export const fetchFromApi = async (params?: { [key: string]: any }) => {
    const baseUrl = "https://tools.texoit.com/backend-java/api/movies";
    const urlParams = new URLSearchParams(params).toString();

    const response = await fetch(`${baseUrl}?${urlParams}`);
    const responseJson = await response.json();

    return responseJson;
};
