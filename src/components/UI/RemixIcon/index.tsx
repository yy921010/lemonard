import React from 'react';

interface Props {
    name: string;
    type?: 'fill' | 'line';
    size?: number;
}
const Icon: React.FC<Props> = ({ name, type, size }) => {
    return (
        <i
            className={`ri-${name}-${type || 'line'}`}
            style={{
                fontSize: size,
            }}
        />
    );
};

export default Icon;
