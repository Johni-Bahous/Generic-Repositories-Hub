import Profile from "../components/Profile";
import Repo from "../components/Repo";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Error from "../components/Error";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { UserProps } from "../types/user";
import { RepoProps } from "../types/repos";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";



/** The heart of the app with fetch functions that recieve a username through user input and fetches data on the user and the user's repositories */
const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const [repo, setRepo] = useState<RepoProps[] | null>(null);

  const [seacrhResults, setSearchResults] = useState<RepoProps[]>([]);

  const [notFound, setNotFound] = useState<boolean>(false);

  const loadUser = async (userName: string) => {

    
    const results = await fetch(`https://api.github.com/users/${userName}`);

    const data = await results.json();

    if (results.status != 200) {
      setNotFound(true);
      setUser(null);

      return;
    }

    setNotFound(false);
    setUser(data);
  };

  const loadRepos = async (userName: string) => {
    const results = await fetch(`https://api.github.com/users/${userName}/repos`);

    const data = await results.json();

    if (results.status != 200) {
      setNotFound(true);
      setRepo(null);

      return;
    }


    setNotFound(false);
    setRepo(data);

    setSearchResults(data);
  };

  return (
    <div className="parent">
      <Container>
        <Row>
          <Col xs={12}>
            <Search loadUser={loadUser} loadRepos={loadRepos} />
          </Col>
        </Row>
        {user ? (
        <Row>
          <Col md={12} lg={4}> {user && <Profile user={user} />}</Col>
          {repo ? (
            <Col className="pt-0" md={12} lg={8}>
              <div className="px-0">
                <Filter data={repo} setSearchResults={setSearchResults} />
              </div>
              <SimpleBar className="wrapper" autoHide={false}>                
                {seacrhResults &&
                  seacrhResults.map((data) => <Repo data={data} />)}
              </SimpleBar>
            </Col>
          ) : (
            null
          ) }
        </Row>
        ) : ( 
          notFound ? (<Error isOpen={true}/>) : (null))}
        
      </Container>
    </div>
  );
};

export default Home;
