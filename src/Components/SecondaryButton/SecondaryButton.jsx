import Button from 'react-bootstrap/Button';
import './SecondaryButton.css';
function Secondary() {}
Secondary.Button = function ({ title, clickHandler = () => {}, icon }) {
  return (
    <Button
      variant="secondary"
      className={`secondary-btn shadow ${
        icon ? 'd-flex gap-2 align-items-center' : ''
      }`}
      onClick={clickHandler}
    >
      {title}
      {icon}
    </Button>
  );
};
Secondary.Link = function ({ title, href = '#', icon }) {
  return (
    <a
      href={href}
      className={`btn btn-secondary shadow secondary-btn ${
        icon ? 'd-flex gap-2 align-items-center' : ''
      }`}
    >
      {title}
      {icon}
    </a>
  );
};
export default Secondary;
