import axios from "axios";
import React from "react";

const Search = ({ search, setSearch, listSearch, setListSearch }) => {
    const getSearch = async (e) => {
      e.preventDefault();

      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      setListSearch(res.data.meals);
    };

    return (
      <div>
        <div className="title p-10">
          <h2 className='text-3xl text-center p-2 font-bold'>
            Search
          </h2>
          <h3 className='text-base text-center p-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, debitis.
          </h3>
        </div>

        <div className="flex justify-center mb-5">
          <form onSubmit={getSearch}>
            <input
              type="text"
              placeholder="find the menu..."
              className="border p-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-slate-600 text-white p-2 border-1"
            >
              Search
            </button>
          </form>
        </div>

        <div className="list-search flex justify-center py-3  ">
          {!listSearch ? (
            <h2>not found</h2>
            ) : (
            <>
              {listSearch.map((i) => (
                <>
                  <div key={i.idMeal} className="h-[250px] w-[600px] rounded-lg p-1 shadow-lg flex bg-[#141414]">
                    <img src={i.strMealThumb}
                    className="object-cover rounded-l-lg backdrop-blur-0 hover:opacity-40 transition duration-300" />
                  <div className="flex flex-col items-center self-center w-full">
                    <p className="text-center mt-1 text-3xl text-white">
                      {i.strMeal}
                    </p>
                    <p className='text-center mt-2 text-xl text-white'>
                      {(i.strCategory)}
                    </p>
                    </div>
                  </div>
                </>
              ))}
            </>
          )}
        </div>
      </div>
    )
  }

export default Search;

