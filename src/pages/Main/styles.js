import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #2196f3;

  a {
    display: block;
    height: 80%;
    padding: 5px;
  }

  img {
    height: 100%;
  }

  h2 {
    padding-left: 25px;
    padding-right: 25px;
    font-family: 'Asap', sans-serif;
    color: #fff;
  }
`;
