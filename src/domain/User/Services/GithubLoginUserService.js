class LoginUserService {
  constructor({ repository }) {
    this.repository = repository;
  }

  execute() {
    return this.repository.githubLogin();
  }
}

export default LoginUserService;
