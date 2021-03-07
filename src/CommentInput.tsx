function CommentInput() {
  return (
    <div className="space-y-6 border border-gray-50 p-4">
      <div className="rounded border border-gray-50 p-4">
        <span className="mr-12">username:</span>
        <input type="text" className="outline-none rounded h-8" />
      </div>
      <div className="rounded border border-gray-50 p-4">
        <span className="mr-12">comment:</span>
        <input type="text" className="outline-none rounded h-32" />
      </div>
      <div className="flex flex-row-reverse">
        <button className="bg-white rounded-md shadow h-12 w-20">submit</button>
      </div>
    </div>
  );
}

export default CommentInput;
