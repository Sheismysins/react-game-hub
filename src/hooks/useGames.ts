import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }

export interface Platform
{
    id: number;
    name: string;
    slug: string;
}


const useGames = (gameQuery: GameQuery) => useData<Game>('/games',{params:{genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id,ordering: gameQuery.sortBy }},[gameQuery])

export default useGames