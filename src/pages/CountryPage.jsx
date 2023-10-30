import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountryPage = () => {

    const getData = async (country) => {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/filter.php?a=${country}`)
        // setCountry(res.data.areas)
    }

    useEffect(() => {
      getData();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

    return (
      <>
      <div className="flex flex-row justify-center items-center py-10" id="menu">
        
        <div className="relative w-full h-[300px] text-center">
          <img
            src="public/images/menu1.png"
            alt="Image 1"
            className="w-full h-full object-cover"
          />

        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 hover:backdrop-brightness-50 transition duration-300 text-white">
          <h2 className="text-xl font-semibold">Japanese Cuisine</h2>
          <Link className="bg-transparent text-white px-4 py-2 mt-6 border-[2px] hover:bg-white hover:text-black transition duration-300" to={'/area/japanese'}>
          more
          </Link>
          </div>
        </div>

        <div className="relative w-full h-[300px] text-center">
          <img
            src="public/images/menu2.png"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 hover:backdrop-brightness-50 transition duration-300 text-white">
            <h2 className="text-xl font-semibold">All Menu</h2>
            <Link className="bg-transparent text-white px-4 py-2 mt-6 border-[2px] hover:bg-white hover:text-black transition duration-300" to={'/menu'}>
            more
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[300px] text-center">
          <img
            src="public/images/menu3.png"
            alt="Image 3"
            className="w-full h-full object-cover backdrop-blur-0 hover:opacity-40 transition duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 hover:backdrop-brightness-50 transition duration-300 text-white">
            <h2 className="text-xl font-semibold">Italian Cuisine</h2>
            <Link className="bg-transparent text-white px-4 py-2 mt-6 border-[2px] hover:bg-white hover:text-black transition duration-300" to={'/area/italian'}>
            more
            </Link>
          </div>
        </div>
      </div>
    </>
    )
  }

export default CountryPage;
