export type ColumnType = {
    id: string;
    name: string;
    filter?: {
        type: "number" | "select";
        placeholder?: string;
        options?: { value: string; label: string }[];
    };
    formatter?: (value: any) => any;
};
