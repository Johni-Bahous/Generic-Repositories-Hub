import "../sass/repo.scss";
import { RepoProps } from "../types/repos";


type Repos = {
  data: RepoProps
}

 const Repo = ({ data }: Repos) => {

  return (
    <div className="repo">
      <span className="repo-text">{data.name}</span>
      <span className="repo-subtext">
        {data.description}
      </span>
      <div className="repo-tagField">
        <span className="repo-tagField-tag">
          {data.language} 
          {data.forks_count} 
          {data.stargazers_count} 
          {data.watchers_count}
          </span>
      </div>
    </div>
  );
};

export default Repo