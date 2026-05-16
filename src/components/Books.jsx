const shelves = ["Want to Read", "Reading", "Finished"]
const Books = ({ book, onMove, onRemove }) => {
  const nextShelf = shelves[shelves.indexOf(book.shelf) + 1]

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      {book.cover
        ? <img src={book.cover} className="w-full h-auto object-cover" />
        : <div className="w-full h-auto bg-gray-700 flex items-center justify-center text-xs text-gray-500">No Cover</div>
      }
      <div className="p-2">
        <p className="text-xs truncate text-gray-100">{book.title}</p>
        <p className="text-xs text-gray-400 truncate">{book.author}</p>
        <div className="flex gap-1 mt-2">
          {nextShelf && <button onClick={() => onMove(book, nextShelf)} className="flex-1 text-xs bg-amber-400 text-gray-950 rounded py-1 cursor-pointer hover:bg-amber-300">{nextShelf}</button>}
          <button onClick={() => onRemove(book.id)} className="text-xs bg-gray-700 text-gray-300 rounded py-1 px-2 cursor-pointer hover:bg-gray-600">✕</button>
        </div>
      </div>
    </div>
  )
}

export default Books