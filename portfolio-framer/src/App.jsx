import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Parallax from "./Components/Parallax/Parallax";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/contacts/Contact"
import Services1 from "./Components/Services/Services1"

import image5 from '../src/assets/image5.png'
import image6 from '../src/assets/image6.png';
import image7 from '../src/assets/image7.png';

function App() {

  const items = [
    {
      id: 1,
      title: "FreshFinds",
      img: image7,
      desc: "React eCommerce project features a dynamic shopping cart, product listings with detailed views, and a responsive design. It uses React Router for navigation and link route parameters.",
      link:"https://project1-theta-tan.vercel.app/",
    },
    {
      id: 2,
      title: "Cryptoverse",
      img: image6,
      desc: "Cryptoverse project integrates CoinGecko API for real-time cryptocurrency data, including coin names and exchange information. It features a 3D coin model using Three.js for an immersive user experience. The application also utilizes Chart.js for visualizing cryptocurrency data, offering interactive charts to track price trends and market movements. With robust search functionality and dynamic updates, the project provides an engaging and informative platform for exploring the world of cryptocurrencies.",
      link:"https://project3-phi.vercel.app/",
    },
    {
      id: 3,
      title: "VideoPlatform",
      img: image5,
      desc: "video platform app leverages RapidAPI for video and channel search functionality. It features nested, infinite commenting, allowing users to engage in extended discussions. The platform supports dynamic video content with real-time updates, enhancing user interaction. The nested comment system offers a seamless experience for conversations, making it easy for users to participate and follow discussions.",
      link:"https://project4-chi-black.vercel.app/",
    },
    {
      id: 4,
      title: "Weather",
      img: image7,
      desc: "weather app integrates a weather API for real-time updates and forecasts. It includes a search functionality allowing users to look up weather information for different locations. The app provides current conditions, forecasts, and dynamically updates its interface based on user queries, delivering accurate and timely weather data for any place searched.",
      link:"https://project4-chi-black.vercel.app/",
    },
  ];



  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="services">
        <Parallax type="services" />
      </section>
      <section><Services1/></section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio items={items} />
      <section id="Contact">
       <Contact/>
        </section>
    </>
  );
}

export default App;
