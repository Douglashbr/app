 const InputBase = error => `
    box-sizing: border-box;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${ error ? 'var(--color-first)' : 'var(--color-second)' };
    width: 100%;
    font-size: 1.285em;
    color: var(--color-third);
    padding: 5px;

    & ::placeholder{
        color: inherit;
        font-size: inherit;
    }
`;

export default InputBase;