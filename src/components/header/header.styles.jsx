import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const TitleContainer = styled( Link )`
    width: 175px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const OptionContainer = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled( Link )`
    padding: 10px 13px;
    cursor: pointer;
`;
