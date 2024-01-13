import "../sass/repo.scss";
import { RepoProps } from "../types/repos";
import "bootstrap-icons/font/bootstrap-icons.css";


type Repos = {
  data: RepoProps;
};
/** A functional component that renders out all the user's repositories with requested data fetched from the API */
const Repo = ({ data }: Repos) => {
  return (
    <div className="repo">
      <span className="repo-text">{data.name}</span>
      <span className="repo-subtext">{data.description}</span>
      <div className="repo-tagField">
        <span className="repo-tagField-tag">
          <i className="repo-tagField-icon bi-code-slash text-dark"/> 
          {data.language} •
          <i className="repo-tagField-icon bi-git text-dark"/>
          {data.forks_count} •
          <i className="repo-tagField-icon bi-star-fill text-dark"/>
          {data.stargazers_count} •
          <i className="repo-tagField-icon bi-search text-dark"/>
          {data.watchers_count}
        </span>
      </div>
    </div>
  );
};

export default Repo;
