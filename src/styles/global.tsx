import { createGlobalStyle, css, DefaultTheme } from "styled-components";

const style = css<{ theme: DefaultTheme }>`
  .text-center {
    text-align: center;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .primary-color {
    color: #fd6f00;
  }

  html,
  body {
    font-family: "Trebuchet MS", "Poppins", sans-serif;
    width: 90%;
    padding: 0;
    margin: 0 auto;

    background-color: #272727;

    color: white;
  }

  body: {
    overflow: hidden !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h7,
  .h8 {
    margin: 0;
    font-weight: 700;
    line-height: 125%;
  }

  h1 {
    font-size: 61px;
  }

  h2 {
    font-size: 49px;
  }

  h3 {
    font-size: 39px;
  }

  h4 {
    font-size: 31px;
  }

  h5 {
    font-size: 25px;
  }

  h6 {
    font-size: 20px;
  }

  .h7 {
    font-size: 16px;
  }

  .h8 {
    font-size: 14px;
  }

  p,
  .body-1,
  .body-2,
  .body-3,
  .body-4,
  .body-5,
  .body-6 {
    margin: 0;
    font-weight: 400;
    line-height: 150%;
  }

  .body-1 {
    font-size: 25px;
  }

  .body-2 {
    font-weight: 500;
    font-size: 20px;
  }

  .body-3 {
    font-size: 20px;
  }

  p,
  .body-4 {
    font-size: 16px;
  }

  .body-5 {
    font-size: 14px;
  }

  .body-6 {
    font-size: 12px;
  }

  a {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;

    text-decoration: none;
    color: ${({ theme }) => theme.color?.core?.org_600};
  }

  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
  }

  .label-2 {
    font-weight: 400;
  }

  .label-3 {
    font-weight: 500;
    font-size: 14px;
  }

  .label-4 {
    font-weight: 400;
    font-size: 14px;
  }

  .label-5 {
    font-weight: 500;
    font-size: 12px;
  }

  .label-6 {
    font-weight: 400;
    font-size: 12px;
  }

  .label-7 {
    font-weight: 400;
    font-size: 10px;
  }

  .label-8 {
    font-weight: 400;
    font-size: 10px;
  }
`;

export const GlobalStyle = createGlobalStyle`${style}`;
