import React from "react";
import { SocialIcon } from "react-social-icons";

const Summary = () => {
  return (
    <>
      <p>
        I’m a software engineer. I assist in teaching 8-months full-stack course
        at CodeYourFuture. My background is in pharmacy and analytical chemistry
        which I studied for 5 years and practiced for 2 years. I finished more
        than 35 online courses around coding. I’m currently studying computer
        science at UoPeople university.
      </p>
      <p>
        During my first 2 months at Upwork I achieved:
        <ul>
          <li>Top 10% PHP on All Upwork, </li>
          <li> Top 10% WordPress on All Upwork, </li>
          <li> Top 10% JavaScript on All Upwork, </li>
          <li> Top 50% Scripts and Utilities on All Upwork,</li>{" "}
          <li>Top 50% Web Development on All Upwork,</li>
          <li> Top 5% HTML on All Upwork.</li>
        </ul>
      </p>
      <p>
        My main stack is TS/JS with React-Node with SQL and MongoDb. and
        Heroku/AWS for devops. I have worked a bit with python (django), GoLang
        (gingin) and php(wp-api, wp theme and addons customization). worked with
        technologies like Stripe, Gocardless, Formik, Xlsforms, Sequalize,
        Redux, Redux-saga, Express, c#, .NET, java...
      </p>
      <p className="m-4">
        <SocialIcon url="https://www.linkedin.com/in/ahmad-ali-07383164194/" />{" "}
        {"\u00A0"}
        {/* <SocialIcon url="https://twitter.com/AhmadAl43872454" /> {"\u00A0"} */}
        <SocialIcon url="https://github.com/ahmad-ali14" /> {"\u00A0"}
        {/* <SocialIcon url="https://www.facebook.com/ahmad623" /> {"\u00A0"} */}
        <a target="_blank" href="https://www.upwork.com/fl/ahmad14">
          <img
            src={process.env.PUBLIC_URL + "/imgs/logos/upwork_circle.png"}
            width="50px"
            height="50px"
            className="rounded-circle"
          />
        </a>
      </p>
    </>
  );
};

export default Summary;
