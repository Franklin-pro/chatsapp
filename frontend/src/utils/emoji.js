export const funEmojis = [
    "😊", // Smiling face
    "😂", // Face with tears of joy
    "🤣", // Rolling on the floor laughing
    "😍", // Heart eyes
    "😎", // Smiling face with sunglasses
    "🤩", // Star-struck
    "🥳", // Partying face
    "😜", // Winking face with tongue
    "🤪", // Zany face
    "😏", // Smirking face
    "😋", // Face savoring food
    "🤗", // Hugging face
    "🤑", // Money-mouth face
    "🤠", // Cowboy hat face
    "🤡", // Clown face
    "👻", // Ghost
    "💩", // Pile of poo
    "🎉", // Party popper
    "✨", // Sparkles
    "🔥", // Fire
    "💯", // Hundred points
    "👏", // Clapping hands
    "🙌", // Raising hands
    "🤘", // Sign of the horns
    "🤙", // Call me hand
    "👀", // Eyes
    "🦄", // Unicorn
    "🌈", // Rainbow
    "🍕", // Pizza
    "🍦", // Ice cream
    "🍩", // Doughnut
    "🍭", // Lollipop
    "🍿", // Popcorn
    "🎈", // Balloon
    "🎮", // Video game
    "🛹", // Skateboard
    "🚀", // Rocket
    "🛸", // Flying saucer
    "👾", // Alien monster
    "🤖", // Robot
    "🐱", // Cat face
    "🐶", // Dog face
    "🦊", // Fox
    "🐼", // Panda
    "🐧", // Penguin
    "🦄", // Unicorn
    "🦋", // Butterfly
    "🌵", // Cactus
    "🌮", // Taco
    "🍔", // Hamburger
    "🍟", // French fries
    "🍺", // Beer mug
    "🍹", // Tropical drink
    "🍫", // Chocolate bar
    "🍪", // Cookie
    "🧁", // Cupcake
    "🍰", // Shortcake
    "🎂", // Birthday cake
    "🍾", // Bottle with popping cork
    "🥂", // Clinking glasses
    "🍻", // Clinking beer mugs
    "🕶️", // Sunglasses
    "👑", // Crown
    "💍", // Ring
    "🎁", // Wrapped gift
    "🎊", // Confetti ball
    "🎶", // Musical notes
]

export const getEmoji = () => {
    return funEmojis[Math.floor(
        Math.random() * funEmojis.length
    )]
}