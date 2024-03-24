import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Main from '../MainButton/MainButton';
import img1 from '../../images/01.jpg';
import img2 from '../../images/02.jpg';
import img3 from '../../images/03.png';
import './ExploreSection.css';
function ExploreSection() {
  const exploreFoodList = [
    {
      id: 1,
      img: img1,
      title: 'Rainbow Vegetable Sandwich',
      timeTaken: 'Time: 15 - 20 Minutes | Serves: 1',
      oldPrice: '$10.50',
      currentPrice: '$11.70',
    },
    {
      id: 2,
      img: img2,
      title: 'Vegetarian Burger',
      timeTaken: 'Time: 30 - 45 Minutes | Serves: 1',
      oldPrice: '$9.20',
      currentPrice: '$10.50',
    },
    {
      id: 3,
      img: img3,
      title: 'Raspberry Stuffed French Toast',
      timeTaken: 'Time: 10 - 15 Minutes | Serves: 1',
      oldPrice: '$12.50',
      currentPrice: '$13.20',
    },
  ];
  return (
    <div className="explore" id="explore">
      <Container>
        <div className="explore-intro text-center mx-auto mb-5">
          <h3 className="explore-heading display-4 mb-4">Explore Our Foods</h3>
          <p className="explore-desc lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus. Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove.
          </p>
        </div>
        <Row>
          {exploreFoodList.map((food) => {
            return (
              <Col lg="4" className="gy-3 gy-lg-0" key={food.id}>
                <Card className="border-0 h-100">
                  <Card.Img variant="top" src={food.img} className="rounded" />
                  <Card.Body className="product-card-body">
                    <Card.Title>{food.title}</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">
                      {food.timeTaken}
                    </Card.Subtitle>
                    <Card.Text>
                      <span className="prices d-flex gap-2 fs-4">
                        <span className="current-price fw-bold">
                          {food.currentPrice}
                        </span>
                        <span className="old-price text-decoration-line-through text-secondary">
                          {food.oldPrice}
                        </span>
                      </span>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="pt-3">
                    <Main.Link title="Order Now" />
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
export default ExploreSection;
