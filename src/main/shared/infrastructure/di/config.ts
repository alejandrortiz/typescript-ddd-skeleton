import convict from "convict";

const config = convict({
    env: {
        doc: 'The application environment.',
        format: ['pro', 'stg', 'tst', 'dev'],
        default: 'default',
        env: 'ENV'
    },
    mongo: {
        url: {
            doc: 'The Mongo connection URL.',
            format: String,
            env: 'MONGO_URL',
            default: 'mongodb://localhost:27017/financial'
        }
    },
    database: {
        driver: {
            doc: 'The Driver connection database.',
            format: ['postgres', 'mysql', 'sqlite', 'mssql', 'mariadb'],
            default: 'postgres',
            env: 'DATABASE_DRIVER'
        },
        user: {
            doc: 'The user to connect to the database.',
            format: String,
            env: 'DATABASE_USER',
            default: 'root'
        },
        password: {
            doc: 'The password of the user who will connect to the database.',
            format: String,
            env: 'DATABASE_PASS',
            default: '1234'
        },
        host: {
            doc: 'The database host.',
            format: String,
            env: 'DATABASE_HOST',
            default: 'localhost'
        },
        port: {
            doc: 'The database port.',
            format: Number,
            env: 'DATABASE_PORT',
            default: 5432
        },
        name: {
            doc: 'The database name.',
            format: String,
            env: 'DATABASE_NAME',
            default: 'financial'
        }
    }
});

config.loadFile([
    `${__dirname}/config/default.json`,
    `${__dirname}/config/${config.get('env')}.json`
]);

export default config;
