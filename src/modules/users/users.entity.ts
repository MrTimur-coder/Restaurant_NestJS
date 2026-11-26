import { UserType } from "./enum/user-types.enum.js";

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    userType: UserType;
    createdAt: Date;
    active: boolean;
}