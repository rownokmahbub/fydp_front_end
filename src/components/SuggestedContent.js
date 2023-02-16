import React from "react";
import { BsSearch } from "react-icons/bs";

const SuggestedContent = () => {
  return (
    <div>
      <input
        className=" rounded bg-slate-100"
        type="text"
        placeholder="Search"
      />
      <div className="bg-slate-100 rounded">
        <h1 className="font-semibold mt-4 pl-4">Trends for you</h1>
        <h1 className="m-2">#BaBYdoge</h1>
        <h1 className="m-2">#BaBYdoge</h1>
        <h1 className="m-2">#BaBYdoge</h1>
      </div>
      <div>
        <h1 className="font-bold mt-4 pl-4">Who to follow</h1>
        <div className="flex bg-slate-100">
          <h1 className="font-semibold mt-4 pl-4">NASA</h1>
          <button className="btn btn-primary btn-sm">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default SuggestedContent;
