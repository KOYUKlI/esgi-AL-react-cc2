import { Link } from "react-router";
import type { Movie } from "../types/movie";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link
      to={`/movies/${movie.id}`}
      className="block border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{movie.title}</h3>
        <p className="text-gray-600 text-sm">
          {movie.director} · {movie.year}
        </p>
        <p className="text-gray-500 text-sm">{movie.genre}</p>
        {movie.watched && (
          <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
            ✓ Vu
          </span>
        )}
      </div>
    </Link>
  );
};
