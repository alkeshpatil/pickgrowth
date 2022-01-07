import Navbar from "../components/home/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Navbar>
      <Component {...pageProps} />{" "}
    </Navbar>
  );
}

export default MyApp;
