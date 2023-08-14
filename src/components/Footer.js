import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Ithvaraa</h1>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">changelog</a>
          <a href="/">changelog</a>
          <a href="/">changelog</a>
        </div>
        <div>
          <h4>Project</h4>
          <a href="/">changelog</a>
          <a href="/">changelog</a>
          <a href="/">changelog</a>
        </div>
        <div>
          <h4>Project</h4>
          <a href="/">changelog</a>
          <a href="/">changelog</a>
          <a href="/">changelog</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
