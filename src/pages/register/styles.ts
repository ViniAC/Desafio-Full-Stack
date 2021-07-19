import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    height: 98vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 60vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #4f4f4f;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    @media only screen and (max-width: 320px) {
        width: 70vw;
        height: 80vh;
        hr {
            margin-bottom: 0.3rem;
        }
        h4 {
            font-size: small;
        }
    }
    @media only screen and (min-width: 360px) {
        width: 70vw;
        height: 80vh;
        h4 {
            font-size: small;
        }
    }
    @media only screen and (min-width: 411px) {
        width: 70vw;
        height: 80vh;
    }

    @media only screen and (min-width: 768px) {
        width: 70vw;
        height: 80vh;
    }
    @media only screen and (min-width: 1024px) {
        width: 70vw;
        height: 80vh;
    }
    @media only screen and (min-width: 1280px) {
        width: 70vw;
        height: 80vh;
    }
`;

export const RegisterText = styled.h2`
    margin: 3rem 0 2rem 0;
    font-weight: bolder;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  align-content:center;
  height: 70%;
  width: 80%;
`;

export const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: center;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;
export const StyledInput = styled.input`
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  margin:0;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  border-color: rgba(31, 38, 135, 0.37);
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 6px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;
export const DatePickerContainer = styled.div`
    display: flex;
    width: 83%;

    .react-date-picker__wrapper {
        margin-right:1rem;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        border-radius: 2rem;
        border: 1px;
        outline: none;
        color: #3c354e;
        background-color:white;
        border-color: rgba(31, 38, 135, 0.37);
        margin-bottom: 4px;
        margin-left:6px;
  }
`;
export const ButtonBack = styled.button`
text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 10%;
  height: 3rem;
  border: none;
  color: black;
  border-radius: 2rem;
  cursor: pointer;
  margin:5px;
`;
