class CreateArticleUseCase {
  constructor({ service }) {
    this.service = service;
  }

  execute({ article }) {
    return this.service.execute({ article });
  }
}

export default CreateArticleUseCase;
