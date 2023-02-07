// import express from 'express';

// const router = express.Router();

import { Router } from 'express';

import {Todo} from '../models/todo';

type RequestBody = { text: string };

type RequetParams = { todoId: string };

let todos: Todo[] = [];

const router = Router();

router.get('/',(req,res,next)=>{
   res.status(200).json({todos:todos});
});

router.post('/todo',(req,res,next) => {
    const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text
  };

  todos.push(newTodo);
  res.status(201).json({message: 'Added Todo', todo:newTodo, todos:todos});
});

router.put('/todo/:todoId', (req,res,next)=>{
    const params = req.params as RequetParams;
  const tid = params.todoId;
  const body = req.body as RequestBody;
  const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);

  if(todoIndex >= 0){
   todos[todoIndex] = {id:todos[todoIndex].id, text: body.text};
   return res.status(200).json({message: 'Updated todo', todos: todos});
  }

  res.status(404).json({message: 'could not findtodo for this id.'})
});

router.delete('/todo/:todoId', (req,res,next) => {
    const params = req.params as RequetParams;
  todos = todos.filter(todoItem => todoItem.id !== params.todoId)
  res.status(200).json({message: 'Deleted todo', todos: todos});
});

export default router;