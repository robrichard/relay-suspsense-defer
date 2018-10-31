'use strict';

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    specifiedDirectives,
} = require('graphql');
const { GraphQLDeferDirective } = require('apollo-server');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

exports.schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            book: {
                type: new GraphQLObjectType({
                    name: 'Book',
                    fields: {
                        id: {
                            type: GraphQLID,
                        },
                        title: {
                            type: GraphQLString,
                        },
                        author: {
                            type: GraphQLString,
                            async resolve(root) {
                                await sleep(3000);
                                return root.author;
                            },
                        },
                        year: {
                            type: GraphQLString,
                            async resolve(root) {
                                await sleep(5000);
                                return root.year;
                            },
                        },
                    },
                }),
            },
        },
    }),
    directives: [GraphQLDeferDirective, ...specifiedDirectives],
});
