import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = function () {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search Order #"
        className="rounded-full px-4 py-2 text-sm bg-yellow-100 placeholder:text-stone-400 w-28 sm:w-64 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500/50"
      />
    </form>
  );
};

export default SearchOrder;
