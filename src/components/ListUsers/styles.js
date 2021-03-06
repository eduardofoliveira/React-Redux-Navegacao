import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  background-color: #2196f3;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  width: 100%;

  tbody td {
    border-bottom: 1px solid #0961aa;
    padding: 7px;
  }

  thead td {
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    padding: 7px;
  }

  tbody tr:hover {
    background-color: #55aef6;
  }

  tbody img {
    height: 20px;
  }

  tbody a,
  tbody button {
    margin-right: 10px;
    background-color: transparent;
    border: none;
  }
`;

export const Button = styled.button`
  background-color: #2196f3;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 2px solid transparent;
  cursor: pointer;

  &&:hover {
    background-color: #0b7dda;
  }

  &&:active {
    background-color: #0961aa;
  }

  &&:focus {
    border: 2px solid white;
  }
`;
