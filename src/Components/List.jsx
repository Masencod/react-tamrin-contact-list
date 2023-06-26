


const List = ({ list,search,onRemove }) => {
  return (
    <div>
      <div className="flex p-5 border-b-2 ">
        <div className="flex-1 flex items-center gap-x-2 ">
          <span className="material-symbols-outlined text-black">
          person
          </span>
          <span className="text-black font-semibold">
            Name
          </span>
        </div>
        <div className="flex-1 flex items-center gap-x-2">  
          <span className="material-symbols-outlined text-black">
          call
          </span>
          <span className="text-black font-semibold">
            phone
          </span>
        </div>
        <div className="flex-1 flex items-center gap-x-2">
          <span className="material-symbols-outlined text-black">
          mail
          </span>
          <span className="text-black font-semibold">
            Email
          </span>
        </div>
      </div>
      <ul className="mt-4">
        {list.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  ).map((tar) => {
          return (
            <li key={tar.id} className="flex p-5">
              <div className="flex-1 flex items-center gap-x-2 ">
                <span className="text-fuchsia-700 text-lg">
                  {tar.name}
                </span>
              </div>
              <div className="flex-1 flex items-center gap-x-2">  
                <span className="text-fuchsia-700 text-lg">
                  {tar.phone}
                </span>
              </div>
              <div className="flex-1 flex items-center gap-x-2">
                <span className="text-fuchsia-700 text-lg">
                  {tar.email}
                </span>
              </div>
              <button className="p-2" onClick={() => onRemove(tar.id)}>❌</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List