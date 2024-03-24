import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

function FAQSection() {
  const faqList = [
    {
      id: 1,
      question: 'Is Foodera Bread really baked fresh each day?',
      answer:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.',
    },
    {
      id: 2,
      question: 'Do you bake breads containing animal fats or products?',
      answer:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.',
    },
    {
      id: 3,
      question: 'Can I order your products online?',
      answer:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.',
    },
    {
      id: 4,
      question: 'When are you opening a shop near me?',
      answer:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.',
    },
  ];
  return (
    <div className="Faq py-5" id="faq">
      <Container>
        <h4 className="h3 text-center mb-5">Frequently Asked Questions</h4>
        <div className="faq-content">
          <Row xs={'auto'} lg={2} className="gy-3 gy-lg-0">
            {faqList.map((faq) => {
              return (
                <Col key={faq.id}>
                  <div className="faq-item">
                    <p className="faq-question text-black fw-bold fs-5 mb-2">
                      <span className="text-primary fw-normal me-2 fs-3">
                        ~
                      </span>
                      {faq.question}
                    </p>
                    <p className="faq-answer lead text-secondary">
                      {faq.answer}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}
export default FAQSection;
