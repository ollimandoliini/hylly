import React, { Component } from "react";

interface Props {
  userCollections: CollectionRow[];
}

interface CollectionRow {
  name: string;
  description: string;
  createdAt: string;
}

export const CollectionTable = (props: Props) => {
  return (
    <table id="collectionTable">
      <thead>
        <tr>
          <td>Name</td>
          <td>Description</td>
          <td>Created at</td>
        </tr>
      </thead>
      <tbody>{props.userCollections.map(CollectionRow)}</tbody>
    </table>
  );
};

const CollectionRow = (collection: CollectionRow) => {
  return (
    <tr>
      <td> {collection.name} </td>
      <td> {collection.description} </td>
      <td> {collection.createdAt} </td>
    </tr>
  );
};
