import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import api from '../utils/Api';
import SikBar from '../components/SikBar';


const Results = () => {
  const [page, setPage] = useState(1);
  const [token, setToken] = useState();
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();


  const query = searchParams.get('search_query');


  useEffect(() => {
    const params = {
      query: query,
 
      token: page > 1 ? token : undefined,
    };

    api.get(`/search`, { params }).then((res) => {
   
      setToken(res.data.continuation);
 
      setData((prev) => prev.concat(res.data.data));
    });
  }, [query, page]);

  return (
    <div className="flex gap-3">
      <SikBar />

      <div className="mx-auto h-[90vh] overflow-auto p-4">
        <h2 className="text-xl mb-5">
          <span className="font-bold">{query}</span> için sonuçlar
        </h2>

        <div  className="flex flex-col gap-5 justify-center">
          {data?.map(
            (item) =>
              item?.type === 'video' && (
                <VideoCard key={item?.id} video={item} isRow={true} />
              )
          )}

          <button
            onClick={() => setPage(page + 1)}
            className="bg-zinc-600 py-2 px-5 rounded-md my-10 hover:bg-zinc-800 transition"
          >
            Daha Fazla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;