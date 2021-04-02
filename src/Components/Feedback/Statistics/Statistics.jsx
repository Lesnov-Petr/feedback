import PropTypes from "prop-types";
import NoFeedback from "../NoFeedback/NoFeedback";
import "./index.scss";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total === 0 ? (
    <NoFeedback />
  ) : (
    <>
      <p className="evaluation">Good: {good}</p>
      <p className="evaluation">Neutral: {neutral}</p>
      <p className="evaluation">Bad: {bad}</p>
      <p className="evaluation">Total: {total}</p>
      <p className="evaluation">Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
