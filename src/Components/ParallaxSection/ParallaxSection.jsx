import Container from 'react-bootstrap/esm/Container';
import Main from '../MainButton/MainButton';
import './ParallaxSection.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function ParallaxSection() {
  return (
    <div className="parallax" id="parallax">
      <Container>
        <Row className="z-3 position-relative gy-2 gy-lg-0 text-center text-lg-start">
          <Col lg="7">
            <p className="h3 fw-bold text-white">
              Baked fresh daily by bakers with passion.
            </p>
          </Col>
          <Col>
            <Main.Link title="learn more" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ParallaxSection;
