import { randomUUID } from "crypto";
import type { Task } from "./task.model";

export function createTask(title: string): Task {
  const trimmedTitle = title.trim();

  if (!trimmedTitle) {
    throw new Error("Task title is required");
  }

  return {
    id: randomUUID(),
    title: trimmedTitle,
    completed: false,
    createdAt: new Date(),
  };
}

export function completeTask(task: Task): Task {
  return {
    ...task,
    completed: true,
  };
}
