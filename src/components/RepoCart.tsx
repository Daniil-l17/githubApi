import { useDispatch } from 'react-redux';
import { Irepo } from '../types/type';
import { actions } from '../redux/githubSlice/githubSlice';
import { addFavoriteSelector } from '../hook/addFavorite';

const RepoCart = ({ repo }: { repo: Irepo }) => {
  const { favorite } = addFavoriteSelector(state => state.gitHub);
  const isExsict = favorite.some(el => el.id === repo.id);

  const db = useDispatch();


  const addToFavourite = (e:React.MouseEvent<HTMLButtonElement>,repo:Irepo) => {
    e.preventDefault()
    db(actions.addFavorite(repo))
  }

  return (
    <div className=" hover:bg-[#272626] transition duration-150 cursor-pointer py-2 px-5 rounded border mb-2 hover:shadow-md">
      <a href={repo.html_url} target="_blank">
        <h2>{repo.full_name}</h2>
        <p className="text-sm mr-2">
          Forks: <span>{repo.forks}</span> Watchers: <span>{repo.watchers}</span>
        </p>
        <p className="text-sm font-think">{repo?.description}</p>
        <div className="flex justify-end">
          <button
            onClick={e => addToFavourite(e,repo)}
            className={`px-5 mt-2 py-1 rounded-md text-[17px] ${
              !isExsict ? 'bg-[#61709a]' : 'bg-[#8a3c3c]'
            } hover:bg-[#67bbda] transition duration-150 `}>
            {!isExsict ? 'Добавить' : 'Удалить'}
          </button>
        </div>
      </a>
    </div>
  );
};

export default RepoCart;
