import ArticleRepository from './ArticleRepository';

const URL =
  'https://us-central1-yafrontendblog.cloudfunctions.net/httpServer/article';

class FirebaseArticleRepository extends ArticleRepository {
  constructor({ config }) {
    super();
    this.config = config;
  }

  createArticle({ article: articleInstance }) {
    const { http } = this.config;
    console.log(this.config);
    const article = articleInstance.flat();
    return http.post(URL, article);
  }
}

export default FirebaseArticleRepository;
