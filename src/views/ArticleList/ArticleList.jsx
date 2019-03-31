import React, { useEffect, useContext } from 'react';

import Container from '../../components/Container';
import useDomain from '../../hooks/useDomain';
import PersonalInfo from '../../containers/PersonalInfo';
import GithubLoginButton from '../../containers/GithubLoginButton';
import LogoutButton from '../../containers/LogoutButton';
import { ArticlePreviewList } from '../../components/ArticlePreview';

import './ArticleList.scss';
import UserContext from '../../context/user/UserContext';

function ArticleList() {
  const [{ data: articles }, getArticles] = useDomain('get_articles', [], true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <Container>
      <div className="article-list">
        <div className="article-list__nav">
          <PersonalInfo />
          <div className="article-list__btn-login">
            {user ? <LogoutButton /> : <GithubLoginButton />}
          </div>
        </div>
        <main className="article-list__container">
          <ArticlePreviewList articles={articles} />
        </main>
      </div>
    </Container>
  );
}

export default ArticleList;
