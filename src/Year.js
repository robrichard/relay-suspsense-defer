import React from 'react';
import {createFragmentContainer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

function Year({book}) {
    return (
        <p><b>Year:</b> {book.year}</p>
    )
}


export default createFragmentContainer(Year, {
    book: graphql`
        fragment Year_book on Book {
            year @defer
        }
    `
})
