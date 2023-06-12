import { useState } from "react";
import Box from "./components/Box.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [searchValue,setSearchValue] = useState("")
  const [isSearchEnabled,setIsSearchEnabled] = useState(false)
  console.log(searchValue)
  // console.log(isSearchEnabled)
  return (
    <>
      <Navbar setIsSearchEnabled={setIsSearchEnabled} setSearchValue= {setSearchValue}/>
      <Box isSearchEnabled={isSearchEnabled} searchValue = {searchValue}/>
    </>
  );
}

export default App;
