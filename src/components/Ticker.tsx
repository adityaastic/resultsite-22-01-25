import { useHeaderTicker, useInfoCardSecond } from "../hooks/useHome"

export const HeaderTicker = () => {
  const { headerTicker } = useHeaderTicker()
  

  return (
    <div className="ticker-container">
      <div className="ticker-text" >
        {/* {(headerTicker && !isLoading) &&  */}
        <div className="marquee" 
        dangerouslySetInnerHTML={{ __html: headerTicker?.ticker }}
        >
{/* This is BGM Game Pvt. Ltd. */}
        </div>
        {/* } */}
      </div>
    </div>
  )
}

export const FooterTicker = () => {
  const { infoCardSecond } = useInfoCardSecond();

  return (
    <>
      <div>
        
          <p dangerouslySetInnerHTML={{ __html: infoCardSecond?.disclaimer }}></p>
       
      </div>
    </>
  );
};






//  <div style="margin-bottom: 20px;">
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left; text-align: left; ">What is Babaji satta ?</p>
//     <p style="text-align: left;">
//       Babaji satta <span style="color: #28a745;">(सट्टा किंग)</span> is a sort
//       of lottery game in view of numbers from 00 to 99 which goes under
//       "Betting". The genuine name of this game is Babaji satta Matka, in
//       which "Babaji satta" signifies wagering or betting and "Matka"
//       signifies a pot through which a number is somewhat long. In the
//       Babaji satta Matka game, individuals bet cash on their picked
//       numbers from between 00 to 99. After which, a number is
//       excessively long of the pot. Whichever individual's number was
//       excessively long, he would win the award and individuals called
//       him as the Babaji satta. Babaji satta(सट्टा किंग) isn't the
//       situation, it was the title used to respect the champ of the
//       Babaji satta Matka. However, as this game became well known,
//       individuals began knowing it by the name of Babaji satta.
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">History of Babaji satta Matka game</p>
//     <p style="text-align: left;">
//       In the event that you also are keen on being familiar with the historical backdrop of Babaji satta Matka, 
//       then you have come to the ideal location. Babaji satta Matka satta result began during the 1950s, while the vast 
//       majority bet on the opening and shutting costs of cotton, which was then sent from the Bombay Cotton Trade to the
//       New York Cotton Trade, by means of teleprinters.
//     </p>
//     <ul style="padding-left: 2rem;">
//       <li style="text-align: left;"> In 1961, when the New York Cotton Trade prohibited this sort of wagering, then, at that point, these punters/players needed to consider alternate ways of keeping this Babaji 
//         satta Matka, satta king,satta Result business alive. 
//       </li>
//       <li style="text-align: left;"> In 1962, a subsequent head, Kalyanji Bhagat, who possessed a staple shop from Worli, began Kalyan Worli Matka in which, as per his new principles, even 
//         the most unfortunate of the poor could stake it. 1 rupee in particular. 
//       </li>
//       <li style="text-align: left;"> Simultaneously following two years, Ratan Khatri continued the New Worli Matka in 1964, in which he rolled out certain improvements in the 
//         guidelines of the game. 
//       </li>
//       <li style="text-align: left;"> Where Kalyanji Bhagat's Matka used to run the entire days of the week, Ratan Khatri's Matka used to run just six days every week.</li>
//       <li style="text-align: left;"> At the point when material factories turned out to be more famous in Mumbai, a large portion of the factory laborers began playing matka
//         more, because of which more bookies began opening their shops around these plant regions, and in this manner Focal Mumbai is a great deal Matka
//         business has turned into a major center in Mumbai. 
//       </li>
//       <li  style="text-align: left;"> Sometime in the past the matka business arrived at its top between the 1980s and 1990s, around then there was a business of about Rs 500 
//         crore each month. 
//       </li>
//       <li style="text-align: left;"> After the rehashed strike of Mumbai Police, satta king was a great deal of harm at the foundations of Babaji satta Matka. So bookies had to
//         remove these bases from the city. Simultaneously, some must be taken to different states additionally like Gujarat, Rajasthan, and so forth. 
//       </li>
//       <li style="text-align: left;"> At the point when there are no more choices of wagering or Babaji satta left, then, at that point, bookies have begun to focus on another betting 
//         like internet-based lotteries. Simultaneously, A few speculators began playing wagering on cricket matches. 
//       </li>
//       <li style="text-align: left;"> Similarly, as the impedance of the police began expanding, this business likewise began to endure a great deal. Simultaneously when Kalyanji
//         Bhagat's child "Suresh Bhagat" was killed, then in 2008, the Babaji satta was practically shut. Indeed, even after this, other Babaji satta Matka is more well
//         known today in Gali, Disawar, Faridabad, Delhi Marketplace, Kuber, JD Durga, New Faridabad, and so on.). Next, you will get total data connected with Babaji 
//         satta Matka in this article. 
//       </li>
//     </ul>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">How many types of Babaji satta game ?</p>
//     <p style="text-align: left;">The <span style="color: #28a745;">Babaji satta</span> has no sort of itself. At the point when individuals start another game in <span style="color: #28a745;">Babaji satta</span>, individuals name the game with 
//       the name of various Urban communities, states, and places. Like Gali, Peshawar, Ghaziabad, Faridabad, Mumbai Morning, Delhi Ruler, Dubai Lord, 
//       and so forth. In spite of the fact that there are many sorts of Babaji satta games played in India, however out of every one of them, 4 games
//       (Gali, Peshawar, Ghaziabad, satta king,Faridabad) are played the most in the entire of India. The Peshawar game is generally well-known. This 
//       game is from India and is worked from that point.
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">How to play Babaji satta game ?</p>
//     <p style="text-align: left;">The In the Babaji satta game, individuals bet wagers on their picked numbers somewhere in the range of 0 and 99. For this, the bettors
//       contact their region's Khaiwal. Khaiwal functions as an arbiter/center man between the bettors and the game administrators. Each Khaiwal gathers
//       the cash and the number from the players in his area and sends them to the organization. Furthermore, when a champ is proclaimed he gathers the 
//       rewards from the organization and conveys them to the triumphant bettor. At a predefined time, the Babaji satta organization opens an irregular
//       number. The triumphant bettor gets multiple times the cash he bet.
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">How much profit you can earn from Babaji satta ?</p>
//     <p style="text-align: left;">The Assume in the event that somebody has wagered 10 rupees on a number, on the off chance that that number is opened, the 
//       client will get 10 x 90 = 900 Rupees.
//       Also, clients will get 1800 rupees for 20 rupees, 2700 rupees for 30 rupees, 3600 rupees for 40 rupees and 4500 rupees for 50 rupees. The client can put
//       away as much cash as he needs on one number and can play many numbers as he needs.
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">Is it legal to play Babaji satta game ?</p>
//     <p style="text-align: left;">The lawfulness of the <span style="color: #28a745;"> Babaji satta online </span> is not entirely settled by the nearby government where the game is being played. On the off chance that we discuss India, Wagering 
//       is unlawful, and assuming that discovered playing you might need to pay a weighty fine or serve a prison term. Still many individuals play Babaji 
//       satta in stowing away from the specialists. Babaji satta is very famous in India.
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">How to play Babaji satta online and why ?</p>
//     <p style="text-align: left;">For what reason would it be advisable for us to play Babaji satta on the web? On the off chance that we discuss this, the basic response is
//       that it is a lot simpler to play Babaji satta online. If you have any desire to play Babaji satta and remain protected from the police then, at 
//       that point, playing Babaji satta online could be a protected and better other option. In the realm of the web, getting on the web players is
//       certainly not a simple assignment. However, we need to unequivocally explain here that as indicated by the Indian regulations wagering is unlawful, and 
//       assuming found wagering you might need to pay a strong fine. Assuming that you want you might find numerous applications on the Google Play store, which
//       can help you to play the Babaji satta game on the web. All you have to do is to download the application and introduce it. Then, at that point, you can
//       play the Babaji satta game at the solace of your home.
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">What happen when you play Babaji satta ?</p>
//     <p style="text-align: left;">Most people have the misconception that if they play <span style="color: #28a745;">Babaji satta</span>, they will win and they will earn good money. But this happens quite the opposite. Those 
//       people get trapped in such games so badly that they lose everything and get ruined. As you know, only one number from 00 to 99 opens in this game. This means 
//       that in this game, out of 100 people only one man gets a lottery. The remaining 99 people only lose. And the whole money of the 99 losers is given to the
//       winner. The 
//       chances of winning in this game are 1% out of 100. People know about this but still, they play this game till they are completely ruined.
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">What is the reality of Babaji satta game ?</p>
//     <p style="text-align: left;">Many individuals have various perspectives about Babaji satta Game. Some say it is a toss of the dice, some call it a 
//       round of Satta Lord <span style="color: #28a745;"> Babaji satta result. </span> As a matter of fact, the slip that should be eliminated from Matka ought to be finished 
//       before everybody. That is, it ought to be finished within the sight of the relative multitude of individuals. In any case, this isn't finished in the 
//       present time, rather the Babaji satta as per his own slip arises. Which truly builds my doubts over this game much more. Since I think he pronounces 
//       the slip wherein not very many individuals are putting their cash. Because of this, the vast majority lose cash, which makes them more beneficial. A 
//       great many people call it a toss of the dice however as a general rule the story is something different. Along these lines, as we would see it, you 
//       ought to avoid this kind of betting or Babaji satta Matka in Hindi. It is really great for every one of you. Try sincerely and don't bring in cash 
//       and continue to sit on karma.
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">What is Babaji satta? Complete information ?</p>
//     <p style="text-align: left;">Discover Gali Faridabad Ghaziabad, Gurgaon, and so forth, Babaji satta these times are likewise unique. In any case, the level of the installment 
//       sum will be something similar. This is the way you can play wagering, in each city, there are a few wagering dealers, who take the bet, they can give 
//       you a little slip, all things considered, you will pay the equivalent whenever the opportunity comes, and you will obtain the outcome You can see, there are
//       a great many destinations on the Web on which you can see the outcomes, on every one of the spots you will get a wide range of speculative outcomes
//       , on every one of the spots you will get a wide range of speculative outcomes, on the knowledge you will likewise track down speculative graphs, 
//       for example, which day in which day Number came, is there speculative legitimate in India, Babaji satta no speculative lawful in India, dangerous 
//       in India is played covertly and furtively on the off chance that any sort of legitimate activity was on you Land, you might be condemned to a half year to 3 years. 
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">How To Get Rid Of Babaji satta Game Addiction ?</p>
//     <p style="text-align: left;">Hi, companions in the event that you are pained by your wagering compulsion, and need to stop wagering dependence, companions, there are no two feelings
//       about this, Babaji satta just demolishes you, each one out of 100 Just an individual can exploit this consistently, companions, if you need to stop the wagering enslavement, then 
//       you can rapidly leave it. You attempt to invest increasingly more energy with your family, engage in their bliss and distress, and you
//       are glad to acquire however much you can by surrendering more voracity, in the good 'ol days to stop the wagering compulsion, As frequently as you play
//       wagering consistently, decrease that sum in around 50% of each and every day, and ultimately, you play wagering of 10:00 ₹ consistently, and that is the means by which
//       your wagering enslavement will vanish.
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">Why Babaji satta game is so famous in India ?</p>
//     <p style="text-align: left;">Hi companions today we will discuss <span style="color: #28a745;">  Babaji satta game </span>, as may be obvious, companions India has more populace, and India's work rate is pitiful, India 
//       has more individuals and the vast majority Private ventures do their business by carrying on with work, meanwhile comes Babaji satta, Babaji satta Game 
//       the vast majority play in the eagerness to bring in speedy cash, a person of Babaji satta Game There is no standard that you can play just with a standard sum, to 
//       that end individuals of India like the Babaji satta game, that is the reason the Babaji satta game is viral in India, and it is played a great deal.
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">Where to get fast Babaji satta result ?</p>
//     <p style="text-align: left;">Bunches of individuals play Babaji satta every day because they are extremely dependent on it. 
//       They couldn't care less about their cash they simply need to play Babaji satta. They bet every day on
//       various rounds of Babaji satta like Gali, Dishawar, Faridabad, Ghaziabad, and so on. The outcome timing 
//       of these Babaji satta games is fixed by the organization. For instance Dishawar <span style="color: #28a745;"> Babaji satta result </span> open at 5:00 AM, Faridabad
//       satta result open at 6:15 PM, Gaziyabad Babaji satta result open at 8:00 PM and Gali satta result open at 11:00 PM. So People
//       groups hang tight for each game outcome where they have put away their cash. There are two different ways of getting Babaji satta Results. Assuming 
//       you need quick Babaji satta results you ought to remain in contact with your Dhaliwal. Because Dhaliwal is the main individual who can give you the
//       quickest <span style="color: #28a745;"> Babaji satta result </span>. There is one more approach to getting satta results. You can Look through Babaji satta on google. You will find numerous
//       sites which give Babaji satta results. Yet, this site update result is Somewhat late. Many run whatsapp gorups for Babaji satta result. You can likewise 
//       join that gathering for getting satta results.
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">How to get Babaji satta leak number ?</p>
//     <p style="text-align: left;">Everybody needs to get the Babaji satta release number of Gali, Dishawar, Ghaziabad, and Faridabad game With the goal can create
//       tremendous gain by dominating the match. In the event that you search on google, you will track down numerous sites on google where 
//       many individuals have posted their advertisements for giving  <span style="color: #28a745;"> Babaji satta leak </span>  Jodi straightforwardly from the organization. Be that
//       as it may, for this they charged a weighty sum from you. Assuming you find any Such individual on the web If it's not too much trouble, reconsider 
//       paying him. Most of the individuals are con artists in this game. They have no association with the organization. They all are People who simply give
//       you arbitrary numbers by saying that it is a release number straightforwardly from the organization. Some individuals request that you pay ahead of 
//       time and some individuals request that you pay a level of winning sum after you dominate the match. Assuming your individual advised you to pay in the
//       wake of passing the game that doesn't imply that you will be in benefit or won't lose your cash. Because the individual who maintains that you should pay 
//       subsequent to passing the game will likewise give you a 2 or 4 Jodi of irregular numbers and they will advise you to put away large cash on these number. Assuming 
//       that you contribute a large sum to that numbers and in the event that those numbers get out as a triumphant number, you will bring in colossal cash and you need to
//       impart a level of winning add up to that individual. In short, you can't get Babaji satta's release number from any place. It's all a trape to bring in cash from 
//       clients like you.
//     </p>
//   </div>
//   <div style="margin-bottom: 20px;">
//     <p style="color: #de7a2d; font-size: 1.5rem; text-align: left;">Can you become rich by playing Babaji satta game.</p>
//     <p style="text-align: left;">The most straightforward method for bringing in cash without accomplishing any difficult work is by betting.
//       It might imply facing a lot of challenges yet the prize makes it worth the effort. Babaji satta Matka is one of 
//       those types of betting in which you can crapload of cash in an exceptionally brief time frame length. Indeed, you 
//       can get rich by playing the Babaji satta game. Be that as it may, for this, you ought to know how to play the Babaji
//       satta game well indeed. And furthermore, Karma is one of the vital variables in the round of betting. In the event 
//       that you're one of the people who has karma as an afterthought, you have an extraordinary opportunity to break the game. place
//       of the discussion is about the games that the speculators can win reliably when they play with the right system. Just put away 
//       that lot of cash which could bring about a decent benefit, I imply don't place all of your cash in it. This is what I 
//       accept is the right method to put away your cash. And furthermore, remember that the greater the risk, the more 
//       profit you can expect. 
//     </p>
//   </div>
// </div>  


//  <div style="background-color: rgb(236, 236, 236); color: black; text-align: center; font-size: 24px; padding: 15px;" class="all-game-chart-title text-secondary">BABAJI SATTA RESULT</div>
// <div class="ticker-container">
//   <div class="ticker-text ">
//     <p style="margin-bottom: 0;"> Satta result, satta king, gali result, satta matka, matka result, satta king result, satta club, matka satta, satta king chart,
//       satta result, delhi satta, disawar satta king, gali satta, disawar satta, satta king faridabad, gali satta king, gali disawar satta king,
//       matka indian, satta king online, satta king satta king, indian satta, delhi disawar, gali disawar, satta disawar, satta game, play india, satta gali,
//     </p>
//     <p style="margin-top: 0;">   delhi disawar satta, sattaresult,Disawar satta, Satta king up, Satta result, Satta king result, Satta king online, Gali result,
//       Desawar result, Satta king chart, Satta king live, Gali satta, Deshawar live result, Gali live result, Satta matka, Satta matka king,
//       Satta king up, Satta king 20222 chart, Satta king desawar, Satta king gali, Gali live result, Disawar live result, Satta Number,
//       Satta Game, Gali Number, Delhi Satta king, Satta Bazar, Black satta king, Gali Single Jodi, Black Satta Result, Gali satta king result,
//       Disawar satta king result  
//     </p>
//   </div>
// </div> 



// 👉अब आप ऑनलाइन गेम हमारी एप्लिकेशन पे भी खेल सकते हो ।
// 👉फरीदाबाद ,गाजियाबाद ,गली और दिसावर खेलने वाले डाउनलोड करे एप्लीकेशन !
// 🔥सबसे जायदा रेट 10 &nbsp;के &nbsp;980<br />🔥हेल्पलाइन नंबर 6367529290
// 👉ऑनलाइन गेम प्ले करने के लिए PLAY STORE से हमारी एप्लिकेशन डाउनलोड करे
// नोट : गली दिसावर गेम प्ले करने वाले क्लिक करके डाउनलोड करे