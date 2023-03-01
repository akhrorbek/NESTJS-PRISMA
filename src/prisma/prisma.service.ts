import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    url:config.getOrThrow<string>('database.url')
                }
            }
        })
    }

    onModuleInit():Promise<void> {
        return this.$connect()
    }

    onModuleDestroy():Promise<void> {
        return this.$disconnect()
    }
}
