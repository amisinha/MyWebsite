import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  height: 240px;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 2rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px yellow;
  text-align: center;
  width: 470px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 10;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 200;
  letter-spacing: 2px;
  color: #FCCD04;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '2rem' : '1.6rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'cursive';
  font-size: 10px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 40px;
  color: grey;
  font-family: cursive;
  font-style: 1rem;
  line-height: 18px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.2rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:black;
font-size: 1rem;
padding:1rem 1.5rem;
background: #FCCD04;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`