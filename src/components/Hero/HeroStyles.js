import styled from 'styled-components';
export const GridContainer = styled.section`
display: flex;
padding: 2rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
width:100%;
`

export const ListItem = styled.li`
  max-width: 420px;
  display: flex;
  flex-direction: column;
  column-gap: 2rem;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`
export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 120px;
  margin: 2rem 0;
  
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 6px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 4px 0;
    gap: 4px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`
export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
