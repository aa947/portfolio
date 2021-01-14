function generateVisitLiveLink(link) {
  return `<a
      href="${link}"
      class="p mb-0 font-weight-bold text-gray-800"
    >
      visit live version.
    </a>`;
}

export default [
  {
    projectTitle: "Sports Book HUD",
    projectLink: "#",
    imageDirection: "rect",
    imageUrl: "/imgs/logos/sportsBookHUD.png",
    date: "November 2020",
    place: "London",
    imgWidth: "128px",
    imgHeight: "128px",
    color: "info",
    textHtml: `<ul>
        <li>Chrome extension that automate some tasks for tasks for Illinois sports betting community.</li>
        <li>The Extension works with the top 5 betting websites in the state of Illinois. </li>
        <li>This is a very sophisticated extension, created from scratch. </li>
        <li> What The Extension do: \n
          <ol>
            <li>Scraps websites: Bovada, BetRivers, PointsBet, Fanduel, DraftKings.</li>
            <li>These websites have a very short session, they will log you out within 15mins of inactivity.</li>
            <li>I applied a combination of techniques, and I was able to extend the session time to few hours.</li>
            <li>on one click, you can open the 5 websites together.</li>
            <li>if an instance of a website is already open, it will not open a new one.</li>
            <li>you can safely store your credentials to those websites, and get automatically logged in with one click.</li>
            <li>you can always monitor the instances that are open at the moment.</li>
            <li>you have an options page that allows you to configure every aspect of the extension work.</li>
            <li>the extension also allows you to watch specific odds from a specific APIs, or you can download a file containing your own odds.</li>
            <li>Then it scraps each one of theses websites looking for that odd, then it overlays the values form these sources.</li>
            <li>The idea is to compare the odds from different resources instantly without the need to open these resources manually.</li>
            <li>The option page also allows user to configure overlaying and comparing process.</li>
          </ol>
        </li>
         <li>Stack: Javascript, OOP. </li>
         <li> project logic flow: \n
                <img src="https://i.imgur.com/nmbR2gW.png" width="100%" class="p-3" /> 
                <p> check it out on miro here: <a href="https://miro.com/app/board/o9J_lYvevbc=/" > https://miro.com/app/board/o9J_lYvevbc=/ </a></p>
         </li>
      </ul>`,
  },
  {
    projectTitle: "Lesvos project",
    projectLink: "",
    imageCode:
      "<i class='material-icons' style='font-size:1.7rem;' >Lesvos Forms</i>",
    date: "Aug 2020",
    place: "London",
    textHtml: `<ul>
      <li>A client in Greece wanted to collect data about people who are using their services. a server that collects all the data, and client forms where the employees can use them to grab data even offline.</li>
      <li> stack: Devops, Java, XlsForms. </li>
        <li> project logic flow: \n
          <img src="https://i.imgur.com/L9vABZD.png" width="100%" class="p-3" /> 
        </li>
        <li>Feedback From the Client: \n
          <img src="/imgs/feedbacks/lesvos_german.png" width="100%" class="p-3" /> 
        </li>
    </ul>`,
  },
  {
    projectTitle: "MinerGo",
    projectLink: "http://minergo.herokuapp.com/",
    imageUrl: "/imgs/logos/minergo.png",
    date: "December 2020",
    place: "London",
    imgWidth: "109px",
    imgHeight: "100px",
    textHtml: `<ul>
    <li>INVEST IN MINING WITH MINERGO.</li>
    <li> This is only a desktop version of Minergo, it's not mobile responsive.</li>
    <li>The Role:\n 
        <ol>
          <li> started the project from scratch.</li>
          <li> created Node server serves React App through Heroku.</li> 
          <li> Started from Figma design, turned it into a website. </li>
          <li> This project was css centered,  with reusable components in mind.</li>
          <li> Another team is working on it now.</li> 
        </ol>
    </li>
    <li> Stack: Javascript, Node, React, CSS. </li>
    <li> ${generateVisitLiveLink("http://minergo.herokuapp.com/")} </li>
    </ul>`,
  },
  {
    projectTitle: "Braun Classics",
    projectLink: "https://braun.webinit.de/",
    imageUrl: "/imgs/logos/braun.png",
    date: "December 2020",
    place: "London",
    imgWidth: "200px",
    imgHeight: "88px",
    textHtml: `<ul>
          <li>BRAUN CLASSICS was created in 1993 by Kurzenberger and Braun in Munich, Germany. </li>
          <li>BRAUN produces the finest personalized Eyewear frames for the German and Austrian optician market.</li>
          <li> The Role:\n
              <ol>
                <li>Fixed some bugs in the Theme and Woocommerce Customization.</li>
                <li>Added some style touches.</li>
                <li>Worked on the Website to pass Google Mobile Friendly test. </li>
              </ol>
          </li>
          <li>Stack: PHP, Wordpress, Javascript, CSS.</li>
          <li>${generateVisitLiveLink("https://braun.webinit.de/")} </li>
          <li>Feedback From the Client: <br />
          <img src="/imgs/feedbacks/braun.jfif" width="100%" style="max-width:80%;" class="p-3" /> 
        </li>
      </ul>`,
  },
  {
    projectTitle: "serbatoio Restaurant",
    projectLink: "https://www.ristorantealserbatoio.com/",
    imageUrl: "/imgs/logos/serbatoio.png",
    date: "December 2020",
    place: "London",
    imgWidth: "200px",
    imgHeight: "108px",
    textHtml: `<ul>
        <li>Al Serbatoio, Restaurant and Pizzeria in Brescia.</li>
         <li> The Role:\n
              <ol>
                <li>Fixed some bugs in the Theme Customization.</li>
                <li>Added some style touches.</li>
                <li>Worked on the Website to pass Google Mobile Friendly test. </li>
              </ol>
          </li>
          <li>Stack: PHP, Wordpress, Javascript, CSS.</li>
          <li>${generateVisitLiveLink(
            "https://www.ristorantealserbatoio.com/"
          )} 
          </li>
      </ul>`,
  },
  {
    projectTitle: "ERRE DI AMBIENTE",
    projectLink: "https://www.errediarredoparco.it/",
    imageUrl: "/imgs/logos/erreDiAmbiente.png",
    date: "December 2020",
    place: "London",
    imgWidth: "274px",
    imgHeight: "62px",
    textHtml: `<ul>
      <li>CHILDREN'S PLAYGROUND FURNITURE.</li>
       <li> The Role:\n
              <ol>
                <li>Fixed some bugs in the Theme Customization.</li>
                <li>Added some style touches.</li>
                <li>Worked on the Website to pass Google Mobile Friendly test. </li>
              </ol>
          </li>
          <li>Stack: PHP, Wordpress, Javascript, CSS.</li>
          <li>${generateVisitLiveLink("https://www.errediarredoparco.it/")} 
          </li>
      
    </ul>`,
  },
  {
    projectTitle: "Rocket Escape",
    projectLink: "https://rocket-escape.netlify.app/",
    imageDirection: "rect",
    imageUrl: "/imgs/logos/rocket.png",
    imageCode:
      "<i class='material-icons' style='font-size:1.6rem;' >Rocket Escape</i>",
    date: "December 2020",
    place: "London",
    textHtml: `<ul>
      <li>Simple Space game.</li>
      <li>Avoid hitting the starts for as much time as you can.</li>
      <li>Designed with OOP in mind.</li>
      <li>Stack: Javascript, OOP.</li>
      <li>${generateVisitLiveLink("https://rocket-escape.netlify.app/")}</li> 
    </ul>`,
  },
  {
    projectTitle: "Bet Burger Automation Tool",
    projectLink: "#",
    imageUrl:
      "https://www.betburger.com/assets/logo-4b8c7272c2d3b0b1c4a3acbad0c667d95f82c023b6316f0392697e14e20c3757.svg",
    date: "December 2020",
    place: "London",
    textHtml: `<ul>
      <li>Chrome extension that automate some tasks for Betting community.</li>
      <li>BetBurger runs a website that provide its users with the best matches and odds to bet on.</li>
      <li>This project has a particularly important financial value in the betting community.</li>
      <li>Extension created from scratch. </li>
      <li> What The Extension do: \n
        <ol>
          <li>Scraps BetBurger website looking for specific sports to bet on.</li>
          <li>watch for specific odds providers.</li>
          <li>watch for specific conditions on the odds themselves.</li>
          <li>If all the conditions above satisfied, it will add a button to betBurger UI.</li>
          <li>hitting the added button will open a new tab with all data saved.</li>
          <li>Scraps the newly opened website to locate the desired odds.</li>
          <li>place a bet with a default value on that odd.</li>
          <li>wait for the last confirmation from the user to place the bet.</li>
          <li>watch and notify the user, if any of the conditions have been changed.</li>           
        </ol>
      </li>
      <li>Stack: Javascript, OOP. </li>
    </ul>`,
  },

  {
    projectTitle: "Generate Search",
    projectLink: "https://generatesearch.com/",
    imageDirection: "",
    imageUrl:
      "https://028.201.myftpupload.com/wp-content/uploads/2019/11/11-300x300.png",
    imgWidth: "150px",
    imgHeight: "150px",
    date: "November 2020",
    textHtml: `<ul>
      <li>A West Midlands Advertising Agency With Expertise In High Impact Advertising.</li>
      <li> The Role:\n
              <ol>
                <li>Audits all SEO aspects of the website.</li>
                <li>website loads instantly, and mobile friendly.</li>
                <li>Fixed some bugs in the Theme Customization.</li>
                <li>Added some style touches.</li>
                <li>Worked on the Website to pass Google Mobile Friendly test. </li>
                <li>Worked on the Website to pass Google Speed test. </li>
              </ol>
      </li>
      <li>Stack: PHP, Wordpress, Javascript, CSS.</li>
      <li>
          ${generateVisitLiveLink("https://generatesearch.com/")} 
      </li>
      </ul>`,
  },
  {
    projectTitle: "Tek4kidz",
    projectLink: "https://tek4kidz.com/",
    imageUrl:
      "https://tek4kidz.com/wp-content/uploads/2020/08/tek4kidz-white-border-WP-website-LOGOv11.png",
    date: "October 2020",
    place: "London",
    imgWidth: "170px",
    imgHeight: "49px",
    textHtml: `<ul>
    <li>if you can copy paste, you can code age(7-16)</li>
     <li> The Role:\n
              <ol>
                <li>updated Heroku server, fixed bugs arose from that.</li>
                <li>Added some style touches.</li>
              </ol>
      </li>
      <li>Stack: PHP, AWS, Heroku, CSS.</li>
      <li>
          ${generateVisitLiveLink("https://tek4kidz.com/")} 
      </li>
    </ul>`,
  },
  {
    projectTitle: "Villa Bissiniga",
    projectLink: "https://www.villabissiniga.com/",
    imageUrl:
      "https://www.villabissiniga.com/wp-content/uploads/2020/01/logo-villabissiniga-mobile-2.png",
    date: "October 2020",
    place: "London",
    imgWidth: "250px",
    imgHeight: "80px",
    textHtml: `<ul>
      <li>a unique experience in the heart of Lake Garda</li>
       <li> The Role:\n
              <ol>
                <li>Fixed some bugs in the Theme Customization.</li>
                <li>Added some style touches.</li>
              </ol>
      </li>
      <li>Stack: PHP, Wordpress, Javascript, CSS.</li>
      <li>
          ${generateVisitLiveLink("https://www.villabissiniga.com/")} 
      </li>
      </ul>`,
  },
  {
    projectTitle: "Bike Change Guru",
    projectLink: "https://www.bikechange.guru/",
    imageDirection: "rect",
    imageUrl:
      "https://www.bikechange.guru/wp-content/uploads/2020/08/logo-bikechangev4.png",
    date: "August 2020",
    place: "London",
    imgWidth: "300px",
    imgHeight: "100px",
    textHtml: `<ul>
    <li>BUY OR SELL YOUR CYCLING ARTICLES: PRIME POSITION.</li>
     <li> The Role:\n
              <ol>
                <li>Audits all SEO aspects of the website.</li>
                <li>website loads instantly, and mobile friendly.</li>
                <li>Fixed some bugs in the Theme Customization.</li>
                <li>Added some style touches.</li>
                <li>Worked on the Website to pass Google Mobile Friendly test. </li>
                <li>Worked on the Website to pass Google Speed test. </li>
              </ol>
      </li>
      <li>Stack: PHP, Wordpress, Javascript, CSS.</li>
      <li>
          ${generateVisitLiveLink("https://www.bikechange.guru/")} 
      </li>
    </ul>`,
  },
  {
    projectTitle: "Hex Luxury LTD",
    projectLink: "https://hexltd.co/",
    imageUrl: "/imgs/logos/hex.png",
    date: "April 2020",
    place: "London",
    imgWidth: "110px",
    imgHeight: "100px",
    textHtml: `<ul>
      <li>Timeless and beautiful accessories to add to your sophisticated home.</li>
      <li>Online Shop, created from scratch.</li>
      <li> The Role:\n
              <ol>
                <li>Customized the theme and the functions.</li>
                <li>added and customized Woocomerce products.</li>
                <li>integration with Paypal and GoCardless.</li>
                <li>Audits all SEO aspects of the website.</li>
                <li>Worked on the Website to pass Google Mobile Friendly test. </li>
                <li>Worked on the Website to pass Google Speed test. </li>
              </ol>
      </li>
      <li>Stack: PHP, Wordpress, Javascript, CSS.</li>
      <li>
          ${generateVisitLiveLink("https://hexltd.co/")} 
      </li>
    </ul>`,
  },

  {
    projectTitle: "Roye Interiors LTD",
    projectLink: "https://royeinteriors.com/",
    imageUrl: "/imgs/logos/roye.png",
    date: "Dec 2019",
    place: "London",
    imgWidth: "150px",
    imgHeight: "150px",
    textHtml: `<ul>
      <li> Interior Design startup portfolio, created from scratch.</li>
      <li> At Roye Interiors we pride ourselves on creating elegant, smart and timeless interiors.</li>
       <li>Stack: PHP, Javascript, CSS.</li>
      <li>
          ${generateVisitLiveLink("https://royeinteriors.com/")} 
      </li>
      </ul>`,
  },

  {
    projectTitle: "This Portfolio",
    projectLink: "#",
    imageUrl: "/imgs/logos/mw.png",
    date: "May 2020",
    imgWidth: "100px",
    imgHeight: "100px",
    place: "London",
    textHtml: `<ul>
      <li>My official portfolio.</li>
       <li>Stack: Javascript, Node, React, CSS.</li>
     </ul>`,
  },

  {
    projectTitle: "Activity Docs",
    projectLink: "https://docs.ahmad-ali.co.uk/",
    imageUrl: "/imgs/logos/github.png",
    date: "Ongoing",
    imgWidth: "100px",
    imgHeight: "100px",
    place: "London",
    textHtml: `<ul>
    <li>My personal Reference to coding, I always code when this website is open in the background. and believe me, you can use it too!</li>
    <li>Quick and straight to the point, I use it multiple times a day.</li>
    <li>its topics ranges from the most basics to the most advanced practices and technologies.</li>
    <li>covers multiple programming languages: JS, CSS, Go, Python, Java.
    </ul>`,
  },
];
