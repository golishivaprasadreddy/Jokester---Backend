const express =  require('express');
const cors  = require('cors');


const app = express();

app.use(cors());
 

app.get('/', (req, res) => {
    const jokes =[
      { id: 1, title: "Skeleton Fight", content: "Why don’t skeletons fight each other? They don’t have the guts." },
      { id: 2, title: "Scarecrow Award", content: "Why did the scarecrow win an award? Because he was outstanding in his field." },
      { id: 3, title: "Eggs' Problem", content: "Why don’t eggs tell jokes? They’d crack each other up." },
      { id: 4, title: "Fake Spaghetti", content: "What do you call fake spaghetti? An impasta." },
      { id: 5, title: "Sad Math Book", content: "Why did the math book look sad? It had too many problems." },
      { id: 6, title: "Invisible Man Job", content: "Why didn’t the invisible man take the job offer? He couldn’t see himself doing it." },
      { id: 7, title: "Parallel Lines", content: "Why are parallel lines so tragic? Because they’ll never meet." },
      { id: 8, title: "Toilet Paper Secret", content: "Why did the toilet paper roll down the hill? To get to the bottom." },
      { id: 9, title: "Coffee File", content: "How does a coffee file a police report? It got mugged!" },
      { id: 10, title: "Light Bulb Workout", content: "How many software engineers does it take to change a light bulb? None, it’s a hardware problem." },
      { id: 11, title: "Broken Pencil", content: "Why did the pencil break up with the paper? It felt pointless." },
      { id: 12, title: "Bee Hairstyle", content: "What do bees do if they need a ride? Wait at the buzz stop." },
      { id: 13, title: "Elevator Story", content: "I would tell you a joke about an elevator… but it’s an uplifting experience." },
      { id: 14, title: "Fish Without Eyes", content: "What do you call a fish with no eyes? Fshhh." },
      { id: 15, title: "Library Late Fees", content: "Why don’t libraries ever go bankrupt? Because they always have a lot of checks and balances." },
      { id: 16, title: "Singing Computer", content: "Why did the computer go to singing lessons? It wanted to improve its voice recognition!" },
      { id: 17, title: "Astronaut’s Meal", content: "Why don’t astronauts eat fast food? Because they can’t handle the launch!" },
      { id: 18, title: "Clock’s Favorite Time", content: "What time does a clock like the most? Tick o'clock!" },
      { id: 19, title: "Tree Secret", content: "Why don’t trees gossip? Because they don’t want to spread any leaves." },
      { id: 20, title: "Baker’s Dilemma", content: "Why did the baker go to therapy? He kneaded help." },
      { id: 21, title: "Banana Problem", content: "Why do bananas never feel lonely? Because they hang out in bunches." },
      { id: 22, title: "Counting Cows", content: "How do you count cows? With a cow-culator!" },
      { id: 23, title: "Traffic Light", content: "Why did the traffic light turn red? Because it saw you looking!" },
      { id: 24, title: "Music Problem", content: "Why did the music teacher go to jail? Because she got caught with a sharp note!" },
      { id: 25, title: "Ghost Party", content: "Why don’t ghosts throw parties? Because they have no body to dance with!" },
      { id: 26, title: "Shark Attack", content: "What do you call a shark that delivers toys? Santa Jaws!" },
      { id: 27, title: "Pirate's Favorite Letter", content: "What is a pirate’s favorite letter? You think it’s R, but it’s the C they love!" },
      { id: 28, title: "Cheese Factory", content: "What happened when the cheese factory exploded? There was nothing left but de-brie!" },
      { id: 29, title: "Running Joke", content: "Why don’t jokes run? Because they always get caught!" },
      { id: 30, title: "Farm Secret", content: "Why do cows have hooves instead of feet? Because they lactose!" },
      { id: 31, title: "Baseball", content: "Why did the baseball player bring a ladder? To reach the high score!" },
      { id: 32, title: "Dinosaur’s Clothes", content: "What do you call a dinosaur wearing a cowboy hat? Tyranno-stylish!" },
      { id: 33, title: "Bread Friends", content: "Why do slices of bread never feel lonely? Because they always stick together!" },
      { id: 34, title: "Sunburn", content: "What did the sunburn say to the other sunburn? We need to stick together, or we’ll peel apart!" },
      { id: 35, title: "Butterfly", content: "Why don’t butterflies make good pets? Because they keep fluttering away!" },
      { id: 36, title: "Boxer's Secret", content: "Why did the boxer bring a ladder to the ring? Because he wanted to take his fight to the next level!" },
      { id: 37, title: "Bee's Work", content: "Why do bees have sticky hair? Because they use honeycombs!" },
      { id: 38, title: "Snowman's Dog", content: "What do you call a snowman’s dog? A slush puppy!" },
      { id: 39, title: "Fishing Secret", content: "Why are fish so smart? Because they live in schools!" },
      { id: 40, title: "Football", content: "Why did the football team go to the bank? To get their quarterback!" },
      { id: 41, title: "Sneezing", content: "What do you say when you meet a sick dinosaur? You dino-snore a lot!" },
      { id: 42, title: "Smart Cookie", content: "Why was the cookie sad? Because it was feeling crumby!" },
      { id: 43, title: "Supermarket", content: "Why do supermarkets make great musicians? Because they have lots of jams!" },
      { id: 44, title: "Socks", content: "Why did the sock go to therapy? It had too many holes in its life!" },
      { id: 45, title: "Fastest Food", content: "What’s the fastest food in the world? Fast food!" },
      { id: 46, title: "Beach", content: "Why did the beach blush? Because the seaweed!" },
      { id: 47, title: "Airplane", content: "Why do airplanes always land safely? Because they wing it!" },
      { id: 48, title: "Toothbrush", content: "What’s a toothbrush’s favorite music? Plaque & roll!" },
      { id: 49, title: "Jellyfish", content: "Why don’t jellyfish go to school? Because they already know how to sting!" },
      { id: 50, title: "Ocean’s Mood", content: "Why was the ocean so happy? Because it waved!" },
      { id: 51, title: "Tennis", content: "Why is tennis such a loud sport? Because each player raises a racket!" },
      { id: 52, title: "Dog’s Job", content: "What job do dogs love the most? Barking lot attendants!" },
      { id: 53, title: "Hippo's Secret", content: "What do you call a hippo who plays guitar? A hippo-tist!" }
    ];
      
    res.send(jokes);
    
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
