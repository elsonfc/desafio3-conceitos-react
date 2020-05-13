import React from "react";

import "./styles.css";

function App() {
  async function handleAddRepository() {
    const response = await api.post('repositories',{
      title: `New Repository ${Date.now()}`,
      url: 'repository/new',
      techs: 'Teconology'
    });
    const repository = response.data;
    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`repositories/${id}`);
    if(response.status===204){
      setRepositories(repositories.filter(repository=>repository.id!==id));
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
