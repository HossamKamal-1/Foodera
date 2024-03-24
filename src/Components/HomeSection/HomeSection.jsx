import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/Stack';
import './HomeSection.css';
import Main from '../MainButton/MainButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Secondary from '../SecondaryButton/SecondaryButton';

function HomeSection() {
  return (
    <div className="home" id="home">
      <Container>
        <div className="home-intro">
          <h1 className="intro-heading display-3 fw-bold">
            Good food choices are good investments.
          </h1>
          <p className="lead text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum amet leo.
          </p>
          <Stack direction="horizontal" gap={3} className='flex-wrap justify-content-center justify-content-sm-start'>
            <Main.Link
              title="Order Now"
              icon={<FontAwesomeIcon icon={faCartShopping} />}
            />
            <Secondary.Link
              title="Order Now"
              icon={<FontAwesomeIcon icon={faChevronRight} />}
            />
          </Stack>
        </div>
      </Container>
    </div>
  );
}
export default HomeSection;
