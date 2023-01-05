import styled from "styled-components";

export const CountryPage = styled.main<{theme: string}>`
  transition: all ease 0.2s;
  background-color: ${props => props.theme === 'light' ? '' : 'rgb(43, 55, 67)'};
  height: calc(100vh - 90px);
  .container{
    width: 1024px;
    margin:auto;
    padding: 40px 0px;
  }

  .loading{
    min-height: 100vh;
  }
  .back-button{
    text-decoration:none;
    color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    &{
      padding: 20px;
    }
    .container{
      width:auto;
    }
  }
  @media(max-width: 767px){
    &{
      padding: 20px;
    }
    .container{
      width:auto;
    }
  }
`
