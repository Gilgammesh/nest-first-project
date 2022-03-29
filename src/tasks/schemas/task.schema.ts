import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({ timestamps: true, versionKey: false })
export class Task {
	@Prop({ unique: true })
	id: number;

	@Prop()
	title: string;

	@Prop()
	description: string;

	@Prop()
	done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
