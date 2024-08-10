"use client";

import ArrowUp from "/public/icons/arrow_up.svg";
import BgEffect from "@/components/BackgroundEffect";
import { useState, useEffect } from "react";
import TextEditorWrap from "@/components/TextEditorWrap";
import TopMenu from "@/components/TopMenu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // test
  const allBlocksRaw = 
  [
    {
        "name": "Your Name",
        "job": "Frontend Developer",
        "des": [
            {
                "id": 1,
                "content": "I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX."
            }
        ],
        "data": [
            {}
        ]
    },
    {
        "menu": [
            {
                "id": 1,
                "title": "about",
                "isActive": false,
                "type": "normal",
                "data": [
                    {
                        "id": 1,
                        "content": "<p>Back in 2019, I decided to try my hand at <strong>coding</strong> to make a websites. I learned to code websites by <strong>googling</strong> and <strong>watching YouTube tutorials</strong>. Then, I changed careers and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve been fortunate enough to work with some <strong>amazing companies</strong> and <strong>people</strong>.</p>"
                    },
                    {
                        "id": 2,
                        "content": "My main focus these days is building accessible user interfaces for our customers. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood."
                    },
                    {
                        "id": 3,
                        "content": "<p>In my free time, I usually learn <strong>english</strong>, explore topics about the <strong>self</strong>, <strong>spirituality</strong>, <strong>meditation</strong>, <strong>running</strong> or simply go to <strong>sleep</strong>.</p>"
                    }
                ]
            },
            {
                "id": 2,
                "title": "skills",
                "isActive": false,
                "type": "normal",
                "data": [
                    {
                        "id": 1,
                        "content": "<ul><li><p>Deep knowledge of JS frameworks and library like <strong>VUEJS</strong> , <strong>NUXTJS</strong>, <strong>REACTJS</strong>, <strong>NEXTJS</strong>.</p></li><li><p>Ability to work with <strong>agile processes</strong> &amp; <strong>teamwork</strong>.</p></li><li><p>Be passionate about new technologies and be eager to learn them.</p></li><li><p>Logical thinking, and Problem-solving skills.</p></li><li><p>Familiarity with version control systems such as <strong>Git</strong>.</p></li><li><p>Experience with testing tools such as <strong>unittest</strong> and <strong>vitest</strong>.</p></li><li><p>Experience with libraries such as <strong>Bootstrap</strong>, <strong>Element UI</strong>, <strong>Tailwind</strong>, <strong>Vuetify</strong>, <strong>Primevue</strong>, <strong>Ant Design</strong>,...</p></li><li><p>Utilizing AI tools like <strong>ChatGPT</strong> and <strong>GitHub Copilot</strong> to enhance work productivity and minimize error occurrence.</p></li><li><p>Familiar with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.</p></li><li><p>Experience with realtime communication libraries like <strong>Websocket</strong>, <strong>Socket.IO</strong>.</p></li></ul>"
                    }
                ]
            },
            {
                "id": 1723274508481,
                "title": "<p>experience</p>",
                "isActive": false,
                "type": "card",
                "data": [
                    {
                        "id": 1,
                        "time": "<p>8/2023 — present</p>",
                        "job": "<p>VUIHOC.VN</p>",
                        "company": "<p>VH EDTECH</p>",
                        "content": "<ul><li><p>contentDesigned and developed user-friendly interfaces for educational web applications, focusing on intuitive navigation and accessibility.</p></li><li><p>Collaborated with cross-functional teams including designers and backend developers to implement responsive and visually appealing designs.</p></li><li><p>Implemented best practices in frontend development to ensure scalability, performance, and maintainability of the applications.</p></li></ul>",
                        "tags": "javascript vuejs nuxtjs php",
                        "link": "",
                        "imageUrl": "https://picsum.photos/200",
                        "type": "timeline"
                    },
                    {
                        "id": 1723274627540,
                        "time": "<p>7/2022 — 8/2023</p>",
                        "job": "<p>NEXTPAY.VN</p>",
                        "company": "<p>NEXTPAY</p>",
                        "content": "<ul><li><p>Collaborated with designers to implement responsive designs and intuitive user experiences.</p></li><li><p>Optimized application performance by implementing lazy loading, code splitting, and other techniques.</p></li><li><p>Utilized Vuex for state management and Vue Router for navigation.</p></li><li><p>Worked with RESTful APIs to integrate backend functionality.</p></li><li><p>Participated in code reviews and contributed to team knowledge sharing.</p></li><li><p>Collaborated with project managers and designers to ensure timely delivery of projects.</p></li></ul>",
                        "tags": "javascript vuejs nuxtjs",
                        "link": "",
                        "imageUrl": "https://picsum.photos/200",
                        "type": "timeline"
                    },
                    {
                        "id": 1723274821188,
                        "time": "7/2023 — 8/2024",
                        "job": "<p>E-COMMERCE WEBSITE</p>",
                        "company": "<p>BIGMAX</p>",
                        "content": "<ul><li><p>Developed and maintained multiple Nuxt.js web applications website e-commerce</p></li><li><p>Collaborated with a team of developers, designers, and product managers to create a fully functional e-commerce website using nuxt.js.</p></li><li><p>Implemented dynamic features, such as product search, filters, sorting, and cart functionality, to enhance the user shopping experience.</p></li></ul>",
                        "tags": "javascript vuejs nuxtjs express mongodb",
                        "link": "",
                        "imageUrl": "https://picsum.photos/200",
                        "type": "timeline"
                    }
                ]
            },
            {
                "id": 1723275213983,
                "title": "<p>Demo projects</p>",
                "isActive": false,
                "type": "card",
                "data": [
                    {
                        "id": 1,
                        "time": "7/2023 — 8/2024",
                        "job": "<p>demo 1</p>",
                        "company": "company",
                        "content": "<p>content 1</p>",
                        "tags": "tag1 tag2 tag3",
                        "link": "",
                        "imageUrl": "https://picsum.photos/200",
                        "type": "image"
                    },
                    {
                        "id": 1723275286051,
                        "time": "7/2023 — 8/2024",
                        "job": "<p>demo 2</p>",
                        "company": "company",
                        "content": "<p>content 2</p>",
                        "tags": "tag1 tag2 tag3",
                        "link": "",
                        "imageUrl": "https://picsum.photos/200",
                        "type": "image"
                    },
                    {
                        "id": 1723275290171,
                        "time": "7/2023 — 8/2024",
                        "job": "<p>demo 3</p>",
                        "company": "company",
                        "content": "<p>content 3</p>",
                        "tags": "tag1 tag2 tag3",
                        "link": "",
                        "imageUrl": "https://picsum.photos/200",
                        "type": "image"
                    }
                ]
            }
        ]
    },
    {
        "moreInfor": [
            {
                "id": 1,
                "content": "<p>Coded in <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://code.visualstudio.com/\">Visual Studio Code</a> by yours truly. Text Editor by <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://tiptap.dev/\">Tiptap</a>. Built with <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://nextjs.org/\">Next.js</a> and <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://tailwindcss.com/\">Tailwind CSS</a>, deployed with <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://vercel.com/\">Vercel</a>.</p>"
            }
        ]
    },
    {
        "icons": [
            {
                "id": 1,
                "svgHtml": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"h-6 w-6\" aria-hidden=\"true\"><path d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z\"></path></svg>",
                "link": "https://github.com/vn69"
            },
            {
                "id": 2,
                "svgHtml": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill=\"currentColor\" d=\"M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z\"/></svg>",
                "link": "https://www.facebook.com/doan.relife"
            }
        ]
    }
]

  const [allBlocks, setAllBlocks] = useState(allBlocksRaw);

  const [isEditing, setIsEditing] = useState(true);

  const [indexRender, setIndexRender] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const forceRender = () => {
    setIndexRender(Math.random());
  };

  const handleContentChange = (newContent, parent, key) => {
    parent[key] = newContent;
  };

  const onToggleData = () => {
    setIsEditing(!isEditing);
    forceRender();
    console.log(allBlocks);
  };

  // top menu
  const addMoreItem = (parent, rawData) => {
    if (!parent || !rawData) {
      return;
    }
    const newData = {
      ...rawData,
      id: Date.now(),
    };
    parent.push(newData);
    forceRender();
  };

  const deleteItem = (parent, index) => {
    if (!parent) {
      return;
    }
    parent.splice(index, 1);
    forceRender();
  };

  const changeType = (parent) => {
    if (!parent) {
      return;
    }
    const currentType = parent.type;
    parent.type = currentType === "normal" ? "card" : "normal";
    if (parent.type === "card") {
      parent.data = [{
        ...rawCard
      }];
    } else if (parent.type === "normal") {
      parent.data = [{
        id: 1,
        content: "text",
      }];
    }
    forceRender();
  };

  const changeTypeCard = (parent) => {
    if (!parent) {
      return;
    }
    const currentType = parent.type;
    parent.type = currentType === "timeline" ? "image" : "timeline";
    forceRender();
  };

  const changeTextInObject = (parent, key) => {
    const data = parent[key] ?? '';
    const newContent = window.prompt('Enter: ', data);
    if (newContent === null) {
      return;
    }
    parent[key] = newContent;
    forceRender();
  }

  const rawMenuNormal = {
    id: null,
    title: "title",
    isActive: false,
    type: "normal",
    data: [
      {
        id: 1,
        content: "text",
      },
    ],
  };

  const rawCard = {
    id: 1,
    time: "7/2023 — 8/2024",
    job: "job",
    company: "company",
    content: "content",
    tags: "tag1 tag2 tag3",
    link: "",
    imageUrl: "https://picsum.photos/200",
    type: "timeline",
  };

  const onClickMenu = (id) => {
    if (isEditing) {
      return;
    }
    // change href
    const href = "#" + id;
    window.location.href = href;
  };

  const clickToLink = (link) => {
    if (isEditing || !link) {
      return;
    }
    window.open(link, "_blank");
  };

  return (
    <>
      {loading && (<div className="spinner-body">
        <div className="spinner"></div>
      </div>)}
      {!loading && (
        <div className="portfolio-test" key={indexRender}>
          <div className="flex mx-auto max-w-[1200px] container flex-col lg:flex-row relative">

            {/* header */}
            <header className="lg:w-1/3 lg:sticky top-0 max-h-screen py-20 flex flex-col px-6">
              <h1 className="text-slate-200 font-bold text-4xl mb-4">
                <TextEditorWrap
                  isEditing={isEditing}
                  content={allBlocks[0].name}
                  onContentChange={(textchange) =>
                    handleContentChange(textchange, allBlocks[0], "name")
                  }
                />
              </h1>
              <h3 className="text-slate-200 text-2xl mb-4">
                <TextEditorWrap
                  isEditing={isEditing}
                  content={allBlocks[0].job}
                  onContentChange={(textchange) =>
                    handleContentChange(textchange, allBlocks[0], "job")
                  }
                />
              </h3>
              <TopMenu
                isEditing={isEditing}
                addMoreItem={() =>
                  addMoreItem(allBlocks[0].des, { content: "text" })
                }
              ></TopMenu>
              {allBlocks[0].des.map((item, index) => (
                <div key={index} className="mb-4">
                  {/* delete btn */}
                  <div className="relative h-0">
                      <div className={`absolute top-1 -right-5 ${isEditing ? '' : 'hidden'}`}>
                          <button className="bg-slate-700 w-5 h-5 rounded-full text-xl flex items-center justify-center opacity-40 hover:opacity-100 rotate-45" onClick={() => deleteItem(allBlocks[0].des, index)}>+</button>
                      </div>
                  </div>
                  <TextEditorWrap
                    isEditing={isEditing}
                    content={item.content}
                    onContentChange={(textchange) =>
                      handleContentChange(textchange, item, "content")
                    }
                  />
                </div>
              ))}

              <div className="lg:mt-10"></div>
              {/* menu */}
              <TopMenu
                isEditing={isEditing}
                addMoreItem={() => addMoreItem(allBlocks[1].menu, rawMenuNormal)}
              ></TopMenu>
              <div className="lg:flex gap-4 flex-col hidden">
                {allBlocks[1].menu.map((menu, index) => (
                  <div key={menu.id}>
                    {/* delete btn */}
                    <div className="relative h-0">
                        <div className={`absolute top-1 -right-5 ${isEditing ? '' : 'hidden'}`}>
                            <button className="bg-slate-700 w-5 h-5 rounded-full text-xl flex items-center justify-center opacity-40 hover:opacity-100 rotate-45" onClick={() => deleteItem(allBlocks[1].menu, index)}>+</button>
                        </div>
                    </div>
                    <a
                      className={`hover:text-slate-200 hover:pl-4 transition-all duration-300 cursor-pointer uppercase min-w-20 font-bold 
                          ${menu.isActive ? "text-slate-200 pl-4" : ""}`}
                      onClick={() => onClickMenu(menu.id)}
                    >
                      <TextEditorWrap
                        isEditing={isEditing}
                        content={menu.title}
                        onContentChange={(textchange) =>
                          handleContentChange(textchange, menu, "title")
                        }
                      />
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex lg:mt-auto mt-4">
                {
                  allBlocks[3].icons.map((icon, index) => (
                    <div key={index}>
                      <span className="relative h-0">
                        <div className={`absolute -top-3 -right-7 ${isEditing ? '' : 'hidden'}`}>
                          <button className="bg-slate-700 w-5 h-5 rounded-full text-xl flex items-center justify-center opacity-40 hover:opacity-100" onClick={() => changeTextInObject(icon, "link")}>#</button>
                        </div>
                      </span>
                      <a
                        href={icon.link}
                        target="_blank"
                        className="hover:text-slate-200 cursor-pointer"
                      >
                        <div
                          className="w-10 h-10 flex items-center justify-center p-2"
                          dangerouslySetInnerHTML={{ __html: icon.svgHtml }}
                        ></div>
                      </a>
                    </div>
                  ))
                }
              </div>
            </header>


            {/* main */}
            <main className="lg:w-2/3 px-6">
              {/* section in allBlocks[1].menu */}
              <div className="">
                {allBlocks[1].menu.map((blockItem, indexBlock) => (
                  <section key={indexBlock} id={blockItem.id} className={"" + (indexBlock === 0 ? 'lg:pt-20 pt-0' : 'pt-20')}>
                    <h2 className="uppercase min-w-20 font-bold text-slate-200 mb-4 lg:hidden">
                      <TextEditorWrap
                        isEditing={isEditing}
                        content={blockItem.title}
                        onContentChange={(textchange) =>
                          handleContentChange(textchange, blockItem, "title")
                        }
                      />
                    </h2>
                    <TopMenu
                      isEditing={isEditing}
                      addMoreItem={() =>
                        addMoreItem(blockItem.data, (blockItem.type === 'normal' ? {content: "text"} : {...rawCard}))
                      }
                      changeType={() => changeType(blockItem)}
                    ></TopMenu>
                    {blockItem.data.map((item, index) => (
                      <div key={index} className={"mb-4 "+(item.link ? "cursor-pointer" : "")} onClick={() => clickToLink(item.link)}>
                        {/* delete btn */}
                        <div className="relative h-0">
                            <div className={`absolute top-1 -right-5 ${isEditing ? '' : 'hidden'}`}>
                                <button className="bg-slate-700 w-5 h-5 rounded-full text-xl flex items-center justify-center opacity-40 hover:opacity-100 rotate-45" onClick={() => deleteItem(blockItem.data, index)}>+</button>
                                {
                                  blockItem.type === "card" && (
                                    <>
                                      <button className="bg-slate-700 w-5 h-5 rounded-full text-xl flex items-center justify-center opacity-40 hover:opacity-100" onClick={() => changeTypeCard(item)}>~</button>
                                      <button className="bg-slate-700 w-5 h-5 rounded-full text-xl flex items-center justify-center opacity-40 hover:opacity-100" onClick={() => changeTextInObject(item, "link")}>#</button>
                                    </>
                                  )
                                }
                            </div>
                        </div>
                        {/* nomal */}
                        {blockItem.type === "normal" && (
                          <TextEditorWrap
                            isEditing={isEditing}
                            content={item.content}
                            onContentChange={(textchange) =>
                              handleContentChange(textchange, item, "content")
                            }
                          />
                        )}
                        {/* card */}
                        
                        {blockItem.type === "card" && (
                          <div
                          className="
                            p-4 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:shadow-none hover:bg-slate-800/50 bg-slate-800/50 lg:bg-transparent transition duration-100 rounded-md flex gap-1 group mb-4
                            flex-col md:flex-row"
                          >
                            <div className="w-[136px] min-w-[136px]">
                              {
                                item.type === "timeline" ? 
                                (
                                  <>
                                  <div className="text-slate-200 text-lg mb-1 group-hover:text-teal-300">
                                    <TextEditorWrap
                                      isEditing={isEditing}
                                      content={item.company}
                                      onContentChange={(textchange) =>
                                        handleContentChange(textchange, item, "company")
                                      }
                                    />
                                  </div>
                                  <div className="">
                                    <TextEditorWrap
                                      isEditing={isEditing}
                                      content={item.time}
                                      onContentChange={(textchange) =>
                                        handleContentChange(textchange, item, "time")
                                      }
                                    />
                                  </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="relative h-0">
                                        <span className={`absolute top-0 right-4 ${isEditing ? '' : 'hidden'}`}>
                                            <button className="bg-slate-700 w-10 h-10 rounded-full text-3xl flex items-center justify-center opacity-40 hover:opacity-100" onClick={() => changeTextInObject(item, "imageUrl")}>+</button>
                                        </span>
                                    </div>
                                    <Image src={item.imageUrl} width={120} height={80} alt="project" className="object-cover h-[80px] rounded-sm" />
                                  </>
                                )
                              }
                            </div>
                            <div className="">
                              <h3 className="text-slate-200 text-lg flex-1 group-hover:text-teal-300 mb-1">
                                <TextEditorWrap
                                  isEditing={isEditing}
                                  content={item.job}
                                  onContentChange={(textchange) =>
                                    handleContentChange(textchange, item, "job")
                                  }
                                />
                              </h3>
                              <div>
                                <TextEditorWrap
                                  isEditing={isEditing}
                                  content={item.content}
                                  onContentChange={(textchange) =>
                                    handleContentChange(textchange, item, "content")
                                  }
                                />
                              </div>
                              <div className="mt-2 flex flex-wrap">
                                {item.tags && item.tags.split(" ")?.map((tag, index) => (
                                  <span
                                    key={index}
                                    className="text-teal-300 rounded-full bg-teal-900/30 py-1 px-3 mr-1 mb-1"
                                  >
                                    {tag}
                                  </span>
                                ))}
                                <span className="relative h-0 w-0">
                                    <span className={`absolute -top-1 -right-10 ${isEditing ? '' : 'hidden'}`}>
                                        <button className="bg-slate-700 w-10 h-10 rounded-full text-3xl flex items-center justify-center opacity-40 hover:opacity-100" onClick={() => changeTextInObject(item, "tags")}>+</button>
                                    </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </section>
                ))}
              </div>

              <section id="more" className="py-20">
                <div>
                  <TopMenu
                    isEditing={isEditing}
                    addMoreItem={() =>
                      addMoreItem(allBlocks[2].moreInfor, { content: "text" })
                    }
                  ></TopMenu>
                  {allBlocks[2].moreInfor.map((item, index) => (
                    <div key={index} className="pt-4">
                      {/* delete btn */}
                      <div className="relative h-0">
                          <div className={`absolute top-1 -right-5 ${isEditing ? '' : 'hidden'}`}>
                              <button className="bg-slate-700 w-5 h-5 rounded-full text-xl flex items-center justify-center opacity-40 hover:opacity-100 rotate-45" onClick={() => deleteItem(allBlocks[2].moreInfor, index)}>+</button>
                          </div>
                      </div>
                      <TextEditorWrap
                        isEditing={isEditing}
                        content={item.content}
                        onContentChange={(textchange) =>
                          handleContentChange(textchange, item, "content")
                        }
                      />
                    </div>
                  ))}
                </div>
              </section>
            </main>
            <BgEffect></BgEffect>
          </div>
          <div className="fixed right-1 top-2 z-10">
            <Link href="/"
              className="bg-slate-700 p-2 text-white ml-2"
            >
              Back to Home Page
            </Link>
            <a
              className="bg-slate-700 p-2 text-white ml-2 cursor-pointer"
              onClick={onToggleData}
            >
              {isEditing ? "View" : "Edit"}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
