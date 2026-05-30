// Classes
import { Api } from './classes/api';
import { UI } from './classes/ui';

// Interfaces
import type { IRespUnsplash, IResultsUnsplash } from './interfaces/api/api.unsplash.interface';
import type { IResultsPosts } from './interfaces/api/api.jsonplaceholder.interface';
import type { IResultsPokemons } from './interfaces/api/api.pokemons.interface';
import type { IRespPokemons } from './interfaces/api/api.pokemons.interface';

// Component
import { createPhotoCard } from './components/card.component';

const unsplashApi = new Api({endpoint: 'https://api.unsplash.com/search/photos'});

const pokeApi = new Api({endpoint: 'https://pokeapi.co/api/v2/pokemon'});
const jsonPlaceholderApi = new Api({endpoint: 'https://jsonplaceholder.typicode.com/posts'});

// Helper function
const getPhotos = (query: string, page: number, ) => unsplashApi
.getData<IRespUnsplash, IResultsUnsplash[]>({query: query || '', orientation: 'landscape', page: String(page), per_page: '10'},
  (data) => data.results
);

const getPokemons = (offset: number) => pokeApi.getData<IRespPokemons, IResultsPokemons[]>({offset: String(offset), limit: '10'},
(data) => data.results);

const getPosts = () => jsonPlaceholderApi.getData<IResultsPosts[]>();

// UI instances
const UILeftPhotos = new UI({
  api: (page) => getPhotos('red', page),
  container: document.getElementById('ctn-photos') as HTMLDivElement,
  render: (el) => createPhotoCard({titleTxt: el.description ?? el.alt_description, urlImg: el.urls.regular}),
  isInfiniteScroll: true
});

const UIRightPhotos = new UI({
  api: (page) => getPhotos('blue', page),
  container: document.getElementById('ctn-photos-2') as HTMLDivElement,
  render: (el) => createPhotoCard({titleTxt: el.description ?? el.alt_description, urlImg: el.urls.regular}),
  isInfiniteScroll: true
});

const posts = new UI({
  api: getPosts,
  container: document.getElementById('ctn-posts') as HTMLDivElement,
  render: (el) => createPhotoCard({titleTxt: el.title}),
  isInfiniteScroll: false
});

const pokemons = new UI({
  api: (page) => getPokemons(page),
  container: document.getElementById('ctn-pokemons') as HTMLDivElement,
  render: (el) => createPhotoCard({titleTxt: el.name}),
  isInfiniteScroll: true
});

// Execute
UILeftPhotos.init();
UIRightPhotos.init();
posts.init();
pokemons.init();