const { schema } = require('./schema');
const { ApolloServer } = require('apollo-server');

const book = {
    id: 'xyz',
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    year: '1990',
};

const server = new ApolloServer({ schema, rootValue: { book } });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
