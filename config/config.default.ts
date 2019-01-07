import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from './resolve';

/** 数据库连接方式 */
export const ORM_CONFIG: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'czd',
    entities: [resolve('/**/*.entity{.ts,.js}') ],
    synchronize: true,
};
