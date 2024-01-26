import { Irepo } from '../types/type'


const RepoCart = ({repo}: {repo: Irepo}) => {
  return (
    <div className=' cursor-pointer py-2 px-5 rounded border mb-2 hover:shadow-md'>
      <a href={repo.html_url} target='_blank'>
      <h2>{repo.full_name}</h2>
      <p className='text-sm mr-2'>
        Forks: <span>{repo.forks}</span>
        Watchers: <span>{repo.watchers}</span>
      </p>
      <p className='text-sm font-think'>{repo?.description}</p>
      </a>
    </div>
  )
}

export default RepoCart