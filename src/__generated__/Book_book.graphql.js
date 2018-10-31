/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Author_book$ref = any;
type Year_book$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Book_book$ref: FragmentReference;
export type Book_book = {|
  +title: ?string,
  +$fragmentRefs: Author_book$ref & Year_book$ref,
  +$refType: Book_book$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Book_book",
  "type": "Book",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Author_book",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Year_book",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1dd9bdf0d4e90fe68c4f7c140571f506';
module.exports = node;
