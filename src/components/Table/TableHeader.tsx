import { FunctionComponent } from "react";
import { ColumnType } from "./types";
import Input from "../Input";
import Select from "../Select";

interface TableHeaderProps {
    columns: ColumnType[];
    onChangeFilter?: (filterName: string, filterValue: string) => void;
}

const renderFilterForColumn = (column: ColumnType, onChangeFilter?: (newValue: string) => void) => {
    switch (column.filter?.type) {
        case "number":
            return <Input inputType="number" placeholder={column.filter.placeholder} onChange={onChangeFilter} />;
        case "select":
            return (
                <Select
                    options={column.filter.options}
                    placeholder={column.filter.placeholder}
                    onChange={onChangeFilter}
                />
            );
        default:
            return null;
    }
};

const TableHeader: FunctionComponent<TableHeaderProps> = ({ columns, onChangeFilter }) => {
    const handleChangeFilter = (columnId: string, newValue: string) => {
        onChangeFilter?.(columnId, newValue);
    };

    return (
        <thead className="text-xs text-gray-700 bg-gray-100">
            <tr>
                {columns.map((column: ColumnType) => (
                    <th key={column.id} scope="col" className="px-6 py-3 border-x ">
                        {column.name}
                        {column.filter && (
                            <div className="mt-2">
                                {renderFilterForColumn(column, handleChangeFilter.bind(null, column.id))}
                            </div>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
