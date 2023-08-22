---
title: Hand-object configuration estimation using particle filters for dexterous
  in-hand manipulation
subtitle: ""
publication_types:
  - "2"
authors:
  - Kaiyu Hang
  - Walter G. Bircher
  - Andrew S. Morgan
  - and Aaron M. Dollar
publication_short: International Journal of Robotics Research (IJRR)
abstract: We consider the problem of dexterous manipulation with a focus on
  unknown or uncertain hand-object parameters, such as hand configuration,
  object pose within the hand, and contact positions. In this work, we formulate
  a generic framework for hand-object configuration estimation using
  underactuated hands as an example. Due to the passive reconfigurability and
  lack of encoders in the hand's joints, it is challenging to estimate, plan,
  and actively control underactuated manipulation. By modeling the grasp
  constraints, we present a particle filter-based framework to estimate the hand
  configuration. Specifically, given an arbitrary grasp, we start by sampling a
  set of hand configuration hypotheses and then randomly manipulate the object
  within the hand. While observing the object's movements as evidence using an
  external camera, which is not necessarily calibrated with the hand frame, our
  estimator calculates the likelihood of each hypothesis to iteratively estimate
  the hand configuration. Once converged, the estimator is used to track the
  hand configuration in real-time for future manipulations. Thereafter, we
  develop an algorithm to precisely plan and control the underactuated
  manipulation to move the grasped object to desired poses. In contrast to most
  other dexterous manipulation approaches, our framework does not require any
  tactile sensing or joint encoders and can directly operate on any novel
  objects without requiring a model of the object a priori. We implemented our
  framework on both the Yale Model O hand and the Yale T42 hand. The results
  show that the estimation is accurate for different objects and that the
  framework can be easily adapted across different underactuated hand models.
  Finally, we evaluated our planning and control algorithm with handwriting
  tasks and demonstrated the effectiveness of the proposed framework.
draft: false
featured: false
projects: []
slides: null
url_pdf: https://hangkaiyu.github.io/pdfs/hang2019c.pdf
summary: We consider the problem of dexterous manipulation with a focus on
  unknown or uncertain hand-object parameters, such as hand configuration,
  object pose within the hand, and contact positions. In this work, we formulate
  a generic framework for hand-object configuration estimation using
  underactuated hands as an example. Due to the passive reconfigurability and
  lack of encoders in the hand's joints, it is challenging to estimate, plan,
  and actively control underactuated manipulation. By modeling the grasp
  constraints, we present a particle filter-based framework to estimate the hand
  configuration. Specifically, given an arbitrary grasp, we start by sampling a
  set of hand configuration hypotheses and then randomly manipulate the object
  within the hand. While observing the object's movements as evidence using an
  external camera, which is not necessarily calibrated with the hand frame, our
  estimator calculates the likelihood of each hypothesis to iteratively estimate
  the hand configuration. Once converged, the estimator is used to track the
  hand configuration in real-time for future manipulations. Thereafter, we
  develop an algorithm to precisely plan and control the underactuated
  manipulation to move the grasped object to desired poses. In contrast to most
  other dexterous manipulation approaches, our framework does not require any
  tactile sensing or joint encoders and can directly operate on any novel
  objects without requiring a model of the object a priori. We implemented our
  framework on both the Yale Model O hand and the Yale T42 hand. The results
  show that the estimation is accurate for different objects and that the
  framework can be easily adapted across different underactuated hand models.
  Finally, we evaluated our planning and control algorithm with handwriting
  tasks and demonstrated the effectiveness of the proposed framework.
url_dataset: ""
url_project: ""
url_source: ""
url_video: ""
author_notes: []
doi: ""
publication: International Journal of Robotics Research
tags:
  - Source Themes
image:
  caption: "Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)"
  focal_point: ""
  preview_only: false
date: 2019-08-11T20:45:00.000Z
url_slides: ""
publishDate: 2017-01-01T00:00:00.000Z
url_poster: ""
url_code: ""
---

Supplementary notes can be added here, including [code and math](https://wowchemy.com/docs/content/writing-markdown-latex/).
