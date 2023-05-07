import Reac, { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummariesQuery } from '../services/article';

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });


  const [getSummaries, { error, isFetching }] = useLazyGetSummariesQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const { data } = await getSummaries({ articleUrl: article.url });

    if (data?.summary) {

      const newArticle = { ...article, summary: data.summary };
      setArticle(newArticle);

      console.log(newArticle);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className='absolute left-0 my-2 ml-3 w-5'
          />
          <input
            type="url"
            placeholder='Paste your article url here'
            className='url_input peer'
            value={article.url}
            onKeyDown={handleKeyDown}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
          />
          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >
            <p>↵</p>
          </button>
        </form>
      </div>

      {/* { Display the summary} */}

      <div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img
            src={loader}
            alt='loader'
            className='w-32 h-32 object-contain'
          />
        ) : error ? (
          <p className='font-inter text-lg text-red-500'>
            Something went wrong
          </p>
        ) : ( article.summary && (
          <div className='flex flex-col gap-2'>
            <h2 className='font-satoshi text-bold text-gray-600 text-xl'>
              Article <span className='blue_gradient'>Summary</span>
            </h2>
            <div className='summary-box'>
              <p className='text-gray-700 text-sm font-medium font-inter'>
                {article.summary}
              </p>
            </div>
          </div>
        )
        )}
      </div>
    </section>
  )
}

export default Demo