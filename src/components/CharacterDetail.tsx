import React from 'react';
import { Character } from '../types';
import './CharacterDetail.css';

interface CharacterDetailProps {
  character: Character;
  onBack: () => void;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ character, onBack }) => {
  return (
    <div className="character-detail">
      <button onClick={onBack} className="back-btn">← Back to List</button>
      
      <div className="detail-content">
        <img src={character.image} alt={character.name} />
        
        <div className="detail-info">
          <h1>{character.name}</h1>
          
          <div className="info-grid">
            <div className="info-item">
              <strong>Status:</strong> 
              <span className={`status ${character.status.toLowerCase()}`}>
                {character.status}
              </span>
            </div>
            
            <div className="info-item">
              <strong>Species:</strong> {character.species}
            </div>
            
            <div className="info-item">
              <strong>Gender:</strong> {character.gender}
            </div>
            
            <div className="info-item">
              <strong>Origin:</strong> {character.origin.name}
            </div>
            
            <div className="info-item">
              <strong>Location:</strong> {character.location.name}
            </div>
            
            <div className="info-item">
              <strong>Episodes:</strong> {character.episode.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;