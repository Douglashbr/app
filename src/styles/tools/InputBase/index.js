 const InputBase = `
    box-sizing: border-box;
    border-bottom: 2px solid var(--color-second);
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