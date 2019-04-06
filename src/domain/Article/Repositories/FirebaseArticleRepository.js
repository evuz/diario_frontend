import ArticleRepository from './ArticleRepository';
import Article from '../Entities/Article';

const URL =
  'https://us-central1-yafrontendblog.cloudfunctions.net/httpServer/article';

class FirebaseArticleRepository extends ArticleRepository {
  constructor({ config }) {
    super();
    this.config = config;
  }

  getArticles() {
    const { firebase } = this.config;
    const db = firebase.firestore();
    return db
      .collection('articles')
      .get()
      .then(snapshot => {
        return snapshot.docs.map(this.generateArticleEntity);
      });
  }

  createArticle({ article: articleInstance, token }) {
    const { http } = this.config;
    const article = articleInstance.flat();
    return http.post(URL, article, {
      headers: { authorization: `Bearer ${token}` },
    });
  }

  generateArticleEntity(doc) {
    console.log('doc', doc);
    const article = doc.data();
    return new Article({
      id: doc.id,
      title: article.title,
      body: article.body,
      summary: article.summary,
      readTime: article.read_time,
      user: {},
      createdAt: article.created_at,
    });
  }
}

export default FirebaseArticleRepository;
