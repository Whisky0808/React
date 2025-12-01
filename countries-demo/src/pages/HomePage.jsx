import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../graphql";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading continents.</p>;

  return (
    <div>
      <h1>Continents</h1>
      {data.continents.map((c) => (
        <div key={c.code}>
          <Link to={`/continent/${c.code}`}>{c.name}</Link>
        </div>
      ))}
    </div>
  );
}
