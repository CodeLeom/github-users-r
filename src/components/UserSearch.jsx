

function UserSearch() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40  bg-neutral input input-lg text-white" placeholder="search for a user" />
                        <button type="submit" className="absolute top-0 right-0 rounded-l-none bg-black w-26 btn btn-lg">Search</button>
                    </div>
                </div>
            </form>
        </div>
            <div>
                <button className="btn bg-neutral btn-ghost btn-lg text-white">Clear</button>
            </div>
    </div>
  )
}

export default UserSearch