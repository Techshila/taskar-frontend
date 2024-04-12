import { useState } from "react";


const Search = () => {
    const [search, setSearch] = useState("");
    const searchkaro = () => {

    }
  return (
    <div className='w-full px-10 mt-5'>
        <input className='w-full h-10 outline-none bg-green-100 rounded-full px-10 text-2xl' type="search" name="search" id="search" 
        placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDownCapture={(e) => {
            e.key === "Enter" && searchkaro();
          }}/>
      </div>
  )
}

export default Search