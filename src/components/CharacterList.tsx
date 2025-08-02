import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Character } from '../types';
import './CharacterList.css';

interface CharacterListProps {
  onCharacterSelect: (character: Character) => void;
}

const CharacterList: React.FC<CharacterListProps> = ({ onCharacterSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['characters', currentPage],
    queryFn: () => api.getCharacters(currentPage),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (isLoading) return <div className="loading">Loading characters...</div>;
  if (error) return <div className="error">Error loading characters</div>;

  return (
    <div className="character-list">
      <div className="header">
        <h1>Rick & Morty Characters</h1>
        <button onClick={() => refetch()} className="refresh-btn">
          🔄 Refresh
        </button>
      </div>
      
      <div className="pagination">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={!data?.info.prev}
        >
          Previous
        </button>
        <span>Page {currentPage} of {data?.info.pages}</span>
        <button 
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={!data?.info.next}
        >
          Next
        </button>
      </div>

      <div className="character-grid">
        {data?.results.map((character) => (
          <div 
            key={character.id} 
            className="character-card"
            onClick={() => onCharacterSelect(character)}
          >
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.status} - {character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;