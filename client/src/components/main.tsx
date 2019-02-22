import React, { Component } from "react";
import { checkPropTypes } from "prop-types";

const collections = [
  "Collection 1",
  "Collection 2",
  "Collection 3",
  "Collection 4",
  "Collection 5",
  "Collection 6",
  "Collection 7",
  "Collection 8"
];

class Main extends Component {
  render() {
    return <div className="appMain"> {collectionButtons(collections)} </div>;
  }
}

function collectionButtons(collections: string[]) {
  const collectionItems = collections.map((collection: string) => (
    <div className="collectionBtn" key={collection}>
      {collection}
    </div>
  ));
  return <div id="collectionWrapper"> {collectionItems} </div>;
}

export default Main;
