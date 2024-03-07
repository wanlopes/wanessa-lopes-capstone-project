// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import WatchList from "../../components/WatchList/WatchList";
import FavoriteMovies from "../../components/FavoriteMovies/FavoriteMovies";
import WatchedList from "../../components/WatchedMovies/WatchedMovies";

function Profile  () {
    return (
        <section>
            <FavoriteMovies/>
            <WatchList/>
            <WatchedList/>
        </section>
    );
}

export default Profile;