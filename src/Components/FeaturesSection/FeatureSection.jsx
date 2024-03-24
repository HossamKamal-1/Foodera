import Container from 'react-bootstrap/esm/Container';
import './FeatureSection.css';
import Main from '../MainButton/MainButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import food from '../../images/2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
function FeatureSection() {
  const featuresList = [
    { id: 1, title: 'Etiam sed dolor ac diam volutpat.' },
    { id: 2, title: 'Erat volutpat aliquet imperdiet.' },
    { id: 3, title: 'purus a odio finibus bibendum.' },
  ];
  return (
    <div className="features py-5" id="features">
      <Container>
        <Row className="align-items-center justify-content-center gy-3 gy-lg-0">
          <Col lg={5} xl={4}>
            <div className="features-intro text-center text-lg-start">
              <h2 className="features-heading mb-3">
                We make everything by hand with the best possible ingredients.
              </h2>
              <p className="lead mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul className="features-list list-unstyled mb-4 mx-auto mx-lg-0">
                {featuresList.map((feature) => {
                  return (
                    <li
                      className="feature-item ps-4 position-relative mb-3 text-secondary"
                      key={feature.id}
                    >
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="feature-icon fa-lg  fw-bold position-absolute start-0 top-50"
                      />
                      {feature.title}
                    </li>
                  );
                })}
              </ul>
              <Main.Link title="Learn More" />
            </div>
          </Col>
          <Col lg={7} xl={6}>
            <div className="features-img-container d-none d-lg-block">
              <img src={food} alt="food" className="img-fluid rounded" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default FeatureSection;
