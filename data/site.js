// Site-wide content: lab identity, home-page highlights, news and awards.
// Edit the text here; the pages pick it up automatically.

window.LAB_SITE = {
  name: "RobotΠ Lab",
  fullName: "Robotics and Physical Interactions Lab",
  university: "Rice University",
  department: "Department of Computer Science",
  pi: "Kaiyu Hang",
  // The email is assembled in the browser so it is not harvested from the page source.
  email: ["kaiyu.hang", "rice.edu"],
  address: ["Duncan Hall, MS 132", "6100 Main Street", "Houston, TX 77005"],
  links: [
    { label: "GitHub", url: "https://github.com/Rice-RobotPI-Lab" },
    { label: "Google Scholar", url: "https://scholar.google.se/citations?user=GrgH1lQAAAAJ&hl=en" },
    { label: "Rice Computer Science", url: "https://csweb.rice.edu/" }
  ]
};

// Highlights on the home page: one card per published or arXiv'd paper, newest first.
// Each card is a video with the paper's title and venue. video/poster live in assets/video/.
// `url` is where the card links to (optional).
window.LAB_HIGHLIGHTS = [
  {
    title: "RoboTok: A Scalable Data Engine for Internet Demonstration Video Retrieval and Dexterous Manipulation Learning",
    venue: "arXiv 2026",
    video: "assets/video/robotok.mp4",
    poster: "assets/video/robotok.jpg",
    url: "https://rice-robotpi-lab.github.io/RoboTok/"
  },
  {
    title: "EgoInfinity: A Web-Scale 4D Hand-Object Interaction Data Engine for Any-View Robot Retargeting and Video-to-Action Robot Learning",
    venue: "arXiv 2026",
    video: "assets/video/egoinfinity.mp4",
    poster: "assets/video/egoinfinity.jpg",
    url: "https://rice-robotpi-lab.github.io/EgoInfinity/"
  },
  {
    title: "Zero-Shot Sim-to-Real Robot Learning: A Dexterous Manipulation Study on Reactive Catching",
    venue: "RSS 2026",
    video: "assets/video/catching.mp4",
    poster: "assets/video/catching.jpg",
    url: "https://rice-robotpi-lab.github.io/DRIScatch/"
  },
  {
    title: "Object-Centric Kinodynamic Planning for Nonprehensile Robot Rearrangement Manipulation",
    venue: "T-RO 2025",
    video: "assets/video/kinodynamic.mp4",
    poster: "assets/video/kinodynamic.jpg",
    url: "https://arxiv.org/pdf/2410.00261"
  },
  {
    title: "Caging in Time: A Framework for Robust Object Manipulation under Uncertainties and Limited Robot Perception",
    venue: "IJRR 2025",
    video: "assets/video/caging.mp4",
    poster: "assets/video/caging.jpg",
    url: "https://arxiv.org/pdf/2410.16481"
  },
  {
    title: "Robust Peg-in-Hole Assembly under Uncertainties via Compliant and Interactive Contact-Rich Manipulation",
    venue: "RSS 2025",
    video: "assets/video/peg-in-hole.mp4",
    poster: "assets/video/peg-in-hole.jpg",
    url: "https://www.roboticsproceedings.org/rss21/p060.pdf"
  },
  {
    title: "Collision-inclusive Manipulation Planning for Occluded Object Grasping via Compliant Robot Motions",
    venue: "RA-L 2025",
    video: "assets/video/collision.mp4",
    poster: "assets/video/collision.jpg",
    url: "https://arxiv.org/pdf/2412.06983.pdf"
  }
];

// News, newest first, imported from the previous lab site. The home page shows the first six
// and a "Show all" button. `text` is the summary. `more` (optional) holds further paragraphs
// that open under "Read more"; web addresses in them become links. `image` and `url` are optional.
window.LAB_NEWS = [
  {
    date: "2026-06-27",
    title: "EgoInfinity released!",
    text: "We are excited to introduce EgoInfinity, a web-scale 4D hand-object interaction (HOI) data engine that automatically lifts YouTube videos into structured 4D interaction data for robot learning in any view, including egocentric.",
    more: [
      "Robot manipulation has long been bottlenecked by data. Teleoperation is expensive and hard to scale, while the internet already holds a near-limitless supply of people manipulating objects with their hands. The catch: these in-the-wild videos are unstructured 2D, whereas robots need structured 3D/4D interaction to learn from.",
      "EgoInfinity tries to close this gap automatically, with no human in the loop. Built upon Action100M (≈14.6 years of filtered, VLM-annotated YouTube human-action video, 142M clips), it lifts ordinary RGB videos into structured 4D HOI, recovering hand and object geometry, contact, and motion over time. A functional retargeting module then compiles the recovered 3D hand motions into executable robot joint trajectories, enabling any-view video-to-action transfer across different robot embodiments.",
      "What we care about most:",
      "Not just a dataset, but a modular, upgradable engine. Every perception component can be swapped for a stronger SOTA model, so the engine keeps improving as the field does. No hardware required: anyone can upgrade a module, run the pipeline, and start collecting human manipulation data at scale.",
      "Diversity by design. Unscripted internet videos span an enormous range of everyday tasks and preserve the rich, naturally-occurring manipulation behaviors that scripted lab or factory collection tends to suppress.",
      "Seamless linking to robots. We provide a functional retargeting module that compiles recovered 3D hand motions into executable robot joint trajectories, enabling any-view video-to-action transfer across different robot embodiments.",
      "Want to learn more about EgoInfinity? Check out the links below:",
      "Interactive demo: https://huggingface.co/spaces/Rice-RobotPI-Lab/EgoInfinity",
      "Paper: https://arxiv.org/abs/2606.17385",
      "Project page: https://rice-robotpi-lab.github.io/EgoInfinity/",
      "Code: https://github.com/Rice-RobotPI-Lab/EgoInfinity",
      "Data preview: https://huggingface.co/datasets/Rice-RobotPI-Lab/egoinfinity"
    ],
    image: "assets/img/news/egoinfinity.webp",
    url: "https://rice-robotpi-lab.github.io/EgoInfinity/"
  },
  {
    date: "2026-06-27",
    title: "Our paper “ManiDreams: An Open-Source Library for Robust Object Manipulation via Uncertainty-aware Task-specific Intuitive Physics” has been accepted by IROS 2026",
    image: "assets/img/news/2026_manidreams_iros.webp",
    url: "https://rice-robotpi-lab.github.io/ManiDreams/"
  },
  {
    date: "2026-05-02",
    title: "Our paper “Zero-Shot Sim-to-Real Robot Learning: A Dexterous Manipulation Study on Reactive Catching” has been accepted by RSS 2026",
    image: "assets/img/news/2026_kejia_rss.webp",
    url: "https://rice-robotpi-lab.github.io/DRIScatch/"
  },
  {
    date: "2026-03-18",
    title: "ManiDreams released!",
    text: "We are excited to announce ManiDreams, an open-source modular framework for uncertainty-aware manipulation planning over intuitive physics models. ManiDreams addresses a fundamental challenge in robotic manipulation: real-world manipulation is inherently uncertain. Rather than suppressing uncertainties during training, ManiDreams explicitly represents, propagates, and constrains perceptual, parametric, and structural uncertainties within the planning loop.",
    more: [
      "The framework wraps any base policy with a sample-predict-constrain loop that evaluates candidate actions against distributional outcomes, adding robustness without retraining. Experiments on ManiSkill tasks show that ManiDreams maintains robust performance under various perturbations where the RL baseline degrades significantly.",
      "Project page: https://rice-robotpi-lab.github.io/ManiDreams/",
      "GitHub Repository: https://github.com/Rice-RobotPI-Lab/ManiDreams",
      "Documentation: https://rice-robotpi-lab.github.io/ManiDreams/documentation.html",
      "Paper: https://arxiv.org/abs/2603.18336"
    ],
    image: "assets/img/news/manidreams.webp",
    url: "https://rice-robotpi-lab.github.io/ManiDreams/"
  },
  {
    date: "2025-10-08",
    title: "ManipulationNet released!",
    text: "We are excited to announce ManipulationNet, a community-driven global infrastructure, that enables benchmarking robot manipulation research at scale with any robot at anytime and anywhere.",
    more: [
      "Inspired by the prior efforts in benchmarking robot manipulation, including standard object sets paired with evaluation protocols, simulation-based benchmarking platforms, and onsite competitions in conferences, the ManipulationNet, for the first time, has simultaneously provided authenticity, accessibility, and realism in one online large-scale benchmarking system. In brief, ManipulationNet provides both hardware and open-source software to host standardized benchmarking tasks, for which participants can submit solutions from their own locations at anytime in a distributed manner, and then get their performance evaluated in a centralized manner to shine on global leaderboards.",
      "ManipulationNet organizes benchmarking tasks in two tracks: 1) Physical Skills Track that evaluates robot abilities in physical contact-rich tasks; and 2) Embodied Reasoning Track that challenges robot capabilities in grounding language, vision, and language + vision prompts into effective real-world actions. In the first release, we provide a “Peg-In-Hole Assembly” task in the Physical Skills Track and a “Block Arrangement” task in the Embodied Reasoning Track.",
      "Over time, ManipulationNet aims to “connect the dots” of the up-to-date robot abilities and challenges to construct a network of real-world robot skills, a network of research challenge roadmaps, and a network of research progress trajectories. Want to learn more about ManipulationNet? Check out the links below:",
      "Project website: https://manipulation-net.org",
      "Founding Committee: https://manipulation-net.org/committee.html",
      "GitHub Repository: https://github.com/ManipulationNet/mnet_client",
      "mnet documentation: https://mnet-client.readthedocs.io",
      "Paper: https://manipulation-net.org/MNet_preprint.pdf",
      "Have questions? Please contact support@manipulation-net.org"
    ],
    image: "assets/img/news/manipulationnet.webp",
    url: "https://manipulation-net.org"
  },
  {
    date: "2025-09-20",
    title: "Our paper “Object-Centric Kinodynamic Planning for Nonprehensile Robot Rearrangement Manipulation” has been accepted by TRO",
    image: "assets/img/news/kejia-tro.webp",
    url: "https://arxiv.org/pdf/2410.00261"
  },
  {
    date: "2025-07-29",
    title: "Our paper “Collision-Inclusive Manipulation Planning for Occluded Object Grasping via Compliant Robot Motions” has been accepted by RA-L",
    image: "assets/img/news/kejia-ral.webp",
    url: "https://arxiv.org/pdf/2412.06983.pdf"
  },
  {
    date: "2025-06-26",
    title: "5 papers accepted to IEEE/RSJ IROS 2025",
    text: "We have 5 papers accepted to the 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)! Our contributions cover the topics of robot interactive perception, autonomous markerless calibration, combined pick-motion-and-place planning, active surface-based end-effector design, and self-identification for in-hand manipulation.",
    image: "assets/img/news/2025_iros.webp",
    url: "publications.html"
  },
  {
    date: "2025-05-05",
    title: "Ben Leebron has Been Awarded “Distinction in Research and Creative Works” by Rice University",
    text: "We are proud to announce that our esteemed lab member, Ben Leebron, has been awarded the prestigious “Distinction in Research and Creative Works” by Rice University.",
    more: [
      "This is a university honor for graduating students that will be granted at Commencement and will appear on recipients’ transcripts and diplomas. To apply, CS students should submit a work or body of work that illustrates creativity, self-initiation, independence, perseverance, and dedication. In all cases, we expect that students who apply for distinction in undergraduate research in computer science will have produced something that goes beyond the traditional expectations of their coursework.",
      "Ben’s successful application for this award cited his first authorship of the “B4P: Simultaneous Grasp and Motion Planning for Object Placement via Parallelized Bidirectional Forests and Path Repair” manuscript, which was submitted to IROS 2025. We anticipate hearing about its acceptance into this prestigious conference in late June.",
      "This award underscores the high-quality research being conducted in our lab and highlights Ben’s own contribution to the RobotPI lab’s success. We congratulate Ben on this well-deserved recognition and look forward to his continued effort in future works."
    ],
    image: "assets/img/news/2025_ben_distinction.webp"
  },
  {
    date: "2025-05-01",
    title: "Our paper “Caging in Time, A Framework for Robust Object Manipulation under Uncertainties and Limited Robot Perception” has been accepted by IJRR",
    image: "assets/img/news/2025_gaotian_ijrr.webp",
    url: "https://arxiv.org/pdf/2410.16481"
  },
  {
    date: "2025-04-17",
    title: "Our paper “Robust Peg-in-Hole Assembly under Uncertainties via Compliant and Interactive Contact-Rich Manipulation” has been accepted by RSS 2025",
    image: "assets/img/news/2025_yiting_rss.webp",
    url: "https://www.roboticsproceedings.org/rss21/p060.pdf"
  },
  {
    date: "2024-11-19",
    title: "Dr. Kaiyu Hang has Been Awarded ASME Rising Star of Mechanical Engineering",
    text: "Dr. Kaiyu Hang has been selected by the American Society of Mechanical Engineers (ASME) to receive the award of ASME Rising Star of Mechanical Engineering in recognition of his contributions to robotic manipulation. Dr. Kaiyu Hang presented his work at the award ceremony in the 2024 International Mechanical Engineering Congress & Exposition (ASME IMECE), Portland, Oregon, USA.",
    image: "assets/img/news/hang_asme.webp",
    url: "https://event.asme.org/IMECE-2024/Program/Rising-Stars-of-Mechanical-Engineering"
  },
  {
    date: "2024-09-15",
    title: "Hayden Webb won 3rd place in the “Student Mechanism and Robotics Design Competition” at the 2024 ASME IDETC",
    text: "We are excited to announce that our lab member, Hayden Webb, has placed 3rd place in the prestigious “Student Mechanism and Robotics Design Competition” at the 2024 ASME IDETC.",
    more: [
      "This is a very competitive competition where international teams from across the world apply to compete and showcase their engineering design projects. To apply, students submit a detailed report of their work showcasing its capabilities as well as highlighting their invention’s ingenuity, novelty, and robustness in engineering. For this reason, students who apply for this competition are expected to have produced some robot or mechanism that excels in its purpose and goes beyond standard engineering designs.",
      "From the initial applications, six finalists are selected and of these finalists, the top-ranked projects are awarded a travel grant to present their work in-person at the associated international ASME conference. Hayden was selected as a finalist and awarded a travel grant, exemplifying the work and exceptional level of engineering put into the project.",
      "Hayden placed 3rd in the undergraduate category in the final round of competition after giving both a talk and presentation on the Roller Ring. This award demonstrates the high-quality research and engineering design that is developed in our lab and showcases Hayden’s extraordinary contribution to the field. We congratulate Hayden on this hard-fought achievement and look forward to more of what comes next in his work!",
      "Watch Hayden’s presentation of the Roller Ring project: https://drive.google.com/file/d/1J3lAjavMBV7FJxDEK0GsumOdJK12hqMm/view?usp=sharing"
    ],
    image: "assets/img/news/hayden_award.webp"
  },
  {
    date: "2024-07-07",
    title: "Our Paper “Interactive Robot-Environment Self-Calibration via Compliant Exploratory Actions” has been accepted by IEEE/RSJ IROS 2024",
    image: "assets/img/news/self_cali_iros_24.webp",
    url: "https://arxiv.org/abs/2403.13144"
  },
  {
    date: "2024-07-07",
    title: "Our Paper “UNO Push, Unified Nonprehensile Object Pushing via Non-Parametric Estimation and Model Predictive Control” has been accepted by IEEE/RSJ IROS 2024",
    image: "assets/img/news/uno_push_iros_24.webp",
    url: "https://arxiv.org/abs/2403.13274"
  },
  {
    date: "2024-04-25",
    title: "Howard Qian has been Awarded “Distinction in Research and Creative Works” by Rice University",
    text: "We are thrilled to announce that our esteemed lab member, Howard Qian, has been awarded the prestigious “Distinction in Research and Creative Works” by Rice University.",
    more: [
      "This is a university honor for graduating students that will be granted at Commencement and will appear on recipients’ transcripts and diplomas. To apply, CS students should submit a work or body of work that illustrates creativity, self-initiation, independence, perseverance, and dedication. In all cases, we expect that students who apply for distinction in undergraduate research in computer science will have produced something that goes beyond the traditional expectations of their coursework.",
      "For Computer Science students, the application process involves submitting a work or body of work that goes beyond the traditional expectations of coursework. Howard’s successful application cited his contributions to the RISeg paper, with his first authorship and the paper’s acceptance to ICRA being key factors in receiving this honor.",
      "This award underscores the high-quality research being conducted in our lab and highlights Howard’s exceptional contributions to the field. We congratulate Howard on this well-deserved recognition and look forward to his continued success in future endeavors."
    ],
    image: "assets/img/news/howard_award.webp"
  },
  {
    date: "2024-03-02",
    title: "Our Paper “RISeg, Robot Interactive Object Segmentation via Body Frame-Invariant Features” has been accepted by IEEE-RAS ICRA 2024, as well as its 3DVRM workshop",
    text: "RISeg is an interactive perception framework in which robot actions are selected based on a scene’s uncertainty heatmap representation and object segmentation is improved via a body frame-invariant feature.",
    more: [
      "In order to successfully perform manipulation tasks in new environments, such as grasping, robots must be proficient in segmenting unseen objects from the background and/or other objects. Previous works perform unseen object instance segmentation (UOIS) by training deep neural networks on large-scale data to learn RGB/RGB-D feature embeddings, where cluttered environments often result in inaccurate segmentations. We build upon these methods and introduce a novel approach to correct inaccurate segmentation, such as under-segmentation, of static image-based UOIS masks by using robot interaction and a designed body frame-invariant feature. We demonstrate that the relative linear and rotational velocities of frames randomly attached to rigid bodies due to robot interactions can be used to identify objects and accumulate corrected object-level segmentation masks. By introducing motion to regions of segmentation uncertainty, we are able to drastically improve segmentation accuracy in an uncertainty-driven manner with minimal, non-disruptive interactions (ca. 2-3 per scene). We demonstrate the effectiveness of our proposed interactive perception pipeline in accurately segmenting cluttered scenes by achieving an average object segmentation accuracy rate of 80.7%, an increase of 28.2% when compared with other state-of-the-art UOIS methods."
    ],
    image: "assets/img/news/riseg_icra_24.webp",
    url: "https://arxiv.org/abs/2403.01731"
  },
  {
    date: "2024-02-08",
    title: "In-Hand Manipulation Competition in the 9th RGMC",
    text: "We are organizing the 9th Robotic Grasping and Manipulation Competition (RGMC) at IEEE-RAS ICRA 2024 in Yokohama, Japan, on May 13-17. Dr. Hang is the lead organizer of the In-Hand Manipulation Competition (Sub-Track 2) within the Essential Skill Track. We look forward to seeing everyone in the competition!",
    image: "assets/img/news/rgmc.webp",
    url: "https://www.cse.usf.edu/~yusun/rgmc/2024.html"
  },
  {
    date: "2023-06-29",
    title: "National Science Foundation CAREER Award",
    text: "Kaiyu Hang has won a National Science Foundation CAREER Award to develop robots that can physically interact with the world through compliance- and motion-based manipulation funnels.",
    image: "assets/img/news/nsf-career.webp",
    url: "https://news.rice.edu/news/2023/rice-us-kaiyu-hang-wins-nsf-career-award"
  },
  {
    date: "2023-06-22",
    title: "Rice CS team helps robots rearrange objects without gripping them",
    text: "Rice University Computer Scientists presented research on enabling robots to rearrange objects without grasping them at the 2023 International Conference on Robotics and Automation.",
    image: "assets/img/news/rice-cs-news-2023.webp",
    url: "https://csweb.rice.edu/news/rice-cs-team-helps-robots-rearrange-objects-without-gripping-them"
  },
  {
    date: "2023-06-21",
    title: "Our Paper “Non-Parametric Self-Identification and Model Predictive Control of Dexterous In-Hand Manipulation” has been accepted by IEEE/RSJ IROS",
    image: "assets/img/news/self-id-iros-2023.webp",
    url: "https://arxiv.org/abs/2307.10033"
  },
  {
    date: "2023-03-02",
    title: "Our Paper “Self-Supervised Unseen Object Instance Segmentation via Long-Term Robot Interaction” has been accepted by RSS 2023",
    image: "assets/img/news/uois-rss-2023.webp",
    url: "https://arxiv.org/abs/2302.03793"
  },
  {
    date: "2022-12-22",
    title: "Workshop on “Compliant Robot Manipulation: Challenges and New Opportunities” in IEEE-RAS ICRA 2023",
    text: "In IEEE-RAS ICRA 2023, we will organize the second workshop on “Compliant Robot Manipulation: Challenges and New Opportunities”. Distinguished speakers from both academia and industry will join to share their brilliant research progress and thoughts. Poster contributions with oral presentation opportunities will be an important part of the workshop.",
    image: "assets/img/news/compliant-manipulation-workshop-2023.webp",
    url: "https://sites.google.com/yale.edu/icra2023-compliantmanipulation/"
  },
  {
    date: "2022-12-02",
    title: "Our Paper “Kinodynamic Rapidly-exploring Random Forest for Rearrangement-Based Nonprehensile Manipulation” has been accepted by IEEE-RAS ICRA 2023",
    image: "assets/img/news/kdrrf-icra-2023.webp",
    url: "https://arxiv.org/abs/2302.04360"
  },
  {
    date: "2021-12-17",
    title: "Robot Self-Identification has been selected by Science Robotics as the Top 5 Editor's Picks of 2021",
    image: "assets/img/news/science-robotics-2021.webp",
    url: "https://hangkaiyu.github.io/self-identification.html"
  }
];

// "Research Highlights" at the bottom of the home page: paper awards and journal honors, in one
// rolling row. Each card links to its paper or article (`url`, with its title in `paper`).
// `note` (optional) is small text under the venue, such as the journal issue; \n starts a new line.
// Add `image: "assets/img/awards/xxx.jpg"` to show a photo or certificate at the top of a card.
window.LAB_AWARDS = [
  { year: "2026", title: "NIST Spotlight: ManipulationNet", detail: "U.S. National Institute of Standards and Technology",
    paper: "Spotlight: Test Your Robot’s Skills in NIST’s Global Online Competition",
    url: "https://www.nist.gov/news-events/news/2026/06/spotlight-test-your-robots-skills-nists-global-online-competition" },
  { year: "2024", title: "ASME Rising Star of Mechanical Engineering", detail: "American Society of Mechanical Engineers", note: "Kaiyu Hang",
    paper: "Rising Stars of Mechanical Engineering, ASME IMECE 2024",
    url: "https://event.asme.org/IMECE-2024/Program/Rising-Stars-of-Mechanical-Engineering" },
  { year: "2023", title: "NSF CAREER Award", detail: "U.S. National Science Foundation", note: "Kaiyu Hang",
    paper: "Rice U.'s Kaiyu Hang wins NSF CAREER Award",
    url: "https://news.rice.edu/news/2023/rice-us-kaiyu-hang-wins-nsf-career-award" },
  { year: "2021", title: "Top 5 Editor's Picks of 2021", detail: "Science Robotics", note: "19 May 2021:\nVol. 6, Issue 54, eabe1321",
    paper: "Manipulation for self-Identification, and self-Identification for better manipulation",
    url: "https://hangkaiyu.github.io/self-identification.html" },
  { year: "2019", title: "Cover Article", detail: "Science Robotics", note: "13 Mar 2019:\nVol. 4, Issue 28, eaau6637",
    paper: "Perching and resting: A paradigm for UAV maneuvering with modularized landing gears",
    url: "https://hangkaiyu.github.io/perching.html" },
  { year: "2019", title: "Best Oral Paper Award, Finalist", detail: "IEEE-RAS Humanoids",
    paper: "Dual-Arm In-Hand Manipulation Using Visual Feedback",
    url: "https://hangkaiyu.github.io/pdfs/cruciani2019a.pdf" },
  { year: "2019", title: "Mike Stillman Award, Finalist", detail: "IEEE-RAS Humanoids",
    paper: "Dual-Arm In-Hand Manipulation Using Visual Feedback",
    url: "https://hangkaiyu.github.io/pdfs/cruciani2019a.pdf" },
  { year: "2019", title: "Best Paper Award in Robotic Manipulation, Finalist", detail: "IEEE-RAS ICRA",
    paper: "Pre-Grasp Sliding Manipulation of Thin Objects Using Soft, Compliant, or Underactuated Hands",
    url: "https://hangkaiyu.github.io/pdfs/hang2019a.pdf" },
  { year: "2017", title: "Best Robotic Manipulation Paper Award, Finalist", detail: "IEEE-RAS ICRA",
    paper: "Integrating Motion and Hierarchical Fingertip Grasp Planning",
    url: "https://hangkaiyu.github.io/pdfs/haustein2017a.pdf" },
  { year: "2014", title: "Best Student Paper Award, Finalist", detail: "IEEE-RAS ICRA",
    paper: "Combinatorial Optimization for Hierarchical Contact-level Grasping",
    url: "https://hangkaiyu.github.io/pdfs/hang2014a.pdf" },
  { year: "2012", title: "Best Cognitive Robotics Paper Award, Finalist", detail: "IEEE/RSJ IROS",
    paper: "Improving Generalization for 3D Object Categorization with Global Structure Histograms",
    url: "https://hangkaiyu.github.io/pdfs/madry2012IROS.pdf" }
];
