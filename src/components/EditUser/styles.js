import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form`
  margin-top: 100px;
  width: 500px;

  input {
    width: 100%;
  }

  p {
    color: #000;
    margin-bottom: 15px;
    border: 1px solid #f00;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 4px;
    border: 3px solid #fff;
  }

  input[type='text']:focus,
  input[type='email']:focus,
  input[type='password']:focus {
    border: 3px solid #2196f3;
  }

  button {
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
  }

  button:hover {
    background-color: #0b7dda;
  }

  button:active {
    background-color: #0961aa;
  }

  button:focus {
    border: 2px solid white;
  }
`;
