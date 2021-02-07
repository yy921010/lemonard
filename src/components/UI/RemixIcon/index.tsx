import React from 'react';

interface Props {
    name: string;
    type?: 'fill' | 'line';
    className?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const Icon: React.FC<Props> = ({ name, type = 'line', className, onClick }) => {
    return <i className={`ri-${name}-${type} ${className}`} onClick={onClick} aria-hidden="true" />;
};

export default Icon;
