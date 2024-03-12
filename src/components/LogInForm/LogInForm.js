import "./LogInForm.scss";

function LogInForm () {
    return (
      <section>
        <div className="login">
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