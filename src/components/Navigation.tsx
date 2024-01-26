import {Link} from 'react-router-dom'


const Navigation = () => {
  return (
    <header className="flex justify-between items-center  h-[50px] px-5 bg-gray-500 text-white">
      <h1 className=' cursor-pointer font-bold'>Github</h1>
      <span className='flex items-center'>
        <Link className=' mr-4' to='/'>Home</Link>
        <Link to='/favorite'>Favorite</Link>
      </span>
    </header>
  )
}

export default Navigation