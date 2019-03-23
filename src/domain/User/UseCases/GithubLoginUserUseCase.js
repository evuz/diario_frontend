class GithubLoginUserUseCase {
  constructor({ service }) {
    this.service = service;
  }

  execute() {
    return this.service.execute();
  }
}

export default GithubLoginUserUseCase;
