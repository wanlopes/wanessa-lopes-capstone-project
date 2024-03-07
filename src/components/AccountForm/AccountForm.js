function AccountForm() {
    return (
      <section>
        <div>
          <form>
            <label></label>
            <input type="text" placeholder="Username" />
            <label></label>
            <input type="text" placeholder="Email" />
            <label></label>
            <input type="text" placeholder="Password" />
            <label></label>
            <input type="text" placeholder="Confirm Password" />
            <button>Register</button>
          </form>
        </div>
      </section>
    );
}

export default AccountForm;