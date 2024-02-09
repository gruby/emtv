let display = document.getElementById('displayDiv');
let powerWords = [
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
    "source": "Mt 13:57"
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
    "source": "Ef4:19"
  },
  {
    "words": "Two things I request of You (Deprive me not before I die): Remove falsehood and lies far from me; Give me neither poverty nor riches Feed me with the food allotted to me; Lest I be full and deny You, And say, “Who is the Lord?” Or lest I be poor and steal, And profane the name of my God.",
    "source": "Prov 30:7-9"
  },
  {
    "words": "They shall not hurt nor destroy in all My holy mountain, For the earth shall be full of the knowledge of the Lord As the waters cover the sea.",
    "source": "Is 11:9"
  },
  {
    "words": "For the earth will be filled With the knowledge of the glory of the Lord, As the waters cover the sea.",
    "source": "Ha 2:14"
  },
  {
    "words": "For I desire mercy and not sacrifice, And the knowledge of God more than burnt offerings.",
    "source": "Ho 6:6"
  },
  {
    "words": "who desires all men to be saved and to come to the knowledge of the truth.",
    "source": "1 Tim 2:4"
  },
  {
    "words": "Do not be afraid of their faces, For I am with you to deliver you,” says the Lord.",
    "source": "Jr 1:8"
  },
  {
    "words": "And I will give you shepherds according to My heart, who will feed you with knowledge and understanding.",
    "source": "Jr 3:15"
  },
  {
    "words": "Circumcise yourselves to the Lord, And take away the foreskins of your hearts, You men of Judah and inhabitants of Jerusalem, Lest My fury come forth like fire, And burn so that no one can quench it, Because of the evil of your doings.",
    "source": "Jr 4:4"
  },
  {
    "words": "Seek the Lord, all you meek of the earth, Who have upheld His justice.Seek righteousness, seek humility. It may be that you will be hidden In the day of the Lord’s anger.",
    "source": "Zep 2:3"
  },
  {
    "words": "His brightness was like the light; He had rays flashing from His hand, And there His power was hidden.",
    "source": "Hb 3:4"
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
    "source": "J 18:37"
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
    "source": "J 14:13-14"
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
    "source": "Lk 5:17"
  },
  {
    "words": "Then he said to him, “Did not my heart go with you when the man turned back from his chariot to meet you? Is it time to receive money and to receive clothing, olive groves and vineyards, sheep and oxen, male and female servants?",
    "source": "2 K 5:26"
  },
  {
    "words": "Then he set his countenance in a stare until he was ashamed; and the man of God wept. ",
    "source": "2 K 8:11"
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
    "source": "Dn 9:20"
  },
  {
    "words": "When evening had come, they brought to Him many who were demon-possessed. And He cast out the spirits with a word, and healed all who were sick,",
    "source": "Mt 8:18"
  },
  {
    "words": "And you will be blessed, because they cannot repay you; for you shall be repaid at the resurrection of the just.",
    "source": "Lk 14:14"
  },
  {
    "words": "The king said moreover to Shimei, “You know, as your heart acknowledges, all the wickedness that you did to my father David; therefore the Lord will return your wickedness on your own head. ",
    "source": "1 K 2:44"
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
    "source": "Lk 1:50"
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
    "source": "Ez 37:7"
  },
  {
    "words": "They hate the one who rebukes in the gate, And they abhor the one who speaks uprightly.",
    "source": "Am 5:10"
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
    "source": "1 Kings 12:7"
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
    "words": "Now the Lord is the Spirit; and where the Spirit of the Lord is, there is <span>liberty</span>.",
    "source": "2 Cor 3:17"
  },
  {
    "words": "However, the report went around concerning Him all the more; and great multitudes came together to hear, and to be healed by Him of their infirmities. <span>So He Himself often withdrew into the wilderness and prayed.</span>",
    "source": "Lk 5:15-16"
  },
  {
    "words": "And He said, “Let Me go, for the day breaks.” But he said, “<span>I will not let You go unless You bless me</span>",
    "source": "Gen 32:26"
  },
  {
    "words": "However, regarding the ambassadors of the princes of Babylon, whom they sent to him to inquire about the wonder that was done in the land, God withdrew from him, in order to test him, that He might know all that was in his heart.",
    "source": "2 Chr 32:31"
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
    "source": "Lk 7:30"
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
    "source": "1Tm 3:5"
  },
  {
    "words": "For I wish that all men were even as I myself. But each one has his own gift from God, one in this manner and another in that.",
    "source": "1 Cor 7:7"
  },
  {
    "words": "Now he who keeps His commandments abides in Him, and He in him. And by this we know that He abides in us, by the Spirit whom He has given us.",
    "source": "1 J 3:24"
  },
  {
    "words": "And if a son of peace is there, your peace will rest on it; if not, it will return to you.",
    "source": "Lk 10:6"
  },
  {
    "words": "And the scribes and chief priests heard it and sought how they might destroy Him; for they feared Him, because all the people were astonished at His teaching.",
    "source": "Mk 11:18"
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
    "source": "Gn 2:25"
  },
  {
    "words": "However, the report went around concerning Him all the more; and great multitudes came together to hear, and to be healed by Him of their infirmities. So He Himself often withdrew into the wilderness and prayed.",
    "source": "Lk 5:15-16"
  },
  {
    "words": "Yet if anyone suffers as a Christian, let him not be ashamed, but let him glorify God in this matter.",
    "source": "1P 4:16"
  },
  {
    "words": "For they had not understood about the loaves, because their heart was hardened.",
    "source": "Mk 6:52"
  },
  {
    "words": "This man heard Paul speaking. Paul, observing him intently and seeing that he had faith to be healed,",
    "source": "Act 14:9"
  },
  {
    "words": "Therefore I say to you, the kingdom of God will be taken from you and given to a nation bearing the fruits of it.",
    "source": "Mt 21:43"
  },
  {
    "words": "Not that I seek the gift, but I seek the fruit that abounds to your account. Indeed I have all and abound. I am full, having received from Epaphroditus the things sent from you, a sweet-smelling aroma, an acceptable sacrifice, well pleasing to God.",
    "source": "Ph 4:17-18"
  },
  {
    "words": "And another angel followed, saying, “Babylon is fallen, is fallen, that great city, because she has made all nations drink of the wine of the wrath of her fornication.”",
    "source": "Rv 14:8"
  },
  {
    "words": "But the wisdom that is from above is first pure, then peaceable, gentle, willing to yield, full of mercy and good fruits, without partiality and without hypocrisy.",
    "source": "Jm 3:17"
  },
  {
    "words": "Whoever transgresses and does not abide in the doctrine of Christ does not have God. He who abides in the doctrine of Christ has both the Father and the Son.",
    "source": "2 J 1:9"
  },
  {
    "words": "For He whom God has sent speaks the words of God, for God does not give the Spirit by measure.",
    "source": "J 3:34"
  },
  {
    "words": "And he said, 'O man greatly beloved, fear not! Peace be to you; be strong, yes, be strong!' So when he spoke to me I was strengthened, and said, 'Let my lord speak, for you have strengthened me.' ",
    "source": "Dn 10:19"
  },
  {
    "words": "And you have done worse than your fathers, for behold, each one follows the dictates of his own evil heart, so that no one listens to Me. Therefore I will cast you out of this land into a land that you do not know, neither you nor your fathers; and there you shall serve other gods day and night, where I will not show you favor.'",
    "source": "Jr 16:12-13"
  },
  {
    "words": "And seek the peace of the city where I have caused you to be carried away captive, and pray to the Lord for it; for in its peace you will have peace.",
    "source": "Jr 29:7"
  },
  {
    "words": "And David said to Gad, 'I am in great distress. Please let me fall into the hand of the LORD, for His mercies are very great; but do not let me fall into the hand of man.' ",
    "source": "1 Chr 21:9"
  },
];

function pickRandomQuote(q) {
  let pick = q[Math.floor(Math.random()*q.length)];
  return pick
}

display.onclick = () => {
  let picked = pickRandomQuote(powerWords)
  let forDiplay = picked.words + '</br></br>' + '<b style="display: block;float: right">' + picked.source + '</b>' //+ powerWords.indexOf(picked)
  display.innerHTML = forDiplay;
}

/* 
{
      "words": "",
      "source": ""
    },
*/