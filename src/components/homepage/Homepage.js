import React, { useState } from "react";
import styled from "styled-components";
import TopSectiton from "./TopSectiton";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Homepage = () => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <Container>
      <TopSectiton />
    </Container>
  );
};

export default Homepage;
