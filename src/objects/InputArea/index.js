import styled from 'styled-components';
import InputBase from '../../styles/tools/InputBase';

const InputArea = styled.textarea`
    height: 144px;
    resize: none;
    border: 1px solid var(--color-second-light);
    

    ${InputBase};
`; 

export default InputArea;