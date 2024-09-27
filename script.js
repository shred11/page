const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What do you call a fake noodle? An impasta!",
    "Why did the math book look so sad? Because it had too many problems!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why do cows have hooves instead of feet? Because they lactose!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call a sleeping bull? A bulldozer!"
];

const jokeText = document.getElementById('joke-text');
const jokeButton = document.getElementById('joke-button');

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

jokeButton.addEventListener('click', () => {
    jokeText.textContent = getRandomJoke();
});