import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Stats() {
  const statsList = [
    { id: 1, count: '1287+', subject: 'SAVINGS' },
    { id: 2, count: '5786+', subject: 'PHOTOS' },
    { id: 3, count: '1440+', subject: 'ROCKETS' },
    { id: 4, count: '7110+', subject: 'GLOBES' },
  ];
  return (
    <>
      <style>
        {`
          .stat-item-subject {
            letter-spacing:1.5px;
          }
          [data-bs-theme=dark] .stats {
            background-color: var(--main-dark-color) !important
          }
        `}
      </style>
      <div className="stats py-4 bg-primary">
        <Container>
          <Row xs={1} sm={2} md={4} className="gy-2 gy-md-0">
            {statsList.map((stat) => {
              return (
                <Col key={stat.id}>
                  <div className="stat-item text-white text-center">
                    <div className="mb-2 fs-1 fw-bold ">{stat.count}</div>
                    <span className="fw-medium stat-item-subject">
                      {stat.subject}
                    </span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Stats;
