import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router} from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import { useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import React from "react";
import styled, { css } from "styled-components";


const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .min(10, "Số điện thoại tối thiểu 10 ký tự"),
  otp: yup
    .string()
    .required("Vui lòng nhập OTP")
    .min(6, "Mã OTP tối thiểu 6 ký tự")
});

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 500px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;
const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CardLoginForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 10px;
`

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  background-color: #fff;
  max-height: 50px;
  padding-left: 10px;
  border-radius: 35px;
  &:focus {
    border-bottom-color: #FFDE59;
    outline: 0;
  }
`;





const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: black;
  background-color: #FFDE59;
  border: .1rem gray solid;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;

const CardMenu = styled.ul`
list-style: none;
`

const CardDoc = styled.h1`
  display: inline-block;
  font-size: 10px;
  text-decoration: none;
  color: #aaa;
`;

const Error = styled.span`
color: #ffa4a4
`


export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onLoginSubmit = (data) => {
    console.log(data);
  };


  return (
      <CardWrapper>
        <CardHeader>
          <CardHeading>Nhập số điện thoại tại đây để nhận mã OTP</CardHeading>
        </CardHeader>
        <CardLoginForm onSubmit={handleSubmit(onLoginSubmit)}>
          <CardBody>
          <CardFieldset>
            <CardInput id="phone" placeholder="Số điện thoại" type="text" name="phone"{...register("phone")} required />
            {errors.phone && <Error>{errors.phone?.message}</Error>}
          </CardFieldset>
          

          <CardFieldset>
            <CardInput id="otp" placeholder="Mã OTP" type="text" name="otp"{...register("otp")} required/>
            {errors.otp && <Error>{errors.otp?.message}</Error>}
          </CardFieldset>

          <CardFieldset>
            <CardButton type="submit">Xác thực </CardButton>
          </CardFieldset>

          <CardFieldset>
            <CardMenu>
              <li>
                <a href="/"><CardLink>Gửi lại mã OTP</CardLink></a>
              </li>
              <li><CardDoc> hoặc </CardDoc></li>
              <li>
                <a href="/signup"><CardLink> Đăng kí tại đây</CardLink></a>
              </li>
            </CardMenu>
          </CardFieldset>
        </CardBody>
        </CardLoginForm>
        
      </CardWrapper>

  );
}
