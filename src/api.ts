import { ApiResponse, Character } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const api = {
  getCharacters: async (page: number = 1): Promise<ApiResponse> => {
    const response = await fetch(`${BASE_URL}/character?page=${page}`);
    if (!response.ok) throw new Error('Failed to fetch characters');
    return response.json();
  },

  getCharacter: async (id: number): Promise<Character> => {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    if (!response.ok) throw new Error('Failed to fetch character');
    return response.json();
  }
};