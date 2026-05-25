import { completeTask, createTask } from "../../src/tasks/task.service";

describe("TaskService", () => {
  describe("createTask", () => {
    it("creates a task with a title", () => {
      const task = createTask("Learn CI/CD");

      expect(task.title).toBe("Learn CI/CD");
      expect(task.completed).toBe(false);
      expect(task.id).toBeDefined();
      expect(task.createdAt).toBeInstanceOf(Date);
    });

    it("trims the task title", () => {
      const task = createTask("   Learn Github Actions   ");
      expect(task.title).toEqual("Learn Github Actions");
    });

    it("throws an error when title is empty", () => {
      expect(() => createTask("")).toThrow("Task title is required");
    });

    it("throws an error with title contains only spaces", () => {
      expect(() => createTask("   ")).toThrow("Task title is required");
    });
  });

  describe("completedTask", () => {
    it("marks a task as a completed", () => {
      const task = createTask("Write tests");

      const completedTask = completeTask(task);

      expect(completedTask.completed).toBe(true);
      expect(completedTask.id).toBe(task.id);
      expect(completedTask.title).toBe(task.title);
    });
  });
});
