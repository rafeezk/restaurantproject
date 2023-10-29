import AboutPage from "./AboutPage"
import CountryPage from "./CountryPage"
import Footer from "../components/Footer"
import Header from "../components/Header"
import CategoryPage from "./CategoryPage"
import { useEffect, useState } from "react"
import { MutatingDots } from "react-loader-spinner"

const HomePage = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);


    return (
      <>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
        <MutatingDots
          height="100"
          width="100"
          color="#000"
          secondaryColor= '#000'
          radius='12.5'
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        </div>
        ) : (
            <>
      <Header/>
      <section className='home h-screen' id="home">
        <div className="flex flex-col justify-center items-center h-full backdrop-brightness-50">
      {/* <div className="lg:w-1/2 mt-20 py-36"> */}
        <h2 className="text-center text-white text-5xl mb-4 uppercase font-semibold leading-[70px]">
          wdangs restaurant, featured on <br /> food master, is known for our <br /> delicious appetizer, entree, <br /> & dessert
        </h2>
      {/* <h1 className="text-center text-white text-6xl uppercase font-bold">Making delicious<br />japan culiner</h1> */}
      <div className="flex justify-center">
        <button className="uppercase transition duration-300 hover:rounded-[2px] py-3 px-4 mt-8 text-white font-bold bg-black hover:text-black hover:bg-white">
          Explore Now
        </button>
        </div>
        </div>
      </section>

      <AboutPage/>
      <CountryPage/>
      <CategoryPage />
      <Footer/>

      </>
        )}
      </>
    )
  }

export default HomePage;

