import React, { useState } from "react";
import {
  Container,
  FormContainer,
  Title,
  InputContainer,
  Label,
  Input,
  SubmitButton,
  Form,
} from "../Register/styled";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../../Hooks/RegisterHook";
import toast from "react-hot-toast";
import { SiteTexts } from "../../Utils/texts";
import Navigating from "../../Components/Navbar/Navbar";

function Login() {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const nav = useNavigate();

  const { mutate, isLoading } = useSignIn(
    () => {
      nav("/profile/"); // Muvaffaqiyatli bo'lganda navigatsiya qilish
    },
    (error) => {
      if (
        error?.response?.data?.non_field_errors[0] ===
        "Invalid credentials or unverified account."
      ) {
        toast.error("Hisob topilmadi.");
      } else {
        toast.error(error.response?.data?.detail || "Qandaydur xatolik."); // Xatoni ko'rsatish
      }
    }
  );

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const requestData = {
      username: loginData.username || "",
      password: loginData.password || "",
    };

    try {
      await mutate(requestData); // Just call login
    } catch (error) {
      setLoading(0);
      console.error("Login error: ", error);
    }
  };

  return (
    <>
      <Container className="pt-[80px]">
        <Navigating />
        <FormContainer>
          <Title>{SiteTexts.signinTextLong}</Title>
          <Form onSubmit={onLogin}>
            <InputContainer>
              <Label>
                {SiteTexts.enterUsername}
                <Input
                  type="text"
                  name="username"
                  maxLength="254"
                  required
                  value={loginData.username}
                  onChange={handleChange}
                />
              </Label>
            </InputContainer>
            <br />
            <InputContainer>
              <Label>
                {SiteTexts.enterPass}
                <Input
                  type="password"
                  name="password"
                  maxLength="128"
                  minLength="1"
                  required
                  value={loginData.password}
                  onChange={handleChange}
                />
              </Label>
            </InputContainer>
            <SubmitButton type="submit" disabled={isLoading}>
              {SiteTexts.signInText}
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
}

export default Login;
