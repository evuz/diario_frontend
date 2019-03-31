class LogoutService {
  constructor({ repository }) {
    this.repository = repository;
  }

  execute() {
    return this.repository.logout();
  }
}

export default LogoutService;
