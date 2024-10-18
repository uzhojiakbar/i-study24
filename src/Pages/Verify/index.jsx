import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVerify } from "../../Hooks/RegisterHook";
import {
  Label,
  Container,
  FormContainer,
  Input,
  InputContainer,
  Title,
  SubmitButton,
  Form,
} from "../Register/styled";
import Navigating from "../../Components/Navbar/Navbar";

const VerificationPage = () => {
  const [loading, setLoading] = useState(false);

  const [verificationCode, setVerificationCode] = useState({
    username: "",
    code: "",
  });

  const { mutate } = useVerify(() => {
    setLoading(1);
    nav("/profile/");
  });
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(1);
    e.preventDefault();
    const requestData = {
      username: verificationCode.username,
      code: verificationCode.code,
    };

    await mutate(requestData);
    setLoading(0);
  };

  const handleChange = (e) => {
    setVerificationCode({
      ...verificationCode,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container className="pt-[80px]">
        <Navigating />
        <FormContainer>
          <Title>Kirishni tasdiqlang</Title>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <Label>
                Username ning kiriting *
                <Input
                  type="text"
                  name="username"
                  value={verificationCode.username}
                  onChange={handleChange}
                  required
                />
              </Label>
            </InputContainer>
            <br />
            <InputContainer>
              <Label>
                Parolni kiriting *
                <Input
                  type="text"
                  name="code"
                  value={verificationCode.code}
                  onChange={handleChange}
                  required
                />
              </Label>
            </InputContainer>
            <SubmitButton type="submit">
              Tasdiqlash va Hisobga kirish
            </SubmitButton>
          </Form>
        </FormContainer>
      </Container>
      {loading && (
        <div className="loaderWindow">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default VerificationPage;
