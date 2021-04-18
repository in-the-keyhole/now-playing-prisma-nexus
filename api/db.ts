export interface Movie {
  id: string;
  title: string;
  body: string;
  published: boolean;
}
export interface Db {
  movies: Movie[];
}
export const db: Db = {
  movies: [{ id: "1", title: "Nexus", body: "...", published: false }],
};
