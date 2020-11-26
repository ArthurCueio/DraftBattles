import React, { useContext } from "react";
import styled from "styled-components";
import { DraftContext } from "../../context";

const Text = styled.h1`
  text-align: center;
  text-weight: bold;
`;

const Timer = () => {
  const context = useContext(DraftContext);
  return <Text>{context.timer}</Text>;
};

export default Timer;
