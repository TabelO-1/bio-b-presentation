import React from "react";
import Container from "react-bootstrap/Container";

class Sources extends React.Component {
  render() {
    return (
      <Container>
        <h1>
          <bold>Sources</bold>
        </h1>
        <h5>
          Disclaimer: I take no credit for anything put on this website, all
          work is credited below:
        </h5>
        <ul>
          <li>
            https://www.mayoclinic.org/diseases-conditions/depression/in-depth/depression/art-20047725
          </li>
          <li>https://www.healthline.com/health/depression/genetic</li>
          <li>https://med.stanford.edu/depressiongenetics/mddandgenes.html</li>
          <li>
            https://pulsetms.com/depression-issues/depression-and-environment/
          </li>
          <li>
            https://www.healthline.com/health/depression/lifestyle-changes-overview#healthy-eating
          </li>
        </ul>
      </Container>
    );
  }
}

export default Sources;
