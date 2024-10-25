// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["Which airline is known for the most positive customer sentiment?","What airline is known for having the happiest customers?"],
  ["I'm looking for an airline with a good balance of positive and neutral reviews. Any recommendations?","Can you suggest an airline with both positive and neutral feedback?"],
  ["Can you suggest an airline with the lowest negative reviews?","I want to avoid airlines with a lot of negative feedback. Any suggestions?"],
  ["I prefer flying with airlines that have more positive than negative reviews. Any suggestions?","Which airlines have a higher percentage of positive feedback from customers?"],
  ["What is the general sentiment for American Airlines?","How would you describe the overall customer experience with American Airlines?"],
  ["Which airline has the highest percentage of neutral reviews?","Can you tell me which airline has the most customers with neutral opinions?"],
  ["Can you recommend an airline that has a more positive sentiment compared to United?","I'm not too thrilled with United. Are there airlines with better customer sentiment?"],
  ["I'm looking for an airline with a lower percentage of negative reviews. Any suggestions?","I want to avoid airlines with a lot of negative feedback. Which ones have a better track record?"],
  ["How does Southwest Airlines compare in terms of positive reviews?","Can you tell me about the customer satisfaction levels for Southwest Airlines?"],
  ["Can you provide a summary of customer sentiments for US Airways?","What's the overall feedback from customers about US Airways?"],
  ["Are there any airlines with a significant number of neutral reviews that I should be aware of?","Can you point out airlines where customers seem to have mixed feelings?"],
  ["I'm interested in an airline with a good overall sentiment. Which one would you recommend?","Which airline has the happiest customers overall?"],
  ["Can you compare the negative reviews for American Airlines and United to help me make a decision?","I'm torn between American Airlines and United. How do their negative reviews compare?"],
  ["Which airline has the most balanced distribution of sentiment across negative, neutral, and positive reviews?","Can you recommend an airline where customer opinions are evenly spread between negative, neutral, and positive?"],
  ["I'm looking for an airline with a low percentage of negative reviews and a high percentage of positive reviews. Any suggestions?","Which airlines have a good balance of positive feedback and minimal negative comments?"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"],
  ["Virgin America has the highest positive sentiment among customers."],
  ["Delta is a good choice as it has a relatively balanced distribution of positive and neutral sentiments."],
  ["Virgin America has the lowest percentage of negative reviews among the listed airlines."],
  ["Virgin America, Delta, and Southwest are airlines with higher percentages of positive reviews compared to negative ones."],
  ["American Airlines has a higher percentage of negative reviews compared to positive and neutral ones."],
  ["Delta has the highest percentage of neutral reviews among the listed airlines."],
  ["Both Delta and Virgin America have a more positive sentiment than United."],
  ["Delta and Virgin America have relatively lower percentages of negative reviews."],
  ["Southwest Airlines has a higher percentage of positive reviews compared to negative and neutral ones."],
  ["US Airways has the highest percentage of negative reviews among the listed airlines."],
  ["Delta has the highest percentage of neutral reviews among the listed airlines."],
  ["Virgin America has the most positive overall sentiment, with a higher percentage of positive reviews."],
  ["American Airlines has a higher percentage of negative reviews compared to United, so United might be a better choice in this regard."],
  ["Delta has a relatively balanced distribution of sentiment with a mix of negative, neutral, and positive reviews."],
  ["Virgin America and Delta both have lower percentages of negative reviews and higher percentages of positive reviews."]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]