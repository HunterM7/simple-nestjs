import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'UsersCollection', timestamps: true })
export class User {
  @Prop()
  userId: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  age: number;

  @Prop([String])
  favoriteFoods: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
