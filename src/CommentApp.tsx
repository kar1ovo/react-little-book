import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

function CommentApp() {
  return (
    <div className="max-w-md my-8 mx-auto bg-gray-200 rounded-lg shadow-lg p-4">
      <CommentInput />
      <CommentList />
    </div>
  );
}

export default CommentApp;
