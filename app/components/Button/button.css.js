import styled, { css } from "styled-components";

export const Button = styled.button`
  position: relative;
  border-radius: 0.25rem;
  transition: opacity 0.3s;
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.outline
      ? css`
          background-color: #ffffff;
          border: 2px solid #000000;
          color: #000000;
        `
      : css`
          background-color: #ff0066;
          border: 2px solid #ff0066;
          color: #ffffff;
        `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.7;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.small
      ? css`
          font-size: 0.75rem;
          padding: 0.25rem;
          font-weight: lighter;
          border: 1px solid;
        `
      : css`
          font-size: 1rem;
          padding: 0.75rem;
          font-weight: bold;
          border: 2px solid;
        `}
`;

export const Icon = styled.div`
  position: absolute;
`;
