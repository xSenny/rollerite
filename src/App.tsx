import "./App.css";
import ChooseUs from "./components/ChooseUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Motives from "./components/Motives";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        <div className="z-[10]">
          <div className="px-10">
            <div className="absolute -z-[2] w-[1110px] h-[927px] left-0 top-0 transform -translate-x-[517px] -translate-y-[257px] gradient" />
            <div className="absolute -z-[2] w-[1110px] h-[927px] right-0 top-0 transform translate-x-[517px] translate-y-[101px] gradient" />
            <Header />
            <Hero />
            <Motives />
            <ChooseUs />
            <Reviews />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
