import Container from 'react-bootstrap/esm/Container';
import './OurStory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
function OurStory() {
  return (
    <div className="our-story" id="our-story">
      <Container>
        <div className="our-story-content text-center mx-auto">
          <h4 className="our-story-title display-6 fw-normal">
            When a man's stomach is full it makes no difference whether he is
            rich or poor.
          </h4>
          <p className="our-story-desc text-secondary lh-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </p>
          <a
            href="#home"
            className="our-story-link text-decoration-none text-black"
          >
            <FontAwesomeIcon icon={faPlay} className="me-1" />
            Watch Our Story
          </a>
        </div>
      </Container>
    </div>
  );
}
export default OurStory;
