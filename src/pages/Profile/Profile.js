import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WatchList from "../../components/WatchList/WatchList";
import FavoriteMovies from "../../components/FavoriteMovies/FavoriteMovies";
import WatchedList from "../../components/WatchedMovies/WatchedMovies";

function Profile  () {
    return (
        <section>
            <Header/>
            {/* results.map(r
                if r.watch 
                 h`1`
                else if r.FavoriteMovies
            ) */}
            <FavoriteMovies/>
            <WatchList/>
            <WatchedList/>
            <Footer/>
        </section>
    );
}

export default Profile;