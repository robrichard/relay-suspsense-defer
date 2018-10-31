import React, { Component } from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import relayEnvironment from './relayEnvironment';
import Book from './Book';

class App extends Component {
    render() {
        return (
            <div className="App">
                <QueryRenderer
                    environment={relayEnvironment}
                    query={graphql`
                        query AppQuery {
                            book {
                                ...Book_book
                            }
                        }
                    `}
                    variables={{}}
                    render={({ props }) => {
                        if (!props) {
                            return <div>Loading Query</div>;
                        }
                        return <Book book={props.book} />;
                    }}
                />
            </div>
        );
    }
}

export default App;
