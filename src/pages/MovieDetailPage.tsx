import { useParams } from "react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";
import type { Movie } from "../types/movie";

// =============================================================
// EXERCICE 3 — MovieDetailPage (8 pts)
// =============================================================
//
// Compléter cette page pour afficher le détail d'un film
// et permettre de le marquer comme "vu".
//
// Endpoints :
//   GET  /api/movies/:id               → récupérer le détail du film
//   POST /api/movies/:id/toggle-watched → basculer vu / non vu
//
// 1. (1 pt) Récupérer l'id du film depuis l'URL
//
// 2. (2 pts) Charger les données du film avec useQuery
//
// 3. (1 pt) Afficher les informations du film :
//    titre, image, réalisateur, année, genre, description
//
// 4. (4 pts) Implémenter un bouton pour basculer "vu / non vu" :
//    - Envoyer la requête POST au bon endpoint
//    - Mettre à jour l'affichage après le succès (penser à l'invalidation)
//    - Le texte du bouton doit refléter l'état actuel
//
// Classes CSS suggérées :
//   Container :   "max-w-2xl mx-auto"
//   Image :       "w-full h-64 object-cover rounded-lg"
//   Titre :       "text-3xl font-bold mt-4"
//   Sous-titre :  "text-gray-600 mt-1"
//   Description : "text-gray-700 mt-4"
//   Bouton :      "mt-4 px-4 py-2 rounded-lg text-white"
//                 + (watched ? "bg-gray-500" : "bg-green-600")
//

export const MovieDetailPage = () => {
  const { id } = useParams();
  
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery<Movie>({
    queryKey: ["movie", id],
    queryFn: () => api.get<Movie>(`/movies/${id}`),
    enabled: !!id,
  });

  const toggleWatchedMutation = useMutation({
    mutationFn: () => api.post<Movie>(`/movies/${id}/toggle-watched`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movie", id] });
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });

  if (isLoading) {
    return <p>Chargement du film...</p>;
  }

  if (error) {
    return <p>Une erreur est survenue lors du chargement du film.</p>;
  }

  if (!data) {
    return <p>Film introuvable.</p>;
  }

  return (
    <div>
      <img className={"w-full h-64 object-cover rounded-lg"} src={data.imageUrl} alt={data.title} />

      <h1 className={"text-3xl font-bold mt-4"}>{data.title}</h1>

      <p className={"text-gray-600 mt-1"}>
        {data.year} - {data.genre}
      </p>

      <p>{data.description}</p>

      <p>{data.watched ? "Vu" : "Non vu"}</p>
      <button
        type="button"
        onClick={() => toggleWatchedMutation.mutate()}
        disabled={toggleWatchedMutation.isPending}
        className="rounded border border-gray-300 bg-black px-3 py-2 text-white transition-opacity duration-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {toggleWatchedMutation.isPending
          ? "Mise à jour..."
          : data.watched
          ? "Marquer comme non vu"
          : "Marquer comme vu"}
      </button>
    </div>
  );
}