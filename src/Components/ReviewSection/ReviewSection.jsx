import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack';
import Carousel from 'react-bootstrap/Carousel';
import avatar1 from '../../images/avatar.jpg';
import avatar2 from '../../images/avatar2.jpg';
import './ReviewSection.css';
function ReviewSection() {
  const testimonialsList = [
    {
      id: 1,
      reviewerIdentity: 'Johnthan Doe - UX Designer',
      avatarImage: avatar2,
      reviewText:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia.',
    },
    {
      id: 2,
      reviewerIdentity: 'Maccy Doe - Front End',
      avatarImage: avatar1,
      reviewText:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.',
    },
    {
      id: 3,
      reviewerIdentity: 'Maccy Doe - Front End',
      avatarImage: avatar1,
      reviewText:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.',
    },
  ];
  return (
    <div className="review py-5 bg-primary" id="review">
      <Container>
        <h4 className="review-tite mb-5 text-center h2 text-white">
          Testimonials
        </h4>
        <Carousel
          className="carousel-wrapper mx-auto"
          controls={false}
          touch={true}
        >
          {testimonialsList.map((testimonial) => {
            return (
              <Carousel.Item key={testimonial.id}>
                <Stack
                  direction="vertical"
                  className="align-items-center justify-content-center gap-3 mx-2 review-item bg-white rounded-3 py-5 px-4"
                >
                  <div className="avatar">
                    <img
                      src={testimonial.avatarImage}
                      alt="person avatar"
                      className="testimonial-review-img rounded-circle"
                    />
                  </div>
                  <q className="text-center lead text-black">{testimonial.reviewText}</q>
                  <span className="text-primary fw-bold">
                    {testimonial.reviewerIdentity}
                  </span>
                </Stack>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
}
export default ReviewSection;
