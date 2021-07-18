import React from 'react';
import styled from 'styled-components';


interface Props {
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: any;
}

const StyledInput = styled.input`
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
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

export default function Input({ type, placeholder,value,onChange }: Props) {
  return <StyledInput type={type} placeholder={placeholder} value={value}onChange={onChange} />;
}


