import React, { useState } from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import "./Card.css";

const dummyData = {
  name: "",
  surname: "",
  email: "",
  age: "",
  color: "",
  gender: "",
};

const errorData = {
  name: "",
  surname: "",
  email: "",
  age: "",
  color: "",
};

function Card({ bgColor }) {
  const [fd, setFd] = useState(dummyData);
  const [error, setError] = useState(errorData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleCancel = () => {
    setFd(dummyData);
    setError(errorData);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  const isEmailValid = () => {
    if (/\S+@\S+\.\S+/.test(fd.email)) {
      setError({ ...error, email: "" });
    } else {
      setError({ ...error, email: "Email is invalid" });
    }
  };
  const onlyAlphabets = (string) => {
    return /^[a-zA-Z]+$/.test(string);
  };
  const isString = (string) => {
    return typeof string === "string";
  };

  const isNumber = (number) => {
    return /^[0-9\b]+$/.test(number);
  };

  const isNameValid = () => {
    if (isString(fd.name) && fd.name.length > 0 && onlyAlphabets(fd.name)) {
      setError({ ...error, name: "" });
    } else {
      setError({ ...error, name: "Name is invalid" });
    }
  };
  const isSurnameValid = () => {
    if (
      isString(fd.surname) &&
      fd.surname.length > 0 &&
      onlyAlphabets(fd.surname)
    ) {
      setError({ ...error, surname: "" });
    } else {
      setError({ ...error, surname: "Surname is invalid" });
    }
  };
  const isAgeValid = () => {
    if (isNumber(fd.age) && fd.age > 0) {
      console.log("age is valie");
      setError({ ...error, age: "" });
    } else {
      console.log(isNumber(fd.age));
      setError({ ...error, age: "Age is invalid" });
    }
  };
  const isColorValid = () => {
    if (isString(fd.color) && fd.color.length > 0 && onlyAlphabets(fd.color)) {
      setError({ ...error, color: "" });
    } else {
      setError({ ...error, color: "Color is invalid" });
    }
  };
  const isValid = () => {
    if (
      fd.name.length > 0 &&
      fd.surname.length > 0 &&
      fd.email.length > 0 &&
      fd.age.length > 0 &&
      fd.color.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <div
        className='wrapper-card'
        style={{ backgroundColor: bgColor ? bgColor : "f1f1f1" }}
      >
        <form>
          <Heading text='Heading' primary />
          <Heading text='Sub Heading' />
          <div className='input-fields-container'>
            <Input
              label='Name'
              placeholder='Name'
              type='text'
              id='name'
              value={fd.name}
              onChange={(e) => setFd({ ...fd, name: e.target.value })}
              onBlur={isNameValid}
              error={error.name}
            />
            <Input
              label='Surname'
              placeholder='Surname'
              type='text'
              id='surname'
              value={fd.surname}
              onChange={(e) => setFd({ ...fd, surname: e.target.value })}
              onBlur={isSurnameValid}
              error={error.surname}
            />
            <Input
              label='Email'
              placeholder='Email'
              type='email'
              id='email'
              value={fd.email}
              onChange={(e) => setFd({ ...fd, email: e.target.value })}
              onBlur={isEmailValid}
              error={error.email}
            />
            <Input
              label='age'
              placeholder='Age'
              type='number'
              id='age'
              value={fd.age}
              onChange={(e) => setFd({ ...fd, age: e.target.value })}
              onBlur={isAgeValid}
              error={error.age}
            />
            <Input
              label='Favorite Color'
              placeholder='Favorite Color'
              type='text'
              id='color'
              value={fd.color}
              onChange={(e) => setFd({ ...fd, color: e.target.value })}
              onBlur={isColorValid}
              error={error.color}
            />
            <Input
              label='Male'
              type='radio'
              id='male'
              value='Male'
              onChange={(e) => setFd({ ...fd, gender: e.target.value })}
            />
            <Input
              label='Female'
              type='radio'
              id='female'
              value='female'
              onChange={(e) => setFd({ ...fd, gender: e.target.value })}
            />
            <Input
              label='Would you like to recieve notification?'
              placeholder='Name'
              type='checkbox'
              id='name'
            />
          </div>
        </form>
        <Button
          btnText='Cancel'
          bgColor='#EB1D36'
          paddings='.6rem 1.4rem'
          textColor='white'
          onClick={handleCancel}
        />
        <Button
          btnText='Submit'
          bgColor='#5FD068'
          paddings='.6rem 1.4rem'
          textColor='#F7D716'
          disabled={!isValid()}
          onClick={handleSubmit}
        />
      </div>
      {isSubmitted && (
        <>
          {" "}
          <div
            style={{
              backgroundColor: "#E9D5CA",
              display: "flex",
              padding: "2rem",
              flexDirection: "column",
            }}
          >
            <span>Name: {fd.name}</span>
            <span>Surname: {fd.surname}</span>
            <span>Email: {fd.email}</span>
            <span>Age: {fd.age}</span>
            <span>Favorite Color: {fd.color}</span>
            <span>Genger: {fd.gender}</span>
          </div>
        </>
      )}
    </>
  );
}

export default Card;
