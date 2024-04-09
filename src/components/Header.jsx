import { Link, useNavigate } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { FaBell } from 'react-icons/fa';
import { IoVideocam } from 'react-icons/io5';
import { MdVideoLibrary } from 'react-icons/md';
import React from 'react';


const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;


    if (text.trim() === '') {
      return alert('enter the text to search');
    }

    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="flex justify-between items-center p-4">
      <Link className="flex items-center gap-2" to="/">
        <img className="w-[50px]" src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" alt="logo" />
        <h1 className="text-2xl max-sm:hidden font-mono">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="group flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          placeholder="Ara.."
          className="group-hover:border-blue-500 group-hover:border border border-transparent bg-black text-white px-5 py-2 outline-none rounded-l-[20px] focus:border-blue-500"
          type="text"
        />

        <button className="border-l px-4 text-2xl bg-zinc-800">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition duration-[250ms]" />
        <IoVideocam className="hover:text-gray-400 transition duration-[250ms]" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-[250ms]" />
      </div>
    </header>
  );
};

export default Header;