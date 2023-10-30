import { RepoProps } from "../types/repos"




const Filter = ( data: RepoProps[], setSearchResults: (value: React.SetStateAction<RepoProps[]>) => void )  => {

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) : void => {
    
    e.preventDefault()
  
  }

  const handleSearchChange = (e: { target: { value: string } }) => {
    
    const res = data.filter((dat: { name: string}) => dat.name.includes(e.target.value))

    setSearchResults(res)

  }

 
  return (
    <div>
      <form className="filter" onSubmit={handleSubmit}>
        <input className="filter-input" type="text" id="search" onChange={handleSearchChange}/>
        <button className="filter-button">Filter</button>
      </form>
    </div>
  )
}

export default Filter