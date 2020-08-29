import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="GitHub Explore" />
    <Title>Explore repositorios no GitHub</Title>
    <Form>
      <input placeholder="Digite aqui" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img src="https://avatars2.githubusercontent.com/u/34436443?s=460&u=ab58bdfebc95c4c8981e073805667ba7aa2f6b2d&v=4" alt="kleyson castro" />
        <div>
          <strong>HashMap</strong>
          <p>Descricao do repositoies no GitHub</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img src="https://avatars2.githubusercontent.com/u/34436443?s=460&u=ab58bdfebc95c4c8981e073805667ba7aa2f6b2d&v=4" alt="kleyson castro" />
        <div>
          <strong>HashMap</strong>
          <p>Descricao do repositoies no GitHub</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img src="https://avatars2.githubusercontent.com/u/34436443?s=460&u=ab58bdfebc95c4c8981e073805667ba7aa2f6b2d&v=4" alt="kleyson castro" />
        <div>
          <strong>HashMap</strong>
          <p>Descricao do repositoies no GitHub</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
