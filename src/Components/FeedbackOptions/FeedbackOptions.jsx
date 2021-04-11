import "./index.scss";

const FeedbackOptions = ({ onIncrement, options }) => {
  return (
    <div className="controls">
      {options.map((option) => (
        <button className="btn" type="button" onClick={onIncrement}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
