import RcDialog, { DialogProps } from 'rc-dialog';
import React from 'react';
import 'twin.macro';
import Icon from '../RemixIcon';
import './index.scss';

function Dialog({ children, ...rest }: DialogProps): JSX.Element {
    return (
        <RcDialog {...rest} closeIcon={<Icon name="close" tw="text-gray-100 text-2xl" />}>
            {children}
        </RcDialog>
    );
}

export default Dialog;
