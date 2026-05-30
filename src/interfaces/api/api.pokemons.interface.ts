export interface IRespPokemons {
  count: number;
  next: string;
  previous: string;
  results: IResultsPokemons[];
}

export interface IResultsPokemons {
  name: string;
  url: string;
}