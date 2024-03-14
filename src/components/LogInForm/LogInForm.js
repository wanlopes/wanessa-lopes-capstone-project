import "./LogInForm.scss";
import Logo from "../../assets/FilmFlow.png";

function LogInForm () {
    return (
      <section>
        <div className="login">
          <div className="login__logo">
            <img className="login__logo__img" src={Logo} alt="logo_image" />
          </div>
          <form className="login__form">
            <label></label>
            <input type="text" placeholder="Username" />
            <label></label>
            <input type="text" placeholder="Password" />
            <button className="login__form__button">Login</button>
            <button className="login__form__button">Create an Account</button>
          </form>
        </div>
      </section>
    );
}

export default LogInForm;