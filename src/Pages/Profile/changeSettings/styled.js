// styled.js
import styled from "styled-components";

export const SettingsContainer = styled.div`
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;

  position: absolute;
`;

export const SettingsHeader = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const SettingsItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 5px;
    font-size: 16px;
  }

  button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #45a049;
    }
  }
`;
