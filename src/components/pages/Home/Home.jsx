import { Link } from "react-router-dom";
import './Home.scss'

const Home = () => {
  return ( 
    <section className="home_section">
    <h1>Home</h1>
    <Link to={"/gallery"}>Welcome to my gallery</Link>
    </section>
  );
}

export default Home;