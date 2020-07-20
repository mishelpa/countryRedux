import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

const RegionStyled = styled.select`
    padding: 1em;
    border: none;
    border-radius: 5px;
    outline:0;
    box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
`
const filterByRegionAction = (regionSelected) => {
    return {
        type: 'FILTER_BY_REGION',
        payload: {regionSelected},
    }
}

const Region = () => {
    const dispatch = useDispatch();
    const filterByRegion = useSelector((state) => state.filterByRegion);
    const onRegionChange = (event) => {
        dispatch(filterByRegionAction(event));
    }
    return (
        <>
            <RegionStyled>
                <div>
                    Filter By Region
                    <i className="fas fa-chevron-down"></i>
                    <ul>
                        <li onClick={()=> onRegionChange('Africa')}>Africa</li>
                        <li onClick={()=> onRegionChange('Americas')}>Americas</li>
                        <li onClick={()=> onRegionChange('Asia')}>Asia</li>
                        <li onClick={()=> onRegionChange('Europe')}>Europe</li>
                        <li onClick={()=> onRegionChange('Oceania')}>Oceania</li>
                    </ul>
                </div>
            </RegionStyled>
        </>
    )
}

export default Region;