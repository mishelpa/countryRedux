import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.label`
    display: inline-flex;
    background: white;
    align-items: center;
    border-radius:5px;
    padding: 0 2rem;
    flex:1;
    box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
    i{
        margin-right: 1em;
        color: #C4C4C4
    }
    input{
        flex: 1;
        border: none;
        height: 48px;
        line-height: 48px;
        font-size:.7em;
        outline: 0;
        &::-webkit-input-placeholder{
            color: #C4C4C4;
        }
    }
`

const Input = ({...props}) => {
    return (
        <InputStyled>
        <i class="fas fa-search"></i>
            <input type="text" {...props}/>
        </InputStyled>
    )
}

export default Input;