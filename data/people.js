// People. Photos live in assets/img/people/ (square, at least 400 × 400 px looks best).
// `website` and `email` are optional. For alumni, `now` is where they went next.
// `aliases` (optional) lists other spellings of the person's name used on papers, so the
// Publications page highlights those as lab members too.

window.LAB_PEOPLE = {
  pi: {
    name: "Kaiyu Hang",
    role: "Assistant Professor of Computer Science",
    photo: "assets/img/people/kaiyu-hang.jpg",
    bio: [
      "Kaiyu Hang is an Assistant Professor of Computer Science at Rice University, where he directs the Robotics and Physical Interactions Lab. He is broadly interested in robotic systems that can physically interact with other robots, people, and the world.",
      "Before joining Rice, he was a postdoc at Yale University, completed his Ph.D. and M.Sc. at KTH Royal Institute of Technology, and received his B.Eng. from Xi'an Jiaotong University."
    ],
    links: [
      { label: "Rice Profile", url: "https://profiles.rice.edu/faculty/kaiyu-hang" },
      { label: "Personal Website", url: "https://hangkaiyu.github.io/" },
      { label: "Google Scholar", url: "https://scholar.google.se/citations?user=GrgH1lQAAAAJ&hl=en" }
    ]
  },

  phd: [
    { name: "Gaotian Wang", role: "Ph.D. candidate, Computer Science", photo: "assets/img/people/gaotian-wang.jpg", website: "https://vector-wangel.github.io/", email: "gwang@rice.edu" },
    { name: "Podshara Chanrungmaneekul", role: "Ph.D. candidate, Computer Science", photo: "assets/img/people/podshara-chanrungmaneekul.jpg", website: "https://podshara.github.io/", email: "pc45@rice.edu" },
    { name: "Yiting Chen", role: "Ph.D. student, Computer Science", photo: "assets/img/people/yiting-chen.jpg", website: "https://www.chen-yiting.com/", email: "yc203@rice.edu" },
    { name: "Howard Qian", aliases: ["Howard H. Qian"], role: "Ph.D. student, Computer Science", photo: "assets/img/people/howard-qian.png", website: "https://howardqian201.github.io/", email: "hhq1@rice.edu" }
  ],

  visiting: [
  ],

  alumni: [
    { name: "Kejia Ren", was: "Ph.D.", now: "Machine Learning Research Scientist, Apple Special Projects (Robotics)", photo: "assets/img/people/kejia-ren.jpg", website: "https://www.linkedin.com/in/kejia-ren-56a053119/" },
    { name: "Hayden Webb", was: "Undergraduate", now: "Ph.D. student, Cornell University", photo: "assets/img/people/hayden-webb.jpg", website: "http://webbhayden.com/" },
    { name: "Ben Leebron", aliases: ["Benjamin H. Leebron"], was: "Undergraduate", now: "Software Engineer, NASA", photo: "assets/img/people/ben-leebron.jpg" },
    { name: "Erich McMillan", was: "Master's", now: "Microsoft", photo: "assets/img/people/erich-mcmillan.jpg", website: "https://www.linkedin.com/in/erich-mcmillan-4b9a5b242/" },
    { name: "Fangming Cheng", was: "Master's", now: "Ph.D. student, University of Hong Kong", photo: "assets/img/people/fangming-cheng.jpg" },
    { name: "Weihang Guo", was: "Master's", now: "Ph.D. student, Rice University", photo: "assets/img/people/weihang-guo.jpg", website: "https://www.whguo.me/" },
    { name: "Xiaoyu Yuan", was: "Master's", photo: "assets/img/people/xiaoyu-yuan.png" },
    { name: "Zikang Sheng", was: "Master's", now: "Microsoft", photo: "assets/img/people/zikang-sheng.jpg" },
    { name: "Mitchell Chen", was: "Visiting high school student, St. John's School", photo: "assets/img/people/mitchell-chen.jpg" },
    { name: "Zhuoyi Lu", was: "Visiting undergraduate student, Nanyang Technological University", photo: "assets/img/people/zhuoyi-lu.jpg" }
  ]
};
