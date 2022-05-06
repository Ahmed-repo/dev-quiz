import React, { useState } from "react";
import styled from "styled-components";
import TopSectiton from "./TopSectiton";

import BottomSection from "./BottomSection";
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Homepage = () => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <Container>
      <TopSectiton />

      <BottomSection />
    </Container>
  );
};

export default Homepage;
