import { FunctionComponent, useCallback } from "react";

interface InputProps {
    placeholder?: string;
    inputType?: string;
    onChange?: (newValue: string) => void;
}

const Input: FunctionComponent<InputProps> = ({ placeholder, inputType, onChange }) => {
    const handleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(event.target.value);
        },
        [onChange]
    );

    return (
        <input
            type={inputType}
            className="block p-2.5 w-full font-normal text-sm text-gray-900 rounded-lg bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            placeholder={placeholder}
            onChange={handleInputChange}
        />
    );
};

export default Input;
