class GetIssuesFromRepositoryUseCase {
  constructor({ service }) {
    this.service = service;
  }

  execute({ config } = {}) {
    return this.service.execute({ config });
  }
}

export default GetIssuesFromRepositoryUseCase;
