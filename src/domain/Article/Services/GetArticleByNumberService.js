class GetArticlesByNumberService {
  constructor({ repository }) {
    this.repository = repository;
  }

  execute({ number }) {
    return this.repository
      .getArticleByNumber({ number })
      .then(article => article.flat());
  }
}

export default GetArticlesByNumberService;
