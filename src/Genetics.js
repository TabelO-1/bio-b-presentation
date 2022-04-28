import React from "react";
import Container from "react-bootstrap/Container";

class Genetics extends React.Component {
  render() {
    return (
      <Container>
        <h1>
          <bold>Genomics and Epigenetics</bold>
        </h1>
        <ul>
          <li>
            Genes:
            <p>
              The chromosome 3p25-26 was found in more than 800 families with
              recurring depression.
            </p>
          </li>
          <li>
            Inheirtance:
            <p>
              If a family member develops depression you are 2-3 more times
              likely to develop it as well.
            </p>
          </li>
          <li>
            Ancestry:
            <p>
              If you have a family history of depression you more likely to
              develop depression.
            </p>
          </li>
          <li>
            Epigentics/Environment:
            <p>
              Chemical pollutants, natural disasters, and non-chemical
              environmental stress are all environmental factors that affect
              depression.
            </p>
          </li>
        </ul>
      </Container>
    );
  }
}

export default Genetics;
