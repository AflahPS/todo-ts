class TodoModel {
  id: string;
  textContent: string;

  constructor(textContent: string) {
    this.textContent = textContent;
    this.id = Date.now().toString();
  }
}

export default TodoModel;
