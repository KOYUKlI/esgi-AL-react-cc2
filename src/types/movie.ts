export type Movie = {
  id: string;
  title: string;
  year: number;
  genre: string;
  director: string;
  imageUrl: string;
  description: string;
  watched: boolean;
};

export const GENRES = [
  "Action",
  "Animation",
  "Comédie",
  "Drame",
  "Science-Fiction",
  "Thriller",
] as const;

export type Genre = (typeof GENRES)[number];
