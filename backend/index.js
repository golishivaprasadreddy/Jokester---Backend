const express =  require('express');
 
const app = express();

app.get('/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: "Skeleton Fight",
          content: "Why don’t skeletons fight each other? They don’t have the guts."
        },
        {
          id: 2,
          title: "Scarecrow Award",
          content: "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
          id: 3,
          title: "Eggs' Problem",
          content: "Why don’t eggs tell jokes? They’d crack each other up."
        },
        {
          id: 4,
          title: "Fake Spaghetti",
          content: "What do you call fake spaghetti? An impasta."
        },
        {
          id: 5,
          title: "Sad Math Book",
          content: "Why did the math book look sad? It had too many problems."
        }
      ];
      
    res.send(jokes);
    
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);