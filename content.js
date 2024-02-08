let display = document.getElementById('displayDiv');
let bibleScripts = [
  {
    "words": "<span>Godliness is not means of gain. From such withdraw yourself.</span>",
    "source": "1 Tim 6:5"
  },
  {
    "words": "<span>Meditate</span> on these things; <span>give yourself entirely to them</span>, that your progress may be evident to all.",
    "source": "1 Tim 4:15"
  },
  {
    "words": "The Lord did not make this covenant with our fathers, but with us, those who are here today, <span>all of us who are alive.</span>",
    "source": "Deut 5:3"
  },
  {
    "words": "Watch, stand fast in the faith, be brave, be strong. <span>Let all that you do be done with love.</span>",
    "source": "1 Cor 16:13-14"
  },
  {
    "words": "These are <span>sensual persons</span>, who cause divisions, <span>not having the Spirit.</span>",
    "source": "Jud 1:19"
  },
  {
    "words": "For to you it has been granted on behalf of Christ, not only to believe in Him, <span>but also to suffer for His sake,</span>",      
    "source": "Phil 1:29"
  },
  {
    "words": "<span>Confess your trespasses to one another, and pray for one another, that you may be healed.</span> The effective, fervent prayer of a righteous man avails much.",      
    "source": "Jm 5:15"
  },
  {
    "words": "Let nothing be done through selfish ambition or conceit, <span>but in lowliness of mind let each esteem others better than himself.</span>",      
    "source": "Phil 2:3"
  },
  {
    "words": "<span>Because you did not serve the Lord your God with joy and gladness of heart, for the abundance of everything,</span> therefore you shall serve your enemies, whom the Lord will send against you, in hunger, in thirst, in nakedness, and in need of everything; and He will put a yoke of iron on your neck until He has destroyed you.",      
    "source": "Deut 28:47-48"
  },
  {
    "words": "But the fruit of the Spirit is love, <span>joy</span>, peace, longsuffering, kindness, goodness, faithfulness, gentleness, self-control. <span>Against such there is no law.</span>",      
    "source": "Gal 5:22-23"
  },
  {
    "words": "I communed with my heart, saying, “Look, I have attained greatness, and have gained more wisdom than all who were before me in Jerusalem. My heart has understood great wisdom and knowledge.” And I set my heart to know wisdom and to know madness and folly. I perceived that this also is grasping for the wind. <span>For in much wisdom is much grief, And he who increases knowledge increases sorrow.</span>",      
    "source": "Eccl 1:16-18"
  },
  {
    "words": "I beseech you therefore, brethren, by the mercies of God, <span>that you present your bodies a living sacrifice</span>, holy, acceptable to God, which is your reasonable service.",      
    "source": "Rom 12:1"
  },
  {
    "words": "not lagging in diligence, <span>fervent in spirit, serving the Lord; rejoicing in hope</span>, patient in tribulation, continuing steadfastly in prayer; ",      
    "source": "Rom 12:11-12"
  },
  {
    "words": "That is, <span>those who are the children of the flesh, these are not the children of God;</span> but the children of the promise are counted as the seed. ",      
    "source": "Rom 9:8"
  },
  {
    "words": "Surely <span>His salvation is near to those who fear Him</span>, That glory may dwell in our land.",
    "source": "Ps 85:9"
  },
  {
    "words": "And in the daytime He was teaching in the temple, <span>but at night He went out and stayed on the mountain called Olivet.</span>",
    "source": "Luke 21:37"
  },
  {
    "words": "and said, “Assuredly, I say to you, <span>unless you are converted and become as little children, you will by no means enter the kingdom of heaven.</span>",
    "source": "Mt 18:3"
  },
  {
    "words": "Do not labor for the food which perishes, <span>but for the food which endures to everlasting life,</span> which the Son of Man will give you, because God the Father has set His seal on Him.",
    "source": "J 6:27"
  },
  {
    "words": "Only do not rebel against the Lord, nor fear the people of the land, for they are our bread; their protection has departed from them, and the Lord is with us. Do not fear them.",
    "source": "Num 14:9"
  },
  {
    "words": "Take My yoke upon you and learn from Me, for I am gentle and lowly in heart, and you will find rest for your souls.",
    "source": "Mt 11:29"
  },
  {
    "words": "But Jesus answered and said, “You do not know what you ask. Are you able to drink the cup that I am about to drink, and be baptized with the baptism that I am baptized with?” ",
    "source": "Mt 20:22"
  },
  {
    "words": "But Jesus did not commit Himself to them, because He knew all men, and had no need that anyone should testify of man, for He knew what was in man.",
    "source": "J 2:24-25"
  },
  {
    "words": "And in vain they worship Me, teaching as doctrines the commandments of men.",
    "source": "Mt 15:9"
  },
  {
    "words": "Then He came to the disciples and found them sleeping, and said to Peter, “What! Could you not watch with Me one hour?",
    "source": "Mt 26:40"
  },
  {
    "words": "But He kept silent and answered nothing. Again the high priest asked Him, saying to Him, “Are You the Christ, the Son of the Blessed?” Jesus said, “I am. And you will see the Son of Man sitting at the right hand of the Power, and coming with the clouds of heaven.” ",
    "source": "Mk 14: 61-62"
  },
  {
    "words": "I came to send fire on the earth, and how I wish it were already kindled!",
    "source": "Luke 12:49"
  },
  {
    "words": "And the Lord said to Satan, “The Lord rebuke you, Satan! The Lord who has chosen Jerusalem rebuke you! Is this not a brand plucked from the fire?” ",
    "source": "Ze 3:2"
  },
  {
    "words": "And of the angels He says: “Who makes His angels spirits And His ministers a flame of fire.” ",
    "source": "Hb 1:7"
  },
  {
    "words": "Likewise the soldiers asked him, saying, “And what shall we do?” So he said to them, “Do not intimidate anyone or accuse falsely, and be content with your wages.”",
    "source": "Luke 3:14"
  },
  {
    "words": "Let not those who wait for You, O Lord GOD of hosts, be ashamed because of me. Let not those who seek You be confounded because of me, O God of Israel.",
    "source": "Ps 69:6"
  },
  {
    "words": "but the Jerusalem above is free, which is the mother of us all. ",
    "source": "Gal 4:26"
  },
  {
    "words": "For through Him we both have access by one Spirit to the Father.",
    "source": "Ef 2:18"
  },
  {
    "words": "And He said to them, “You are those who justify yourselves before men, but God knows your hearts. For what is highly esteemed among men is an abomination in the sight of God.",
    "source": "Lk 16:15"
  },
  {
    "words": "“Do not touch My anointed ones, And do My prophets no harm.”",
    "source": "Ps 105:15, 1 Chr 16:22"
  },
  {
    "words": "When Israel was a child, I loved him, And out of Egypt I called My son.",
    "source": "Hs 11:1"
  },
  {
    "words": "By a prophet the Lord brought Israel out of Egypt, And by a prophet he was preserved.",
    "source": "Hs 12:13"
  },
  {
    "words": "So you, by the help of your God, return; Observe mercy and justice, And wait on your God continually.",
    "source": "Hs 12:6"
  },
  {
    "words": "Where the word of a king is, there is power; And who may say to him, “What are you doing?” ",
    "source": "Eccl 8:4"
  },
  {
    "words": "Thus says the Lord: “Let not the wise man glory in his wisdom, Let not the mighty man glory in his might, Nor let the rich man glory in his riches; But let him who glories glory in this, That he understands and knows Me, That I am the Lord, exercising lovingkindness, judgment, and righteousness in the earth. For in these I delight,” says the Lord.",
    "source": "Jr 9:23-24"
  },
  {
    "words": "Then King David said to Ornan, “No, but I will surely buy it for the full price, for I will not take what is yours for the Lord, nor offer burnt offerings with that which costs me nothing.”",
    "source": "1 Chr 21:24"
  },
  {
    "words": "He (Hezekiah) trusted in the Lord God of Israel, so that after him was none like him among all the kings of Judah, nor who were before him.",
    "source": "2 Kg 18:5"
  },
  {
    "words": "Dead flies putrefy the perfumer’s ointment, And cause it to give off a foul odor; So does a little folly to one respected for wisdom and honor.",
    "source": "Eccl 10:1"
  },
  {
    "words": "Because the sentence against an evil work is not executed speedily, therefore the heart of the sons of men is fully set in them to do evil.",
    "source": "Eccl 8:11"
  },
  {
    "words": "For the wicked boasts of his heart’s desire; He blesses the greedy and renounces the Lord.",
    "source": "Ps 10:3"
  },
  {
    "words": "Arise, O God, plead Your own cause; Remember how the foolish man reproaches You daily. Do not forget the voice of Your enemies; The tumult of those who rise up against You increases continually.",
    "source": "Ps 74:22-23"
  },
  {
    "words": "Do not trust in a friend; Do not put your confidence in a companion; Guard the doors of your mouth From her who lies in your bosom.",
    "source": "Mi 7:5"
  },
  {
    "words": "He who believes in the Son of God has the witness in himself; he who does not believe God has made Him a liar, because he has not believed the testimony that God has given of His Son.",
    "source": "1 J 5:10"
  },
  {
    "words": "Then Saul said to Samuel, “I have sinned, for I have transgressed the commandment of the Lord and your words, because I feared the people and obeyed their voice.",
    "source": "1 Sam 15:24"
  },
  {
    "words": "For he is not a Jew who is one outwardly, nor is circumcision that which is outward in the flesh; but he is a Jew who is one inwardly; and circumcision is that of the heart, in the Spirit, not in the letter; whose praise is not from men but from God.",
    "source": "Rom 2:28-29"
  },
  {
    "words": "For we are the circumcision, who worship God in the Spirit, rejoice in Christ Jesus, and have no confidence in the flesh,",
    "source": "Ph 3:3"
  },
  {
    "words": "Now Saul was afraid of David, because the Lord was with him, but had departed from Saul. Therefore Saul removed him from his presence, and made him his captain over a thousand; and he went out and came in before the people. And David behaved wisely in all his ways, and the Lord was with him. Therefore, when Saul saw that he behaved very wisely, he was afraid of him. But all Israel and Judah loved David, because he went out and came in before them.",
    "source": "1 Sam 18:12-16"
  },
  {
    "words": "who also made us sufficient as ministers of the new covenant, not of the letter but of the Spirit; for the letter kills, but the Spirit gives life",
    "source": "2 Cor 3:6"
  },
  {
    "words": "And Jesus said to them, “I am the bread of life. He who comes to Me shall never hunger, and he who believes in Me shall never thirst.",
    "source": "J 6:35"
  },
  {
    "words": "I am the living bread which came down from heaven. If anyone eats of this bread, he will live forever; and the bread that I shall give is My flesh, which I shall give for the life of the world.”",
    "source": "J 6:51"
  },
  {
    "words": "Then Jesus spoke to them again, saying, “I am the light of the world. He who follows Me shall not walk in darkness, but have the light of life.”",
    "source": "J 8:12"
  },
  {
    "words": "And He said to them, “You are from beneath; I am from above. You are of this world; I am not of this world.",
    "source": "J 8:23"
  },
  {
    "words": "Jesus said to them, “Most assuredly, I say to you, before Abraham was, I am.”",
    "source": "J 8:58"
  },
  {
    "words": "As long as I am in the world, I am the light of the world.”",
    "source": "J 9:5"
  },
  {
    "words": "Then Jesus said to them again, “Most assuredly, I say to you, I am the door of the sheep. ",
    "source": "J 10:7"
  },
  {
    "words": "I am the door. If anyone enters by Me, he will be saved, and will go in and out and find pasture.",
    "source": "J 10:9"
  },
  {
    "words": "“I am the good shepherd. The good shepherd gives His life for the sheep.",
    "source": "J 10:11"
  },
  {
    "words": "I am the good shepherd; and I know My sheep, and am known by My own.",
    "source": "J 10:14"
  },
  {
    "words": "Jesus said to her, “I am the resurrection and the life. He who believes in Me, though he may die, he shall live.",
    "source": "J 11:25"
  },
  {
    "words": "Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father except through Me.",
    "source": "J 14:6"
  },
  {
    "words": "“I am the true vine, and My Father is the vinedresser.",
    "source": "J 15:1"
  },
  {
    "words": "“I am the vine, you are the branches. He who abides in Me, and I in him, bears much fruit; for without Me you can do nothing.",
    "source": "J 15:5"
  },
  {
    "words": "And he hastened to take the bandage away from his eyes; and the king of Israel recognized him as one of the prophets.",
    "source": "1 Kings 20:41"
  },
  {
    "words": "Nor do they light a lamp and put it under a basket, but on a lampstand, and it gives light to all who are in the house.",
    "source": "Mt 5:14"
  },
  {
    "words": "Who is like a wise man? And who knows the interpretation of a thing? A man’s wisdom makes his face shine, And the sternness of his face is changed.",
    "source": "Eccl 8:1"
  },
];

function pickRandomQuote(q) {
  let pick = q[Math.floor(Math.random()*q.length)];
  return pick
}

display.onclick = () => {
  let picked = pickRandomQuote(bibleScripts)
  let forDiplay = picked.words + '</br></br>' + '<b style="display: block;float: right">' + picked.source + '</b>' 
  display.innerHTML = forDiplay;
}

/* 
{
      "words": "",
      "source": ""
    },
*/