import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genre
{
    id: number;
    name: string;    
}

interface FetchGenresRes {
    count: number;
    next: String;
    previous: String;
    results: Genre[];
  }

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchGenresRes>("/genres", {signal: controller.signal})
            .then((res) => {setGenres(res.data.results);
                setLoading(false)
            })
            .catch((err) => {
                if(err instanceof CanceledError)
                    return;
                setError(err);
                setLoading(false)});
    
        return () => controller.abort();
      
    }, []);

    return {genres,error, isLoading};
}

export default useGenres;