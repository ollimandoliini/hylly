import React, { Component } from "react";

export const CollectionForm = () => {
  return (
    <div id="collectionForm">
      Add collection
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Description:
          <input type="text" name="description" />
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
