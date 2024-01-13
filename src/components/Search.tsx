import { Button, Form, Row } from "react-bootstrap";
import "../sass/search.scss";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
  loadRepos: (userName: string) => Promise<void>;
};

import { useState } from "react";

/** A functional component that works twofold, first it renders out a search bar for the user to put in a username
 *  and the other functionality is to pass said username to the fetch functions */
const Search = ({ loadUser, loadRepos }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleClick = () => {
    loadRepos(userName);
    loadUser(userName);
  };
  return (
    <div className="search">
      <span className="search-title">Please put in the desired username</span>
      <Form>
        <Row>
          <Form.Group className="search-input g-0">
            <Form.Control type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}></Form.Control>
          </Form.Group>
          <Button className="search-button" type="button" onClick={handleClick}>
            Search
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default Search;
