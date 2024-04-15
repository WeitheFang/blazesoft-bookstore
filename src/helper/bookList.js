import { v4 as uuidv4 } from "uuid";

export const bookList = [
  {
    id: uuidv4(),
    name: "Verity",
    price: 11.99,
    category: "Psychological",
    description: "This is a book",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: "This Is How You Lose the Time War",
    price: 7.99,
    category: "Science Fiction",
    description: "This is a book",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: "The Wild Robot Escapes",
    price: 12.99,
    category: "Science Fiction",
    description: "This is a book",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: "The Friend Zone",
    price: 7.99,
    category: "Romance",
    description: "This is a book",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
