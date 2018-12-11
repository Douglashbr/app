import styled from 'styled-components';

import InputBase from '../../styles/tools/InputBase';

export const Input = styled.input`
    ${props => InputBase(props.error)}
    margin-bottom: var(--spacing-medium);
`; 

export const Wrap = styled.div`
    position:relative;
`;