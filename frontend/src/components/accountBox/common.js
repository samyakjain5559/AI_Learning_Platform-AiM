import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MutedLink = styled.a`
    font-size: 13px;
    color: rgba(170, 170, 170, 1);
    font-weight: 500;
    text-decoration: none;
`;

export const BoldLink = styled.a`
    color: #051937;
    font-weight: 600;
    font-size: 13px;
    text-decoration: none;
    margin: 0 3px;
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.03);
    padding: 0 10px;
    transition: all, 200ms ease-in-out;
    box-sizing: border-box;
    border-bottom: 1.4px solid transparent;

    &::placeholder {
        color: rgba(170, 170, 170, 1);
    }

    &:not(:last-of-type) {
        border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
    }

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
        border-bottom: 2px solid #5963c3;
    }
`;

export const SubmitButton = styled.button`
    padding: 11px 40%;
    width: 100%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;

    background-image: linear-gradient(
        to right top, #051937, #05162e, 
        #051224, #030d1b, #000712
    );

    &:focus {
        outline: none;
    }
    
    &:hover {
        filter: brightness(1.03);
    }
`;