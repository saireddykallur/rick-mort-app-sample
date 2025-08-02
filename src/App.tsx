import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import { Character } from './types';
import './App.css';

const queryClient = new QueryClient();

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {selectedCharacter ? (
          <CharacterDetail 
            character={selectedCharacter} 
            onBack={() => setSelectedCharacter(null)}
          />
        ) : (
          <CharacterList onCharacterSelect={setSelectedCharacter} />
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;