---
title: "RISeg: Robot Interactive Object Segmentation via Body Frame-Invariant Features"

publication_types:
  - "1"
authors:
  - Howard Qian
  - Yangxiao Lu
  - Kejia Ren
  - Gaotian Wang
  - Ninad Khargonkar
  - Yu Xiang
  - Kaiyu Hang
publication_short: IEEE International Conference on Robotics and Automation (ICRA)
abstract: The ability to segment unseen objects is critical for robots to autonomously perform manipulation tasks in new environments. While previous works train deep neural networks on large datasets to learn RGB/RGB-D feature embeddings for segmentation, cluttered scenes often result in inaccurate masks, especially undersegmentation. We introduce RISeg, a novel approach that improves upon static image-based segmentation masks through robot interaction and a designed body frame-invariant feature (BFIF). The key insight is that the spatial twists of frames randomly attached to the same rigid object, when transformed to a fixed reference frame, will be equal despite varying linear and angular velocities. By identifying regions of segmentation uncertainty, strategically introducing object motion through minimal interactions (2-3 per scene), and matching BFIFs, RISeg is able to significantly improve segmentation without relying on object singulation. On cluttered real-world tabletop scenes, RISeg achieves an average object segmentation accuracy of 80.7%, an increase of 28.2% over state-of-the-art static methods.
draft: false
featured: false
projects: []
slides: null
url_pdf: https://arxiv.org/abs/2403.01731
summary: We introduce RISeg, a robot interactive perception framework that significantly improves unseen object segmentation in cluttered scenes. RISeg identifies regions of segmentation uncertainty from a static image-based model, introduces object motion through minimal robot interactions, and matches spatial twists of randomly sampled object frames to group them. This allows accumulated segmentation corrections without relying on object singulation. RISeg increases segmentation accuracy by 28.2% over static methods on real cluttered tabletop scenes.
url_dataset: ""
url_project: ""
url_source: ""
url_video: https://www.youtube.com/watch?v=K_FU310Jm1k
author_notes: []
doi: ""
publication: IEEE International Conference on Robotics and Automation, 2024
tags:
  - Source Themes
image:
  caption: "Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)"
  focal_point: ""
  preview_only: false
date: 2024-08-11T20:40:00.000Z
url_slides: ""
publishDate: 2014-01-01T00:00:00.000Z
url_poster: ""
url_code: ""
---

Supplementary notes can be added here, including [code and math](https://wowchemy.com/docs/content/writing-markdown-latex/).
