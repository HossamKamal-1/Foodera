import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
function ScrollTopButton({ show }) {
  function scrollToTop() {
    window.scrollTo({ top: 0 });
  }
  return (
    <>
      <style>
        {`
        .scroll-top-btn {
            --bs-btn-bg: var(--main-color);
            --bs-btn-color: #fff;
            --bs-btn-border-color: var(--main-color);
            --bs-btn-hover-color: var(--main-color);
            --bs-btn-hover-bg: #fff;
            --bs-btn-hover-border-color: var(--main-color);
            --bs-btn-focus-shadow-rgb: var(--main-color);
            --bs-btn-active-color: var(--main-color);
            --bs-btn-active-bg: #fff;
            --bs-btn-active-border-color: var(--main-color);
            --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
            bottom: 15px;
            right: 15px;
            border: 1px solid white;
            transition:0.3s;
        }
        .scroll-top-btn.hide {
          bottom: -40px;
          pointer-events:none;
        }
        [data-bs-theme=dark] .scroll-top-btn {
          --bs-btn-bg: var(--main-dark-color);
          --bs-btn-border-color: var(--main-dark-color);
          --bs-btn-hover-bg: var(--main-dark-color);
        }
        `}
      </style>
      <Button
        className={`scroll-top-btn position-fixed z-3 ${
          show ? 'visible' : 'hide'
        } `}
        onClick={() => {
          scrollToTop();
        }}
      >
        <FontAwesomeIcon icon={faCircleChevronUp} size="lg" />
      </Button>
    </>
  );
}
export default ScrollTopButton;
