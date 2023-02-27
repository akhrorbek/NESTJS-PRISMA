import { registerAs } from "@nestjs/config/dist/utils";

interface IDataBase {
    url:string;
}

export const dataBaseConfig = registerAs('database', ():IDataBase => ({
    url: process.env.DATABASE_URL ? String(process.env.DATABASE_URL): undefined
}))