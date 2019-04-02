class GetArticlesService {
  constructor({ repository }) {
    this.repository = repository;
  }

  execute({ config }) {
    return this.repository
      .getArticles({ config })
      .then(res => res.map(article => article.flat()));
  }
}

export default GetArticlesService;
