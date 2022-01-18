function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    textColor: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "FeedBack App",
  bgColor: "rgba(0,0,0, .6)",
  textColor: "#ff6c00",
};

export default Header;
