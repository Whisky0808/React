import { useQuery } from "@apollo/client";
import { GET_COUNTRIES_BY_CONTINENT } from "../graphql";
import { useParams, Link } from "react-router-dom";
import { favoriteVar } from "../apollo/reactiveVars";

export default function ContinentPage() {
  const { code } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRIES_BY_CONTINENT, {
    variables: { code }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading countries.</p>;

  const toggleFavorite = (countryCode) => {
    const favs = favoriteVar();
    favoriteVar(
      favs.includes(countryCode)
        ? favs.filter((c) => c !== countryCode)
        : [...favs, countryCode]
    );
  };

  return (
    <div>
      <h1>{data.continent.name}</h1>
      {data.continent.countries.map((c) => (
        <div key={c.code} style={{ marginBottom: "8px" }}>
          <Link to={`/country/${c.code}`}>
            {c.emoji} {c.name}
          </Link>
          <span
            style={{ cursor: "pointer", marginLeft: "10px" }}
            onClick={() => toggleFavorite(c.code)}
          >
            {c.isFavorite ? "⭐" : "☆"}
          </span>
        </div>
      ))}
    </div>
  );
}
