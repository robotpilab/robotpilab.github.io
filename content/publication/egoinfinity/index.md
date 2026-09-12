---
title: "EgoInfinity: A Web-Scale 4D Hand-Object Interaction Data Engine for Any-View Robot Retargeting and Video-to-Action Robot Learning"

publication_types:
  - "preprint"
authors:
  - Gaotian Wang
  - Kejia Ren
  - Andrew Morgan
  - Yiting Chen
  - Howard Qian
  - Podshara Chanrungmaneekul
  - Kaiyu Hang
publication_short: arXiv
abstract: "Internet videos constitute the largest reservoir of embodied human manipulation knowledge, yet converting arbitrary RGB footage into actionable robot training data remains a major bottleneck. Existing lab- or factory-collected datasets are narrow in scale and diversity, limiting open-world robot learning. Instead of proposing a static dataset, we introduce EgoInfinity, a universal 4D hand-object interaction data engine that enables web-scale data generation for robot retargeting and learning. EgoInfinity is a modular engine integrating perception, segmentation, reconstruction, interaction-aware refinement, and retargeting to automate this traditionally unscalable video-to-action problem without human-in-the-loop annotation. Its modular design lets the engine continuously benefit from advances in any incorporated component. With EgoInfinity, in-the-wild human manipulation videos are lifted into agent-agnostic, metric 4D hand-object representations, including hand trajectories, 6-DoF object poses, and contact-relevant states. Rather than naively connecting standalone components, EgoInfinity combines cross-module metric calibration with interaction-aware refinement to improve physical reliability, reducing drift and contact inconsistencies common in pure visual reconstruction. We further propose a novel motion retargeter that compiles the recovered 3D hand motions into executable joint trajectories for diverse robot morphologies, enabling video-to-action retargeting on any robot from arbitrary viewpoints and shot sizes (e.g., the human body is only partially visible). We validate EgoInfinity across perception fidelity, kinematic feasibility, contact consistency, cross-embodiment generalization, and real-robot skill acquisition (e.g., grasping, cutting, wiping, and pouring), demonstrating a scalable bridge from internet videos to executable robot behavior for open-world robot learning."
draft: false
featured: false
projects: []
slides: null
url_pdf: https://arxiv.org/abs/2606.17385
summary: "EgoInfinity is a web-scale 4D hand-object interaction data engine that automatically lifts in-the-wild YouTube videos into structured 4D interaction data for robot learning in any view, including egocentric. A functional retargeting module compiles recovered 3D hand motions into executable robot joint trajectories, enabling any-view video-to-action transfer across different robot embodiments."
url_dataset: "https://huggingface.co/datasets/Rice-RobotPI-Lab/egoinfinity"
url_project: "https://rice-robotpi-lab.github.io/EgoInfinity/"
url_source: ""
url_video: ""
author_notes: []
doi: "10.48550/arXiv.2606.17385"
publication: arXiv
tags:
  - Robotics
  - Manipulation
  - Hand-Object Interaction
  - Robot Learning
  - Data
image:
  caption: ""
  focal_point: ""
  preview_only: false
date: 2026-06-27T00:00:00.000Z
url_slides: ""
publishDate: 2026-06-27T00:00:00.000Z
url_poster: ""
url_code: "https://github.com/Rice-RobotPI-Lab/EgoInfinity"
research:
  - data-engines
---
