import Header from "./Header";
import IndianAuthors from "./IndianAuthors";
import WorldAuthors from "./WorldAuthors";
import AuthorCard from "./AuthorCard";

function App() {
  return (
    <div>
      <Header />

      <IndianAuthors />
      <WorldAuthors />

      <h2>Featured Authors</h2>

      <AuthorCard
        name="R.K. Narayan"
        country="India"
        book="Malgudi Days"
      />

      <AuthorCard
        name="William Shakespeare"
        country="England"
        book="Hamlet"
      />

      <AuthorCard
        name="J.K. Rowling"
        country="United Kingdom"
        book="Harry Potter"
      />
    </div>
  );
}

export default App;