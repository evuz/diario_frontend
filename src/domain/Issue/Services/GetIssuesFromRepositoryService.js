class GetIssuesFromRepositoryService {
  constructor({ repository }) {
    this.repository = repository;
  }

  execute({ config }) {
    return this.repository.getIssuesFromRepository({ config }).then(res => res.map(issue => issue.flat()));
  }
}

export default GetIssuesFromRepositoryService;
