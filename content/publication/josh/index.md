---
title: "Direct Self-Identification of Inverse Jacobians for Dexterous Manipulation Through Particle Filtering"

publication_types:
  - "1"
authors:
  - Joshua T. Grace
  - Podshara Chanrungmaneekul
  - Kaiyu Hang
  - Aaron M. Dollar
publication_short: IEEE International Conference on Robotics and Automation (ICRA)
abstract: The ability to plan and control robotic in-hand manipulation is challenged by several issues, including the required amount of prior knowledge of the system and the sophisticated physics that varies across different robot hands or even grasp instances. One of the most direct models of in-hand manipulation is the inverse Jacobian, which can directly map from the desired in-hand object motions to the required hand actuator controls. However, acquiring such inverse Jacobians without complex hand-object system models is typically infeasible. We present a method for controlling in-hand manipulation using inverse Jacobians that are self-identified by a particle filter-based estimation scheme that leverages the ability of underactuated hands to maintain a passively stable grasp during self-identification movements. This method requires no a priori knowledge of the specific hand-object system and learns the system's inverse Jacobian through small exploratory motions. Our system approximates the underlying inverse Jacobian closely, which can be used to perform manipulation tasks across a range of objects successfully. With extensive experiments on a Yale Model O hand, we show that the proposed system can provide accurate in-hand manipulation of sub-millimeter precision and that the inverse Jacobian-based controller can support real-time manipulation control of up to 900Hz.
draft: false
featured: false
projects: []
slides: null
url_pdf: "./publication/josh/Grace_ICRA24.pdf"
summary: Controlling robotic in-hand manipulation is complex due to the varying physics and required system knowledge. One model, the inverse Jacobian, translates desired object motions to hand controls, but acquiring it without sophisticated system models is challenging. Our method uses a particle filter-based scheme to self-identify inverse Jacobians, enabling underactuated hands to stably grasp during self-identification movements. This approach requires no prior knowledge and learns the system's inverse Jacobian through exploratory motions. Our system closely approximates the inverse Jacobian, performing manipulation tasks successfully. Experiments on a Yale Model O hand show sub-millimeter precision and real-time control up to 900Hz.
url_dataset: ""
url_project: ""
url_source: ""
url_video: ""
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
publishDate: 2024-01-01T00:00:00.000Z
url_poster: ""
url_code: ""
---

Supplementary notes can be added here, including [code and math](https://wowchemy.com/docs/content/writing-markdown-latex/).
