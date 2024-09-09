import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import Book from "./Book";

function App() {
  return (
    <div>
      <Header />
      {notes.map((x) => (
        <Book key={x.id} title={x.title} para={x.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
