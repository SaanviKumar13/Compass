import { UserSchemaType } from '../../shared/types/user/user.schema';
import db from '../../loaders/database';
import { ERRORS } from '../../shared/errors';
import { ObjectId } from 'mongodb';

export async function findUserById(userId: string): Promise<UserSchemaType> {
    const usersCollection = (await db()).collection<UserSchemaType>('users');
    const user = await usersCollection.findOne({ _id: new ObjectId(userId) },{ projection: { password: 0 } });
    if (!user) {
        throw {
            statusCode: ERRORS.USER_NOT_FOUND.code,
            message: ERRORS.USER_NOT_FOUND.message.error,
        };
    }
    return user;
}