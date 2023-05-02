const videoElement = document.getElementById('live-stream');
const viewersCountElement = document.getElementById('viewers-count');
const commentsElement = document.getElementById('live-comments');

// Access the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    // Display the live video stream
    videoElement.srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing user media:', error);
});
  
// Initialize fake viewer count and comments
let viewersCount = Math.floor(Math.random() * 20000) + 30000;
let comments = [
  "Great stream so far!",
  "I love your content!",
  "Keep up the good work!",
"Your stream is so informative.",
"I'm always excited when you go live!",
"This is exactly what I needed to see today.",
"Your energy is contagious!",
"I can't wait to see what you do next!",
"You are such an inspiration to me.",
"I've learned so much from your stream.",
"Your community is the best!",
"Thanks for all the great content!",
"I always look forward to your streams.",
"You have such a great sense of humor!",
"I'm so glad I found your channel.",
"You make learning fun!",
"Your stream is my favorite part of the day.",
"I'm constantly impressed by your skills.",
"You have a real talent for this!",
"Your dedication is inspiring.",
"Your stream is the highlight of my week.",
"Thank you for sharing your knowledge with us!",
"I'm in awe of your creativity.",
"I've never seen anyone do what you do!",
"Your stream always puts me in a good mood.",
"Your positivity is infectious.",
"I feel lucky to be a part of this community.",
"You always make me laugh!",
"Your content is always top-notch.",
"I'm so grateful for all the hard work you put in.",
"Your stream is a breath of fresh air.",
"Thanks for being so engaging with your viewers.",
"You have a real gift for teaching.",
"I love the way you explain things!",
"You have a real knack for this.",
"Your stream is the best kind of therapy.",
"I always learn something new from your stream.",
"Your passion for what you do is contagious!",
"Your stream is a true work of art.",
"I'm so impressed by your skills!",
"You're a natural at this.",
"Your stream is a bright spot in my day.",
"Thanks for being such an amazing streamer!",
"I'm constantly amazed by what you do.",
"You have a real talent for making complex topics easy to understand.",
"Your energy is always so positive!",
"I love how interactive you are with your audience.",
"Your stream is a true masterpiece!",
"You make it look so easy!",
"Your content is always so informative and entertaining.",
"I'm so grateful to be a part of your community.",
"Thanks for always going above and beyond for your viewers.",
"I'm blown away by your creativity.",
"Your stream is a must-watch for me!",
"You're a real pro at this!",
"I love how you make learning fun.",
"Your stream is a work of genius!",
"I'm so impressed by your dedication.",
"You have such a unique perspective!",
"Thanks for always keeping it real with your viewers.",
"You make me want to be a better streamer!",
"Your stream is a real game-changer.",
"I can't get enough of your content!",
"You have a real gift for making complex topics accessible.",
"Your stream is a masterpiece in the making.",
"Thanks for being such an amazing role model.",
"You're one of the best streamers out there!",
"I'm so grateful for the effort you put into your streams.",
"You make it look effortless!",
"Your content always leaves me feeling inspired.",
"I'm constantly amazed by your skills and knowledge.",
"You have a real talent for this, keep it up!",
"Your stream is the perfect blend of entertainment and education.",
"I always come away from your stream feeling smarter.",
"You're a true artist!",
"I can't wait to see what you do next.",
"Thanks for sharing your talent with us!",
"You're a true professional at this!",
"Your stream is always so engaging and entertaining.",
"I'm so grateful for the opportunity to learn from you.",
"You have a real gift for storytelling!",
"Your stream is like nothing else out there.",
"You're an absolute master at what you do!",
"I love how you always keep things fresh and exciting.",
"Your microphone is a bit quiet, can you turn it up?",
"Can you explain that again? I didn't quite understand.",
"Could you give some more examples to clarify?",
"The video quality seems to be a bit low, is everything okay with your setup?",
"I have a question about what you just said.",
"Could you please slow down a bit? I'm having trouble keeping up.",
"Sorry, I have to leave early, but thanks for the great stream!",
"Do you have any other resources or links for more information on this topic?",
"I appreciate your honesty and transparency on this issue.",
"Thanks for taking the time to answer my question!",
"This is a really interesting topic, I'm glad you're covering it.",
"Can you address the comments in the chat about X?",
"Thanks for the shoutout, it means a lot to me!",
"I'm really enjoying this stream, keep up the good work!",
"Could you please repeat the name of that book you recommended?",
];
let usernames = [
    "JohnDoe123",
    "JaneSmith456",
    "DavidLee789",
    "EmilyNguyen246",
    "MikeJohnson135",
    "SamanthaWilson468",
    "ChrisBrown234",
    "AshleyGarcia567",
    "RobertTaylor123",
    "StephanieJones789",
    "StevenWang246",
    "MelanieDavis135",
    "AndrewLee468",
    "MichelleNguyen234",
    "JasonJohnson567",
    "LauraSmith123",
    "WilliamWilson789",
    "JuliaBrown246",
    "NicholasGarcia135",
    "AmandaTaylor468",
    "DanielJones234",
    "OliviaWang567",
    "BrianDavis123",
    "SophiaLee789",
    "JustinNguyen246",
    "KarenJohnson135",
    "JacobWilson468",
    "NatalieBrown234",
    "KevinGarcia567",
    "AlexTaylor123",
    "MeganJones789",
    "MatthewWang246",
    "EricaDavis135",
    "AnthonyLee468",
    "RachelNguyen234",
    "ChristopherJohnson567",
    "EmilySmith123",
    "JoshuaWilson789",
    "MariaBrown246",
    "AdamGarcia135",
    "CatherineTaylor468",
    "BenjaminJones234",
    "GraceWang567",
    "DavidDavis123",
    "VanessaLee789",
    "BrandonNguyen246",
    "ChristineJohnson135",
    "JacobWilson468",
    "LilyBrown234",
    "NicholasGarcia567",
    "SophiaTaylor123",
    "AndrewJones789",
    "EvelynWang246",
    "JonathanDavis135",
    "AbigailLee468",
    "JasonNguyen234",
    "BrittanyJohnson567",
    "JacobWilson123",
    "MiaBrown789",
    "JoshuaGarcia246",
    "EmmaTaylor135",
    "RyanJones468",
    "LaurenWang234",
    "NicholasDavis567",
    "VictoriaLee123",
    "TylerNguyen789",
    "HannahJohnson246",
    "AlexanderWilson135",
    "NatalieBrown468",
    "DanielGarcia234",
    "JenniferTaylor567",
    "WilliamJones123",
    "IsabellaWang789",
    "DavidDavis246",
    "ElizabethLee135",
    "JacobNguyen468",
    "KaylaJohnson234",
    "EthanWilson567",
    "SamanthaBrown123",
    "MichaelGarcia789",
    "MadisonTaylor246",
    "JoshuaJones135",
    "AveryWang468",
    "VictoriaDavis234",
    "EthanLee567",
    "TaylorNguyen123",
    "MakaylaJohnson789",
    "JasonWilson246",
    "AllisonBrown135",
    "ThomasGarcia468",
    "GraceTaylor234",
    "RyanJones567",
    "KaitlynWang123",
    "BenjaminDavis789",
    "OliviaLee246",
    "WilliamNguyen135",
    "LillianJohnson468",
    "CalebWilson234",
    "AlexisBrown567",
    "MichaelGarcia123",
    "ChloeTaylor789",
    "NicholasJones246",
    "AvaWang135",
    "VictoriaDavis468",
    "MatthewLee234",
    "LaurenNguyen567",
    "Sailor_Moon",
    "Naruto_Uzumaki",
    "Sasuke_Uchiha",
    "Goku_SuperSaiyan",
    "Vegeta_Prince",
    "Luffy_MonkeyD",
    "Ichigo_Kurosaki",
    "Erza_Scarlet",
    "Asuna_Yuuki",
    "Kirito_SAO",
    "Miku_Hatsune",
    "Yugi_Muto",
    "Light_Yagami",
    "Levi_Ackerman",
  ];
  
  let pics = [];
  for (let i = 1; i <= 60; i++) {
    let filename = "photos/image" + i + ".jpeg";
    pics.push(filename);
  }

// Update viewers count and display fake comments every 3 seconds

// Update viewers count and display
setInterval(() => {
    let randomDelta = Math.floor(Math.random() * 350) - 150; 
    viewersCount += randomDelta;
    viewersCount = viewersCount < 0 ? 0 : viewersCount; // Prevent negative viewer count
    let formattedCount = viewersCount >= 1000 ? (viewersCount / 1000).toFixed(1) + "K" : viewersCount;
    viewersCountElement.innerHTML = "&#128100; &nbsp;" + formattedCount;
}, 2000);

// Add a new comment to the list
function addComment() {
    const commentIndex = Math.floor(Math.random() * comments.length);
    const usernameIndex = Math.floor(Math.random() * usernames.length);
    const picIndex = Math.floor(Math.random() * pics.length);
  
    const newCommentElement = document.createElement('div');
    newCommentElement.classList.add('live-comment');
  
    const profilePicElement = document.createElement('img');
    profilePicElement.src = pics[picIndex];
    profilePicElement.alt = 'Profile Picture';
    profilePicElement.classList.add('profile-pic');
    newCommentElement.appendChild(profilePicElement);
  
    const usernameElement = document.createElement('span');
    usernameElement.textContent = usernames[usernameIndex];
    usernameElement.classList.add('username');
    newCommentElement.appendChild(usernameElement);
  
    const commentTextElement = document.createElement('span');
    commentTextElement.textContent = comments[commentIndex];
    commentTextElement.classList.add('live-text');
    newCommentElement.appendChild(commentTextElement);
  
    commentsElement.appendChild(newCommentElement);
  
    // Remove the oldest comment if there are more than 3 comments
    if (commentsElement.children.length > 3) {
      commentsElement.removeChild(commentsElement.children[0]);
    }
  
    // Scroll the comments up as new comments are added
    commentsElement.scrollTop = commentsElement.scrollHeight;
}
  
  // Add a new comment every 5 seconds
setInterval(addComment, 1500);

function goFullScreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
  document.querySelector("button").style.display = "none";
}