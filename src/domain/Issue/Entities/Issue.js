import { Entity } from 'ts-domain';

class Issue extends Entity {
  /**
   * @param {Object} Issue
   * @param {Number} Issue.id
   * @param {Number} Issue.number
   * @param {String} Issue.title
   * @param {String} Issue.body
   * @param {User} Issue.user
   * @param {Date} Issue.createdAt
   * @param {Date} Issue.updatedAt
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

export default Issue;
