import Books from "./Books"

const Shelf = ({ title, books }) => (
  <div>
    <h2 className="text-amber-400 font-semibold mb-3">{title} <span className="text-gray-500 text-sm">({books.length})</span></h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {books.length === 0
        ? <p className="text-gray-600 text-xs col-span-3">Nothing here yet</p>
        : books.map(b => <Books key={b.id} book={b} />)
      }
    </div>
  </div>
)

export default Shelf
