let display = document.getElementById('displayDiv');
let powerWords = [
/*
  {
    "words": "",
    "source": ""
  },
*/
  {
    "words": "For if you live according to the flesh you will die; but if by the Spirit you put to death the deeds of the body, you will live.",
    "source": "Rom 8:13"
  },
  {
    "words": "But I want you to know that the head of every man is Christ, the head of woman is man, and the head of Christ is God.",
    "source": "1 Cor 11:3"
  },
  {
    "words": "Nevertheless, neither is man independent of woman, nor woman independent of man, in the Lord.",
    "source": "1 Cor 11:11"
  },
  {
    "words": "The discretion of a man makes him slow to anger, And his glory is to overlook a transgression.",
    "source": "Prov 19:11"
  },
  {
    "words": "And I thank Christ Jesus our Lord who has enabled me, because He counted me faithful, putting me into the ministry, although I was formerly a blasphemer, a persecutor, and an insolent man; but I obtained mercy because I did it ignorantly in unbelief.",
    "source": "1 Tim 1:12-13"
  },
  {
    "words": "And you will be hated by all for My name’s sake. But not a hair of your head shall be lost. By your patience possess your souls.",
    "source": "Luke 21:17-19"
  },
  {
    "words": "So then faith comes by hearing, and hearing by the word of God.",
    "source": "Rom 10:17"
  },
  {
    "words": "Godliness is not means of gain. From such withdraw yourself.",
    "source": "1 Tim 6:5"
  },
  {
    "words": "Meditate on these things; give yourself entirely to them, that your progress may be evident to all.",
    "source": "1 Tim 4:15"
  },
  {
    "words": "The Lord did not make this covenant with our fathers, but with us, those who are here today, all of us who are alive.",
    "source": "Deut 5:3"
  },
  {
    "words": "Watch, stand fast in the faith, be brave, be strong. Let all that you do be done with love.",
    "source": "1 Cor 16:13-14"
  },
  {
    "words": "These are sensual persons, who cause divisions, not having the Spirit.",
    "source": "Jude 1:19"
  },
  {
    "words": "For to you it has been granted on behalf of Christ, not only to believe in Him, but also to suffer for His sake,",      
    "source": "Phil 1:29"
  },
  {
    "words": "Confess your trespasses to one another, and pray for one another, that you may be healed. The effective, fervent prayer of a righteous man avails much.",      
    "source": "James 5:15"
  },
  {
    "words": "Let nothing be done through selfish ambition or conceit, but in lowliness of mind let each esteem others better than himself.",      
    "source": "Phil 2:3"
  },
  {
    "words": "Because you did not serve the Lord your God with joy and gladness of heart, for the abundance of everything, therefore you shall serve your enemies, whom the Lord will send against you, in hunger, in thirst, in nakedness, and in need of everything; and He will put a yoke of iron on your neck until He has destroyed you.",      
    "source": "Deut 28:47-48"
  },
  {
    "words": "But the fruit of the Spirit is love, joy, peace, longsuffering, kindness, goodness, faithfulness, gentleness, self-control. Against such there is no law.",      
    "source": "Gal 5:22-23"
  },
  {
    "words": "I communed with my heart, saying, “Look, I have attained greatness, and have gained more wisdom than all who were before me in Jerusalem. My heart has understood great wisdom and knowledge.” And I set my heart to know wisdom and to know madness and folly. I perceived that this also is grasping for the wind. For in much wisdom is much grief, And he who increases knowledge increases sorrow.",      
    "source": "Eccl 1:16-18"
  },
  {
    "words": "I beseech you therefore, brethren, by the mercies of God, that you present your bodies a living sacrifice, holy, acceptable to God, which is your reasonable service.",      
    "source": "Rom 12:1"
  },
  {
    "words": "not lagging in diligence, fervent in spirit, serving the Lord; rejoicing in hope, patient in tribulation, continuing steadfastly in prayer; ",      
    "source": "Rom 12:11-12"
  },
  {
    "words": "That is, those who are the children of the flesh, these are not the children of God; but the children of the promise are counted as the seed. ",      
    "source": "Rom 9:8"
  },
  {
    "words": "Surely His salvation is near to those who fear Him, That glory may dwell in our land.",
    "source": "Ps 85:9"
  },
  {
    "words": "And in the daytime He was teaching in the temple, but at night He went out and stayed on the mountain called Olivet.",
    "source": "Luke 21:37"
  },
  {
    "words": "and said, “Assuredly, I say to you, unless you are converted and become as little children, you will by no means enter the kingdom of heaven.",
    "source": "Matt 18:3"
  },
  {
    "words": "Do not labor for the food which perishes, but for the food which endures to everlasting life, which the Son of Man will give you, because God the Father has set His seal on Him.",
    "source": "John 6:27"
  },
  {
    "words": "Only do not rebel against the Lord, nor fear the people of the land, for they are our bread; their protection has departed from them, and the Lord is with us. Do not fear them.",
    "source": "Num 14:9"
  },
  {
    "words": "Take My yoke upon you and learn from Me, for I am gentle and lowly in heart, and you will find rest for your souls.",
    "source": "Matt 11:29"
  },
  {
    "words": "But Jesus answered and said, “You do not know what you ask. Are you able to drink the cup that I am about to drink, and be baptized with the baptism that I am baptized with?” ",
    "source": "Matt 20:22"
  },
  {
    "words": "But Jesus did not commit Himself to them, because He knew all men, and had no need that anyone should testify of man, for He knew what was in man.",
    "source": "John 2:24-25"
  },
  {
    "words": "And in vain they worship Me, teaching as doctrines the commandments of men.",
    "source": "Matt 15:9"
  },
  {
    "words": "Then He came to the disciples and found them sleeping, and said to Peter, “What! Could you not watch with Me one hour?",
    "source": "Matt 26:40"
  },
  {
    "words": "But He kept silent and answered nothing. Again the high priest asked Him, saying to Him, “Are You the Christ, the Son of the Blessed?” Jesus said, “I am. And you will see the Son of Man sitting at the right hand of the Power, and coming with the clouds of heaven.” ",
    "source": "Mark 14: 61-62"
  },
  {
    "words": "I came to send fire on the earth, and how I wish it were already kindled!",
    "source": "Luke 12:49"
  },
  {
    "words": "And the Lord said to Satan, “The Lord rebuke you, Satan! The Lord who has chosen Jerusalem rebuke you! Is this not a brand plucked from the fire?” ",
    "source": "Zech 3:2"
  },
  {
    "words": "And of the angels He says: “Who makes His angels spirits And His ministers a flame of fire.” ",
    "source": "Heb 1:7"
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
    "source": "Eph 2:18"
  },
  {
    "words": "And He said to them, “You are those who justify yourselves before men, but God knows your hearts. For what is highly esteemed among men is an abomination in the sight of God.",
    "source": "Luke 16:15"
  },
  {
    "words": "“Do not touch My anointed ones, And do My prophets no harm.”",
    "source": "Ps 105:15, 1 Chr 16:22"
  },
  {
    "words": "When Israel was a child, I loved him, And out of Egypt I called My son.",
    "source": "Hos 11:1"
  },
  {
    "words": "By a prophet the Lord brought Israel out of Egypt, And by a prophet he was preserved.",
    "source": "Hos 12:13"
  },
  {
    "words": "So you, by the help of your God, return; Observe mercy and justice, And wait on your God continually.",
    "source": "Hos 12:6"
  },
  {
    "words": "Where the word of a king is, there is power; And who may say to him, “What are you doing?” ",
    "source": "Eccl 8:4"
  },
  {
    "words": "Thus says the Lord: “Let not the wise man glory in his wisdom, Let not the mighty man glory in his might, Nor let the rich man glory in his riches; But let him who glories glory in this, That he understands and knows Me, That I am the Lord, exercising lovingkindness, judgment, and righteousness in the earth. For in these I delight,” says the Lord.",
    "source": "Jer 9:23-24"
  },
  {
    "words": "Then King David said to Ornan, “No, but I will surely buy it for the full price, for I will not take what is yours for the Lord, nor offer burnt offerings with that which costs me nothing.”",
    "source": "1 Chr 21:24"
  },
  {
    "words": "He (Hezekiah) trusted in the Lord God of Israel, so that after him was none like him among all the kings of Judah, nor who were before him.",
    "source": "2 Kin 18:5"
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
    "source": "Mic 7:5"
  },
  {
    "words": "He who believes in the Son of God has the witness in himself; he who does not believe God has made Him a liar, because he has not believed the testimony that God has given of His Son.",
    "source": "1 John 5:10"
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
    "source": "Phil 3:3"
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
    "source": "John 6:35"
  },
  {
    "words": "I am the living bread which came down from heaven. If anyone eats of this bread, he will live forever; and the bread that I shall give is My flesh, which I shall give for the life of the world.”",
    "source": "John 6:51"
  },
  {
    "words": "Then Jesus spoke to them again, saying, “I am the light of the world. He who follows Me shall not walk in darkness, but have the light of life.”",
    "source": "John 8:12"
  },
  {
    "words": "And He said to them, “You are from beneath; I am from above. You are of this world; I am not of this world.",
    "source": "John 8:23"
  },
  {
    "words": "Jesus said to them, “Most assuredly, I say to you, before Abraham was, I am.”",
    "source": "John 8:58"
  },
  {
    "words": "As long as I am in the world, I am the light of the world.”",
    "source": "John 9:5"
  },
  {
    "words": "Then Jesus said to them again, “Most assuredly, I say to you, I am the door of the sheep. ",
    "source": "John 10:7"
  },
  {
    "words": "I am the door. If anyone enters by Me, he will be saved, and will go in and out and find pasture.",
    "source": "John 10:9"
  },
  {
    "words": "“I am the good shepherd. The good shepherd gives His life for the sheep.",
    "source": "John 10:11"
  },
  {
    "words": "I am the good shepherd; and I know My sheep, and am known by My own.",
    "source": "John 10:14"
  },
  {
    "words": "Jesus said to her, “I am the resurrection and the life. He who believes in Me, though he may die, he shall live.",
    "source": "John 11:25"
  },
  {
    "words": "Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father except through Me.",
    "source": "John 14:6"
  },
  {
    "words": "“I am the true vine, and My Father is the vinedresser.",
    "source": "John 15:1"
  },
  {
    "words": "“I am the vine, you are the branches. He who abides in Me, and I in him, bears much fruit; for without Me you can do nothing.",
    "source": "John 15:5"
  },
  {
    "words": "And he hastened to take the bandage away from his eyes; and the king of Israel recognized him as one of the prophets.",
    "source": "1 Kin 20:41"
  },
  {
    "words": "Nor do they light a lamp and put it under a basket, but on a lampstand, and it gives light to all who are in the house.",
    "source": "Matt 5:14"
  },
  {
    "words": "Who is like a wise man? And who knows the interpretation of a thing? A man’s wisdom makes his face shine, And the sternness of his face is changed.",
    "source": "Eccl 8:1"
  },
  {
    "words": "Now may He who supplies seed to the sower, and bread for food, supply and multiply the seed you have sown and increase the fruits of your righteousness,",
    "source": "2 Cor 9:10"
  },
  {
    "words": "Brethren, if a man is overtaken in any trespass, you who are spiritual restore such a one in a spirit of gentleness, considering yourself lest you also be tempted. Bear one another’s burdens, and so fulfill the law of Christ.",
    "source": "Gal 6:1-2"
  },
  {
    "words": "For the weapons of our warfare are not carnal but mighty in God for pulling down strongholds, casting down arguments and every high thing that exalts itself against the knowledge of God, bringing every thought into captivity to the obedience of Christ, and being ready to punish all disobedience when your obedience is fulfilled.",
    "source": "2 Cor 10:4-6"
  },
  {
    "words": "For they did not gain possession of the land by their own sword, Nor did their own arm save them; But it was Your right hand, Your arm, and the light of Your countenance, Because You favored them.",
    "source": "Ps 44:3"
  },
  {
    "words": "So they were offended at Him. But Jesus said to them, “A prophet is not without honor except in his own country and in his own house.”",
    "source": "Matt 13:57"
  },
  {
    "words": "I now rejoice in my sufferings for you, and fill up in my flesh what is lacking in the afflictions of Christ, for the sake of His body, which is the church,",
    "source": "Col 1:24"
  },
  {
    "words": "and you are complete in Him, who is the head of all principality and power. ",
    "source": "Col 2:10"
  },
  {
    "words": "who, being past feeling, have given themselves over to lewdness, to work all uncleanness with greediness",
    "source": "Eph 4:19"
  },
  {
    "words": "Two things I request of You (Deprive me not before I die): Remove falsehood and lies far from me; Give me neither poverty nor riches. Feed me with the food allotted to me; Lest I be full and deny You, And say, “Who is the Lord?” Or lest I be poor and steal, And profane the name of my God.",
    "source": "Prov 30:7-9"
  },
  {
    "words": "They shall not hurt nor destroy in all My holy mountain, For the earth shall be full of the knowledge of the Lord As the waters cover the sea.",
    "source": "Is 11:9"
  },
  {
    "words": "For the earth will be filled With the knowledge of the glory of the Lord, As the waters cover the sea.",
    "source": "Hab 2:14"
  },
  {
    "words": "For I desire mercy and not sacrifice, And the knowledge of God more than burnt offerings.",
    "source": "Hos 6:6"
  },
  {
    "words": "who desires all men to be saved and to come to the knowledge of the truth.",
    "source": "1 Tim 2:4"
  },
  {
    "words": "Do not be afraid of their faces, For I am with you to deliver you,” says the Lord.",
    "source": "Jer 1:8"
  },
  {
    "words": "And I will give you shepherds according to My heart, who will feed you with knowledge and understanding.",
    "source": "Jer 3:15"
  },
  {
    "words": "Circumcise yourselves to the Lord, And take away the foreskins of your hearts, You men of Judah and inhabitants of Jerusalem, Lest My fury come forth like fire, And burn so that no one can quench it, Because of the evil of your doings.",
    "source": "Jer 4:4"
  },
  {
    "words": "Seek the Lord, all you meek of the earth, Who have upheld His justice. Seek righteousness, seek humility. It may be that you will be hidden In the day of the Lord’s anger.",
    "source": "Zeph 2:3"
  },
  {
    "words": "His brightness was like the light; He had rays flashing from His hand, And there His power was hidden.",
    "source": "Hab 3:4"
  },
  {
    "words": "He covers His hands with lightning, And commands it to strike.",
    "source": "Job 36:32"
  },
  {
    "words": "He sent from above, He took me; He drew me out of many waters. He delivered me from my strong enemy, From those who hated me, For they were too strong for me. They confronted me in the day of my calamity, But the Lord was my support. He also brought me out into a broad place; He delivered me because He delighted in me.",
    "source": "Ps 18:16-19"
  },
  {
    "words": "So then, because you are lukewarm, and neither cold nor hot, I will vomit you out of My mouth.",
    "source": "Rev 3:16"
  },
  {
    "words": "Pilate therefore said to Him, “Are You a king then?” Jesus answered, “You say rightly that I am a king. For this cause I was born, and for this cause I have come into the world, that I should bear witness to the truth. Everyone who is of the truth hears My voice.”",
    "source": "John 18:37"
  },
  {
    "words": "Now it happened, when Sanballat, Tobiah, the Arabs, the Ammonites, and the Ashdodites heard that the walls of Jerusalem were being restored and the gaps were beginning to be closed, that they became very angry, and all of them conspired together to come and attack Jerusalem and create confusion.",
    "source": "Neh 4:7-8"
  },
  {
    "words": "You were bought at a price; do not become slaves of men.",
    "source": "1 Cor 7:23"
  },
  {
    "words": "And whatever you ask in My name, that I will do, that the Father may be glorified in the Son. If you ask anything in My name, I will do it.",
    "source": "John 14:13-14"
  },
  {
    "words": "This being so, I myself always strive to have a conscience without offense toward God and men.",
    "source": "Acts 24:16"
  },
  {
    "words": "Now as he reasoned about righteousness, self-control, and the judgment to come, Felix was afraid and answered, “Go away for now; when I have a convenient time I will call for you.”",
    "source": "Acts 24:25"
  },
  {
    "words": "Now it happened on a certain day, as He was teaching, that there were Pharisees and teachers of the law sitting by, who had come out of every town of Galilee, Judea, and Jerusalem. And the power of the Lord was present to heal them.",
    "source": "Luke 5:17"
  },
  {
    "words": "Then he said to him, “Did not my heart go with you when the man turned back from his chariot to meet you? Is it time to receive money and to receive clothing, olive groves and vineyards, sheep and oxen, male and female servants?",
    "source": "2 Kin 5:26"
  },
  {
    "words": "Then he set his countenance in a stare until he was ashamed; and the man of God wept. ",
    "source": "2 Kin 8:11"
  },
  {
    "words": "For the eyes of the Lord run to and fro throughout the whole earth, to show Himself strong on behalf of those whose heart is loyal to Him. In this you have done foolishly; therefore from now on you shall have wars. ",
    "source": "2 Chr 16:9"
  },
  {
    "words": "And he did evil, because he did not prepare his heart to seek the Lord.",
    "source": "2 Chr 12:14"
  },
  {
    "words": "Now while I was speaking, praying, and confessing my sin and the sin of my people Israel, and presenting my supplication before the Lord my God for the holy mountain of my God,",
    "source": "Dan 9:20"
  },
  {
    "words": "When evening had come, they brought to Him many who were demon-possessed. And He cast out the spirits with a word, and healed all who were sick,",
    "source": "Matt 8:18"
  },
  {
    "words": "And you will be blessed, because they cannot repay you; for you shall be repaid at the resurrection of the just.",
    "source": "Luke 14:14"
  },
  {
    "words": "The king said moreover to Shimei, “You know, as your heart acknowledges, all the wickedness that you did to my father David; therefore the Lord will return your wickedness on your own head. ",
    "source": "1 Kin 2:44"
  },
  {
    "words": "Behold, the eye of the Lord is on those who fear Him, On those who hope in His mercy,",
    "source": "Ps 33:18"
  },
  {
    "words": "It is better to trust in the Lord Than to put confidence in man.",
    "source": "Ps 118:8"
  },
  {
    "words": "please let Your ear be attentive and Your eyes open, that You may hear the prayer of Your servant which I pray before You now, day and night, for the children of Israel Your servants, and confess the sins of the children of Israel which we have sinned against You. Both my father’s house and I have sinned.",
    "source": "Neh 1:6"
  },
  {
    "words": "Then those of Israelite lineage separated themselves from all foreigners; and they stood and confessed their sins and the iniquities of their fathers.",
    "source": "Neh 9:2"
  },
  {
    "words": "You are my hiding place; You shall preserve me from trouble; You shall surround me with songs of deliverance.",
    "source": "Ps 32:7"
  },
  {
    "words": "So God, who knows the heart, acknowledged them by giving them the Holy Spirit, just as He did to us, and made no distinction between us and them, purifying their hearts by faith.",
    "source": "Acts 15:8-9"
  },
  {
    "words": "And His mercy is on those who fear Him From generation to generation.",
    "source": "Luke 1:50"
  },
  {
    "words": "Then they put him in custody, that the mind of the Lord might be shown to them.",
    "source": "Lev 24:12"
  },
  {
    "words": "You will keep him in perfect peace, Whose mind is stayed on You, Because he trusts in You.",
    "source": "Is 26:3"
  },
  {
    "words": "However, regarding the ambassadors of the princes of Babylon, whom they sent to him to inquire about the wonder that was done in the land, God withdrew from him, in order to test him, that He might know all that was in his heart.",
    "source": "2 Chr 32:31"
  },
  {
    "words": "Then it came to pass, when Pharaoh had let the people go, that God did not lead them by way of the land of the Philistines, although that was near; for God said, “Lest perhaps the people change their minds when they see war, and return to Egypt.”",
    "source": "Ex 13:17"
  },
  {
    "words": "So I prophesied as I was commanded; and as I prophesied, there was a noise, and suddenly a rattling; and the bones came together, bone to bone.",
    "source": "Ezek 37:7"
  },
  {
    "words": "They hate the one who rebukes in the gate, And they abhor the one who speaks uprightly.",
    "source": "Amos 5:10"
  },
  {
    "words": "And the name of the second he called Ephraim: “For God has caused me to be fruitful in the land of my affliction.”",
    "source": "Gen 41:52"
  },
  {
    "words": "For though I might desire to boast, I will not be a fool; for I will speak the truth. But I refrain, lest anyone should think of me above what he sees me to be or hears from me.",
    "source": "2 Cor 12:6"
  },
  {
    "words": "For our boasting is this: the testimony of our conscience that we conducted ourselves in the world in simplicity and godly sincerity, not with fleshly wisdom but by the grace of God, and more abundantly toward you.",
    "source": "2 Cor 1:12"
  },
  {
    "words": "And they spoke to him, saying, “If you will be a servant to these people today, and serve them, and answer them, and speak good words to them, then they will be your servants forever.”",
    "source": "1 Kin 12:7"
  },
  {
    "words": "So truth fails, And he who departs from evil makes himself a prey.",
    "source": "Is 59:15"
  },
  {
    "words": "Go up to the mountains and bring wood and build the temple, that I may take pleasure in it and be glorified,” says the Lord.",
    "source": "Hag 1:8"
  },
  {
    "words": "The fear of the Lord is clean, enduring forever; The judgments of the Lord are true and righteous altogether.",
    "source": "Ps 19:9"
  },
  {
    "words": "My son, give me your heart, And let your eyes observe my ways.",
    "source": "Prov 23:26"
  },
  {
    "words": "Now the Lord is the Spirit; and where the Spirit of the Lord is, there is liberty.",
    "source": "2 Cor 3:17"
  },
  {
    "words": "And He said, “Let Me go, for the day breaks.” But he said, “I will not let You go unless You bless me",
    "source": "Gen 32:26"
  },
  {
    "words": "So we fasted and entreated our God for this, and He answered our prayer.",
    "source": "Ezra 8:23"
  },
  {
    "words": "All these had taken pagan wives, and some of them had wives by whom they had children.",
    "source": "Ezra 10:44"
  },
  {
    "words": "Then he said to them, “You know how unlawful it is for a Jewish man to keep company with or go to one of another nation. But God has shown me that I should not call any man common or unclean.",
    "source": "Acts 10:28"
  },
  {
    "words": "But refuse the younger widows; for when they have begun to grow wanton against Christ, they desire to marry, having condemnation because they have cast off their first faith. ",
    "source": "1 Tim 5:11-13"
  },
  {
    "words": "that no one should be shaken by these afflictions; for you yourselves know that we are appointed to this.",
    "source": "1 Thess 3:3"
  },
  {
    "words": "Therefore receive one another, just as Christ also received us, to the glory of God.",
    "source": "Rom 15:7"
  },
  {
    "words": "But the Pharisees and lawyers rejected the will of God for themselves, not having been baptized by him.",
    "source": "Luke 7:30"
  },
  {
    "words": "When a man takes hold of his brother In the house of his father, saying, “You have clothing; You be our ruler, And let these ruins be under your power,” In that day he will protest, saying, “I cannot cure your ills, For in my house is neither food nor clothing; Do not make me a ruler of the people.”",
    "source": "Is 3:6-7"
  },
  {
    "words": "For we, though many, are one bread and one body; for we all partake of that one bread.",
    "source": "1 Cor 10:17"
  },
  {
    "words": "And now why are you waiting? Arise and be baptized, and wash away your sins, calling on the name of the Lord.",
    "source": "Acts 22:16"
  },
  {
    "words": "for if a man does not know how to rule his own house, how will he take care of the church of God?",
    "source": "1 Tim 3:5"
  },
  {
    "words": "For I wish that all men were even as I myself. But each one has his own gift from God, one in this manner and another in that.",
    "source": "1 Cor 7:7"
  },
  {
    "words": "Now he who keeps His commandments abides in Him, and He in him. And by this we know that He abides in us, by the Spirit whom He has given us.",
    "source": "1 John 3:24"
  },
  {
    "words": "And if a son of peace is there, your peace will rest on it; if not, it will return to you.",
    "source": "Luke 10:6"
  },
  {
    "words": "And the scribes and chief priests heard it and sought how they might destroy Him; for they feared Him, because all the people were astonished at His teaching.",
    "source": "Mark 11:18"
  },
  {
    "words": "He who is slow to wrath has great understanding, But he who is impulsive exalts folly.",
    "source": "Prov 14:29"
  },
  {
    "words": "“I, even I, am He who blots out your transgressions for My own sake; And I will not remember your sins. Put Me in remembrance; Let us contend together; State your case, that you may be acquitted.",
    "source": "Is 43:25-26"
  },
  {
    "words": "For thus says the Lord God, the Holy One of Israel: “In returning and rest you shall be saved; In quietness and confidence shall be your strength.” But you would not,",
    "source": "Is 30:15"
  },
  {
    "words": "My sons, do not be negligent now, for the Lord has chosen you to stand before Him, to serve Him, and that you should minister to Him and burn incense.”",
    "source": "2 Chr 29:11"
  },
  {
    "words": "A merry heart does good, like medicine, But a broken spirit dries the bones.",
    "source": "Prov 17:22"
  },
  {
    "words": "Now also when I am old and grayheaded, O God, do not forsake me, Until I declare Your strength to this generation, Your power to everyone who is to come.",
    "source": "Ps 71:18"
  },
  {
    "words": "I will not drive them out from before you in one year, lest the land become desolate and the beasts of the field become too numerous for you.",
    "source": "Ex 23:29"
  },
  {
    "words": "And they were both naked, the man and his wife, and were not ashamed.",
    "source": "Gen 2:25"
  },
  {
    "words": "However, the report went around concerning Him all the more; and great multitudes came together to hear, and to be healed by Him of their infirmities. So He Himself often withdrew into the wilderness and prayed.",
    "source": "Luke 5:15-16"
  },
  {
    "words": "Yet if anyone suffers as a Christian, let him not be ashamed, but let him glorify God in this matter.",
    "source": "1 Pet 4:16"
  },
  {
    "words": "For they had not understood about the loaves, because their heart was hardened.",
    "source": "Mark 6:52"
  },
  {
    "words": "This man heard Paul speaking. Paul, observing him intently and seeing that he had faith to be healed,",
    "source": "Acts 14:9"
  },
  {
    "words": "Therefore I say to you, the kingdom of God will be taken from you and given to a nation bearing the fruits of it.",
    "source": "Matt 21:43"
  },
  {
    "words": "Not that I seek the gift, but I seek the fruit that abounds to your account. Indeed I have all and abound. I am full, having received from Epaphroditus the things sent from you, a sweet-smelling aroma, an acceptable sacrifice, well pleasing to God.",
    "source": "Phil 4:17-18"
  },
  {
    "words": "And another angel followed, saying, “Babylon is fallen, is fallen, that great city, because she has made all nations drink of the wine of the wrath of her fornication.”",
    "source": "Rev 14:8"
  },
  {
    "words": "But the wisdom that is from above is first pure, then peaceable, gentle, willing to yield, full of mercy and good fruits, without partiality and without hypocrisy.",
    "source": "James 3:17"
  },
  {
    "words": "Whoever transgresses and does not abide in the doctrine of Christ does not have God. He who abides in the doctrine of Christ has both the Father and the Son.",
    "source": "2 John 1:9"
  },
  {
    "words": "For He whom God has sent speaks the words of God, for God does not give the Spirit by measure.",
    "source": "John 3:34"
  },
  {
    "words": "And he said, 'O man greatly beloved, fear not! Peace be to you; be strong, yes, be strong!' So when he spoke to me I was strengthened, and said, 'Let my lord speak, for you have strengthened me.' ",
    "source": "Dan 10:19"
  },
  {
    "words": "And you have done worse than your fathers, for behold, each one follows the dictates of his own evil heart, so that no one listens to Me. Therefore I will cast you out of this land into a land that you do not know, neither you nor your fathers; and there you shall serve other gods day and night, where I will not show you favor.'",
    "source": "Jer 16:12-13"
  },
  {
    "words": "And seek the peace of the city where I have caused you to be carried away captive, and pray to the Lord for it; for in its peace you will have peace.",
    "source": "Jer 29:7"
  },
  {
    "words": "And David said to Gad, 'I am in great distress. Please let me fall into the hand of the LORD, for His mercies are very great; but do not let me fall into the hand of man.' ",
    "source": "1 Chr 21:9"
  },
  {
    "words": "Then Amaziah said to the man of God, 'But what shall we do about the hundred talents which I have given to the troops of Israel?'And the man of God answered, 'The LORD is able to give you much more than this.'",
    "source": "2 Chr 25:9"
  },
  {
    "words": "that the sharing of your faith may become effective by the acknowledgment of every good thing which is in you in Christ Jesus.",
    "source": "Philem 1:6"
  },
  {
    "words": "Thus says the Lord, your Redeemer, The Holy One of Israel: I am the Lord your God, Who teaches you to profit, Who leads you by the way you should go.",
    "source": "Is 48:17"
  },
  {
    "words": "God will hear, and afflict them, Even He who abides from of old. Because they do not change, Therefore they do not fear God.",
    "source": "Ps 55:19"
  },
  {
    "words": "He will fulfill the desire of those who fear Him; He also will hear their cry and save them.",
    "source": "Ps 145:19"
  },
  {
    "words": "The Lord takes pleasure in those who fear Him, In those who hope in His mercy.",
    "source": "Ps 147:11"
  },
  {
    "words": "Happy is he who has the God of Jacob for his help, Whose hope is in the Lord his God,",
    "source": "Ps 146:5"
  },
  {
    "words": "Do not put your trust in princes, Nor in a son of man, in whom there is no help.",
    "source": "Ps 146:3"
  },
  {
    "words": "Then Isaiah the son of Amoz sent to Hezekiah, saying, 'Thus says the LORD God of Israel: 'Because you have prayed to Me against Sennacherib king of Assyria, I have heard.' ",
    "source": "2 Kin 19:20"
  },
  {
    "words": "Whoever keeps the fig tree will eat its fruit; So he who waits on his master will be honored.",
    "source": "Prov 27:18"
  },
  {
    "words": "O LORD, are not Your eyes on the truth? You have stricken them, But they have not grieved; You have consumed them, But they have refused to receive correction. They have made their faces harder than rock; They have refused to return.",
    "source": "Jer 5:3"
  },
  {
    "words": "I said in my heart, 'Concerning the condition of the sons of men, God tests them, that they may see that they themselves are like animals.",
    "source": "Eccl 3:18"
  },
  {
    "words": "Everyone proud in heart is an abomination to the LORD; Though they join forces, none will go unpunished.",
    "source": "Prov 16:5"
  },
  {
    "words": "Poverty and shame will come to him who disdains correction, But he who regards a rebuke will be honored.",
    "source": "Prov 13:18"
  },
  {
    "words": "There are many plans in a man's heart, Nevertheless the LORD's counsel--that will stand.",
    "source": "Prov 19:21"
  },
  {
    "words": "The fear of the LORD is to hate evil; Pride and arrogance and the evil way And the perverse mouth I hate.",
    "source": "Prov 8:13"
  },
  {
    "words": "In the multitude of words sin is not lacking, But he who restrains his lips is wise.",
    "source": "Prov 10:19"
  },
  {
    "words": "He who goes about as a talebearer reveals secrets; Therefore do not associate with one who flatters with his lips.",
    "source": "Prov 20:19"
  },
  {
    "words": "Do not withhold good from those to whom it is due, When it is in the power of your hand to do so.",
    "source": "Prov 3:27"
  },
  {
    "words": "A lying tongue hates those who are crushed by it, And a flattering mouth works ruin.",
    "source": "Prov 26:28"
  },
  {
    "words": "Seldom set foot in your neighbor’s house, Lest he become weary of you and hate you.",
    "source": "Prov 25:17"
  },
  {
    "words": "Then the Lord said to Satan, “Have you considered My servant Job, that there is none like him on the earth, a blameless and upright man, one who fears God and shuns evil? And still he holds fast to his integrity, although you incited Me against him, to destroy him without cause.”",
    "source": "Job 2:3"
  },
  {
    "words": "For this reason we also thank God without ceasing, because when you received the word of God which you heard from us, you welcomed it not as the word of men, but as it is in truth, the word of God, which also effectively works in you who believe.",
    "source": "1 Thess 2:13"
  },
  {
    "words": "Do not be deceived, God is not mocked; for whatever a man sows, that he will also reap. For he who sows to his flesh will of the flesh reap corruption, but he who sows to the Spirit will of the Spirit reap everlasting life. And let us not grow weary while doing good, for in due season we shall reap if we do not lose heart.",
    "source": "Gal 6:7-9"
  },
  {
    "words": "I knew I would be blamed for giving my focus to something else. God was behind - I could not resist. So I decided to give my focus to God. Losing my focus gave me a huge motivation to pray more.",
    "source": "TB"
  },
  {
    "words": "A tired mind cannot make a serious decision.",
    "source": "TB"
  },
  {
    "words": "Christian leadership is about drilling deep until hitting the rock.",
    "source": "TB"
  },
  {
    "words": "PEACE = JOY Joy is something that only belivers have. Joy is our conquering power. No joy = no fellowship with God.",
    "source": "TB"
  },
  {
    "words": "Will of God must be known to us before we pray !!!",
    "source": "TB"
  },
  {
    "words": "To receive a miracle you don't have be a Christian !!!",
    "source": "TB"
  },
  {
    "words": "When you talk with all your heart - job is half done.",
    "source": "TB"
  },
  {
    "words": "He who desires vicotory must be ready for war!",
    "source": "TB"
  },
  {
    "words": "Nothing happens for nothing, Nothing happens by chance.",
    "source": "TB"
  },
  {
    "words": "People don't pray because they don't have hope for answer.",
    "source": "TB"
  },
  {
    "words": "When there is faith in you, there is a strong desire to pray more.",
    "source": "TB"
  },
  {
    "words": "Earthly help has its own habit of dissapointing one.",
    "source": "TB"
  },
  {
    "words": "Faith is not asking for possible things.",
    "source": "TB"
  },
  {
    "words": "No one can do the work of cross but God.",
    "source": "TB"
  },
  {
    "words": "If you are not born of the Spirit, you are not a true Christian.",
    "source": "TB"
  },
  {
    "words": "Our main reward is peace of heart.",
    "source": "TB"
  },
  {
    "words": "Solution is to walk in the Spirit.",
    "source": "TB"
  },
  {
    "words": "God wants us to always be ready. This will make me to watch and pray.",
    "source": "TB"
  },
  {
    "words": "What you feel depends on what you give your attention to. We are responsible for what we give attention to.",
    "source": "TB"
  },
  {
    "words": "Daniel, if prayed, would receive a victory, but what God meant for him was much greater.",
    "source": "TB"
  },
  {
    "words": "Lack of dynamic faith limits what God can do through us.",
    "source": "TB"
  },
  {
    "words": "Prayer has a language and the language is in the Word of God.",
    "source": "TB"
  },
  {
    "words": "Prayer is the master key to bind and loose.",
    "source": "TB"
  },
  {
    "words": "Meditate till God gives a clear light to pray.",
    "source": "TB"
  },
  {
    "words": "Holy Spirit is most sensitive of being and is easily offended by lack of attention.",
    "source": "TB"
  },
  {
    "words": "Before reading the Bible we need to seek the attention of the Holy Spirit.",
    "source": "TB"
  },
  {
    "words": "When you want to find the truth, look within and outside your palace.",
    "source": "TB"
  },
  {
    "words": "If you are conscious of yourself, you cannot be conscious of your faith.",
    "source": "Josheph"
  },
  {
    "words": "My reward for the relationship with Jesus is power.",
    "source": "TB"
  },
  {
    "words": "He who continually goes forth weeping, Bearing seed for sowing, Shall doubtless come again with rejoicing, Bringing his sheaves with him.",    "source": "Ps 126:6"
  },
  {
    "words": "Every response - take it to God, Every response - take it for prayer ",
    "source": "TB"
  },
  {
    "words": "To be in faith is recognise spiritual unity with Jesus Christ.",
    "source": "TB"
  },
  {
    "words": "You can never live above the level of your thoughts.",
    "source": "TB Phil 4:8"
  },
  {
    "words": "Joy is your conquering power.",
    "source": "TB Acts 16:25-26"
  },
  {
    "words": "All men fall but great men get back up.",
    "source": "TB Prov 24:16"
  },
  {
    "words": "The Word of God is a treasure that produces great riches in the life of those who meditate on it.",
    "source": "TB Job 23:12"
  },
  {
    "words": "To pray as God wants us to pray is the greatest achievement on earth.",
    "source": "TB 1 John 5:14-15"
  },
  {
    "words": "Faith is not the imitation or copy.",
    "source": "TB Acts 19:13"
  },
  {
    "words": "You are not too small for salvation.",
    "source": "TB Matt 18:1-35"
  },
  {
    "words": "Mountain climbing is the picture of a life of faith.",
    "source": "TB Is 40:4"
  },
  {
    "words": "To become God's person follow His process.",
    "source": "TB Rom 9:21-23"
  },
  {
    "words": "Spiritual prayer releases the power of God.",
    "source": "TB Heb 4:12"
  },
  {
    "words": "Warfare is necessary for your victory.",
    "source": "TB Eph 6:10-11"
  },
  {
    "words": "I will make you fishers of men.",
    "source": "TB Matt 4:19"
  },
  {
    "words": "It's highly profitable to store the Word of God in our hearts.",
    "source": "TB Prov 4:20-27"
  },
  {
    "words": "As Christians, our mistakes draw us closer to God.",
    "source": "TB Heb 4:16"
  },
  {
    "words": "The love you give away is the only love you keep.",
    "source": "TB James 2:14-17"
  },
  {
    "words": "Our situations are tests to mature us.",
    "source": "TB 1 Pet 1:6-8"
  },
  {
    "words": "Christianity lies in the heart. Are you such in heart?",
    "source": "TB Rm 10:10"
  },
  {
    "words": "My help comes from the LORD, Who made heaven and earth.",
    "source": "Ps 121:2"
  },
  {
    "words": "Hear my prayer, O LORD, And give ear to my cry; Do not be silent at my tears; For I am a stranger with You, A sojourner, as all my fathers were.",
    "source": "Ps 39:12"
  },
  {
    "words": "The angel of the LORD encamps all around those who fear Him, And delivers them.",
    "source": "Ps 34:7"
  },
  {
    "words": "For You are my rock and my fortress; Therefore, for Your name's sake, Lead me and guide me.",
    "source": "Ps 31:3"
  },
  {
    "words": "I will hear what God the LORD will speak, For He will speak peace To His people and to His saints; But let them not turn back to folly.",
    "source": "Ps 85:8"
  },
  {
    "words": "Something that does not qualify for meditation does not qualify for conversation. What does not qualify for your heart does not qualify for your mouth.",
    "source": "TB"
  },
  {
    "words": "Using the Word Of God you have read helps you ensure that your prayer lines up with God's will and intention for your life.",
    "source": "TB"
  },
  {
    "words": "What we do for Christ is only a reflection of the relationship we have with God. ",
    "source": "TB"
  },
  {
    "words": "The beauty of life does not depend on how happy you are but on how happy others can be because of you.",
    "source": "TB Heb 13:16"
  },
  {
    "words": "To believe God is to love Him above all.",
    "source": "TB"
  },
  {
    "words": "True humility is total dependence on God for everything.",
    "source": "TB"
  },
  {
    "words": "I have never seen where hatred overcomes love. When you love you overcome",
    "source": "TB"
  },
  {
    "words": "If a lie goes on for 100 year, truth one day will reach it (Psalm 94:15). As truth was older than terror, so it will survive it. It got the start and it will get the race.",
    "source": "TB"
  },
  {
    "words": "Successful people don't just drift to the top; it takes focused action, personal discipline and lots of energy every day to make things happen.",
    "source": "TB"
  },
  {
    "words": "Letting the Word have right of way in your life is letting Christ have right of way.",
    "source": "TB"
  },
  {
    "words": "To the extent that you think the thoughts of Christ, to that same extent do you have the power of Christ.",
    "source": "TB"
  },
  {
    "words": "It honours God to believe Him even while every sense contradicts Him.",
    "source": "TB"
  },
  {
    "words": "Each day has it's own destiny: Yesterday is history, today is opportunity, while tomorrow is mystery.",
    "source": "TB"
  },
  {
    "words": "You are a work of art; if you want to become God's person, follow His process.",
    "source": "TB"
  },
  {
    "words": "Nothing good happens without discipline.",
    "source": "TB Prov 3:11-12"
  },
  {
    "words": "My son, do not despise the chastening of the LORD, Nor detest His correction; For whom the LORD loves He corrects, Just as a father the son in whom he delights.",
    "source": "Prov 3:11-12"
  },
  {
    "words": "No wound no pearl.",
    "source": "TB Matt 5:10-12"
  },
  {
    "words": "Meditation in the Word brings revelation.",
    "source": "TB Ps 119:99"
  },
  {
    "words": "Gold is not valued until it is tested. What is your test?",
    "source": "TB James 1:3"
  },
  {
    "words": "A Christian is somebody who is lifting the load with God.",
    "source": "TB Phil 4:13"
  },
  {
    "words": "God sometimes puts us in the dark so that we may appreciate the light when it finally comes.",
    "source": "TB Acts 9:8-22"
  },
  {
    "words": "But without a parable He did not speak to them. And when they were alone, He explained all things to His disciples.",
    "source": "Mark 4:34"
  },
  {
    "words": "A break in prayer is a break in faith.",
    "source": "TB"
  },
  {
    "words": "God speaks through the meek.",
    "source": "TB"
  },
  {
    "words": "Whenever Jesus' name is glorified Holy Spirit arrives immediately.",
    "source": "TB"
  },
  {
    "words": "Silence is the best reply to your enemies.",
    "source": "TB"
  },
  {
    "words": "Your spirit must be free to attract Spirit of God.",
    "source": "TB"
  },
  {
    "words": "To identify and acknowledge our weakness is victory itself.",
    "source": "TB"
  },
  {
    "words": "There must be secret around the servant of God.",
    "source": "TB"
  },
  {
    "words": "In every situation God has something to say.",
    "source": "TB"
  },
  {
    "words": "And let our people also learn to maintain good works, to meet urgent needs, that they may not be unfruitful.",
    "source": "Titus 3:14"
  },
  {
    "words": "... I took my time and asked God for every African country.",
    "source": "TB"
  },
  {
    "words": "What you wish for others, God makes happen to you!",
    "source": "TB"
  },
  {
    "words": "A man’s life is what he thinks about all day long. A man’s life is what his thoughts make it. The soul which thinks error is sick. The greatest sickness is when there is uncertainty, when you don’t know what will happen next.",
    "source": "TB"
  },
  {
    "words": "Million Joshuas wouldn't be enough...",
    "source": "TB"
  },
  {
    "words": "If you defend yourself, God will leave you to your own strength.",
    "source": "TB"
  },
  {
    "words": "If an answer is not given to the first prayer nor to the second, we must hold on and hold out 'til we received an answer. ",
    "source": "TB"
  },
  {
    "words": "I said to God, 'I need to change the Bible' but God said 'No'. ",
    "source": "TB"
  },
  {
    "words": "'To learn how to hear from God after prayer is a much greater blessing than what you are looking for.",
    "source": "TB"
  },
  {
    "words": "Man of faith smiles at every insult or persecution.",
    "source": "TB"
  },
  {
    "words": "Our only responsibility as a Christian is to trust the Holy Spirit, keep the Word of God in our heart and in our mouth and in every conversation, because the Word is our contact with Him.",
    "source": "TB"
  },
  {
    "words": "The only thing you need is God's agenda.",
    "source": "TB"
  },
  {
    "words": "You talk to God and God talks to you accordingly - according to the state of your heart.",
    "source": "TB"
  },
  {
    "words": "When you love pleasure more than God, you are bound to destroy the grace of God in your life!",
    "source": "TB"
  },
  {
    "words": "Faith is a vacuum that draws an annointing from Jesus.",
    "source": "TB"
  },
  {
    "words": "Jesus always wants to give us what we don't know how to do so that He Himself can teach us.",
    "source": "TB"
  },
  {
    "words": "- why do you want to free him? <br>- Me?! Ha ha!",
    "source": "TB"
  },
  {
    "words": "Learn to forgive yourself, then you can forgive others. What you do not have, you cannot give to others.",
    "source": "TB"
  },
  {
    "words": "If Jesus is aware of the situation, it is as good as having it solved. Jesus will solve it immediately or will guide you through it.",
    "source": "TB"
  },
  {
    "words": "If in my ministry I would receive money coming from iniquity, I would be punished for that.",
    "source": "TB"
  },
  {
    "words": "Wisdom consists of all gracious, Heavenly thoughts of God embodied in Christ for the enlightenment of our souls. Ability to communicate this wisdom to others is the best and highest spiritual gift.",
    "source": "TB"
  },
  {
    "words": "Knowledge means to explain the unfolding and the correlation of Gospel facts.",
    "source": "TB"
  },
  {
    "words": "I judge people by the peace of heart.",
    "source": "TB"
  },
  {
    "words": "If everything goes too well for too long, I go to fast and pray - Christianity is not a bed of roses.",
    "source": "TB"
  },
  {
    "words": "The challenges before us cannot be withstood without God's Spirit.",
    "source": "TB"
  },
  {
    "words": "If you have been truly born again, it was the Holy Spirit who convicted you of sin and drew you into a relationship with Jesus.",
    "source": "TB"
  },
  {
    "words": "Blaming others, you will never repent.",
    "source": "TB"
  },
  {
    "words": "The more God uses me, the more humble I must be.",
    "source": "TB"
  },
  {
    "words": "Servant of God - very sensitive job.",
    "source": "TB"
  },
  {
    "words": "To be spiritually fit you must be fit physically (it's our responsibility)",
    "source": "TB"
  },
  {
    "words": "There is no superstar in the ministry of the Holy Spirit.",
    "source": "TB"
  },
  {
    "words": "Where God wants us to be is where His mercy and His blessing is.",
    "source": "TB"
  },
  {
    "words": "Your coach has to have a PhD in persecution.",
    "source": "TB"
  },
  {
    "words": "If we want to be able to do great things, we need to have a great relationship.",
    "source": "TB"
  },
  {
    "words": "If you are in haste to achieve something, you are likely to make costly mistakes that will pull you back, if not down.",
    "source": "TB"
  },
  {
    "words": "When God Almighty is executing His plan in our lives, He also designs and arrange events which continues to unfold until His purpose is revealed in our lives.",
    "source": "TB"
  },
  {
    "words": "The heaven, even the heavens, are the LORD's; But the earth He has given to the children of men.",
    "source": "Ps 115:16 "
  },
  {
    "words": "And Mordecai told them to answer Esther: Do not think in your heart that you will escape in the king's palace any more than all the other Jews. For if you remain completely silent at this time, relief and deliverance will arise for the Jews from another place, but you and your father's house will perish. Yet who knows whether you have come to the kingdom for such a time as this?",
    "source": "Esth 4:13-14"
  },
  {
    "words": "Prayer changes us, faith changes things.",
    "source": "TB"
  },
  {
    "words": "The only hindrance to your prayer is when you continue to hold a grudge against your neighbour.",
    "source": "TB"
  },
  {
    "words": "The secret of joy and peace is sharing with others.",
    "source": "TB"
  },
  {
    "words": "Many a time they have afflicted me from my youth; Yet they have not prevailed against me.",
    "source": "Ps 129:2"
  },
  {
    "words": "We are created to keep our hearts busy with the Lord. Keep your heart praising God - that is what you are created for.",
    "source": "TB"
  },
  {
    "words": "Everything done in God's time is EFFORTLESS.",
    "source": "TB"
  },
  {
    "words": "One can be a prophet but not according to the will of God",
    "source": "TB"
  },
  {
    "words": "Right knowledge of God settles peace.",
    "source": "TB"
  },
  {
    "words": "99% of things that happen to Christians is not because of their fault, but because of the glory to be revealed.",
    "source": "TB"
  },
  {
    "words": "You keep opening the door God did not open for you.",
    "source": "TB"
  },
  {
    "words": "Mother asked me to pray against the bad dream. Then I understood prayer is the way to go.",
    "source": "TB"
  },
  {
    "words": "You can be a man of prayer and yet not a man of faith.",
    "source": "TB"
  },
  {
    "words": "See your weakness as a reason to pray more; it should not be the reason for sadness or to abandon your post.",
    "source": "TB"
  },
  {
    "words": "Each one wants to be a CEO but he can't even manage his home.",
    "source": "TB"
  },
  {
    "words": "You can pray amiss but you can naver praise amiss.",
    "source": "TB"
  },
  {
    "words": "We get to Jesus by meditation. Meditate and then pray.",
    "source": "TB"
  },
  {
    "words": "The kind of peace that comes determines where your breakthrough comes from. (Stupid self-effort)",
    "source": "TB"
  },
  {
    "words": "If you are totally committed to God Almighty, He will take up satan’s challenge against you!",
    "source": "TB"
  },
  {
    "words": "If I don't see you healed in my heart, I will not even come to you.",
    "source": "TB"
  },
  {
    "words": "When I touch you, I feel your sickness in my body. That's why I know when you are healed.",
    "source": "TB"
  },
  {
    "words": "I call it timid soul - impatient.",
    "source": "TB"
  },
  {
    "words": "90% of possessed are not aware what they do.",
    "source": "TB"
  },
  {
    "words": "If God is with you, you will be comforted in whatever situation you find yourself in.",
    "source": "TB"
  },
  {
    "words": "We need to use our faith to put a demand on the anointing.",
    "source": "TB"
  },
  {
    "words": "Gifts minus character = satan",
    "source": "TB"
  },
  {
    "words": "Sometimes relationships are too deep to quit.",
    "source": "TB"
  },
  {
    "words": "As a Christian, receive trials as your friends.",
    "source": "TB"
  },
  {
    "words": "We will continue to be faced with issues that violate our conscience.",
    "source": "TB"
  },
  {
    "words": "When you are born again you have the privilege of letting the Creator to assist you. (Beeing free to walk among scorpions)",
    "source": "TB"
  },
  {
    "words": "He who sends a message by the hand of a fool Cuts off his own feet and drinks violence.",
    "source": "Prov 26:6"
  },
  {
    "words": "The great God who formed everything Gives the fool his hire and the transgressor his wages.",
    "source": "Prov 26:10"
  },
  {
    "words": "He who has pity on the poor lends to the LORD, And He will pay back what he has given.",
    "source": "Prov 19:17"
  },
  {
    "words": "Keep my commands and live, And my law as the apple of your eye.",
    "source": "Prov 7:2"
  },
  {
    "words": "The blessing of the LORD makes one rich, And He adds no sorrow with it.",
    "source": "Prov 10:22"
  },
  {
    "words": "For jealousy is a husband's fury; Therefore he will not spare in the day of vengeance.",
    "source": "Prov 6:34"
  },
  {
    "words": "Then Jesus answered and said, while He taught in the temple, 'How is it that the scribes say that the Christ is the Son of David?'",
    "source": "Mark 12:35"
  },
    {
    "words": " saying with a loud voice: 'Worthy is the Lamb who was slain To receive power and riches and wisdom, And strength and honor and glory and blessing!'",
    "source": "Rev 5:12"
  },
  {
    "words": "Now when the queen of Sheba heard of the fame of Solomon, she came to Jerusalem to test Solomon with hard questions, having a very great retinue, camels that bore spices, gold in abundance, and precious stones; and when she came to Solomon, she spoke with him about all that was in her heart.",
    "source": "2 Chr 1:9"
  },
  {
    "words": "The look on their countenance witnesses against them, And they declare their sin as Sodom; They do not hide it. Woe to their soul! For they have brought evil upon themselves.",
    "source": "Is 3:9"
  },
  {
    "words": "I acknowledged my sin to You, And my iniquity I have not hidden. I said, 'I will confess my transgressions to the LORD,' And You forgave the iniquity of my sin.",
    "source": "Ps 32:5"
  },
  {
    "words": "God constantly puts us to test.",
    "source": "TB"
  },
  {
    "words": "Sin easily hides where there is no heat of trial.",
    "source": "TB"
  },
  {
    "words": "satan is afraid of lack of response after his attack. When men finish, God starts.",
    "source": "TB"
  },
  {
    "words": "Fear changes focus.",
    "source": "TB"
  },
  {
    "words": "Your concictency in faithfulness and prayer is the only way out.",
    "source": "TB"
  },
  {
    "words": "To pray in Spirit is to pray in compliance with Scripture",
    "source": "TB"
  },
  {
    "words": "Anything happens - WHY GOD?",
    "source": "TB"
  },
  {
    "words": "Our weapon is REPENTANCE.",
    "source": "TB"
  },
  {
    "words": "Infallibility comes from baptism in the Holy Spirit.",
    "source": "TB"
  },
  {
    "words": "I don't want to correct you more than once for the same thing.",
    "source": "TB"
  },
  {
    "words": "If God is with you, He will show you a picture of future you desire, not the future you fear. ",
    "source": "TB"
  },
  {
    "words": "And blessed is he who is not offended because of Me.",
    "source": "Luke 7:23"
  },
  {
    "words": "saying to them, “It is written, ‘My house is a house of prayer,’ but you have made it a ‘den of thieves.’” And He was teaching daily in the temple. But the chief priests, the scribes, and the leaders of the people sought to destroy Him, and were unable to do anything; for all the people were very attentive to hear Him.",
    "source": "Luke 19:46-48"
  },
  {
    "words": "while we do not look at the things which are seen, but at the things which are not seen. For the things which are seen are temporary, but the things which are not seen are eternal.",
    "source": "2 Cor 4:18"
  },
  {
    "words": "If I bear witness of Myself, My witness is not true.",
    "source": "John 5:31"
  },
  {
    "words": "rather let it be the hidden person of the heart, with the incorruptible beauty of a gentle and quiet spirit, which is very precious in the sight of God.",
    "source": "1 Pet 3:4"
  },
  {
    "words": "Therefore, as the elect of God, holy and beloved, put on tender mercies, kindness, humility, meekness, longsuffering;",
    "source": "Col 3:12"
  },
  {
    "words": "But above all these things put on love, which is the bond of perfection.",
    "source": "Col 3:14"
  },
  {
    "words": "But he who is joined to the Lord is one spirit with Him.",
    "source": "1 Cor 6:17"
  },
  {
    "words": "But he shall not multiply horses for himself, nor cause the people to return to Egypt to multiply horses, for the Lord has said to you, ‘You shall not return that way again.’ Neither shall he multiply wives for himself, lest his heart turn away; nor shall he greatly multiply silver and gold for himself. Also it shall be, when he sits on the throne of his kingdom, that he shall write for himself a copy of this law in a book, from the one before the priests, the Levites. And it shall be with him, and he shall read it all the days of his life, that he may learn to fear the Lord his God and be careful to observe all the words of this law and these statutes, that his heart may not be lifted above his brethren, that he may not turn aside from the commandment to the right hand or to the left, and that he may prolong his days in his kingdom, he and his children in the midst of Israel.",
    "source": "Deut 17 16-20"
  },
  {
    "words": "So the LORD said to Moses, 'I will also do this thing that you have spoken; for you have found grace in My sight, and I know you by name.'",
    "source": "Ex 33:17"
  },
  {
    "words": "(as it is written, “I have made you a father of many nations”) in the presence of Him whom he believed—God, who gives life to the dead and calls those things which do not exist as though they did;",
    "source": "Rom 4:17"
  }
];

function pickRandomQuote(q) {
  let pick = q[Math.floor(Math.random()*q.length)];
  return pick
}

display.onclick = () => {
  let picked = pickRandomQuote(powerWords)
  let forDiplay = picked.words + '</br></br>' + '<b style="display: block;float: right">' + picked.source + '</b>' //+ powerWords.indexOf(picked)
  display.innerHTML = forDiplay;
  //let words = []  
  //powerWords.forEach((e) => words.push(e.source+'</br>'))
  //display.innerHTML = words.sort();
}
