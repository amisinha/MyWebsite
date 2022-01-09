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
background: #696969;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const Button = styled.div`
  width: ${({ alt }) => alt ? '100px' : '100px'};
  height: ${({ alt }) => alt ? '40px' : '40px'};
  border-radius: 80px;
  font-size: ${({ alt }) => alt ? '12px' : '12px'};
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, yellow 0%, orange 100%)' : 'linear-gradient(270deg, yellow 0%, orange 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  margin-left:100px;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  &:hover {
    color: white;
    background: orange;
  }


`

export const Iy = styled.div`
font-size: 15px;
color: white;
text-align: center;
font-family:Raleway;
`;
export const Ia = styled.div`
font-size: 12px;
color: white;
text-align: center;
font-family:Raleway;
`;
export const Iu = styled.div`
font-size: 12px;
color: white;
text-align:justify;
font-family:Raleway;
margin-left:3px;
margin-right:3px;
`;
export const Iz = styled.div`
font-size: 20px;
color: #FCCD04;
font-family:cursive;
text-align:center;
`;
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

export const Container = styled.div`
	position:fixed;
	background: antiquewhite;
	width: 33%;
	height: auto;
    
	top: ${({openPos}) => (
	{
    	[CM_CENTER_CENTER]: '50%',
    	[CM_TOP_LEFT]: '10%',
    	[CM_TOP_CENTER]: '10%',
    	[CM_TOP_RIGHT]: '10%'
	}[openPos])};
    
	left: ${({openPos}) => (
	{
    	[CM_CENTER_CENTER]: '50%',
    	[CM_TOP_LEFT]: '5%',
    	[CM_TOP_CENTER]: '50%',
    	[CM_TOP_RIGHT]: '95%'
	}[openPos])};
 
	transform: ${({openPos}) => (
	{
    	[CM_CENTER_CENTER]: 'translate(-50%,-50%)',
    	[CM_TOP_LEFT]: 'translate(0,0)',
    	[CM_TOP_CENTER]: 'translate(-50%,0)',
    	[CM_TOP_RIGHT]: 'translate(-100%,0)'
	}[openPos])};

	border-radius: 10px;
	padding: 0.75rem;
	color: rgba(0,0,139, 0.7);
`;



export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 20px #FCCD04;
  margin-left: 4px;
  width:300px;

  
  background:black;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`
export const List = styled.ul`
  list-style-type: none;
  grid-template-columns: repeat(3, 1fr);
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