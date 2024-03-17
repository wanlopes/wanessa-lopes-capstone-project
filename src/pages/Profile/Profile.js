import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WatchList from "../../components/WatchList/WatchList";
import FavoriteMovies from "../../components/FavoriteMovies/FavoriteMovies";
import WatchedList from "../../components/WatchedMovies/WatchedMovies";

// TODO: Receber o estado do USER por prop
function Profile({user}) {
  //TODO: Usar o ID do usuário para fazer o get dos movies por usuário ID
  return (
    <section>
      <Header user={user}/>
      {
        //TODO: Sugiro não usar multiplos componentes
        /* results.map(r
                if r.watch 
                 h`1`
                else if r.FavoriteMovies
            ) */
      }
      <FavoriteMovies />
      <WatchList />
      <WatchedList />
      <Footer />
    </section>
  );
}

export default Profile;
