import React from "react";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="flex flex-col items-center md:mt-2">
      <div className="max-w-[270px] h-[480px] bg-black rounded-xl shadow-xl flex flex-col justify-between">
        <img
          className="rounded-t-lg h-200px"
          style={{ height: "175px", width: "320px" }}
          src={src}
          alt={title}
        />

        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <h5 className="mb-2 md:text-xl text-lg font-bold tracking-tight text-white">
              {title?.slice(0, 90)}
            </h5>
            <p className="mb-3 md:text-sm text-xs font-normal text-white">
              {description?.slice(0, 95)}
            </p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-24 inline-flex text-sm items-center px-2 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
