---
title: "RoboTok: An Internet-Scale Data Engine for Human Demonstration Retrieval and Dexterous Manipulation Learning"

publication_types:
  - "preprint"
authors:
  - Howard Qian
  - Yiting Chen
  - Yunfei Xie
  - Kejia Ren
  - Podshara Chanrungmaneekul
  - Gaotian Wang
  - Bowen Wen
  - Chen Wei
  - Kaiyu Hang
publication_short: arXiv
abstract: "Robot learning increasingly depends on broad and diverse demonstrations, yet collecting robot data remains expensive and poorly suited to covering the long tail of real-world tasks. To address this bottleneck, we introduce RoboTok, an internet-scale data engine that, given a query human manipulation video, retrieves manipulation-relevant human demonstrations from web videos for training dexterous robot policies. Specifically, we learn a latent motion space from 3D hand trajectories expressed in estimated actor-centered reference frames. This representation enables manipulation behaviors to be compared across variations in camera viewpoint, scene appearance, and actor occlusions, while remaining compact enough for efficient search and continual indexing over internet-scale video collections. We evaluate RoboTok against existing robot-data retrieval approaches on retrieval benchmarks and downstream robot policy performance. Our results show that RoboTok retrieves more relevant manipulation demonstrations and improves downstream task success, establishing hand-pose trajectory-aware retrieval as a way to make web video a scalable and continuously growing source of supervision for robot learning."
draft: false
featured: false
projects: []
slides: null
url_pdf: https://arxiv.org/abs/2609.03199
summary: "RoboTok is an internet-scale data engine that retrieves manipulation-relevant human demonstrations from web videos given a query video. It learns a latent motion space over 3D hand trajectories in estimated actor-centered frames, making retrieval robust to viewpoint, scene appearance and occlusion while staying compact enough to index internet-scale video collections, and it improves downstream dexterous manipulation policy success."
url_dataset: "https://huggingface.co/Rice-RobotPI-Lab/robotok-public"
url_project: "https://rice-robotpi-lab.github.io/RoboTok/"
url_source: ""
url_video: ""
author_notes: []
doi: "10.48550/arXiv.2609.03199"
publication: arXiv
tags:
  - Robotics
  - Manipulation
  - Robot Learning
  - Hand-Object Interaction
  - Retrieval
  - Data
image:
  caption: ""
  focal_point: ""
  preview_only: false
date: 2026-09-02T00:00:00.000Z
url_slides: ""
publishDate: 2026-09-02T00:00:00.000Z
url_poster: ""
url_code: "https://github.com/Rice-RobotPI-Lab/RoboTok-Code"
research:
  - data-engines
---
