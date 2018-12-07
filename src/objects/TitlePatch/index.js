import styled from 'styled-components';

const TitlePatch = styled.h1`
    font-size: 1.571em;
    font-weight: bold;
    color: var(--color-negative);
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: var(--spacing-very-small);

    ${props => 
      props.after && `
        &:after{
            content: ":";
            color: var(--color-first);
        }  
    `}

`;

export default TitlePatch;