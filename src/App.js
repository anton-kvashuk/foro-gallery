import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Gallery from "./gallery/Gallery";
import Header from "./Header";
import getData, { _getData } from "./data";
import Spinner from "./spinner/spinner";

function App() {
  // let images = getData();
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    const fetchData = async () => {
      const _images = await _getData(page, limit);
      setImages(_images);
    };
    fetchData();
  }, [page, limit]);

  return (
    <Fragment>
      <Header />
      <div className="pageOption">
        <div className="widjetOption">
          <h3>Page pagination:</h3>
          <section>
            <button onClick={() => (page >= 2 ? setPage(page - 1) : 1)}>
              Back
            </button>
            <p>{page}</p>
            <button onClick={() => setPage(page + 1)}>Next</button>
          </section>
        </div>
        <div className="widjetOption">
          <h3>Foro per page:</h3>
          <section>
            <button onClick={() => (limit >= 20 ? setLimit(limit - 10) : 10)}>
              Back
            </button>
            <p>{limit}</p>
            <button onClick={() => setLimit(limit + 10)}>Next</button>
          </section>
        </div>
      </div>

      <div className="gallery">
        <Gallery imgarr={images} />
      </div>
    </Fragment>
  );
}

export default App;
