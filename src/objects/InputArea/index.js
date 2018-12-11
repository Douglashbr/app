import React from 'react';

import {Input, Wrap} from './style'; 
import MsgError from '../MsgError';

const InputArea = props => (
    <Wrap>
        <Input {...props}></Input>
        <MsgError>{props.error}</MsgError>
    </Wrap>
); 

export default InputArea;