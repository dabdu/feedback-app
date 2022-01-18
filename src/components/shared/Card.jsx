import PropTypes from "prop-types";
function Card({ children, reverse }) {
  return (
    <>
      {/* Conditional Class */}
      {/* <div className={`card ${reverse && "reverse"}`}>{children}</div> */}
      {/* Conditional Style */}
      <div
        className="card"
        style={{
          backgroundColor: reverse ? "rgba(0,0,0, .7)" : "#fff",
          color: reverse ? "#fff" : "#000",
        }}
      >
        {children}
      </div>
    </>
  );
}
Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  children: PropTypes.node,
  reverse: PropTypes.bool,
};
export default Card;
