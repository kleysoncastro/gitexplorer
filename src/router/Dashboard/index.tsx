import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import {
  Title, Form, Repositories, Error,
} from './styles';
import logo from '../../assets/logo.svg';

import api from '../../services/api';
import Repository from '../Repository';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewrepository] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [inputError, setInputError] = useState('');

  async function handleRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setInputError('Digite o nome do repo ex: autor/repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepository}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewrepository('');
      setInputError('');
    } catch (erro) {
      setInputError('Repositório não encontrado');
    }
  }
  return (
    <>
      <img src={logo} alt="GitHub Explore" />
      <Title>Explore repositorios no GitHub</Title>
      <Form hasError={!!inputError} onSubmit={handleRepository}>
        <input
          value={newRepository}
          onChange={(e) => setNewrepository(e.target.value)}
          placeholder="Digite aqui"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repo) => (
          <a key={repo.full_name} href="teste">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
