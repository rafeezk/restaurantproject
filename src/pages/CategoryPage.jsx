import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MutatingDots } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

const CategoryPage = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [showMore, setShowMore] = useState(false);

    const getListCategory = async() => {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/categories.php`)
        setData(res.data.categories)
    }

    useEffect(() => {
        getListCategory()
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, [])

    const displayData = showMore ? data : data.slice(0, 3);

    return (
      <>
      <div className="category-page">
      <div className="title p-10">
          <h2 className='text-3xl text-center p-2 font-bold'>Category</h2>
          <h3 className='text-base text-center p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, debitis.</h3>
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
          <div className="flex flex-wrap justify-center gap-16 p-2 mt-10">
          {displayData.map((i) => (
            <Link to={`/category/${i.strCategory}`} key={i.idCategory}>
              <div className="relative h-[16rem] w-[22rem] overflow-hidden cursor-pointer rounded-[3px] bg-[#cccccc]">
                <img
                  className="object-cover h-full w-full p-1 brightness-50"
                  src={i.strCategoryThumb}
                  alt={i.strCategory}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 hover:opacity-0 transition duration-500">
                  <p className=" opacity-100 text-2xl font-semibold">
                    {i.strCategory}
                  </p>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/20 backdrop-blur-0 opacity-0 hover:opacity-100 transition duration-500">
                  <p className="text-white opacity-100 text-2xl font-semibold">
                    {i.strCategory}
                  </p>
                </div>
              </div>
            </Link>
            ))}
          </div>
            )}

          <div className="text-center py-5">
          {showMore ? (
            <button
              className="bg-black text-white w-[100px] h-10 mt-5"
              onClick={() => setShowMore(false)}
            >
              Show Less
            </button>
            ) : (
            <button
              className="bg-black text-white w-[100px] h-10 mt-5"
              onClick={() => setShowMore(!showMore)}
            >
              Show More
            </button>
              )}
            </div>
        </div>
      </>
    )
  }

export default CategoryPage;