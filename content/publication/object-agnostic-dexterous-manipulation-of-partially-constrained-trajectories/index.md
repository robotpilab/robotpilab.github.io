---
title: Object-Agnostic Dexterous Manipulation of Partially Constrained Trajectories
subtitle: ""
publication_types:
  - "2"
authors:
  - Andrew S. Morgan
  - Kaiyu Hang
  - Aaron M. Dollar
publication_short: IEEE Robotics and Automation Letters (RAL)
abstract: We address the problem of controlling a partially constrained
  trajectory of the manipulation frame - an arbitrary frame of reference rigidly
  attached to the object - as the desired motion about this frame is often
  underdefined. This may be apparent, for example, when the task requires
  control only about the translational dimensions of the manipulation frame,
  with disregard to the rotational dimensions. This scenario complicates the
  computation of the grasp frame trajectory, as the mobility of the mechanism is
  likely limited due to the constraints imposed by the closed kinematic chain.
  In this letter, we address this problem by combining a learned,
  object-agnostic manipulation model of the gripper with Model Predictive
  Control (MPC). This combination facilitates an approach to simple vision-based
  control of robotic hands with generalized models, enabling a single
  manipulation model to extend to different task requirements. By tracking the
  hand-object configuration through vision, the proposed framework is able to
  accurately control the trajectory of the manipulation frame along
  translational, rotational, or mixed trajectories. We provide experiments
  quantifying the utility of this framework, analyzing its ability to control
  different objects over varied horizon lengths and optimization iterations, and
  finally, we implement the controller on a physical system.
draft: false
featured: false
projects: []
slides: null
url_pdf: https://hangkaiyu.github.io/pdfs/morgan2020b.pdf
summary: We address the problem of controlling a partially constrained
  trajectory of the manipulation frame - an arbitrary frame of reference rigidly
  attached to the object - as the desired motion about this frame is often
  underdefined. This may be apparent, for example, when the task requires
  control only about the translational dimensions of the manipulation frame,
  with disregard to the rotational dimensions. This scenario complicates the
  computation of the grasp frame trajectory, as the mobility of the mechanism is
  likely limited due to the constraints imposed by the closed kinematic chain.
  In this letter, we address this problem by combining a learned,
  object-agnostic manipulation model of the gripper with Model Predictive
  Control (MPC). This combination facilitates an approach to simple vision-based
  control of robotic hands with generalized models, enabling a single
  manipulation model to extend to different task requirements. By tracking the
  hand-object configuration through vision, the proposed framework is able to
  accurately control the trajectory of the manipulation frame along
  translational, rotational, or mixed trajectories. We provide experiments
  quantifying the utility of this framework, analyzing its ability to control
  different objects over varied horizon lengths and optimization iterations, and
  finally, we implement the controller on a physical system.
url_dataset: ""
url_project: ""
url_source: ""
url_video: ""
author_notes: []
publication: IEEE Robotics and Automation Letters, 2020
tags:
  - Source Themes
image:
  caption: "Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)"
  focal_point: ""
  preview_only: false
date: 2020-08-11T20:34:36.803Z
url_slides: ""
publishDate: 2017-01-01T00:00:00.000Z
url_poster: ""
url_code: ""
---

Supplementary notes can be added here, including [code and math](https://wowchemy.com/docs/content/writing-markdown-latex/).
