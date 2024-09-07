import { User } from "./user.type";

type RegisteredUserRequestBody = Omit<User, '_id' | 'nickname'>;

export { type RegisteredUserRequestBody };
