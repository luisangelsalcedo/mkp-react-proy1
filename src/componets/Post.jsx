import { useState } from "react";
import "./_Post.css";

const Post = ({ post, uploadArrPost }) => {
  const { title, description, url, votes, writer_avatar_url, post_image_url } =
    post;

  const [votesNumber, setVotesNumber] = useState(votes);

  const incrementarVotos = () => {
    post.votes = votesNumber + 1;
    setVotesNumber(post.votes);
    uploadArrPost(post);
  };

  const disminuirVotos = () => {
    post.votes = votesNumber - 1;
    setVotesNumber(post.votes);
    uploadArrPost(post);
  };
  return (
    <div className="post">
      <div className="post_image">
        <div>
          <img src={post_image_url} alt="" />
        </div>
      </div>

      <div className="post_votes">
        <div
          onClick={() => incrementarVotos()}
          role="button"
          tabIndex={0}
          aria-label="up"
        >
          <i className="fa fa-sort-asc" aria-hidden="true"></i>
        </div>
        <span>{votesNumber}</span>
        <div
          onClick={() => disminuirVotos()}
          role="button"
          tabIndex={0}
          aria-label="down"
        >
          <i className="fa fa-sort-desc" aria-hidden="true"></i>
        </div>
      </div>

      <div>
        <a href={url} alt="">
          <h6>{title}</h6>
        </a>
        <p>{description}</p>
        <div className="post_writer">
          <p>Escrito por</p>
          <figure>
            <img src={writer_avatar_url} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Post;
