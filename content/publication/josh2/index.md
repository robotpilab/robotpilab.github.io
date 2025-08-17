---
title: "On the Role of Jacobians in Robust Manipulation"

publication_types:
  - "1"
authors:
  - Joshua T. Grace
  - Podshara Chanrungmaneekul
  - Kaiyu Hang
  - Aaron M. Dollar
publication_short: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)
abstract: Traditional robot control relies on analytical methods that require precise system models, which are hard to apply in real-world settings and limit generalization to arbitrary tasks. However, systems like serial manipulators and passively adaptive hands feature inherently stable regions without control discontinuities like loss of contact or singularities. In these regions, approximate controllers focusing on the correct direction of motion enable successful coarse manipulation. When coupled with a rough estimation of the motion magnitude, precision manipulation is achieved. Leveraging this insight, we introduce a novel inverse Jacobian estimation method that independently estimates the primary motion direction and magnitude of the manipulator’s actuators. Our method efficiently estimates the direct mapping from task to actuator space with no need for a priori system knowledge, enabling the same framework to control both hands and arms without compromising task performance. We present a novel control method with no a priori knowledge for precision manipulation. Experiments on the Yale Model O hand, Yale Stewart Hand, and a UR5e arm demonstrate that the inverse Jacobians estimated via our approach enable real-time control with submillimeter precision in manipulation tasks. These results highlight that online self-identification data alone is sufficient for precise real-world manipulation.
draft: false
featured: false
projects: []
slides: null
url_pdf: "./publication/josh2/Grace_IROS2025.pdf"
summary: We introduce an inverse Jacobian estimation method that separately identifies motion direction and magnitude without any prior system knowledge, enabling a unified framework for hands and arms. Experiments on the Yale Model O, Yale Stewart Hand, and a UR5e arm demonstrate real-time control with submillimeter precision.
url_dataset: ""
url_project: ""
url_source: ""
url_video: ""
author_notes: []
doi: ""
publication: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025
tags:
  - Source Themes
image:
  caption: "Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)"
  focal_point: ""
  preview_only: false
date: 2025-08-01T00:00:00.000Z
url_slides: ""
publishDate: 2025-08-01T00:00:00.000Z
url_poster: ""
url_code: ""
---

Supplementary notes can be added here, including [code and math](https://wowchemy.com/docs/content/writing-markdown-latex/).
