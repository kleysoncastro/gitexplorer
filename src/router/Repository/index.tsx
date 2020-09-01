import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="github explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="repos" />
          <div>
            <strong>Facebook/react-native</strong>
            <p>Descriçaõ do repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1231</strong>
            <span>start</span>
          </li>
          <li>
            <strong>11</strong>
            <span>fork</span>
          </li>
          <li>
            <strong>1231</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="teste">
          <div>
            <strong>repo.full_name</strong>
            <p>repo.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
