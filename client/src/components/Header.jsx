import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const { data } = await axios.get('/logout');
    navigate('/');
  };
  return (
    <header className='flex justify-between sm:text-xl bg-gray-200 py-1 items-center px-2 mb-8'>
      {/* <img src={'/logo.jpg'} alt='' width={80} /> */}
      <Link to={'/sections'} className='font-bold text-green-700'>
        Contract Licenses
      </Link>
      <div className='flex items-center gap-2'>
        <button
          className=' underline  text-primary font-semibold  px-4 py-2 rounded-full hover:font-bold duration-200 '
          onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};
export default Header;
