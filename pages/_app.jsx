import Navbar from "../components/home/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="scroll-smooth">

    <Navbar>
      <Component {...pageProps} />
    </Navbar>
    </div>
  );
}

export default MyApp;
