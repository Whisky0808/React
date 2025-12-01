import { useQuery } from "@apollo/client";
import { GET_COUNTRY_DETAIL } from "../graphql";
import { useParams } from "react-router-dom";
import { favoriteVar } from "../apollo/reactiveVars";

export default function CountryPage() {
  const { code } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRY_DETAIL, {
    variables: { code }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading country.</p>;

  const c = data.country;

  const toggleFavorite = () =>
    favoriteVar(
      c.isFavorite
        ? favoriteVar().filter((x) => x !== c.code)
        : [...favoriteVar(), c.code]
    );

  return (
    <div>
      <h1>{c.emoji} {c.name}</h1>
      <p>Capital: {c.capital}</p>
      <p>Currency: {c.currency}</p>
      <p>Continent: {c.continent.name}</p>
      <p>Languages: {c.languages.map((l) => l.name).join(", ")}</p>
      <p>Phone: +{c.phone}</p>

      <button onClick={toggleFavorite}>
        {c.isFavorite ? "★ Unfavorite" : "☆ Add Favorite"}
      </button>
    </div>
  );
}
