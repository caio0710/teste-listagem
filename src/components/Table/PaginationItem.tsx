import { FunctionComponent, ReactNode } from "react";

interface PaginationItemProps {
    isFirstItem?: boolean;
    isLastItem?: boolean;
    active?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    onClickItem?: () => void;
}

const PaginationItem: FunctionComponent<PaginationItemProps> = ({
    isFirstItem,
    isLastItem,
    active,
    disabled,
    onClickItem,
    children
}) => {
    let itemClass = active
        ? "text-blue-600 border border-blue-300 bg-blue-50 enabled:hover:bg-blue-100 enabled:hover:text-blue-700"
        : "text-gray-500 border border-gray-300 bg-white enabled:hover:bg-gray-100 enabled:hover:text-gray-700";

    if (isFirstItem) {
        itemClass += " rounded-l-lg";
    } else if (isLastItem) {
        itemClass += " rounded-r-lg";
    }

    return (
        <li>
            <button
                className={`px-3 py-2 leading-tight disabled:opacity-60 ${itemClass}`}
                onClick={onClickItem}
                disabled={disabled}
            >
                {children}
            </button>
        </li>
    );
};

export default PaginationItem;
