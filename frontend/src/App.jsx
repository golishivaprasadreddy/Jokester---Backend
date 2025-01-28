import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]); // Initialize with an empty array
  const [currentJoke, setCurrentJoke] = useState(null); // Track the currently displayed joke

  // Fetch jokes from the API
  useEffect(() => {
    axios
      .get("http://localhost:3000/jokes") // Fix the extra slash in the URL
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Add an empty dependency array to avoid infinite loops

  // Function to generate a random joke
  const generateJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setCurrentJoke(jokes[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Jokester</h1>
        <p className="text-lg mt-2">Your daily dose of laughs!</p>
      </header>

      {/* Generate Joke Button */}
      <button
        onClick={generateJoke}
        className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg text-lg transition duration-300"
      >
        Generate Joke
      </button>

      {/* Joke Display */}
      <div className="mt-6 p-6 bg-white text-gray-800 rounded-lg shadow-md w-4/5 max-w-xl">
        {currentJoke ? (
          <>
            <h3 className="text-center text-xl font-bold">{currentJoke.title}</h3>
            <p className="text-center text-lg mt-2">{currentJoke.content}</p>
          </>
        ) : (
          <p className="text-center text-xl italic">Click the button to get a joke!</p>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-8 text-sm">
        <p>Built with ❤️ using React and Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
