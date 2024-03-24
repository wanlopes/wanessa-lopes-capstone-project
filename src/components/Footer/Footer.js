import "./Footer.scss";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__container__detail">
          <p className="footer__container__detail__text">
            FilmFlow: Explore Cinema Together
          </p>
        </div>
        <div className="footer__container__detail">
          <p className="footer__container__detail__text">
            © 2024 Wanessa Lopes. All rights reserved.
          </p>
        </div>
        <div className="footer__container__detail">
          <p className="footer__container__detail__text">
            Privacy Policy | Terms of Service | Version 1.0
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
