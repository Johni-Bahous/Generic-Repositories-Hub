import { RepoProps } from "../types/repos";
import "../sass/filter.scss";


/** A functional component that renders out a filter bar which the users can use to filter through the available repositories */
const Filter = ({
  data,
  setSearchResults,
}: {
  data: RepoProps[];
  setSearchResults: (value: React.SetStateAction<RepoProps[]>) => void;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleSearchChange = (e: { target: { value: string } }) => {
    const results = data.filter((datum: { name: string }) =>
      datum.name.includes(e.target.value)
    );

    setSearchResults(results);
  };

  return (
      <form className="filter" onSubmit={handleSubmit}>
        <input
          placeholder="Filter through the repositories"
          className="filter-input"
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
      </form>
  );
};

export default Filter;
