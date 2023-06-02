import React from 'react'
import { Input } from "antd";
import { setSearchbar } from '../actions';
import { useDispatch } from 'react-redux';

const Searcher = ({search, setSearch}) => {
  console.log(search)

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
    dispatch(setSearchbar(searchText));
  };

  return (
    <Input placeholder='search by type' onChange={handleSearch}/>
  )
}

export default Searcher
