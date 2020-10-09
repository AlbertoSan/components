import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail.js";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        date="Today at 6:00PM"
        commentText="The best blog!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Hera"
        date="Today at 2:43PM"
        commentText="I like this site!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Teresa"
        date="Today at 1:28AM"
        commentText="Another comment!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail author="Alex"
        date="Yesterday at 3:57PM"
        commentText="Another comment!"
        avatar={faker.image.avatar()}/>
      <CommentDetail author="Jane"
        date="Yesterday at 6:00AM"
        commentText="Another comment!"
        avatar={faker.image.avatar()}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
