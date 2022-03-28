import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './schemas/task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getTasks(): Promise<Task[]> {
    return this.tasksService.getAll();
  }

  // @Get(':id')
  // getTask(@Param('id') id: string): Task {
  //   return this.tasksService.getTask(parseInt(id, 10));
  // }

  @Post()
  async createTask(@Body() task: CreateTaskDto): Promise<Task> {
    const newTask = await this.tasksService.create(task);
    return newTask;
  }

  @Put()
  updateTask(): string {
    return 'Tarea actualizada';
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): string {
    return `Tarea eliminada: ${id}`;
  }
}
