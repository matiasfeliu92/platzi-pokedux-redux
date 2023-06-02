import React from 'react'
import { Input } from "antd";
import { setSearchbar } from '../actions';
import { useDispatch } from 'react-redux';

const Searcher = () => {

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchText = e.target.value;
    dispatch(setSearchbar(searchText));
  };

  return (
    <Input placeholder='search by type' onChange={handleSearch}/>
  )
}

export default Searcher
