import styled from 'styled-components';

import LogoPatch from '../../img/logo-patch.png';

export const Header = styled.header`
    background-color: var(--color-second);
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 2px 0 var(--color-second-light); 
`;

export const Logo = styled.img.attrs({
    src: LogoPatch,
    alt: 'Logo Patch'
})``;