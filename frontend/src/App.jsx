import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]); // Initialize with an empty array

  // Fetch jokes from the API
  useEffect(() => {
    axios
      .get("api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Fetch data only once when the component mounts

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Jokester</h1>
        <p className="text-lg mt-2">Your daily dose of laughs!</p>
      </header>

      {/* Jokes List */}
      <div className="mt-6 p-6 bg-white text-gray-800 rounded-lg shadow-md w-4/5 max-w-xl">
        <ul>
          {jokes.map((joke) => (
            <li key={joke.id} className="border-b pb-4">
              <h3 className="text-lg font-bold">{joke.title}</h3>
              <p className="mt-2 text-base">{joke.content}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-sm">
        <p>Built with ❤️ using React and Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;