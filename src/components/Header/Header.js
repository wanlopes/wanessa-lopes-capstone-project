import SearchBar from "../SearchBar/SearchBar";
import AccountSumary from "../AccountSumary/AccountSumary";

function Header () {
    return (
        <section>
            <h1>Logo</h1>
            <SearchBar/>
            <AccountSumary/>
        </section>
    )
}

export default Header;