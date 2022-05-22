import axios from "axios";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import Navbar from "../navbar/Navbar";
const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  background: var(--secondary-color);
  height: 100%;
  margin: 0;
  color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
const Alerts = styled(motion.button)`
  display: block;
  background-color: #06d6a0;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const Button = styled.button`
  color: #fcfcfc;
  width: 150px;
  height: 45px;
  background: var(--main-bg);

  font-family: "Roboto";
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 300;
  border: 1px solid whitesmoke;
  border-radius: 8px;
  text-transform: capitalize;

  &:hover {
    transform: scale(1.1, 1.1);
    opacity: 2;
    transition: all 0.6s ease-in-out;
  }
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const StyledTitle = styled.h2`
  color: inherit;
  font-weight: 400;
  height: 40px;
  margin: 0 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledWrapperLabel = styled.div`
  height: inherit;
  width: 48%;
  display: flex;
  flex-direction: column;
`;

const StyledWrapper = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const initalState = {
  name: "",
  lastname: "",
  email: "",
  message: "",
  gender: "",
};

const Contact = () => {
  const [data, setData] = useState(initalState);
  const [error, setError] = useState("");
  const [Message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(data);

    for (let key in data) {
      if (data[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError("");
    // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // const test = regex.test(state.email);
    // console.log(test);
    axios
      .post("http://localhost:3002/contact", data)
      .then((res) => {
        if (true) {
          console.log("message send");
        }
      }, resetForm())
      .catch(() => {
        console.log("message not sent");
      });
    console.log("Succeeded!!!");
  };

  const resetForm = () => {
    setData(initalState);
    setTimeout(() => {
      setMessage(true);
    }, 1000);
    setTimeout(() => {
      setMessage(false);
    }, 4000);
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setData((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <Navbar />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTitle>
            Get in touch{" "}
            {Message && (
              <Alerts
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 1, type: "tween" }}
                exit={{ delay: 1.5, duration: 1, type: "tween" }}
              >
                Your Message was Successfully sended.
              </Alerts>
            )}{" "}
          </StyledTitle>

          <StyledWrapper>
            <StyledWrapperLabel>
              <label htmlFor="name">First Name</label>

              <StyledInput
                type="text"
                name="name"
                value={data.name}
                onChange={handleInput}
              />
            </StyledWrapperLabel>
            <StyledWrapperLabel>
              <label htmlFor="lastname">Last Name</label>
              <StyledInput
                type="text"
                name="lastname"
                value={data.lastname}
                onChange={handleInput}
              />
            </StyledWrapperLabel>
          </StyledWrapper>

          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={data.email}
            onChange={handleInput}
          />
          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                checked={data.gender === "female"}
                onChange={handleInput}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="male"
                name="gender"
                checked={data.gender === "male"}
                onChange={handleInput}
              />
              Male
            </label>
          </StyledFieldset>
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={data.message}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}

          <Button>Send Message</Button>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default Contact;
