import { Entity } from 'ts-domain';

class Article extends Entity {
  /**
   * @param {Object} Article
   * @param {Number} Article.id
   * @param {Number} Article.number
   * @param {String} Article.title
   * @param {String} Article.body
   * @param {User} Article.user
   * @param {Date} Article.createdAt
   * @param {Date} Article.updatedAt
   */

  flat() {
    const user = this.user.flat();
    const me = super.flat();
    return {
      ...me,
      user,
    };
  }
}

export default Article;
