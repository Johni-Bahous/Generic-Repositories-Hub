import Profile from "../components/Profile";
import Repo from "../components/Repo";
import Search from "../components/Search";
import Filter from "../components/Filter";

import { UserProps } from "../types/user";
import { RepoProps } from "../types/repos";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const [repo, setRepo] = useState<RepoProps[] | null>(null);

  const [seacrhResults, setSearchResults] = useState<RepoProps[]>([]);

  const loadUser = async (userName: string) => {
    const results = await fetch(`https:api.github.com/users/${userName}`);

    const data = await results.json();

    setUser(data);
  };

  const loadRepos = async (userName: string) => {
    const results = await fetch(`https:api.github.com/users/${userName}/repos`);

    const data = await results.json();

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
        <Row>
          <Col md={12} lg={4}> {user && <Profile user={user} />}</Col>
          {repo ? (
            <Col className="pt-0" md={12} lg={8}>
              <div className="px-0">
                <Filter data={repo} setSearchResults={setSearchResults} />
              </div>
              <div className="p-0 wrapper">
                {seacrhResults &&
                  seacrhResults.map((data) => <Repo data={data} />)}
              </div>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
