---
title: End-to-End Nonprehensile Rearrangement with Deep Reinforcement Learning
  and Simulation-to-Reality Transfer
subtitle: ""
publication_types:
  - "2"
authors:
  - Weihao Yuan
  - Kaiyu Hang
  - Danica Kragic
  - Michael Y. Wang
  - Johannes A. Stork
publication_short: Robotics and Autonomous Systems (RAS)
abstract: Nonprehensile rearrangement is the problem of controlling a robot to
  interact with objects through pushing actions in order to reconfigure the
  objects into a predefined goal pose. In this work, we rearrange one object at
  a time in an environment with obstacles using an end-to-end policy that maps
  raw pixels as visual input to control actions without any form of engineered
  feature extraction. To reduce the amount of training data that needs to be
  collected using a real robot, we propose a simulation-to-reality transfer
  approach. In the first step, we model the nonprehensile rearrangement task in
  simulation and use deep reinforcement learning to learn a suitable
  rearrangement policy, which requires hundreds of thousands of example actions
  for training. Thereafter, we collect a small dataset of only 70 episodes of
  real-world actions as supervised examples for adapting the learned
  rearrangement policy to real-world input data. In this process, we make use of
  newly proposed strategies for improving the reinforcement learning process,
  such as heuristic exploration and the curation of a balanced set of
  experiences. We evaluate our method in both simulation and real settings using
  a Baxter robot to show that the proposed approach can effectively improve the
  training process in simulation, as well as efficiently adapt the learned
  policy to the real-world application, even when the camera pose is different
  from simulation. Additionally, we show that the learned system can not only
  provide adaptive behavior to handle unforeseen events during executions, such
  as distracting objects, sudden changes in the positions of the objects, and
  obstacles, but also can deal with obstacle shapes that were not present in the
  training process.
draft: false
featured: false
projects: []
slides: null
url_pdf: https://hangkaiyu.github.io/pdfs/yuan2019b.pdf
summary: Nonprehensile rearrangement is the problem of controlling a robot to
  interact with objects through pushing actions in order to reconfigure the
  objects into a predefined goal pose. In this work, we rearrange one object at
  a time in an environment with obstacles using an end-to-end policy that maps
  raw pixels as visual input to control actions without any form of engineered
  feature extraction. To reduce the amount of training data that needs to be
  collected using a real robot, we propose a simulation-to-reality transfer
  approach. In the first step, we model the nonprehensile rearrangement task in
  simulation and use deep reinforcement learning to learn a suitable
  rearrangement policy, which requires hundreds of thousands of example actions
  for training. Thereafter, we collect a small dataset of only 70 episodes of
  real-world actions as supervised examples for adapting the learned
  rearrangement policy to real-world input data. In this process, we make use of
  newly proposed strategies for improving the reinforcement learning process,
  such as heuristic exploration and the curation of a balanced set of
  experiences. We evaluate our method in both simulation and real settings using
  a Baxter robot to show that the proposed approach can effectively improve the
  training process in simulation, as well as efficiently adapt the learned
  policy to the real-world application, even when the camera pose is different
  from simulation. Additionally, we show that the learned system can not only
  provide adaptive behavior to handle unforeseen events during executions, such
  as distracting objects, sudden changes in the positions of the objects, and
  obstacles, but also can deal with obstacle shapes that were not present in the
  training process.
url_dataset: ""
url_project: ""
url_source: ""
url_video: ""
author_notes: []
doi: ""
publication: Robotics and Autonomous Systems
tags:
  - Source Themes
image:
  caption: "Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)"
  focal_point: ""
  preview_only: false
date: 2019-08-11T20:52:00.000Z
url_slides: ""
publishDate: 2017-01-01T00:00:00.000Z
url_poster: ""
url_code: ""
---

Supplementary notes can be added here, including [code and math](https://wowchemy.com/docs/content/writing-markdown-latex/).
