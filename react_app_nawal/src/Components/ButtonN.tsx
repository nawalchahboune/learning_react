import React, { ReactNode } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
// const StlButton = styled.button`
//   padding: 10;
// `;

interface Props {
  content: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
}
const ButtonN = ({ content, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {content}
    </button>
  );
};

export default ButtonN;
