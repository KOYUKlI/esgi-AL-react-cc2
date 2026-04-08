import type { Movie } from "../types.js";

export const movies: Movie[] = [
  {
    id: "1",
    title: "Inception",
    year: 2010,
    genre: "Science-Fiction",
    director: "Christopher Nolan",
    imageUrl: "https://picsum.photos/seed/inception/300/450",
    description:
      "Un voleur qui s'infiltre dans les rêves des autres reçoit une mission apparemment impossible : implanter une idée dans l'esprit d'un héritier.",
    watched: true,
  },
  {
    id: "2",
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    director: "Christopher Nolan",
    imageUrl: "https://picsum.photos/seed/dark-knight/300/450",
    description:
      "Batman affronte le Joker, un criminel anarchiste qui plonge Gotham City dans le chaos.",
    watched: true,
  },
  {
    id: "3",
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    director: "Bong Joon-ho",
    imageUrl: "https://picsum.photos/seed/parasite/300/450",
    description:
      "Une famille pauvre s'infiltre dans la vie d'une famille riche avec des conséquences inattendues.",
    watched: false,
  },
  {
    id: "4",
    title: "Interstellar",
    year: 2014,
    genre: "Science-Fiction",
    director: "Christopher Nolan",
    imageUrl: "https://picsum.photos/seed/interstellar/300/450",
    description:
      "Un groupe d'explorateurs voyage à travers un trou de ver pour trouver une nouvelle planète habitable.",
    watched: false,
  },
  {
    id: "5",
    title: "Forrest Gump",
    year: 1994,
    genre: "Drame",
    director: "Robert Zemeckis",
    imageUrl: "https://picsum.photos/seed/forrest-gump/300/450",
    description:
      "L'histoire extraordinaire d'un homme simple qui traverse les grands événements de l'histoire américaine.",
    watched: true,
  },
  {
    id: "6",
    title: "Matrix",
    year: 1999,
    genre: "Science-Fiction",
    director: "Lana et Lilly Wachowski",
    imageUrl: "https://picsum.photos/seed/matrix/300/450",
    description:
      "Un programmeur découvre que la réalité telle qu'il la connaît est une simulation créée par des machines.",
    watched: false,
  },
  {
    id: "7",
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: "Animation",
    director: "Bob Persichetti",
    imageUrl: "https://picsum.photos/seed/spiderverse/300/450",
    description:
      "Miles Morales devient Spider-Man et découvre qu'il existe d'autres versions de Spider-Man dans d'autres dimensions.",
    watched: false,
  },
  {
    id: "8",
    title: "Le Voyage de Chihiro",
    year: 2001,
    genre: "Animation",
    director: "Hayao Miyazaki",
    imageUrl: "https://picsum.photos/seed/chihiro/300/450",
    description:
      "Une fillette de 10 ans se retrouve piégée dans un monde de esprits et doit travailler dans un bain public pour libérer ses parents.",
    watched: true,
  },
  {
    id: "9",
    title: "Pulp Fiction",
    year: 1994,
    genre: "Thriller",
    director: "Quentin Tarantino",
    imageUrl: "https://picsum.photos/seed/pulp-fiction/300/450",
    description:
      "Les vies de deux tueurs à gages, d'un boxeur et d'un couple de braqueurs s'entrelacent dans quatre histoires de violence et de rédemption.",
    watched: false,
  },
  {
    id: "10",
    title: "Coco",
    year: 2017,
    genre: "Animation",
    director: "Lee Unkrich",
    imageUrl: "https://picsum.photos/seed/coco/300/450",
    description:
      "Un jeune garçon passionné de musique se retrouve dans le Monde des Morts et part à la recherche de son arrière-arrière-grand-père musicien.",
    watched: true,
  },
  {
    id: "11",
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comédie",
    director: "Wes Anderson",
    imageUrl: "https://picsum.photos/seed/budapest/300/450",
    description:
      "Les aventures d'un concierge légendaire d'un célèbre hôtel européen et de son jeune protégé.",
    watched: false,
  },
  {
    id: "12",
    title: "Whiplash",
    year: 2014,
    genre: "Drame",
    director: "Damien Chazelle",
    imageUrl: "https://picsum.photos/seed/whiplash/300/450",
    description:
      "Un jeune batteur de jazz intègre un conservatoire prestigieux où il est poussé à ses limites par un professeur tyrannique.",
    watched: false,
  },
  {
    id: "13",
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    director: "George Miller",
    imageUrl: "https://picsum.photos/seed/mad-max/300/450",
    description:
      "Dans un désert post-apocalyptique, Max s'allie à Furiosa pour fuir un tyran et ses armées motorisées.",
    watched: false,
  },
  {
    id: "14",
    title: "Fight Club",
    year: 1999,
    genre: "Thriller",
    director: "David Fincher",
    imageUrl: "https://picsum.photos/seed/fight-club/300/450",
    description:
      "Un employé de bureau insomniaque et un vendeur de savon charismatique fondent un club de combat clandestin.",
    watched: false,
  },
  {
    id: "15",
    title: "John Wick",
    year: 2014,
    genre: "Action",
    director: "Chad Stahelski",
    imageUrl: "https://picsum.photos/seed/john-wick/300/450",
    description:
      "Un ancien tueur à gages reprend du service pour se venger de ceux qui lui ont tout pris.",
    watched: false,
  },
  {
    id: "16",
    title: "Les Évadés",
    year: 1994,
    genre: "Drame",
    director: "Frank Darabont",
    imageUrl: "https://picsum.photos/seed/shawshank/300/450",
    description:
      "Un banquier condamné à tort se lie d'amitié avec un détenu et planifie son évasion de la prison de Shawshank.",
    watched: false,
  },
  {
    id: "17",
    title: "Little Miss Sunshine",
    year: 2006,
    genre: "Comédie",
    director: "Jonathan Dayton",
    imageUrl: "https://picsum.photos/seed/sunshine/300/450",
    description:
      "Une famille dysfonctionnelle traverse le pays en van pour emmener leur fille à un concours de beauté.",
    watched: false,
  },
  {
    id: "18",
    title: "Superbad",
    year: 2007,
    genre: "Comédie",
    director: "Greg Mottola",
    imageUrl: "https://picsum.photos/seed/superbad/300/450",
    description:
      "Deux lycéens inséparables tentent de se procurer de l'alcool pour une fête avant la fin de l'année scolaire.",
    watched: false,
  },
];
