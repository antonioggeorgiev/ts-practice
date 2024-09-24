interface DataEntity {
  id: string;
}
interface Movie extends DataEntity {
  director: string;
}
interface Song extends DataEntity {
  singer: string;
}

type DataEntityMap = {
  movie: Movie;
  song: Song;
};

type DataEntityMapKeys = keyof DataEntityMap;

type DataEntityStore = {
  [T in DataEntityMapKeys as `add${Capitalize<T>}`]: (
    entity: DataEntityMap[T]
  ) => void;
} & {
  [T in DataEntityMapKeys as `get${Capitalize<T>}`]: (
    id: string
  ) => DataEntityMap[T];
} & {
  [T in DataEntityMapKeys as `clear${Capitalize<T>}s`]: () => void;
} & {
  [T in DataEntityMapKeys as `getAll${Capitalize<T>}s`]: () => DataEntityMap[T][];
};

export class DataStore implements DataEntityStore {
  #data: {
    [T in DataEntityMapKeys as `${T}s`]: Record<string, DataEntityMap[T]>;
  } = {
    movies: {},
    songs: {},
  };
  private parseDataEntityToArrayOfEntitities<T extends Movie | Song>(
    entities: Record<string, T>
  ): T[] {
    return Object.keys(entities).map((key) => entities[key]);
  }
  addMovie(movie: Movie) {
    this.#data.movies[movie.id] = movie;
  }
  addSong(song: Song) {
    this.#data.songs[song.id] = song;
  }
  getSong(id: string) {
    return this.#data.songs[id];
  }
  getMovie(id: string) {
    return this.#data.movies[id];
  }
  getAllSongs() {
    return this.parseDataEntityToArrayOfEntitities(this.#data.songs);
  }
  getAllMovies() {
    return this.parseDataEntityToArrayOfEntitities(this.#data.movies);
  }
  clearSongs() {
    this.#data.songs = {};
  }
  clearMovies() {
    this.#data.movies = {};
  }
}

const ds = new DataStore();
ds.addSong({ id: "song-123", singer: "The Flaming Lips" });
ds.addMovie({
  id: "movie-456",
  director: "Stephen Spielberg",
});
ds.getSong("song-123"); // returns the song
ds.getMovie("movie-456"); // returns the movie
ds.getAllSongs(); // array of all songs
ds.getAllMovies(); // array of all movies
ds.clearSongs(); // clears all songs
ds.clearMovies(); // clears all movies
