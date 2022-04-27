import React from "react";
import Container from "react-bootstrap/Container";

class Audience extends React.Component {
  render() {
    return (
      <Container>
        <h1>Target Audience: <bold>Women</bold></h1>
        <ul>
          <li>Puberty:</li>
          <li>Pregnant:</li>
          <li>Postpartum depression:</li>
          <li>Life Circumstance and Culture:</li>
        </ul>
      </Container>
    );
  }
}

export default Audience;
