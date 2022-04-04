import React, { useState } from "react";
import styled from "styled-components";
import TopSectiton from "./TopSectiton";

import MidSectiton from "./MidSection";
import Footer from "./Footer";
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Homepage = () => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <Container>
      <TopSectiton />
      <MidSectiton />
      <TopSectiton />
      <Footer />
    </Container>
  );
};

export default Homepage;
