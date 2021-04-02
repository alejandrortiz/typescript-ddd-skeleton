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
    }
});

config.loadFile([
    `${__dirname}/config/default.json`,
    `${__dirname}/config/${config.get('env')}.json`
]);

export default config;
