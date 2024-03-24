// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import LogInForm from "../../components/LogInForm/LogInForm";

function LogInPage({setUser}) {
  return (
    <section>
        <LogInForm setUser={setUser}/>
    </section>
  );
}

export default LogInPage;
