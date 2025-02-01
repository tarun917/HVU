import { useState, useEffect } from 'react';
import { X, Heart, Search, BookOpen, Bookmark } from 'react-feather';

const VirtualLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBook, setSelectedBook] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [books, setBooks] = useState([
    // Sample books - you can expand this list
    {
      id: 1,
      title: 'Advanced Calculus',
      author: 'Dr. Mathematics',
      category: 'Maths',
      pages: 300,
      isFavorite: false,
      pdfUrl: '/sample.pdf',
      cover: '/maths-cover.jpg'
    },
    {
      id: 2,
      title: 'Mechanical Principles',
      author: 'Eng. John Doe',
      category: 'Engineering',
      pages: 450,
      isFavorite: false,
      pdfUrl: '/sample.pdf',
      cover: '/eng-cover.jpg'
    },
    {
        id: 3,
        title: 'Alfa Centauri',
        author: 'Tarun Daharwal',
        category: 'Novels',
        pages: 250,
        isFavorite: false,
        pdfUrl: '/sample.pdf',
        cover: '/alfa-cover.jpg'
      },
    // Add more books as needed...
  ]);

  // Filtered books based on search and category
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Toggle favorite
  const toggleFavorite = (bookId) => {
    setBooks(books.map(book => 
      book.id === bookId ? { ...book, isFavorite: !book.isFavorite } : book
    ));
  };

  // Book categories
  const categories = ['All', 'Maths', 'Engineering', 'Novels', 
    'Children Books', 'Comics', 'Science', 'History'];

  return (
    <div className="min-h-screen w-7/8 ml-36 mr-0 mt-0 bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Digital Virtual Library
        </h1>
        <p className="text-gray-400 mt-2">Explore thousands of digital books</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-3 top-3.5 text-gray-400" />
        </div>
        
        <select
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map(book => (
          <div key={book.id} className="relative bg-gray-800 rounded-xl p-4 hover:transform hover:scale-105 transition-all duration-300 group">
            <div className="relative">
              <img 
                src={book.cover} 
                alt={book.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <button 
                onClick={() => toggleFavorite(book.id)}
                className="absolute top-2 right-2 p-2 bg-gray-900/50 rounded-full hover:bg-cyan-500 transition-colors"
              >
                <Heart 
                  className={`w-5 h-5 ${book.isFavorite ? 'text-red-500 fill-current' : 'text-white'}`}
                />
              </button>
            </div>

            <h3 className="text-white font-semibold mb-2 truncate">{book.title}</h3>
            <p className="text-gray-400 text-sm mb-2">by {book.author}</p>
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-cyan-400">
                {book.category}
              </span>
              <button
                onClick={() => setSelectedBook(book)}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white transition-colors"
              >
                <BookOpen size={16} />
                Read
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Book Reader Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">{selectedBook.title}</h2>
              <button 
                onClick={() => setSelectedBook(null)}
                className="p-2 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto p-4">
              <iframe
                src={selectedBook.pdfUrl}
                className="w-full h-[70vh] rounded-lg"
                title={selectedBook.title}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-800 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                  <Bookmark size={18} />
                  <span>Bookmark</span>
                </button>
                <span className="text-sm text-gray-500">
                  Page 1 of {selectedBook.pages}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white">
                  Previous
                </button>
                <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualLibrary;