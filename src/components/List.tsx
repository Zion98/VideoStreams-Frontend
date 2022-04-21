import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
const List: React.FC<{
  title: string;
  data: any;
  bookmarkFunc?: (moviesid: string) => void;
}> = ({ title, data, bookmarkFunc }) => {
  return (
    <>
      <h2 className="text-white text-2xl font-extralight mb-6">{title}</h2>
      <div className={`grid grid-cols-5 gap-12`}>
        {data.map((item: any, _index: any) => {
          return (
            <Card key={uuidv4()} item={item} bookmarkFunc={bookmarkFunc} />
          );
        })}
      </div>
    </>
  );
};

export default List;
