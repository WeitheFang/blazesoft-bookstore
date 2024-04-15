import { bookActionTypes } from "../../actions/book/bookAction";
import { bookList } from "../../helper/bookList";
const initialState = {
  books: bookList,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case bookActionTypes.AddBook:
      return { ...state, books: [...state.books, action.payload] };
    case bookActionTypes.UpdateBook:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? { ...book, ...action.payload } : book
        ),
      };
    case bookActionTypes.DeleteBook:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};
