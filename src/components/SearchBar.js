import React from 'react'

const SearchBar = ({onSearch}) => {

 const handleInputSearch = (e)=>{
  const searchText = e.target.value;
  onSearch(searchText)
 }

  return (
    <div className="container text-center" style={{margin: "auto", width: "400px", padding: "30px"}}>
      <div className = "form-group">
        <input type="text" className="form-control form-control-md " 
        placeholder="Search todo" onChange={handleInputSearch} 
        />
        {/* <button type="submit" 
        className="btn btn-outline-secondary">Search</button> */}
      </div>
    </div>
  )
}

export default SearchBar
