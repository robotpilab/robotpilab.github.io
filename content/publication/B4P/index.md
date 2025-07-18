---
title: "B4P: Simultaneous Grasp and Motion Planning for Object Placement via Parallelized Bidirectional Forests and Path Repair"

publication_types:
  - "1"
authors:
  - Benjamin H. Leebron
  - Kejia Ren
  - Yiting Chen
  - Kaiyu Hang
publication_short: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)
abstract: Robot pick and place systems have traditionally decoupled grasp, placement, and motion planning to build sequential optimization pipelines with the assumption that the individual components will be able to work together. However, this separation introduces sub-optimality, as grasp choices may limit or even prohibit feasible motions for a robot to reach the target placement pose, particularly in cluttered environments with narrow passages. To this end, we propose a forest-based planning framework to simultaneously find grasp configurations and feasible robot motions that explicitly satisfy downstream placement configurations paired with the selected grasps. Our proposed framework leverages a bidirectional sampling-based approach to build a start forest, rooted at the feasible grasp regions, and a goal forest, rooted at the feasible placement regions, to facilitate the search through randomly explored motions that connect valid pairs of grasp and placement trees. We demonstrate that the framework's inherent parallelism enables superlinear speedup, making it scalable for applications for redundant robot arms (e.g., 7 Degrees of Freedom) to work efficiently in highly cluttered environments. Extensive experiments in simulation demonstrate the robustness and efficiency of the proposed framework in comparison with multiple baselines under diverse scenarios.
draft: false
featured: false
projects: []
slides: null
url_pdf: https://arxiv.org/abs/2504.04598
summary: We propose B4P, a forest-based planning framework that simultaneously finds grasp configurations and feasible robot motions for object placement. Our bidirectional sampling-based approach builds start and goal forests to connect valid grasp-placement pairs, enabling superlinear speedup through inherent parallelism. This makes the framework scalable for redundant robot arms working in highly cluttered environments, addressing the sub-optimality introduced by traditional decoupled planning approaches.
url_dataset: ""
url_project: ""
url_source: ""
url_video: "https://youtu.be/CJ5SQWEcTGw"
author_notes: []
doi: ""
publication: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)
tags:
  - Source Themes
image:
  caption: "Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)"
  focal_point: ""
  preview_only: false
date: 2025-07-17T20:40:00.000Z
url_slides: ""
publishDate: 2025-07-17T00:00:00.000Z
url_poster: ""
url_code: ""
---

Supplementary notes can be added here, including [code and math](https://wowchemy.com/docs/content/writing-markdown-latex/).
