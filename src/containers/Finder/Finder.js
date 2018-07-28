import React from "react";

import { Container } from "../../shared";

const Finder = ({
  match: {
    params: { postalCode }
  }
}) => {
  return (
    <Container>
      <h1>Finder</h1>
      <h2>{postalCode}</h2>
    </Container>
  );
};

export default Finder;
