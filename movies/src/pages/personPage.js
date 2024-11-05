import React from "react";
import PersonDetails from "../components/personDetails";
import { getPerson } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { useParams } from 'react-router-dom';

const PersonPage = (props) => {
  const { id } = useParams();
  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <PersonDetails person={person}/>
        </>
      ) : (
        <p>Waiting for person details</p>
      )}
    </>
  );
};

export default PersonPage;