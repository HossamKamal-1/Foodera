import Container from 'react-bootstrap/esm/Container';
import Main from '../MainButton/MainButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import food from '../../images/4.jpg';

function AboutSection() {
  return (
    <div className="about py-5" id="about">
      <Container>
        <Row className="align-items-center gy-3 gy-lg-0">
          <Col lg={6}>
            <div className="about-img-container">
              <img src={food} alt="food" className="img-fluid rounded" />
            </div>
          </Col>
          <Col lg={4}>
            <div className="about-intro text-center text-lg-start px-2">
              <h2 className="about-heading">
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p className="lead mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <Main.Link title="Learn More" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default AboutSection;
