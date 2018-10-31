import {
    Environment,
    Network,
    RecordSource,
    Store,
    Observable,
} from 'relay-runtime';
import fetchMultipart from 'fetch-multipart-graphql';

function fetchQuery(
    operation,
    variables,
) {
    return Observable.create(sink => {
        fetchMultipart('http://localhost:4000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: operation.text,
                variables,
            }),
            onNext: json => sink.next(json),
            onError: err => sink.error(err),
            onComplete: () => sink.complete(),
        })
    })
}

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

export default environment;
