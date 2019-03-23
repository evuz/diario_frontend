import Article from '../Entities/Article';

class CreateArticleService {
  constructor({ repository }) {
    this.repository = repository;
  }

  execute({ article }) {
    const articleModel = new Article({
      body: article.body,
      summary: article.summary,
      title: article.title,
    });
    return this.repository.createArticle({ article: articleModel });
  }
}

export default CreateArticleService;
