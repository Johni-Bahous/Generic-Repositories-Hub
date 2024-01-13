import { RepoProps } from "../types/repos";
import "../sass/filter.scss";
import { Form } from "react-bootstrap";


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
      <Form className="filter" onSubmit={handleSubmit}>
        <Form.Group className="filter-input g-0">
          <Form.Control className="g-0" type="text" placeholder="Search through the repositories" onChange={(e) => handleSearchChange(e)}></Form.Control>
        </Form.Group>
      </Form>
  );
};

export default Filter;
