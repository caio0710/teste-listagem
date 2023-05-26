import { FunctionComponent, useCallback, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface SearchInputProps {
    placeholder?: string;
    inputType?: string;
    onClickSearch: (searchValue: string) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ placeholder, inputType, onClickSearch }) => {
    const [searchValue, onChangeSearchValue] = useState<string>("");

    const handleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onChangeSearchValue(event.target.value);
        },
        [onChangeSearchValue]
    );

    const handleInputKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
                onClickSearch(searchValue);
            }
        },
        [onClickSearch, searchValue]
    );

    const handleClickSearch = useCallback(() => {
        onClickSearch(searchValue);
    }, [onClickSearch, searchValue]);

    return (
        <div className="relative w-full mb-4">
            <input
                type={inputType}
                className="block p-2.5 pr-12 w-full z-20 font-normal text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder={placeholder}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={searchValue}
                data-testid="search-input"
            />
            <button
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleClickSearch}
                data-testid="search-button"
            >
                <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
        </div>
    );
};

export default SearchInput;
