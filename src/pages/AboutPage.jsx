const AboutPage = () => {
  
    return (
      <>
      <section id="about" className="flex max-lg:flex-col max-lg:px-4 h-screen bg-white p-32">
        <div className="w-1/2 flex justify-center max-lg:w-full">
          <img src="./images/aboutbg.png" className="w-full object-cover"
        />
        </div>

        {/* col untuk text */}
        <div className="w-1/2 flex flex-col items-center justify-center max-lg:w-full bg-[#DEDFDA]">
          <h2 className="title text-center text-2xl font-bold">
            A FEW STORY ABOUT US
          </h2>
          <span className="text-lg mt-10 mb-4 text-black">
            * * *
          </span>
          <p className="text-center text-black text-sm px-20 leading-5 max-lg:px-4">
            Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
            molestiae enim a voluptate totam natus modi debitis dicta impedit
            voluptatum quod sapiente illo saepe explicabo quisquam perferendis
            labore et illum suscipit
          </p>
          <button className="bg-transparent text-black text-base border-[2px] rounded-[1px] border-black hover:text-white hover:bg-black transition duration-300 py-2 px-3 mt-10">
            TAKE A TOUR
          </button>
        </div>
      </section>
      </>
    )
  }

export default AboutPage