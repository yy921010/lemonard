import React from 'react';
import tw, { styled } from 'twin.macro';

interface ButtonProps {
    buttonType?: 'primary' | 'info' | 'link';
    size?: 'large' | 'medium' | 'small' | 'mini';
    disable?: boolean;
    icon?: React.ReactNode;
}

const Button = styled.button(({ buttonType, size, disable, icon }: ButtonProps) => [
    tw`inline-block cursor-pointer leading-none appearance-none box-border outline-none m-0 h-11 rounded
    bg-transparent text-gray-100 px-4 border-gray-300 border hover:(border border-gray-800 bg-gray-800)`,
    buttonType === 'primary' ? tw`bg-red-500 text-gray-100` : '',
    buttonType === 'info' ? tw`bg-blue-400 text-gray-100` : '',
    buttonType === 'link' ? tw`bg-transparent text-gray-100` : '',
]);

export default Button;
