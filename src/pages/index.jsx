import Navigation from "../components/navigation";
import Footer from "../components/footer";
import MainHero from "../components/mainhero";
import Organized from "../components/organized";
import About from "../components/about";
import Categories from "../components/categories";
import BackToTop from "../components/backtotop";

// Content
// import MainHero from "../components/mainhero";
// import Category from "../components/category";
// import Organized from "../components/organized";
// import About from "../components/about";
// import Backtotop from "../components/back-to-top";

function Home() {
    return (
        <>
        <Navigation />
        <MainHero />
        <Organized />
        <About />
        <Categories />
        <BackToTop />
        <Footer />
    </>
    )
}

export default Home;