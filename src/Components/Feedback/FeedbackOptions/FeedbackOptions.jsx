import "./index.scss";

const FeedbackOptions = ({ onIncrement }) => {
  return (
    <div className="controls">
      <button className="btn" type="button" onClick={onIncrement}>
        Good
      </button>
      <button className="btn" type="button" onClick={onIncrement}>
        Neutral
      </button>
      <button className="btn" type="button" onClick={onIncrement}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
