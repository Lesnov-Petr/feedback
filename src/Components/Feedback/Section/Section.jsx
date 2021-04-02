import PropTypes from "prop-types";
import "./section.scss";

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className="feedback__title">{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
