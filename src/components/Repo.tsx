import "../sass/repo.scss";
import { RepoProps } from "../types/repos";
import LangIcon from "../assets/language.svg";
import ForkIcon from "../assets/fork.svg";
import StarIcon from "../assets/star.svg";
import WatchIcon from "../assets/eyeglass.svg";

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
          <img className="repo-tagField-icon" src={LangIcon} /> {data.language}{" "}
          •
          <img className="repo-tagField-icon" src={ForkIcon} />{" "}
          {data.forks_count} •
          <img className="repo-tagField-icon" src={StarIcon} />{" "}
          {data.stargazers_count} •
          <img className="repo-tagField-icon" src={WatchIcon} />{" "}
          {data.watchers_count}
        </span>
      </div>
    </div>
  );
};

export default Repo;
