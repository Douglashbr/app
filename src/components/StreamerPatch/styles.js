import styled from 'styled-components';

export const Streamer = styled.dl`
    display: inline-block;
    width: 230px;
    margin-bottom: var(--spacing-big);
`;

export const Avatar = styled.dd`
    float: left;
    margin-right: var(--spacing-very-small);
`;

export const Name = styled.dt`
    color: var(--color-first);
    font-size: 1.285em;
    letter-spacing: 1px;
    margin-bottom: 2px;
    padding-top: 10px;
    text-align: left;
`;

export const Twitch = styled.dd`
    color: var(--color-second);
    text-decoration: none;
    text-align: left;
    & > a{
        color: inherit;
        text-decoration: inherit;
    }
`;