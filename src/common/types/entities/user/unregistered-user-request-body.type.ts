import { User } from "./user.type";

type UnregisteredUserRequestBody = Omit<User, '_id'>;

export { type UnregisteredUserRequestBody };
