// BookDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const BookDetails: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const books = useSelector((state: RootState) => state.browseBooks.books);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    // Handle case where book is not found
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h2>{book.bookName} Details</h2>
      {/* Display other book details */}
    </div>
  );
};

export default BookDetails;
