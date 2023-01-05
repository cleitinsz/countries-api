import styled from "styled-components";

export const CountryItem = styled.div<{theme: string}>`
  background-color: ${props => props.theme === 'light' ? '' : 'rgb(43, 55, 67)'};
  
  box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  a{
    text-decoration: none;
    color: #000;
  }
  .img-area{
    img{
      width: 100%;
      height: 150px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  .data-area{
    color: ${props => props.theme === 'light' ? '' : '#FFF'};
    padding: 10px 20px;
    p{
      font-weight: 800;
      font-size: 13px;
      margin: 10px 0;
      span{
        font-weight: 300;
      }
    }
    .country-name{
      font-size: 17px;
      margin: 10px 0;

    }
  }
  @media(max-width: 768px){
    .img-area{
      img{
        height: 180px;
      }
    }
  }
`