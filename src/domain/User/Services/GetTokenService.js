class GetTokenService {
  constructor({ repository }) {
    this.repository = repository;
  }

  execute() {
    return this.repository.getToken();
  }
}

export default GetTokenService;
