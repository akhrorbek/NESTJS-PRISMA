import { ConfigModuleOptions } from "@nestjs/config/dist";
import { AppConfig } from "./app";
import { dataBaseConfig } from "./database";

export const config: ConfigModuleOptions = {
    load:[AppConfig, dataBaseConfig],
    cache:true,
    isGlobal:true
}