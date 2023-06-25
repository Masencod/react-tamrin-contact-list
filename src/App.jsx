import { useEffect, useState } from 'react'
import Search from './Components/Search'
import Input from './Components/Input'
import List from './Components/List'

function App() {
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
  const handleAddList = (data) => {
    setList(oldArray => [...oldArray, data])
  }
  useEffect(() => {
    console.log(list)
  }, [list])
  const handleRemoveList = () => {

  }
  const handleSearch = ({target}) => {
    setSearch(target.value)
  }
  return (
    <>
      <Search onChange={handleSearch}/>
      <Input onSubmit={handleAddList}/>
    </>
  )
}

export default App
