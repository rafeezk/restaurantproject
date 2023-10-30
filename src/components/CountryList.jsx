import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MutatingDots } from 'react-loader-spinner';
import { Link } from "react-router-dom";
import { useLocation, useParams } from 'react-router-dom'

const CountryList = () => {

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true);
    // const [showMore, setShowMore] = useState(false);
    const {country} = useParams()
    const location = useLocation()

    const getDataList = async() => {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/filter.php?a=${country}`)
        setList(res.data.meals)
    }

    useEffect(() => {
        getDataList();
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, []);

    function truncate(str) {
    return str.length > 80 ? str.substring(0, 80) + "..." : str;
    }
    //   console.log(getCountry);

    return (
      <>
      <div className='country-list'>
          <div className="h-[120px] w-full flex justify-center items-center">
            <h2 className='text-center text-2xl font-medium px-5 py-3 bg-[#DEDFDA] rounded-md shadow-md'>{location.pathname.split(`/area/`)} cuisine</h2>
          </div>
          {loading ? (
            <div className="h-[5rem] flex justify-center items-center">
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

          <div className="flex flex-wrap justify-center gap-5 py-2">
          {list.map((li) => (
              <div key={li.idMeal} className="h-[250px] w-[600px] rounded-lg p-1 shadow-lg flex bg-[#141414]">
                  <img src={li.strMealThumb}
                    className="object-cover rounded-l-lg backdrop-blur-0 hover:opacity-40 transition duration-300" />
                  <div className="flex flex-col items-center self-center w-full">
                    <p className="text-center mt-1 text-3xl text-white">
                      {li.strMeal}
                    </p>
                    <p className='text-center mt-2 text-xl text-white'>
                      {(li.strInstruction)}
                    </p>

                  <Link to={`/detail/${li.idMeal}`} className="bg-[#252525] text-white p-2">
                    More
                  </Link>
                  </div>
              </div>
            ))}
          </div>
        )}
      </div>
      </>
    )
  }

export default CountryList;


// <div
//                   key={index.idMeal}
//                   className="h-[250px] w-[600px] rounded-lg p-1 shadow-lg flex bg-[#141414]"
//                 >
//                   {/* gambar makanan */}
//                   <img
//                     src={makanan.strMealThumb}
//                     alt={makanan.strMeal}
//                     className="object-cover rounded-l-lg backdrop-blur-0 opacity-80 hover:opacity-40 transition duration-300"
//                   />
//                   <div className="flex flex-col items-center self-center w-full">
//                     {/* nama makanan */}
//                     <p className="text-center mt-1 text-3xl text-white">
//                       {makanan.strMeal}
//                     </p>
//                     <p className="text-center text-white">{makanan.strArea}</p>
//                     {/* tautan detail */}
//                     <Link
//                       to={`/detail/${makanan.idMeal}`}
//                       // {truncate(meals.strInstruction)}
//                       className="text-sm text-center text-white hover:text-white"
//                     >
//                       Klik disini
//                     </Link>
//                     {/* tombol tonton tutorial */}
//                     <a
//                       href={makanan.strYoutube}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="w-100 flex justify-center p-3 bg-black text-white m-2 transition hover:bg-[#DEDFDA] hover:text-black"
//                     >
//                       Tonton Tutorial
//                     </a>
//                   </div>
//                 </div>