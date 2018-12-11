import styled from 'styled-components';

import InputBase from '../../styles/tools/InputBase';

export const Input = styled.textarea`
    height: 144px;
    resize: none;
    border: 1px solid var(--color-second-light);
    padding-top: 120px !important;
    overflow: hidden;

    ${props => InputBase(props.error)};
`;

export const Wrap = styled.div`
    position: relative;
`;