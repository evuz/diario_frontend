import ArticleRepository from './ArticleRepository';

const URL =
  'https://us-central1-yafrontendblog.cloudfunctions.net/httpServer/article';

class FirebaseArticleRepository extends ArticleRepository {
  constructor({ config }) {
    super();
    this.config = config;
  }

  createArticle({ article: articleInstance, token }) {
    const { http } = this.config;
    const article = articleInstance.flat();
    return http.post(URL, article, {
      headers: { authorization: `Bearer ${token}` },
    });
  }
}

export default FirebaseArticleRepository;
