import React, { useState, Suspense, lazy } from "react";
import styled from "styled-components";
import TopSectiton from "./TopSectiton";

const BottomSection = lazy(() => import("./BottomSection"));
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Homepage = () => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <Container>
      <TopSectiton />
      <Suspense fallback={<div>Loaging</div>}>
        <BottomSection />
      </Suspense>
    </Container>
  );
};

export default Homepage;
