import React from 'react';

import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';
import useInput from '../../hooks/useInput';

import './NewArticle.scss';

function NewArticle() {
  const [title, changeTitle] = useInput('');
  const [summary, changeSummary] = useInput('');
  const [article, changeArticle] = useInput('');
  return (
    <main className="new-article">
      <Container>
        <h1 className="new-article__title">NEW Article</h1>
        <form
          onSubmit={ev => {
            ev.preventDefault();
            console.log('submit');
          }}
        >
          <Input
            name="title"
            label="Título"
            value={title}
            onChange={changeTitle}
            placeholder="Título"
          />
          <Input
            name="summary"
            label="Resumen"
            value={summary}
            onChange={changeSummary}
            placeholder="Resumen"
          />
          <Input
            name="article"
            label="Artículo"
            value={article}
            onChange={changeArticle}
            type="textarea"
            placeholder="Escribe tu artículo ..."
          />
          <div className="new-article__submit">
            <Button type="submit" stl="outlined">
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </main>
  );
}

export default NewArticle;
