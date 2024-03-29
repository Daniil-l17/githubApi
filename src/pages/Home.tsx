import { useEffect, useState } from 'react';
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../redux/gitHubApi/gitHubApi';
import { useDebounse } from '../hook/hook';
import RepoCart from '../components/RepoCart';


const Home = () => {
  const [searh, setSearch] = useState('');
  const debounced =  useDebounse(searh)
  const [open,setOpen] = useState(false)
  const { data, isLoading} = useSearchUsersQuery(debounced,{
    skip: debounced.length < 3,
    refetchOnFocus: true
  });


  const [fetchRepos, { data: repos,isLoading:isRepoloading, } ] = useLazyGetUserReposQuery()

  
  useEffect(() => {
    setOpen(debounced.length > 3 && data?.length! > 0)
  }, [debounced,data]);


  const clickGendler = (username: string) => {
    fetchRepos(username)
    setOpen(false)
  }

  return (
    <div className=" flex justify-center pt-10 mx-auto">
      <div className=" relative w-[560px]">
        <input
          placeholder="Search for Github username...."
          value={searh}
          onChange={e => setSearch(e.target.value)}
          className=" border py-2 px-3 w-full h-[42px] mb-2"
          type="text"
        />
        {open ? <ul className="absolute top-[42px] left-0 right-0 max-h-[200px]  overflow-y-scroll shadow-md bg-[#191919]">
          {isLoading ? <p className=' text-center'>Loading.....</p> : data?.map(el =>{ 
            return <li onClick={() => clickGendler(el.login)} className='py-2 items-center flex justify-between  px-4 cursor-pointer' key={el.id}>
              <h1>{el.login}</h1>
              <img className=' w-[50px] rounded-[25px] h-[50px]' src={el.avatar_url} alt="" />
            </li>
          })} 
        </ul> : null}
        <div className="container">
        {debounced ? isRepoloading ? <div>loading.....</div> : repos?.map(el =>
          <RepoCart repo={el} key={el.id} />
          ) : null}
      </div>
      </div>
    </div>
  );
};

export default Home;
