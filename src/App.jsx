import { FaArrowRightLong } from "react-icons/fa6";
function App() {
  return (
    <>
      <div className=" text-default bg-slate-950 w-full font-custom h-full">
        <nav className=" lg:px-24 lg:pt-12 h-16  flex justify-between items-center  px-5 py-3">
          <p className="text-2xl font-semibold">My Portfolio</p>
          <ul className=" hidden lg:flex lg:gap-8 lg:text-lg ">
            <li className="hover:text-blue-500">Articles</li>
            <li className="hover:text-blue-500">chats</li>
            <li className="hover:text-blue-500">Awards</li>
            <li className="hover:text-blue-500">About</li>
          </ul>
          <button className=" hidden lg:block px-4 py-3 text-slate-900 text-xl font-bold bg-yellow-400 rounded-md hover:bg-yellow-500 hover:cursor-pointer">
            {" "}
            Get In Touch
          </button>
          <img
            className="lg:hidden hover: cursor-pointer"
            src="/src/assets/Hamburger Menu.svg"
            alt=""
          />
        </nav>

        <section className="px-5 lg:w-1/2 lg:mt-28 mt-16 lg:px-24">
          <h2 className="lg:text-5xl text-4xl font-semibold leading-tight mt-8 ">
            <span className="text-blue-400 font-bold ">Helping</span> Companies
            build better, scalable Softwares.
          </h2>
          <p className="text-slate-300 mt-3">
            Welcome to my portfolio! I am Monu Kumar , a full stack web
            devloper. I excel in crafting intuitive user interfaces and writing
            efficient, scalable code. Explore my projects to see my dedication
            to innovation, and lets connect to discuss exciting opportunities.
            🚀
          </p>
        </section>
        <section className="lg:px-20 my-24 flex justify-center flex-wrap gap-5 lg:gap-24 ">
          <img src="/src/assets/Logos/JP Morgan.svg" alt="" />
          <img src="/src/assets/Logos/Samsung.svg" alt="" />
          <img src="/src/assets/Logos/Tinder.svg" alt="" />
          <img src="/src/assets/Lo" alt="" />
          <img src="/src/assets/Logos/Verizon.svg" alt="" />
          <img src="/src/assets/Logos/Visa.svg" alt="" />
          <img src="/src/assets/Logos/Walmart.svg" alt="" />
        </section>
        <div className="lg:flex lg:px-20">
          <div className="m-auto mt-5">
            <img
              className="w-11/12 m-auto mb-5 rounded-sm"
              src="/src/assets/YelpCamp.png"
              alt=""
            />
            <h3 className="px-5 mt-6 flex items-center text-3xl font-medium hover:text-slate-600">
              <p className="mx-2 "> YelpCamp.com</p>
              <FaArrowRightLong />
            </h3>
            <p className="px-5 mx-2 mt-4 mb-14 lg:mt-0">
              I excel in crafting intuitive user interfaces and writing
              efficient, scalable code. Explore my projects to see my dedication
              to innovation, and lets connect to discuss exciting opportunities.
            </p>
          </div>

          <div className="m-auto mt-5">
            <img
              className="w-11/12 m-auto mb-5  rounded-sm"
              src="/src/assets/Spense.png"
              alt=""
            />
            <h3 className="px-5 mt-6 mx-2 text-3xl flex items-center  hover:text-slate-600 font-medium">
              <p className="mr-4">Spense.com</p>
              <FaArrowRightLong />
            </h3>
            <p className="px-5 mt-4 mx-2  lg:mb-16">
              I excel in crafting intuitive user interfaces and writing
              efficient, scalable code. Explore my projects to see my dedication
              to innovation, and lets connect to discuss exciting opportunities.
            </p>
          </div>
        </div>
        <section className="bg-slate-800 my-14 lg:py-12 lg:px-24">
          <h1 className="text-5xl lg:text-6xl lg:w-1/2 px-5 leading-tight font-medium pt-8">
            A <span className="text-blue-400 font-bold ">co-founder</span> at on
            of the world largest communities.{" "}
          </h1>
          <p className="px-5 pt-6 text-lg pb-8  lg:w-1/2">
            {" "}
            I excel in crafting intuitive user interfaces and writing efficient,
            scalable code. Explore my projects to see my dedication to
            innovation, and lets connect to discuss exciting opportunities.
            Explore my projects to see my dedication to innovation, and lets
            connect to discuss exciting opportunities
          </p>
        </section>
        <section className="lg:px-24">
          <h1 className="text-4xl px-5">Interested in work with me?</h1>
          <p className="p-5 lg:pt-6 lg:w-1/2 lg:pb-10 ">
            {" "}
            Explore my projects to see my dedication to innovation, and lets
            connect to discuss exciting opportunities connect to discuss
            exciting opportuniti econnect to discuss exciting opportunitie
          </p>
          <button className="mx-5 mb-20 px-5 py-4 text-slate-900 text-xl font-bold bg-yellow-400 rounded-md hover:bg-yellow-500 hover:cursor-pointer">
            Get In Touch
          </button>
        </section>
        <footer className="lg:px-28 bg-slate-800 flex justify-between px-8 py-3">
          <h1 className="text-xl font-medium">Made by - Monu Kumar</h1>
          <div className="flex justify-around gap-3 items-center ">
            <img src="/src/assets/Social Icons/Github.svg" alt="" />
            <img src="/src/assets/Social Icons/LinkedIn.svg" />
            <img src="/src/assets/Social Icons/Twitter.svg" />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
