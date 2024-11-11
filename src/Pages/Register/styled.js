import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0b1023;
`;

const FormContainer = styled.div`
  padding: 40px 0;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 500px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #ffffff;
  font-weight: 900;
  font-family: sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const InputContainer = styled.div`
  flex: 1 1 calc(50% - 10px); /* Bir qatorda ikkita input joylashadi */
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
  text-align: left;
  color: #ffffff;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
`;

const Select = styled.select`
  padding: 12px;
  margin-bottom: 20px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-top: 20px;

  align-self: center; /* Markazda joylashish uchun */
  grid-column: span 2; /* 2 ta ustunni o'z ichiga oladi */
  &:hover {
    background-color: #0056b3;
  }
`;

export {
  Container,
  FormContainer,
  Title,
  Form,
  Label,
  Input,
  Select,
  SubmitButton,
  InputContainer,
};
