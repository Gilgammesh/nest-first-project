import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
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

	@Get(':id')
	async getTask(@Param('id') id: string): Promise<Task> {
		return this.tasksService.get(id);
	}

	@Post()
	async createTask(@Body() task: CreateTaskDto): Promise<Task> {
		const newTask = await this.tasksService.create(task);
		return newTask;
	}

	@Delete(':id')
	async deleteTask(@Param('id') id: string): Promise<boolean> {
		return await this.tasksService.delete(id);
	}
}
