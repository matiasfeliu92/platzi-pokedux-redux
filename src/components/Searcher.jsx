import React from 'react'
import { Input } from "antd";

const Searcher = ({search, setSearch}) => {
  console.log(search)

  const handleSearch = (e) => {
    const searchText = e.target.value
    setSearch(searchText)
  }

  return (
    <Input.Search placeholder='search by type' onChange={handleSearch}/>
  )
}

export default Searcher
