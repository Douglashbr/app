import React from 'react';

import {Input, Wrap} from './style';
import MsgError from '../MsgError';

const InputText = props => (
    <Wrap>
        <Input {...props}/>
        <MsgError>{props.error}</MsgError>
    </Wrap>
);

export default InputText;
