import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const connectionConfig: MysqlConnectionOptions  = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'ronle75',
    database: 'nestjs',
    entities: [
        'src/**/*.entity{.ts,.js}'
    ],
    migrations: [
        // Where to find migration files
        'src/database/migrations/*.ts'
    ],
    synchronize: false
};