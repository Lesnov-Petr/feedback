import PropTypes from "prop-types";
import "./index.scss";

const Notification = ({ message }) => (
  <p className="message">No feedback given &#128530;</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
