import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import mongoose from 'mongoose';

@Injectable()
export class TasksService {
	constructor(@InjectModel('Task') private taskModel: Model<TaskDocument>) {}

	async getAll(): Promise<Task[]> {
		return await this.taskModel.find();
	}

	async get(id: string): Promise<Task> {
		return await this.taskModel.findById(id);
	}

	async create(createTaskDto: CreateTaskDto): Promise<Task> {
		const createdTask = new this.taskModel(createTaskDto);
		return await createdTask.save();
	}

	async delete(id: string): Promise<boolean> {
		try {
			await this.taskModel.findByIdAndDelete(id);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}
