var userInput;
var tempArray = [];
var month = 0;
var day = 0;
var horo;
var reply;


function bdayConverter(){
    bValue = 10000;
    
    userInput = document.getElementById('bday').value;
    tempArray = userInput.split('-');
    tempArray.splice(0,1);

    month = parseInt(tempArray[0]);
    day = parseInt(tempArray[1]);

    month = month * 100;
    bValue = bValue + month + day;
  
    

    myHoro(bValue);
}

 function myHoro(bValue){
   
    
    //Assigning bValue to a horscope
    if(bValue >= 10321 && bValue <= 10419 ){
        horo = "Aries";
    }
    else if(bValue >= 10420 && bValue <= 10520){
        horo = "Taurus";
    }
    else if(bValue >= 10521 && bValue <= 10620){
        horo = "Gemini";
    }
    else if(bValue >= 10621 && bValue <= 10722){
        horo = "Cancer";
    }
    else if(bValue >= 10723 && bValue <= 10822){
        horo = "Leo";
    }
    else if(bValue >= 10823 && bValue <= 10922){
        horo = "Virgo";
    }
    else if(bValue >= 10923 && bValue <= 11022){
        horo = "Libra";
    }
    else if(bValue >= 11023 && bValue <= 11121){
        horo = "Scorpio";
    }
    else if(bValue >= 11122 && bValue <= 11221){
        horo = "Sagittarius";
    }
    else if(bValue >= 11222 && bValue <= 11231){
        horo = "Capricorn";
    }
    else if(bValue >= 10101 && bvalue <= 10119){
        horo = "Capricorn";
        
    }
    else if(bValue >= 10120 && bValue <= 10218){
        horo = "Aquarius";
    }
    else{
        horo = "Pisces";
    }



    //switch case
    switch(horo){

        case 'Aries':
            reply = " You’re a fire sign who’s always ready for whatever challenges life brings, and this year is no different. Step up and conquer the world!            You feed off the fast-paced energy from your dynamic power planet Mars and 2020 starts with this aggressive planet in Sagittarius, the sign of adventure and knowledge. World travel now is an amazingly eye-opening experience now, rich with valuable learning experiences. It will take another several months, until the end of June, until Mars reaches its most dominant placement in your sign, where it will stay for the next two months. Winning is your main objective and yes, you can be a sore loser! The sun visits your sign from mid-March to mid-April, so happy birthday, courageous, inspirational Aries! Can you feel the anticipation building toward something amazing? You’re in your element now, so for the next month you’re a straight-up warrior (especially when it comes to competitions). You destroy anything in your path, and you enthusiastically push toward achieving your goals. Anyone who dares stand in your way now should watch out—you have zero patience for haters. Wounded Chiron is in your sign all year, causing a major identity crisis. Chiron challenges the very idea of what you believe in and are, and makes you wonder if you’re on the right track to reaching your life’s purpose. The worst of this transit could cause you to question if you even have a right to exist, but the Chiron retrograde cycle from early July to mid-December helps you reawaken the underlying Aries fire and understand why you’ve been undervaluing yourself so much. Embrace opportunities for spiritual healing now."
            break;

        case 'Taurus':
            reply ="Your love of the good life motivates you to accomplish some great things this year!            Venus, goddess of love and money, is your ruler and as she starts the year out in experimental Aquarius (Venus in Pisces January 1), your mind opens to new ideas in both areas. You’re more comfortable, though, when she enters your sign in early March until early April and then again in Libra (the other signs she rules) for about three weeks at the end of October. Pleasure and passion combine now to help you enjoy the finer things in life. The one retrograde period your ruler experiences is from mid-May to end of June, during her trip through curious Gemini, causing you to ponder the dualities of love and money. While you can’t imagine living life without a lot of either, it’s interesting to consider the alternatives.            The sun spends time in your comfort-conscious, earthy sign between mid-April and end of May, so happy birthday beautiful, loyal Taurus! You’re ready to work hard in exchange for the pleasures that life has to offer—especially beauty and abundance. You don’t have to apologize for loving beautiful things—this essential part of your nature is what drives you to succeed. Your senses are awakened now, and you fall in love with gourmet food, fine wine, expensive perfume, luxurious linens and beautiful artwork.            And don’t forget that Uranus, the planet of change, is moving along in your steady sign all year, causing upheaval in a lot of areas. Although it’s only retrograded until January 10, it cycles back again to a retrograde cycle in mid-August until the end of the year. So, what this means for you, dear Taurus, is rolling with the changes. Not your forte but being as open-minded and flexible as possible will get you through some rough patches during this progressive transit.";
            break;

        case 'Gemini':
            reply ="Connect with yourself and others on a higher level this year.            Mercury is your ever-logical, perceptive ruler, and as one of the fastest moving planets it changes signs quickly. It seems like everyone’s on the lookout for Mercury’s dreaded retrograde cycles, and because it’s your ruler, you should pay extra close attention. Not that you’re going to let them slow you down too much, but this year the three periods between February 6 and March 9, June 17 and July 11, and October 13 and November 2 are all dates to be aware of. It’s also important to note that all three retrogrades pass through emotional water signs, which advise you to slow down when dealing with the obstacles like miscommunications, misunderstandings and commuting mishaps. This will be challenging for you, Gemini, but you can do it.            The sun drifts through your airy sign from the end of May until the end of June, signifying a mentally alert time when you’re able to communicate and exchange ideas freely. Happy birthday curious, perceptive Gemini! You’re at your most perceptive now, so you’ll notice things that others ignore. Mercury is also the planet that’s linked to sibling relationships, and what better time to reconnect with a brother or sister than your birthday month? Whether you text each other several times a day or haven’t seen one another in years, strengthening your bond is possible now            It's time to tune in to details at the end of August as the sun enters Virgo, the other sign that Mercury governs. Health issues will be key now, too, especially stomach/intestinal issues, which you should tend to quickly. Listen to your body and at the very least get a physical to rule out more serious ailments.";
            break;

        case 'Cancer':
            reply ="Make yourself a top priority this year.            Your sign is linked with your roller coaster emotions, so it makes sense that your ruler is the emotional moon. Paying close attention to the moon’s movements will help you understand your moodiness a little better this year, starting with a full moon/lunar eclipse in your sign in the middle of January. You may feel lasting effects of this lunation as it is closely tied to family relationships, especially parent-child. Reunions and healing can take place now but be careful not to fall back into the same old unhealthy dynamics you’ve been trying to escape once the happiness subsides.            A new moon/solar eclipse in your sign at the end of June coincides with the start of your birthday month, giving you a chance to reboot and begin again (especially in areas that concern your priorities and the people who have come and gone from your life in the past year). This is a chance to figure out what’s been missing and what’s okay to let go of. Anything that’s outlived its use can be discarded now, Cancer. Let it go gently, but surely            The sun in your sign at the end of June until end of July is the perfect time to practice self-care and to protect your loved ones. You know that taking care of yourself is closely linked to your ability to take care of others, so if you haven’t been in a good position to do things for yourself, your familial bonds might be suffering as well. Take a spa day or weekend to recharge. Happy birthday caring, giving Cancer!";
            break;

        case 'Leo':
            reply ="Be the best Lion you can be in 2020!            You love basking in attention so it’s only fitting that your ruler is the ego-boosting sun. When 2020 begins the sun is in earthy, responsible Capricorn, so you’ll find yourself doing things for the sense of accomplish more than the glory. That all changes by the end of July, however, when the sun moves into your flashy sign and welcomes in your birthday month. Happy birthday expressive, creative Leo! Your mood is outgoing and playful, and you crave strong reactions to your antics. For the next four weeks you’re the life of the party, and you add the color and drama that’s been missing from your loved ones’ lives.            The emotional moon is the yin to the sun’s egotistical yang, so the new Cancer moon/solar eclipse at the end of June is also enlightening for you, Leo. This highly reflective time brings some uncomfortable emotional topics to the surface that you won’t be able to hide from, and it might feel as though you aren’t yourself. Your personality can’t ever truly be blocked, as the sun is now by the moon, but it can be subdued. Take a clue from this relatively somber time and make room for new emotional beginnings.            Wounded Chiron is also traveling in driven Aries (who rules the first house of self and is a fellow fire sign) this year - which can throw you full on into “who am I?” mode. An identity crisis is one of your worst nightmares and can put a lot of stress on your ego. Luckily you get a break from this angsty energy between the beginning of July and middle of December, when this troubling pair goes retrograde and gives you some room to remember who you truly are.";
            break;

        case 'Virgo':
            reply ="Take care of your mind and body this year!            Your ruler, Mercury, is one of the fastest moving planets, so your mind is naturally quick and alert. This year Mercury begins in practical, kindred earth sign Capricorn and quickly forms a conjunction with mind-expanding Jupiter, setting an optimistic tone for the year. Feeling broad-minded and sociable is a great way to start 2020.            There are also the usual three infamous Mercury retrograde periods to watch out for, this year between February 16 and March 9, June 18 and July 12, and October 13 and November 3. Since Mercury is your ruler, you probably know by now that this bad-mouthed transit will do its best to bring things to a standstill but don’t worry - your positive actions can be very effective. This year’s Mercury retrogrades all visit emotional water signs, so intuition often trumps logic when avoiding obstacles and dealing with dilemmas            The sun shines in your order-loving sign from the end of August until the end of September, so happy birthday practical, hardworking Virgo! The final days of summer are the perfect time to clear out the excess and get more organized. Friends and family might ask for your assistance getting themselves in order as well, as your reputation for being meticulous spreads. This is also a time to take care of health issues, so schedule your yearly doctors’ visits and follow up on any tests or lab work you have done.";
            break;

        case 'Libra':
            reply ="Your sense of fairness drives you to success.            Your lovely home planet, Venus, begins the year in airy Aquarius but quickly moves into sensitive, compassionate Pisces in the middle of January. This comfortable pairing creates a romantic, dreamy flow of love that will help you be more understanding, forgiving and affectionate. Venus travels through your sign starting at the end of October, putting close relationships in the spotlight. Don’t let your willingness to negotiate with people lead to crippling indecisiveness.            The one retrograde cycle your power planet experiences this year is from mid-May until the end of June while in brainy Gemini, causing you to think deeply about incongruities in your life. This transit encourages you to explore dualities in your life and work out love/hate relationships so you can find the balance and peace that you value so highly            The sun highlights your sign for a month starting in late September, so happy birthday cooperative, diplomatic Libra! Your beauty (inside and out) is evident, and you’re often looked up to as the standard by which other people want to live their lives. Decision-making can be a challenge now as you look for the ultimate fair solution, but sometimes there isn’t one that will make everyone happy.";
            break;

        case 'Scorpio':
            reply ="Nothing shakes your confidence this year!            You’ve got that infamous Scorpio swagger already, but you’ll really be feeling yourself when your power planet, Mars, spends time in your sign at the very beginning of the year. A couple days later Mars moves on to adventurous, knowledge-seeking Sagittarius, but for those first two days you’re untouchable! Mars in Aries, the other sign it rules, packs another great punch when they team up at the end of June, but it could also cause you to be impatient and self-centered, which aren’t two inherent Scorpio qualities            Your other co-ruler, contemplative Pluto, spends the year in driven Capricorn, so it will be even more important for you to get what you want. You might go to great lengths to reinvent yourself, but you aren’t doing it for anyone else. This is your year to do you, Scorpio.            The sun spends time in your confident sign at the end of October until late November, highlighting all your best qualities. Happy birthday intense, determined Scorpio! Your desires come to the surface, and you crave closer, more intimate relationships. You might be even more secretive now than usual, but you expect full disclosure from everyone else. You also ooze a magnetism that’s hard for others to ignore, but you’re very picky about who you let join your inner circle.";
            break;

        case 'Sagittarius':
            reply ="If you can envision it, you can make it a reality.            As the fiery Archer, your outgoing, adventurous nature is backed by your power planet, optimistic Jupiter. This year, Jupiter is paired up with serious Capricorn again, so the mood still isn’t that light. Your good luck is directly tied to your actions this year, essentially ensuring that you make your own luck by working hard and actively shaping your own future. A retrograde period from the middle of May to mid-September gives you a chance to review your goals, and reconsider some of your opinions/ideals. If you’re on the right track, forge ahead. But if you’ve been wrong, admit it and change direction.            You love to talk to people and expand your universe through world travel, which can all come to a standstill during this year’s three Mercury retrograde periods. Be aware of the six-week cycles in mid-February, the middle of June and the middle of October where communication might be spotty and glitches in electronic devices can make your life difficult. Flight delays, mysteriously cancelled hotel reservations and GPS malfunctions make traveling nightmarish during this time, but because of Cancer’s watery influence on these retrogrades (Cancer only influences Mercury in the summer), relying on your instincts to get you through can be a lifesaver            The sun stops by your house between the end of November to end of December, when your focus will be to make intimate connections to something larger than yourself. Happy birthday philosophical, searching Sagittarius! You have the best time expanding your horizons and visiting new places/meeting new people now, especially if they can teach you something about the world and/or yourself. Some people can’t wait to reach the destination, but for you it’s all about the journey.";
            break;

        case 'Capricorn':
            reply ="Combine the old with the new to be more successful this year.            Your home planet Saturn arrived in your practical sign back in December of 2017 and continues that trip for part of this year as well. You should be especially focused on your goals now and may be particularly in tune with your ultimate purpose in life. You must be willing to make changes to meet your full potential, but a hardworking Goat is never afraid to do whatever it takes to climb to the top. Development and progress in all areas of life are possible this year if you focus on yourself and what’s most important.            A Saturn retrograde period begins in mid-May, after Saturn has moved into free-thinking Aquarius (back toward the end of March). This retrograde cycle gives you some breathing room and encourages you to look back on the past several months for areas in your life that could use a do-over.            The sun visits your disciplined sign at the end of December, so happy birthday ambitious, goal-oriented Capricorn! You’re an understated sign who prefers to keep your head down and work toward your goals for the most part, but during your birthday month you might come alive in unexpected ways. Most people might not know you have a wicked sense of humor that you express in a sarcastic tone, or that Christmas is your favorite holiday! Sharing more of yourself with others will broaden your social circle.";
            break;

        case 'Aquarius':
            reply ="The new year is full of changes and challenges!            Your home planet, Uranus, made a big move into steady Taurus last year, and these two very different energies aren’t the best of friends. Uranus is experimental and Taurus likes to take a conservative approach, so there will be some mismatched energy to deal with now. The retrograde period for your power planet this year is from mid-August until the end of the year, which should give you a slight break from the need for outward rebellion. Turning that rebellious streak inward, however, can create its own set of issues, so be prepared for inner battles that can lead you down the path to self-destruction (and ultimately redemption) this year.            The sun always passes through your sign at the start of the year, so from the end of January until the end of February, you celebrate your birthday month. Happy birthday to you, style maker and game changer Aquarius! The sun forms a square to your home planet a couple days after its entrance into your sign, giving off a double dose of unpredictability. Watch out for a buildup of nervous tension over not knowing exactly what might happen next. You like your freedom, but you don’t thrive on chaos.";
            break;

        case 'Pisces':
            reply ="A mix of illusion and reality shapes your year.            Your home planet Neptune supports your idealistic approach to life, and because it’s traveling in your escapist sign all year, this is the time to really dream big. Pay attention to intuition and visions – your subconscious is an accurate window into your soul and what you truly want this year.            Neptune’s retrograde period occurs from late June until the end of November, however, which can cause all your daydreams to come crashing down. Having the soft, pillowy layers of plausible deniability you’ve built around you can be unnerving, and you won’t want to face the realities that slowly creep in. You’re tougher than you seem though, Pisces, so having to face the music can be a blessing in disguise.            The sun will be floating through your imaginative sign from the end of February until the end of March, so happy birthday to you creative, romantic Pisces! You thrive living in your dream world, and you crave solitude to contemplate all of life’s “what ifs.” Because you’re the last sign of the Zodiac and because this transit occurs during the Spring Equinox, this is a time to embrace the ending of one cycle and the beginning of a new one. Take a breather, Pisces, and regain your strength before it’s time to start all over again.";
            break;
    }

    document.getElementById('output').innerHTML="You are an" + horo;
    document.getElementById('output').innerHTML = " " + reply;
    
    
}

