import React, { useState } from "react";
import { linkIcon, copy, tick, loader } from "../assets";
import { useLazyGetSummaryQuery} from "../services/article";
const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

const [getSummary,{error,isFetching}] = useLazyGetSummaryQuery;
  const handleSubmit = async (e) => {
    // Remove the extra parentheses here
    e.preventDefault(); // Prevent the default form submission behavior
    const {data} =await getSummary({articleUrl:article.url});
    if(data?.summary)
    {
      const newArticle={...article,summary:data.summary};
      setArticle(newArticle);
      console.log(newArticle);
    }
  };
  

  return (
    <section className="mt-16 w-full max-w-2xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit} // Use the handleSubmit function here
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-6 ml-3 w-5 "
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            required
            className="url_input peer"
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
         
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
