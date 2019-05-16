import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  background-color: #2196f3;

  div.start {
    display: flex;
    align-items: center;
  }

  div.end {
    display: flex;
    align-items: center;
  }

  div a {
    display: block;
    padding: 5px;
  }

  div img {
    height: 50px;
  }

  div h2 {
    padding-left: 25px;
    padding-right: 25px;
    font-family: 'Asap', sans-serif;
    color: #fff;
  }
`;
