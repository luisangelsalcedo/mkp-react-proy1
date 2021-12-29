import { useState } from "react";
import "./App.css";
import Post from "./componets/Post";
import data from "./helpers/data";

function App() {
  const [posts, setPosts] = useState(data);
  const [isAsc, setIsAsc] = useState(true); //ascendente por defecto

  const sortAsc = () => {
    const arr = ascendente(posts);
    setPosts([...arr]);
    setIsAsc(true);
  };

  const sortDes = () => {
    const arr = descendente(posts);
    setPosts([...arr]);
    setIsAsc(false);
  };

  const uploadArrPost = obj => {
    // actualizar el arreglo

    posts.forEach(({ id, votes }) => {
      if (obj.id === id) votes = obj.votes;
    });

    // reordenando el arreglo según isAsc
    if (isAsc) setPosts([...ascendente(posts)]);
    else setPosts([...descendente(posts)]);
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <div className="botones">
        Orden:
        <button
          onClick={sortAsc}
          className={isAsc ? "btn btn-primary" : "btn btn-outline-primary"}
        >
          Ascendente
        </button>
        <button
          onClick={sortDes}
          className={!isAsc ? "btn btn-primary" : "btn btn-outline-primary"}
        >
          Descendente
        </button>
      </div>
      <div>
        {posts.map(post => (
          <Post key={post.id} post={post} uploadArrPost={uploadArrPost} />
        ))}
      </div>
    </div>
  );
}

export default App;

const ascendente = arr => {
  return arr.sort((a, b) => {
    if (a.votes > b.votes) return 1;
    if (a.votes < b.votes) return -1;
    return 0;
  });
};
const descendente = arr => {
  return arr.sort((a, b) => {
    if (a.votes < b.votes) return 1;
    if (a.votes > b.votes) return -1;
    return 0;
  });
};
