const Books = ({ book }) => (
  <div className="cursor-pointer hover:opacity-75">
    {book.cover
      ? <img src={book.cover} className="w-full h-36 object-cover rounded-lg" />
      : <div className="w-full h-36 bg-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-500">No Cover</div>
    }
    <p className="text-xs mt-1 truncate text-gray-100">{book.title}</p>
    <p className="text-xs text-gray-400 truncate">{book.author}</p>
  </div>
)

export default Books