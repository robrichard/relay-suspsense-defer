import React from 'react';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

function Author({book}) {
    return (
        <p><b>Author:</b> {book.author}</p>
    )
}


export default createFragmentContainer(Author, {
    book: graphql`
        fragment Author_book on Book {
            author @defer
        }
    `
})
