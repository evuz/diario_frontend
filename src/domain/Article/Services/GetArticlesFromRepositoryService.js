class GetArticlesFromRepositoryService {
  constructor({ repository }) {
    this.repository = repository;
  }

  execute({ config }) {
    return this.repository
      .getArticlesFromRepository({ config })
      .then(res => res.map(article => article.flat()));
  }
}

export default GetArticlesFromRepositoryService;
