// eslint-disable-next-line
const faker = require('faker');

function createIssue() {
  return {
    url: faker.internet.url(),
    repository_url: faker.internet.url(),
    id: faker.random.number(),
    number: faker.random.number(),
    title: faker.lorem.sentence(),
    user: {
      login: faker.internet.userName(),
      id: faker.random.number(),
      avatar_url: faker.image.avatar(),
      html_url: faker.internet.url(),
    },
    created_at: faker.date.past(),
    updated_at: faker.date.past(),
    body: faker.lorem.paragraphs(),
  };
}

function createComment() {
  return {
    url: faker.internet.url(),
    id: faker.random.number(),
    user: {
      login: faker.internet.userName(),
      id: faker.random.number(),
      avatar_url: faker.image.avatar(),
      html_url: faker.internet.url(),
    },
    created_at: faker.date.past(),
    updated_at: faker.date.past(),
    body: faker.lorem.paragraph(),
  };
}

module.exports = () => {
  const issues = Array.from({ length: 5 }).map(createIssue);
  const comments = Array.from({ length: 5 }).map(createComment);
  return {
    issues,
    comments,
  };
};
