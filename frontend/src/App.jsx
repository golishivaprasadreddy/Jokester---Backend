import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [joke, setJoke] = useState(null); // Store only one joke

  // Fetch a random joke from the API
  const fetchRandomJoke = () => {
    axios
      .get("http://localhost:3000/jokes")
      .then((response) => {
        const jokesArray = response.data;
        if (jokesArray.length > 0) {
          const randomJoke = jokesArray[Math.floor(Math.random() * jokesArray.length)];
          setJoke(randomJoke);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex flex-col items-center justify-center text-white">

      {/* Header */}
      <header className="text-center mb-8 bg-black bg-opacity-50 p-4 rounded-lg">
        <h1 className="text-4xl font-bold">Jokester</h1>
        <p className="text-lg mt-2">Your daily dose of laughs!</p>
        <button
          onClick={fetchRandomJoke}
          className="mt-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200"
        >
          CLICK ME
        </button>
      </header>

      {/* Show a single joke */}
      {joke && (
        <div className="mt-6 p-6 bg-white text-gray-800 rounded-lg shadow-md w-4/5 max-w-xl bg-opacity-90">
          <h3 className="text-lg font-bold">{joke.title}</h3>
          <p className="mt-2 text-base">{joke.content}</p>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-8 text-sm bg-black bg-opacity-50 p-2 rounded-lg">
        <p>Built with ❤️ using React and Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
