import React from "react";
import Container from "react-bootstrap/Container";

class Research extends React.Component {
  render() {
    return (
      <Container>
        <h1>
          <bold>Genomics and Epigenetics</bold>
        </h1>
        <ul>
          <li>
            Take Anit-Depressants:
            <p>
              In general, depression is caused by an imbalance in brain
              chemistry. Important neurotransmitters such as dopamine and
              serotonin may not be produced in enough abundance in the human
              brain. Depression can be treated on a pharmacological level, where
              medications are introduced, and these drugs can help restore the
              correct levels of neurotransmitters in the brain.
            </p>
          </li>
          <li>
            Therapy:
            <p>
              Talk therapy aims to address these negative and harmful thinking
              patterns in patients.{" "}
            </p>
          </li>
          <li>
            Diet:
            <p>
              Eating healthy is good for your body and will help your mood
              overall. The easiest way to improve your diet is to cut out junk
              food. Avoid foods high in refined sugar and foods packed with
              saturated fats. Incorporate healthy foods into your diet,
              including:
              <ul>
                <li>
                  Fatty Acids
                  <ul>
                    <li>Fish</li>
                    <li>Nuts</li>
                    <li>Fresh Fruit and Vegetables</li>
                    <li>Olive Oil</li>
                  </ul>
                </li>
                <li>
                  Amino Acids
                  <ul>
                    <li>Meat</li>
                    <li>Diary Products</li>
                    <li>Certain Fruits and Vegetables</li>
                  </ul>
                </li>
                <li>
                  Complex Carbohydrates
                  <ul>
                    <li>Whole Grains</li>
                    <li>Legumes</li>
                    <li>Vegetables, such as spinach and brocoli</li>
                    <li>Fruits, such as oranges and pears</li>
                  </ul>
                </li>
              </ul>
            </p>
          </li>
          <li>Exercise:</li>
          <p>
            Exercise increases your body’s production of natural
            antidepressants. According to the Mayo Clinic, exercising for 30
            minutes a day, three to five days a week, can help alleviate
            depression without the use of medication. It can help:
            <ul>
            <li>Reduce Stress</li>
            <li>Improve Mood</li>
            <li>Boost Self-Esteem</li>
            <li>Provide Restful Sleep</li>
            </ul>
          </p>
        </ul>
      </Container>
    );
  }
}

export default Research;
