import GithubIcon from "/public/icons/github.svg";
import FacebookIcon from "/public/icons/facebook.svg";
import ArrowUp from "/public/icons/arrow_up.svg";
import BgEffect from "@/components/backgroundEffect";
import Menu from "@/components/menu";
import WorkTimeLine from "@/components/workTimeLine";
import TextBold from "@/components/textBold";

export default function Home() {
  // skills
  const skills = [
    "Ability to work with agile processes & teamwork.",
    "Be passionate about new technologies and be eager to learn them.",
    "Teamwork, Logical thinking, and Problem-solving skills.",
    "Familiarity with version control systems such as Git.",
    "Experience with testing tools such as unittest and vitest.",
    "Experience with libraries such as Bootstrap, Element UI, Tailwind, Vuetify, Primevue, Ant Design,...",
    "Utilizing AI tools like ChatGPT and GitHub Copilot to enhance work productivity and minimize error occurrence.",
    "Familiar with Node.js, Express, and MongoDB.",
    "Experience with realtime communication libraries like Websocket, Socket.IO.",
    "Possible to switch to TypeScript, ReactJS, NextJS, or Angular.",
  ];

  // experience
  const experience = [
    {
      id: 1,
      time: "8/2023 — present",
      company: "VH EDTECH",
      link: "https://vuihoc.vn/thpt/?vip=false",
      details: [
        {
          title: "VUIHOC",
          description: [
            "Designed and developed user-friendly interfaces for educational web applications, focusing on intuitive navigation and accessibility.",
            "Collaborated with cross-functional teams including designers and backend developers to implement responsive and visually appealing designs.",
            "Implemented best practices in frontend development to ensure scalability, performance, and maintainability of the applications.",
          ],
          tags: [],
        },
        {
          title: "VUIHOC DUO, VUIHOC PAS",
          description: [
            "Developing an AI-powered camera feature to monitor and prompt students' concentration levels during learning sessions, providing real-time feedback and personalized.",
            "Optimizing homepage performance with Nuxt.js for faster loading times and enhanced user experience.",
            "Implementing a teacher evaluation feature in the platform to collect student feedback, improve teaching effectiveness.",
            "Utilizing Firebase for comprehensive feature tracking, ensuring real-time monitoring, analytics, and seamless integration for enhanced application performance and user engagement.",
            `Deploying the "LOOK BACK" feature, enabling users to revisit past moments collaboratively, fostering reflection and sharing achievements attained.`,
          ],
          tags: ['javascript','vuejs','nuxtjs','tailwindcss'],
        },
        {
          title: "VUIHOC LMS, VUIHOC ERP",
          description: [
            "Developing system management features for educational platforms, such as adding new question formats and optimizing teacher management pages to streamline administrative tasks and enhance user experience.",
          ],
          tags: ['javascript','vuejs', 'vuetify', 'php'],
        },
      ], 
    },
    {
      id: 2,
      time: "7/2022 — 8/2023",
      company: "NEXTPAY",
      link: "https://nextpay.vn/",
      details: [
        {
          title: "NEXTPAY",
          description: [
            "Collaborated with designers to implement responsive designs and intuitive user experiences.",
            "Optimized application performance by implementing lazy loading, code splitting, and other techniques.",
            "Utilized Vuex for state management and Vue Router for navigation.",
            "Worked with RESTful APIs to integrate backend functionality.",
            "Participated in code reviews and contributed to team knowledge sharing.",
            "Collaborated with project managers and designers to ensure timely delivery of projects.",
          ],
          tags: [],
        },
        {
          title: "MY NEXTPAY CRM",
          description: [
            "Developed and maintained Vue.js web applications. My Nextpay CRM - management software work & procedures.",
            "Implemented new features such as record kpi.",
            "Improved user experience of various features including e-contract management, receipts management, device management, ...",
          ],
          tags: ['javascript','vuejs', 'bootstrap'],
        },
        {
          title: "NEXTSHOP",
          description: [
            "Developed and maintained Vue.js web applications. NEXTSHOP - sales management software.",
            "Implemented new features such as order return and delivery order.",
            "Improved user experience of various features including in-store sales, customer management, supplier management, debt management, report,...",
          ],
          tags: ['javascript','vuejs', 'vuex'],
        },
        {
          title: "NEXTSHOP MOBI",
          description: [
            "Created a fully functional e-commerce website for an e-store using Vue.js and Vuex. ",
            "Implemented features such as product categorization, cart updates, and a secure checkout process.",
            "Developed a user-friendly interface with smooth transitions and animations, enhancing the overall user experience.",
          ],
          tags: ['javascript','vuejs'],
        },
      ], 
    },
    {
      id: 3,
      time: "6/2020 — 3/2021",
      company: "BIGMAX",
      details: [
        {
          title: "E-COMMERCE WEBSITE",
          description: [
            "Developed and maintained multiple Nuxt.js web applications website e-commerce",
            "Collaborated with a team of developers, designers, and product managers to create a fully functional e-commerce website using nuxt.js.",
            "Implemented dynamic features, such as product search, filters, sorting, and cart functionality, to enhance the user shopping experience.",
          ],
          tags: ['javascript','vuejs','nuxtjs','express','mongodb'],
        },
        {
          title: "RECRUITMENT WEBSITE",
          description: [
            "Developed and maintained multiple Nuxt.js web applications website recruitment.",
            "Created dynamic and intuitive user interfaces for job seekers, featuring search functionality, filters",
            "Developed and maintained full-stack web applications using Vue.js, Nuxtjs, Node.js, Express, and MongoDB.",
            "Developed responsive layouts and optimized performance to ensure fast loading times and smooth interactions. ",
          ],
          tags: ['javascript','vuejs','nuxtjs','express','mongodb'],
        },
      ], 
    },
  ];

  // projects
  const projects = [
    {
      imageUrl: "/images/pos.png",
      link: "https://vn69.github.io/vue2-example/",
      details: [
        {
          title: "Sales management software demo",
          description: [
            "Order management, sales, warehouse, payment, ...",
          ],
          tags: ['vuejs','vuex', 'element-ui'],
        },
      ], 
    },
    {
      imageUrl: "/images/express.png",
      link: "https://github.com/vn69/node-2023",
      details: [
        {
          title: "Nodejs, authentication with jwt",
          description: [
            "Demo expressjs server login with jwt",
          ],
          tags: ['nodejs','express','mongodb'],
        },
      ], 
    },
    {
      imageUrl: "/images/startup.png",
      link: "https://vn69.github.io/startup/",
      details: [
        {
          title: "Website startup",
          description: [
            "Demo website startup with html, css, js",
          ],
        },
      ], 
    },
    {
      imageUrl: "/images/photograph.png",
      link: "https://vn69.github.io/sonar-photograph/",
      details: [
        {
          title: "Website photograph",
          description: [
            "Demo website photograph with html, css, js",
          ],
        },
      ], 
    },
    {
      imageUrl: "/images/catgpt.png",
      link: "https://vn69.github.io/vue3-demo/cat-gpt",
      details: [
        {
          title: "Cat-GPT for fun",
          description: [
            "CatGPT is a sibling model to CAT_BRAIN, which is trained to follow an instruction in a prompt and provide a detailed response like cat.",
          ],
          tags: ['vue3'],
        },
      ], 
    },
  ];

  return (
    <div className="">
      <div className="flex mx-auto max-w-[1200px] container flex-col lg:flex-row relative">
        <header className="lg:w-1/3 lg:sticky top-0 max-h-screen py-20 flex flex-col px-6">
          <h1 className="text-slate-200 font-bold text-4xl mb-4">
            Nguyễn Anh Đoàn
          </h1>
          <h3 className="text-slate-200 text-2xl mb-4">
            Frontend Developer
          </h3>
          <div className="mb-4">
            I'm passionate about cutting-edge, pixel-perfect,<br></br> beautiful interfaces and intuitively implemented UX.
          </div>

          <a target="_blank" className="text-slate-200 hover:text-teal-300 cursor-pointer border-b border-transparent hover:border-teal-300 w-fit" 
            download href="/files/nguyenanhdoancv.pdf">Download my CV</a>

          <div className="lg:mt-10"></div>
          {/* menu */}
          <Menu></Menu>

          <div className="flex gap-4 lg:mt-auto mt-4">
            <a href="https://github.com/vn69" target="_blank" className="hover:text-slate-200 cursor-pointer">
              <GithubIcon className="w-7"></GithubIcon>
            </a>
            <a href="https://www.facebook.com/doan.relife" target="_blank" className="hover:text-slate-200 cursor-pointer">
              <FacebookIcon className="w-7"></FacebookIcon>
            </a>
          </div>
        </header>
        <main className="lg:w-2/3 px-6">

          {/* about */}
          <section id="about" className="lg:pt-20">
            <h2 className="uppercase min-w-20 font-bold text-slate-200 mb-4 lg:hidden">About</h2>
            <div className="mb-4">
              Back in 2019, I decided to try my hand at <TextBold>coding</TextBold> to make a websites.
              I learned to code websites by <TextBold>googling</TextBold> and watching <TextBold>YouTube tutorials</TextBold>.
              Then, I changed <TextBold>careers</TextBold> and tumbled head first into the rabbit hole of <TextBold>coding</TextBold> and <TextBold>web development</TextBold>.
              Fast-forward to today, and I’ve been fortunate enough to work with some <TextBold>amazing companies</TextBold> and <TextBold>people</TextBold>.
            </div>
            <div className="mb-4">
              My main focus these days is building accessible user interfaces for our customers. 
              I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood.
            </div>
            <div className="mb-4">
              In my free time, I usually learn <TextBold>english</TextBold>, explore topics about the <TextBold>self</TextBold>, <TextBold>spirituality</TextBold>, <TextBold>meditation</TextBold>, <TextBold>running</TextBold> or simply go to <TextBold>sleep</TextBold>.
            </div>
          </section>

          {/* skills */}
          <section id="skills" className="pt-20">
            <h2 className="uppercase min-w-20 font-bold text-slate-200 mb-4 lg:hidden">skills</h2>
            <ul className="list-disc ml-4">
              {skills.map((skill, index) => (
                <li key={index} className="">
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          {/* experience */}
          <section id="experience" className="pt-20">
            <h2 className="uppercase min-w-20 font-bold text-slate-200 mb-4 lg:hidden">experience</h2>
            {experience.map((item, index) => (
              <WorkTimeLine key={index} company={item.company} details={item.details} time={item.time} tags={item.tags} project={false} link={item.link} imageUrl={item.imageUrl}></WorkTimeLine>
            ))}
          </section>

          {/* projects */}
          <section id="projects" className="pt-20">
            <h2 className="uppercase min-w-20 font-bold text-slate-200 mb-4 lg:hidden">projects</h2>
            {projects.map((item, index) => (
              <WorkTimeLine key={index} company={item.company} details={item.details} time={item.time} tags={item.tags} project={true} link={item.link} imageUrl={item.imageUrl}></WorkTimeLine>
            ))}
            <a target="_blank" className="ml-4 text-slate-200 hover:text-teal-300 cursor-pointer border-b border-transparent hover:border-teal-300 w-fit group text-xl" href="https://github.com/vn69">
              See more
              <ArrowUp className="w-5 inline-block group-hover:text-teal-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200"/>
            </a>
          </section>
          <section id="more" className="py-20">
            <div>
              Coded in <a href="https://code.visualstudio.com/" target="_blank" className="text-slate-200 hover:text-teal-300">Visual Studio Code</a> by yours truly. Built with <a href="https://nextjs.org/" target="_blank" className="text-slate-200 hover:text-teal-300">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" className="text-slate-200 hover:text-teal-300">Tailwind CSS</a>, deployed with <a href="https://vercel.com/" target="_blank" className="text-slate-200 hover:text-teal-300">Vercel</a>.
            </div>
          </section>
        </main>
        <BgEffect></BgEffect>
      </div>
    </div>
  );
}
