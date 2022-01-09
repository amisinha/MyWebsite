import styled from "styled-components"
export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 2rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
background: #FCCD04;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const List = styled.ul`
  list-style-type: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 2rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
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
export const Iz = styled.div`
font-size: 11px;
margin-left: 3px;
margin-top:2px;
color: #FCCD04;
font-family:Raleway;
`;
export const Io = styled.div`
font-size: 11px;
margin-left: 3px;
margin-top:2px;
color: #FCCD04;
font-family:Raleway;
text-align:center;
`;
export const Ig = styled.div`
font-size: 13px;
margin-left: 3px;
margin-top:2px;
color: powder-blue;
font-family:Raleway;
text-align:center;
border-color: blue;
box-shadow: 3px 3px 20px blue;
`;
export const Ic = styled.div`
font-size: 11px;
margin-left: 3px;
margin-top:2px;
color: #FCCD04;
text-align: center;

font-family:cursive;
`;

export const Ia = styled.div`
font-size: 18px;
color: white;
text-align: center;
font-family:Raleway;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 20px #ffffdc;
  margin-left: 4px;
  width:380px;

  
  background:black;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 500;
  font-size: 15px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FCCD04;
  margin-bottom: 8px;
  margin-left: 5px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`
export const Img = styled.img`
flex: 1,
width: '100%',
height: '100%',
resizeMode: 'contain',
`

export const ListParagraph = styled.p`
  font-size: 12px;
  line-height: 22px;
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.75);
  

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`
export const ProgressBar = styled.p`
  color: yellow;
`

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
  display:flex;

}
`
export const Grid = styled.div`
background: grey;
display:flex;
`;
export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`
