class GetIssuesByNumberService {
  constructor({ repository }) {
    this.repository = repository;
  }

  execute({ number }) {
    return this.repository.getIssueByNumber({ number }).then(issue => issue.flat());
  }
}

export default GetIssuesByNumberService;
