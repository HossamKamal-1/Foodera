import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/Form';
import Main from '../MainButton/MainButton';
import './SubscribeSection.css';

function SubscribeSection() {
  return (
    <div className="subscribe" id="subscribe">
      <Container>
        <div className="d-flex justify-content-center">
          <div className="subscribe-content">
            <div className="text-center">
              <h3 className="subscribe-heading h2">
                Hurry up! Subscribe our newsletter and get 25% Off
              </h3>
              <p className="subscribe-desc text-secondary">
                Limited time offer for this month. No credit card required.
              </p>
            </div>

            <Form>
              <Stack
                direction="horizontal"
                gap="3"
                className="subscribe-form-stack align-items-stretch flex-wrap  flex-md-nowrap justify-content-center"
              >
                <Form.Control className="w-75" placeholder="Email Address" />
                <Main.Button title="Subscribe" />
              </Stack>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default SubscribeSection;
