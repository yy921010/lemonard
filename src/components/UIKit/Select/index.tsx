import React from 'react';
import RcSelect, { SelectProps, Option } from 'rc-select';
import 'rc-select/assets/index.less';

const Select: React.FC<SelectProps> = ({ ...rest }) => {
    return <RcSelect />;
};

export default Select;
export { Option };
