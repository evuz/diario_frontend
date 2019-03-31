class LogoutUseCase {
  constructor({ service }) {
    this.service = service;
  }

  execute() {
    return this.service.execute();
  }
}

export default LogoutUseCase;
