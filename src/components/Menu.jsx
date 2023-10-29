import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { MutatingDots } from "react-loader-spinner";

const Menu = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const [search, setSearch] = useState("");
    const [listSearch, setListSearch] = useState([]);

    const getData = async () => {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/search.php?s=`
        );
        setData(res.data.meals);
    };

    useEffect(() => {
      getData();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

    function truncate(str) {
      return str.length > 80 ? str.substring(0, 80) + "..." : str;
    }

    const displayData = showMore ? data : data.slice(0, 4);

    return (
      <>
        <section className="menu text-center p-10 bg-[#252525]">
          <h2 className="text-3xl text-center p-2 font-bold text-black">
            Our Menu
          </h2>
          <h3 className="text-base text-center text-black p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, ad!
          </h3>

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
            <div className="flex flex-wrap gap-5 items-center justify-center mt-10">
              {displayData.map((i, index) => (
                <div
                  key={index.idMeal}
                  className="h-[250px] w-[600px] rounded-lg p-1 shadow-lg flex bg-[#141414]"
                >
                <img
                  src={i.strMealThumb}
                  alt={i.strMeal}
                  className="object-cover rounded-l-lg backdrop-blur-0 hover:brightness-50 transition duration-300"
                />
                <div className="flex flex-col items-center self-center w-full">
                  <p className="text-center mt-1 text-3xl text-white">
                    {i.strMeal}
                  </p>
                  <p className="text-center text-white mt-2">{i.strArea}</p>
                <Link
                  to={`/detail/${i.idMeal}`}
                  className="bg-[#252525] text-white p-2"
                >
                  detail
                </Link>

                    {/* tombol tonton tutorial
                    <a
                      href={makanan.strYoutube}
                      target="_blank"
                      rel="noreferrer"
                      className="w-100 flex justify-center p-3 bg-black text-white m-2 transition hover:bg-[#DEDFDA] hover:text-black"
                    >
                      Tonton Tutorial
                    </a> */}

                </div>
              </div>
            ))}
          </div>
        )}

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
        </section>

        <section id="search-food">
          <Search
            search={search}
            setSearch={setSearch}
            listSearch={listSearch}
            setListSearch={setListSearch}
          />
        </section>
      </>
    )
  }

export default Menu;
