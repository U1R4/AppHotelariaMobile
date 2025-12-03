import { Request, Response, NextFunction } from "express";

function getTasks(req: Request, res: Response, next: NextFunction) {
  res.send("Listar todas as tarefas");
}

function getTask(req: Request, res: Response, next: NextFunction) {
  res.send("Listar uma tarefa");
}

function createTask(req: Request, res: Response, next: NextFunction) {
  res.send("Criar tarefa");
}

function updateTask(req: Request, res: Response, next: NextFunction) {
  res.send("Atualizar uma tarefa");
}

function deleteTask(req: Request, res: Response, next: NextFunction) {
  res.send("Deletar uma tarefa");
}

export default {getTasks, getTask, createTask, updateTask, deleteTask,}

