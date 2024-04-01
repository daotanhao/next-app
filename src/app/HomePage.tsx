"use client";
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";

const HomePage = () => {
  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/api/user");
    const res = await data.json();
    console.log(res);
  };
  fetchData();

  return (
    <div>
      Overview
      <div>
        <Card className="col-span-12 sm:col-span-4 h-[260px] w-[180px]">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://cdn.animevietsub.us/data/poster/2023/12/07/animevsub-mzv5Xxg7Tx.jpg"
          />
          <CardFooter className="absolute z-10 bottom-0 flex-col !items-start">
            <a className="text-white font-medium text-sm">
              Stream the Acme event
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
