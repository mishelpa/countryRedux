import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './input';
import { useDispatch } from 'react-redux';

const SearchStyled = styled.div`
    display: flex;
`

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const filterByName = (event) => {
        setInputValue(event.target.value)
        dispatch({
            type: 'SET_COUNTRY_BY_NAME',
            payload: event.target.value
        })
    }
    const clearInput = () => {
        dispatch({
            type: 'SET_COUNTRY_BY_NAME',
            payload: ''
        })
        setInputValue('')
    }
    return (
        <SearchStyled>
            {
                inputValue && 
                <i className="fas fa-times close" onClick={clearInput}></i>
            }
            <Input placeholder = "Search for a country..." value={inputValue} onChange={filterByName}/>
        </SearchStyled>
    )
}

export default Search;