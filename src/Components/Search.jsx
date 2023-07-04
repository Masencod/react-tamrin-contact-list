
const Search = ({ onChange }) => {
  return (
    <div className="p-5">
        <input type="text" className="bg-black outline-none rounded-md p-2 w-1/3 border-2 border-fuchsia-400" placeholder="Search your name here" onChange={onChange}/>
    </div>
  )
}

export default Search
