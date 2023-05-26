import { FunctionComponent, useCallback } from "react";

interface SelectProps {
    placeholder?: string;
    options?: { value: string; label: string }[];
    onChange?: (newValue: string) => void;
}

const Select: FunctionComponent<SelectProps> = ({ placeholder, options, onChange }) => {
    const handleSelectChange = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            onChange?.(event.target.value);
        },
        [onChange]
    );

    return (
        <select
            className="block p-2.5 w-full font-normal text-sm text-gray-900 rounded-lg bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            onChange={handleSelectChange}
            data-testid="select-input"
        >
            <option value="">{placeholder}</option>
            {options?.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
