import React, { useState } from 'react'
import { BsArrowLeft,BsSearch, BsPeople } from "react-icons/bs";
import { AiFillEnvironment,AiOutlineLogout } from "react-icons/ai";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { RiProductHuntLine } from "react-icons/ri";

import { SlPeople} from "react-icons/sl";

import { VscServerEnvironment } from "react-icons/vsc";
import { MdOutlineDashboard } from "react-icons/md";

import {CgProfile} from "react-icons/cg";
import {AiOutlineSetting} from "react-icons/ai";

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';



export const NavBar = () => {

  const [open, setOpen] = useState(true);

  const dispach = useDispatch();

  const onLogaut = () => {
    dispach( startLogout() );
  }


  return (
    <>
    <div
      className={`bg-gray-800 h-screen p-5 pt-8 w-72 text-white relative
      ${open ? 'w-72':'w-20'} duration-300`}>
        <BsArrowLeft
        className={`bg-white text-slate-800
        text-3xl rounded-full absolute -right-3
        top-9 border border-slate-900 cursor-pointer ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        />
        <div className='inline-flex'>
          <AiFillEnvironment
          className={`bg-blue-600 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-medium text-2xl ${!open && 'scale-0'} duration-300`}>Farmaceutica</h1>
        </div>

        <div className='flex items-center rounded-md bg-slate-700 mt-6 px-4 py-2'>
          <BsSearch className={`text-white text-lg float-left block cursor-pointer ${open && "mr-2"}`}/>
          <input type={"search"} placeholder="Buscar"
          className={`text-base bg-transparent w-full text-white focus:outline-none rounded-none ${!open && "hidden"}`}
          />
        </div>

        <ul className='pt-2'>
            <NavLink to="/">
                <li className='text-grey-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md mt-2'>
                <span className=''>
                    <MdOutlineDashboard/>
                </span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >Menu</span>
                </li>
            </NavLink>
            <NavLink to="farmacia">
                <li className='text-grey-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md mt-2'>
                <span className=''>
                    <VscServerEnvironment/>
                </span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >Farmacia</span>
                </li>
            </NavLink>
            <NavLink to="personal">
                <li className='text-grey-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md mt-8'>
                <span className=''>
                    <BsPeople/>
                </span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >Personal</span>
                </li>
            </NavLink>
            <NavLink to="clientes">
                <li className='text-grey-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md mt-2'>
                <span className=''>
                    <SlPeople/>
                </span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >Cliente</span>
                </li>
            </NavLink>
            <NavLink to="producto">
                <li className='text-grey-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md mt-2'>
                <span className=''>
                    <RiProductHuntLine/>
                </span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >Producto</span>
                </li>
            </NavLink>
            {/* <NavLink to="pedido">
                <li className='text-grey-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md mt-2'>
                <span className=''>
                    <AiOutlineShoppingCart/>
                </span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >Pedido</span>
                </li>
            </NavLink> */}
            <NavLink to="perfil">
                <li className='text-grey-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md mt-8'>
                <span className=''>
                    <CgProfile/>
                </span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >Perfil</span>
                </li>
            </NavLink>
            <NavLink to="perfil">
                <li className='text-grey-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md mt-'>
                <span className=''>
                    <AiOutlineSetting/>
                </span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >Ajustes</span>
                </li>
            </NavLink>
            <button
            onClick={onLogaut}
            className='w-full flex justify-start'
            to="pedido">
                <li className='text-grey-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-700 rounded-md mt-2'>
                <span className=''>
                    <AiOutlineLogout/>
                </span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}
                >Cerrar Sesion</span>
                </li>
            </button>
        </ul>
      </div>
    </>
  )
}
