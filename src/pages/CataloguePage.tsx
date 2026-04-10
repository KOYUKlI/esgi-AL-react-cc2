import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/movie";
import { MovieCard } from "../components/MovieCard";
import { SearchBar } from "../components/SearchBar";

// =============================================================
// EXERCICE 2 — CataloguePage (8 pts)
// =============================================================
//
// Compléter cette page pour charger et afficher la liste des films.
//
// L'état search et genre est déjà câblé avec SearchBar.
// L'endpoint API est : GET /api/movies?search=...&genre=...
//
// 1. (2 pts) Écrire le useQuery avec un queryKey qui reflète
//    les critères de recherche actuels
//
// 2. (2 pts) Dans la queryFn, construire l'URL avec les bons
//    paramètres et appeler le service API
//
// 3. (1 pt) Afficher un message de chargement quand les données
//    ne sont pas encore arrivées
//
// 4. (1 pt) Afficher un message d'erreur si la requête échoue
//
// 5. (2 pts) Afficher les films dans une grille en utilisant
//    le composant MovieCard (penser à la prop key)
//

const API_URL = "/api/movies";

export const CataloguePage = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  // TODO : écrire le useQuery ici
  const { data, error, isLoading } = useQuery<Movie[]>({
    queryKey: ["movies-list", search, genre],
    initialData: [],
    queryFn: async () => {
      const response = await fetch(
        API_URL + "?search=" + search + "&genre=" + genre,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (!response.ok) throw new Error("Erreur HTTP");

      return response.json();
    },
  });

  return (
    <div>
      <div>
        <h1>Catalogue</h1>
        <p>Parcourez les films et marquez ceux que vous avez vus.</p>
      </div>

      <SearchBar onSearch={setSearch} onGenreChange={setGenre} />

      {data && data.length > 0 ? (
        <div>
          {" "}
          {}
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Aucun film ne correspond à votre recherche.</p>
      )}
    </div>
  );
};
