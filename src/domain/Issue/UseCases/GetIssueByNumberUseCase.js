class GetIssuesByNumberUseCase {
  constructor({ service }) {
    this.service = service;
  }

  execute({ number }) {
    return this.service.execute({ number });
  }
}

export default GetIssuesByNumberUseCase;
