import './Resume.css';

function App() {
  return (
    <div className="Resume">
      <h1>Haosen Liu</h1>
      <h5>liuhaosen51@gmail.com · (217)-979-1466 · Bellevue WA 98004</h5>
      <h2>Education</h2>
      <h3>Master of Science in Computer Science</h3>
      <div class="box">
        <ul>
          <li>City University of Seattle | Dec 2023</li>
          <li>GPA 3.95/4.0</li>
        </ul>
      </div>
      <h3>Bachelor of Science in Mathematics & Computer Science</h3>
      <div class="box">
        <ul>
          <li>University of Illinois at Urbana-Champaign | May 2019</li>
        </ul>
      </div>
      <h2>Skills</h2>
      <div class="box">
        <ul>
          <li>Java, JavaScript, Python, Bash, C#, R, HTML/CSS, SQL</li>
          <li>AWS, Tencent Cloud, Git, Linux, React.js, Vue.js, ASP.NET, MySQL, Redis, Kafka, Zookeeper</li>
          <li>Hadoop, Storm, Jenkins, Distributed System, PagerDuty, Grafana, Prometheus</li>
          <li> Communications, Teamwork, Problem Solving, Creative Thinking</li>
          <li> Leadership, Networking, Management, Conflict Resolution</li>
        </ul>
      </div>
      <h2>Work Experience</h2>
      <h3>Site Reliability Engineer</h3>
      <h5>Tencent America LLC | Los Angeles, CA | 02/2021 – 06/2022 </h5>
      <div class="box">
        <ul>
          <li>Participated in launching League of Legends mobile game in the Great American region with Riot Games and Tencent Global team</li>
          <li>Maintained game-events related components to keep the stability and security of 500+ European, American and Asian servers for the
experience of millions of daily active users (AWS, Tencent Cloud, Zookeeper, Redis, MySQL, Kafka, Storm)</li>
          <li>Developed game events’ releasing and severs’ scalation CI/CD pipelines for Test and Production Environments to speed up game
events’ deployments and components’ scaling up and down (Python, Shell, AWS Cli, Tencent Cloud Cli)</li>
          <li>Promoted stability of Tencent Big Data Platform by solving issues about data losing, workflow malformed, and severs’ scalation
(Hadoop)</li>
          <li>Programmed alert of game’s irregularity on cloud, components, and process levels to quickly capture, response and solve online issues
to improve user experience (PagerDuty, Grafana, Prometheus, BK-Alert System)</li>
        </ul>
      </div>
      <h3>Software Development Engineer</h3>
      <h5>Microsoft | Bellevue, WA | 10/2019 – 07/2020 </h5>
      <div class="box">
        <ul>
          <li>Developed QPS (queries per second) Management Portal web application for the internal usage, which was deployed on Azure to
efficiently managing 760 thousand+ policies and handling thousands of requests from clients (Vue.js, Azure, C#)</li>
          <li>Remodeled the Policy Manager project and database by implementing needed APIs, upgrading data synchronization, database
migration, and other functional features (C#)</li>
          <li>Engineered crawling issue investigation tools to solve the crawl errors and to improve searching index correct rate for top hosts
(Python)</li>
          <li>Built data pipelines to process over 10 billion crawl records daily and filtered the useful information for further usage (Scope, Cosmos,
C#)</li>
        </ul>
      </div>
      <h3>Front-End Development Engineer Intern</h3>
      <h5>Tencent | Chongqing, China | 04/2018 – 08/2018 </h5>
      <div class="box">
        <ul>
          <li>Worked with the Senior Developer to build the frontend of the Digital Coupon System which was widely used by 1200+ local
collaborative businesses and thousands of Tencent’s users in the market (Vue.js, Element-UI)</li>
          <li>Expanded team’s components to promote features including photo editing web tool, data visualization tool, and poster creator</li>
          <li>Optimized code efficiency by lazy loading pictures and packaging regularly used components</li>
        </ul>
      </div>
      <h2>Projects</h2>
      <h3>Mobile Github Application</h3>
      <div class="box">
        <ul>
          <li>Built a mobile App for checking and managing Github accounts (React Native)</li>
          <li>Applied the Github API for data collection; adopted AsyncStorage for data storage on local devices</li>
          <li>Employed OAuth to deliver data to Github and enabled the following, unfollowing, notification, and search functions</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
