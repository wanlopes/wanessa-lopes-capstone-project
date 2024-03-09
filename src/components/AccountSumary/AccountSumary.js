import "./AccountSumary.scss";

function AccountSumary() {
    return (
      <div className="account">
        <div className="account__image">
          <div className="account__image__placeholder"></div>
        </div>
        <div className="account__username">
          <p className="account__username__placeholder">Username</p>
        </div>
      </div>
    );
}

export default AccountSumary;
