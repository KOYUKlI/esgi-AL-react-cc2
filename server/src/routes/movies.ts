import { Router } from "express";
import { movies } from "../data/seed.js";

const router = Router();

// GET /api/movies?search=&genre=
router.get("/movies", (req, res) => {
  let result = [...movies];
  const { search, genre } = req.query;

  if (typeof search === "string" && search) {
    const s = search.toLowerCase();
    result = result.filter(
      (m) =>
        m.title.toLowerCase().includes(s) ||
        m.description.toLowerCase().includes(s),
    );
  }

  if (typeof genre === "string" && genre) {
    result = result.filter((m) => m.genre === genre);
  }

  res.json(result);
});

// GET /api/movies/:id
router.get("/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id === req.params.id);
  if (!movie) {
    res.status(404).json({ error: "Film non trouvé" });
    return;
  }
  res.json(movie);
});

// POST /api/movies/:id/toggle-watched
router.post("/movies/:id/toggle-watched", (req, res) => {
  const movie = movies.find((m) => m.id === req.params.id);
  if (!movie) {
    res.status(404).json({ error: "Film non trouvé" });
    return;
  }
  movie.watched = !movie.watched;
  res.json(movie);
});

export { router as moviesRouter };
