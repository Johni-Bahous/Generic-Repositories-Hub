import "../sass/repo.scss";
import { RepoProps } from "../types/repos";


 const Repo = ({

  name,
  description,
  language,
  forks_count,
  stargazers_count,
  watchers_count,

}: RepoProps) => {

  return (
    <div className="repo">
      <span className="repo-text">{name}</span>
      <span className="repo-subtext">
        {description}
      </span>
      <div className="repo-tagField">
        <span className="repo-tagField-tag">
          {language} 
          {forks_count} 
          {stargazers_count} 
          {watchers_count}
          </span>
      </div>
    </div>
  );
};

export default Repo