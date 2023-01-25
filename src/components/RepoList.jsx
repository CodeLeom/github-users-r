import PropTypes from 'prop-types'


function RepoList({repos}) {
  return (
    <div className='rounded-lg shadow-lg card bg-neutral text-white'>
        <div className="card-body">
            <h2 className="text-3xl my-4 font-bold card-title">Latest Repositories</h2>
            {repos.map((repo) => (
        <h3>{repo.name}</h3>
      ))}
        </div>
    </div>
  )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired,
}
export default RepoList
