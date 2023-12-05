// AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookForm from "./features/BookForm/BookForm";
import Home from "./features/Home/Home";
import BrowseBooks from "./features/BrowseBooks/BrowseBooks";
import Header from "./Header";
import BookDetails from "./features/BookDetails/BookDetails";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
          <Route index element={<CommonWrapper> <Home></Home> </CommonWrapper>} />
          <Route path="browse-books" element={<CommonWrapper> <BrowseBooks></BrowseBooks> </CommonWrapper>} />
          <Route path="create-new-book" element={<CommonWrapper> <BookForm></BookForm> </CommonWrapper>} />
          <Route path="browse-books/:bookId" element={<CommonWrapper> <BookDetails></BookDetails> </CommonWrapper>} />
      </Routes>
    </Router>
  );
};

function CommonWrapper({children}:any){
    return <>
        <Header></Header>
        {children}
    </>
}

export default AppRouter;
