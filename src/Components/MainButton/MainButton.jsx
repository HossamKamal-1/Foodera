import Button from 'react-bootstrap/Button';
import './MainButton.css';
function Main() {}
Main.Button = function ({ title, clickHandler = () => {}, icon, className }) {
  return (
    <Button
      variant="primary"
      className={`main-btn ${
        icon ? 'd-flex gap-2 align-items-center' : ''
      } ${className}`}
      onClick={clickHandler}
    >
      {title}
      {icon}
    </Button>
  );
};
Main.Link = function ({ title, href = '#', icon }) {
  return (
    <a
      href={href}
      className={`btn btn-primary main-btn ${
        icon ? 'd-flex gap-2 align-items-center' : ''
      }`}
    >
      {title}
      {icon}
    </a>
  );
};

export default Main;
