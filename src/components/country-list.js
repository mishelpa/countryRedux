import React, { useEffect} from 'react';
import styled from 'styled-components';
import Country from './country';
import {useSelector, useDispatch} from 'react-redux';

const CountryListStyled = styled.div`
    display: grid;
    grid-row-gap: 2.3em;
    background: var(--backgorund);
    border: 1px solid red;
    justify-content: center;
    padding: 4em 2em;
`

const CountryList = () => {
    const dispatch = useDispatch();
    const countryListByName = useSelector((state) => state.countryListByName);
    const countryList = useSelector((state) => {
        if(state.filterByRegion !== '' && countryListByName.length === 0){
            return state.countryFilteredByRegion;
        }
        if(countryListByName.length > 0) {
            return countryListByName
        }

        return state.countryList;
    });
    useEffect(()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response)=> response.json())
        .then((list)=> dispatch ({
            type: 'SET_COUNTRY_LIST',
            payload: list,
        }))
        .catch(()=> {
            console.log('Hubo un error');
        })
    }, [dispatch])
    return (
        <CountryListStyled>
            {
                countryList.map((country) => (
                    <Country
                    flag={country.flag}
                    name={country.name}
                    key={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
            />
                ))
            }
            
        </CountryListStyled>
    )
}

export default CountryList;