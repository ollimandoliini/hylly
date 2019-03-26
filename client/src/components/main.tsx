import React, { Component, useState, useEffect } from "react";
import { CollectionForm } from "./CollectionForm";
import { CollectionTable } from "./CollectionTable";

const collections = [
  { name: "levyt", description: "levyt", createdAt: "2019-03-25" },
  { name: "kirjat", description: "kirjat", createdAt: "2019-03-26" }
];

const apiUrl = "http://localhost:2020/";
const userId = "1";

const Main = () => {
  const [data, setData] = useState({ collections: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUserCollections(1);
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="appMain">
      <CollectionTable userCollections={data.collections} />
      <CollectionForm />
    </div>
  );
};

const getUserCollections = async (userId: number) => {
  const url = "http://localhost:2020/collections/user/1";
  const data = await fetch(url);
  return data.json();
};

export default Main;
