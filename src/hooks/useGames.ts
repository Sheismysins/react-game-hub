import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

interface FetchGamesRes {
    count: number;
    next: String;
    previous: String;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchGamesRes>("/games", {signal: controller.signal})
            .then((res) => {setGames(res.data.results);
                setLoading(false)
            })
            .catch((err) => {
                if(err instanceof CanceledError)
                    return;
                setError(err);
                setLoading(false)});
    
        return () => controller.abort();
      
    }, []);

    return {games,error, isLoading};
}

export default useGames