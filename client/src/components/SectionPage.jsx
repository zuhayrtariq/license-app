import { InputAdornment, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const SectionPage = () => {
  const [table, setTable] = useState('');
  const navigate = useNavigate();
  const handleLogout = async () => {
    const { data } = await axios.get('/logout');
    navigate('/');
  };

  return (
    <div className=' flex flex-col h-screen justify-center items-center   '>
      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen  bg-cover bg-center'>
        <div className='w-full h-full flex  justify-center items-center backdrop-brightness-50'>
          <div
            className='bg-blue-100 p-4 absolute top-5 font-bold text-blue-800 hover:brightness-90 hover:underline right-10 rounded-xl cursor-pointer'
            onClick={handleLogout}>
            Logout
          </div>
          <div className='  h-[100px] max-w-[800px] max-h-[100px] flex gap-x-2'>
            <Link
              to={'../table'}
              className='bg-blue-600  w-60 hover:outline-b-8 hover:border-b-4 text-white  text-xl font-bold items-center flex justify-center cursor-pointer hover:underline '>
              Consolidated
            </Link>
            <Link
              to={'../table/PNI'}
              className='bg-purple-600 w-60 hover:outline-b-8 hover:border-b-4 text-white  text-xl font-bold items-center flex justify-center cursor-pointer hover:underline '>
              PNI
            </Link>
            <Link
              to={'../table/PTA'}
              className='bg-teal-600 w-60 hover:outline-b-8 hover:border-b-4 text-white  text-xl font-bold items-center flex justify-center cursor-pointer hover:underline '>
              PTA
            </Link>
            <Link
              to={'../table/PBO'}
              className='bg-orange-600 w-60 hover:outline-b-8 hover:border-b-4 text-white  text-xl font-bold items-center flex justify-center cursor-pointer hover:underline '>
              PBO
            </Link>
            <Link
              to={'table/PBA'}
              className='bg-lime-600 w-60 hover:outline-b-8 hover:border-b-4 text-white  text-xl font-bold items-center flex justify-center cursor-pointer hover:underline '>
              PBA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPage;
