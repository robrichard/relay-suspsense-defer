import React from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import Author from './Author';
import Year from './Year';

function Book({ book }) {
    return (
        <React.Fragment>
            <h1>{book.title}</h1>
            <Author book={book} />
            <Year book={book} />
        </React.Fragment>
    );
}

export default createFragmentContainer(Book, {
    book: graphql`
        fragment Book_book on Book {
            title
            ...Author_book
            ...Year_book
        }
    `,
});
