import React, { Fragment, useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [paginatedPosts, setPaginatedPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [searchTitle, setSearchTitle] = useState("");
  const perPage = 5;

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((exp) => console.log(exp.message));
  }, []);

  useEffect(() => {
    const startIndex = page * perPage;
    const endIndex = startIndex + perPage;
    const paginatedPosts = posts.slice(startIndex, endIndex);
    setPaginatedPosts(paginatedPosts);
  }, [posts, page]);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    setSearchTitle(event.target.value);
    let paginatedFilteredPosts = posts.filter((post) => {
      let { title } = post;
      return title.toLowerCase().includes(value);
    });
    setPaginatedPosts(paginatedFilteredPosts);
  };

  return (
    <Fragment>
      <input
        style={{ width: "20%", marginLeft: "40%" }}
        value={searchTitle}
        placeholder="Search Title"
        onChange={handleSearch}
      ></input>
      {paginatedPosts.map((post, index) => (
        <div key={index} className="posts">
          <div className="post">
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
      <footer>
        <button disabled={page <= 0} onClick={handlePrev}>
          Prev
        </button>
        <button
          disabled={(page + 1) * perPage >= posts.length}
          onClick={handleNext}
        >
          Next
        </button>
        <p>Page {page + 1}</p>
      </footer>
    </Fragment>
  );
};

export default Home;
