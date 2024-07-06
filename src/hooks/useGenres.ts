import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import useData from './useData';

export interface Genre
{
    id: number;
    image_background: string;
    name: string;    
}


const useGenres = () => useData<Genre>('/genres')

export default useGenres;