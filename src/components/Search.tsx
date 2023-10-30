import { Button } from "react-bootstrap";
import "../sass/search.scss";

type SearchProps = {
    loadUser: (userName: string) => Promise<void>,
    loadRepos: (userName: string) => Promise<void>
};

import { useState } from "react";

 const Search = ({
    
    loadUser, 
    loadRepos,

 }:SearchProps) => {

    const [userName, setUserName] = useState("");

   const handleClick = () => {
        loadRepos(userName);
        loadUser(userName);
        
    }
    return (
        <div className="search">
            <span className="search-title">Please put in the desired username</span>
            <div>
                <input className="search-input" type="text" placeholder=" Username" onChange={(e)=> setUserName(e.target.value)}/>
                <Button className="search-button" onClick={handleClick}>Search</Button>
            </div>
        </div>
    )
}

export default Search