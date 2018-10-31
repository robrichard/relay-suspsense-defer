'use strict';

const { schema } = require('./schema');
const { printSchema } = require('graphql');
const { writeFileSync } = require('fs');
const { spawnSync } = require('child_process');

writeFileSync('./schema.graphql', printSchema(schema));

spawnSync(
    'node',
    ['node_modules/.bin/relay-compiler', '--schema', './schema.graphql', '--src', './src'],
    { stdio: 'inherit' }
);
