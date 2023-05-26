import { FunctionComponent, ReactNode } from "react";

interface CardProps {
    title?: string;
    children?: ReactNode;
}

const Card: FunctionComponent<CardProps> = ({ title, children }) => {
    return (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow" data-testid="card">
            {title && <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900">{title}</h5>}
            {children}
        </div>
    );
};

export default Card;
