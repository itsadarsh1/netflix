export const MOVIES = [
  {
    id: 1,
    title: "Stranger Things",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    genre: ["Sci-Fi", "Drama", "Horror"],
    year: 2016,
    rating: "TV-14",
    score: 8.7,
    thumbnail: "https://picsum.photos/seed/st/300/170",
    backdrop: "https://picsum.photos/seed/st-big/1280/720",
  },
  {
    id: 2,
    title: "The Crown",
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    genre: ["Drama", "History"],
    year: 2016,
    rating: "TV-MA",
    score: 8.6,
    thumbnail: "https://picsum.photos/seed/tc/300/170",
    backdrop: "https://picsum.photos/seed/tc-big/1280/720",
  },
  {
    id: 3,
    title: "Money Heist",
    description:
      "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history — to print billions of euros in the Royal Mint of Spain.",
    genre: ["Action", "Crime", "Thriller"],
    year: 2017,
    rating: "TV-MA",
    score: 8.3,
    thumbnail: "https://picsum.photos/seed/mh/300/170",
    backdrop: "https://picsum.photos/seed/mh-big/1280/720",
  },
  {
    id: 4,
    title: "Ozark",
    description:
      "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    genre: ["Crime", "Drama", "Thriller"],
    year: 2017,
    rating: "TV-MA",
    score: 8.4,
    thumbnail: "https://picsum.photos/seed/oz/300/170",
    backdrop: "https://picsum.photos/seed/oz-big/1280/720",
  },
  {
    id: 5,
    title: "The Witcher",
    description:
      "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    genre: ["Action", "Adventure", "Fantasy"],
    year: 2019,
    rating: "TV-MA",
    score: 8.2,
    thumbnail: "https://picsum.photos/seed/tw/300/170",
    backdrop: "https://picsum.photos/seed/tw-big/1280/720",
  },
  {
    id: 6,
    title: "Bridgerton",
    description:
      "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
    genre: ["Drama", "Romance"],
    year: 2020,
    rating: "TV-MA",
    score: 7.3,
    thumbnail: "https://picsum.photos/seed/br/300/170",
    backdrop: "https://picsum.photos/seed/br-big/1280/720",
  },
  {
    id: 7,
    title: "Squid Game",
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a sinister — and fatal — game awaits.",
    genre: ["Action", "Thriller", "Drama"],
    year: 2021,
    rating: "TV-MA",
    score: 8.0,
    thumbnail: "https://picsum.photos/seed/sg/300/170",
    backdrop: "https://picsum.photos/seed/sg-big/1280/720",
  },
  {
    id: 8,
    title: "Wednesday",
    description:
      "Wednesday Addams is sent to Nevermore Academy where she attempts to master her psychic powers and solve a murder mystery.",
    genre: ["Comedy", "Fantasy", "Horror"],
    year: 2022,
    rating: "TV-14",
    score: 7.8,
    thumbnail: "https://picsum.photos/seed/wd/300/170",
    backdrop: "https://picsum.photos/seed/wd-big/1280/720",
  },
  {
    id: 9,
    title: "Dark",
    description:
      "A family saga with a supernatural twist, set in a German town where the connections between four families are explored.",
    genre: ["Sci-Fi", "Mystery", "Thriller"],
    year: 2017,
    rating: "TV-MA",
    score: 8.8,
    thumbnail: "https://picsum.photos/seed/dk/300/170",
    backdrop: "https://picsum.photos/seed/dk-big/1280/720",
  },
  {
    id: 10,
    title: "Narcos",
    description:
      "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    genre: ["Biography", "Crime", "Drama"],
    year: 2015,
    rating: "TV-MA",
    score: 8.8,
    thumbnail: "https://picsum.photos/seed/nc/300/170",
    backdrop: "https://picsum.photos/seed/nc-big/1280/720",
  },
  {
    id: 11,
    title: "Cobra Kai",
    description:
      "Decades after the events of the 1984 All Valley Karate Tournament, a now-bankrupt Johnny Lawrence seeks redemption by reopening the Cobra Kai karate dojo.",
    genre: ["Action", "Drama", "Sport"],
    year: 2018,
    rating: "TV-14",
    score: 8.5,
    thumbnail: "https://picsum.photos/seed/ck/300/170",
    backdrop: "https://picsum.photos/seed/ck-big/1280/720",
  },
  {
    id: 12,
    title: "Lupin",
    description:
      "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.",
    genre: ["Crime", "Drama", "Mystery"],
    year: 2021,
    rating: "TV-14",
    score: 7.5,
    thumbnail: "https://picsum.photos/seed/lp/300/170",
    backdrop: "https://picsum.photos/seed/lp-big/1280/720",
  },
];

export const CATEGORIES = [
  {
    id: "trending",
    title: "Trending Now",
    movieIds: [1, 7, 3, 5, 8, 11],
  },
  {
    id: "popular",
    title: "Popular on Netflix",
    movieIds: [9, 10, 4, 2, 6, 12],
  },
  {
    id: "action",
    title: "Action & Adventure",
    movieIds: [3, 5, 11, 7, 10, 1],
  },
  {
    id: "drama",
    title: "Critically Acclaimed Dramas",
    movieIds: [2, 4, 9, 6, 12, 8],
  },
];

export const HERO_MOVIE_ID = 1;
