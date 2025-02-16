import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    userName: string;

    @Prop()
    accountNumber: number;

    @Prop()
    emailAddress: string;

    @Prop()
    identityNumber: number;
}

export const UserSchema = SchemaFactory.createForClass(User);