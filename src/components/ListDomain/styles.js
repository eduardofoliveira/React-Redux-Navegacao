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

  tr:nth-child(even) {
    background-color: #3da2f5;
  }

  thead td {
    text-align: center;
  }

  tbody td {
    border-bottom: 1px solid #0961aa;
    padding: 10px;
    text-align: center;
  }

  thead td {
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    padding: 7px;
  }

  tbody tr:hover {
    background-color: #3892dc;
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
