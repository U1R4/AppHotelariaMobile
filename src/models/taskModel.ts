class Task {
  id: number;
  name: string;
  description: string;

  private static nextID = 1;

  constructor(name: string, description: string) {
    this.id = Task.nextID++;
    this.name = name;
    this.description = description;
  }
}
