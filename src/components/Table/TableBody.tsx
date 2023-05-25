import { FunctionComponent } from "react";
import { ColumnType } from "./types";

interface TableBodyProps {
    rows: { [key: string]: any }[];
    columns: ColumnType[];
}

const TableBody: FunctionComponent<TableBodyProps> = ({ rows, columns }) => {
    return (
        <tbody>
            {rows?.map((row, index) => (
                <tr key={index} className={`border-b ${index % 2 !== 0 ? "bg-gray-50" : ""}`}>
                    {columns.map((column: ColumnType) => (
                        <td key={column.id} className="px-6 py-4 border-x">
                            {column.formatter ? column.formatter(row[column.id]) : row[column.id]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
