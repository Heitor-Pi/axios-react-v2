import styled from 'styled-components';

export const Main = styled.main`
    min-height: calc(100vh - 140px);
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
`


export const StatusMessage = styled.p`
    text-align: center;
    font-size: 1.2rem;
    margin-top: 3rem;
`