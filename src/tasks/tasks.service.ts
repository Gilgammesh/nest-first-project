import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<TaskDocument>) {}

  async getAll(): Promise<Task[]> {
    return await this.taskModel.find();
  }

  // getTask(id: number): Task {
  //   return this.tasks.find((task) => task.id === id);
  // }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return await createdTask.save();
  }
}
