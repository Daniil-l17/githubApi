import { addFavoriteSelector } from "../hook/addFavorite"

const Favorite = () => {
  const { favorite } = addFavoriteSelector(state => state.gitHub)
  return (
    <div className="flex justify-center">
      <ul className="flex flex-col gap-3 mt-4">
        {favorite.map(el => 
          <li key={el.id}><a target="_blank" href={el.html_url}>{el.html_url}</a></li>
          )}
      </ul>
    </div>
  )
}

export default Favorite