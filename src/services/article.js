import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';



const rapidApiKey=import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
const rapidApiHost=import.meta.env.VITE_RAPID_API_ARTICLE_HOST;
const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: 'https://time.com/6266679/musk-ai-open-letter/',
      length: '3'
    },
    headers: {
      'X-RapidAPI-Key': 'f2ceb47535mshfd845a4135e8f97p1bf4aejsnf1931b2e1e35',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };
  
export const articleApi=createApi({
    reducerPath:'articleApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    }),
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set('X-RapidAPI-Host', rapidApiHost);
      return headers;
    },
    
    endpoints:(builder)=>({
    getSummary:builder.query({
       query:(params)=>{`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`}                  // endpoint to call the url
    })
    })
});

export const {useLazyGetSummaryQuery}=articleApi;