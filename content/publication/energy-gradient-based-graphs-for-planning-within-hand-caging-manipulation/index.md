---
subtitle: ""
abstract: In this work, we present a within-hand manipulation approach that
  leverages a simple energy model based on caging grasps made by underactuated
  hands. Instead of explicitly modeling the contacts and dynamics in
  manipulation, we can calculate a map to describe the energy states of
  different hand-object configurations under an actuation input. Since the
  system intrinsically steers towards low energy states, the object's movement
  is uniquely described by the gradient of the energy map if the corresponding
  actuation is applied. Such maps are pre-calculated for a range of actuation
  inputs to represent the system's energy profile. We discretize the workspace
  into a grid and construct an energy gradient-based graph by locally exploring
  the gradients of the stored energy profile. Given a goal configuration of a
  simple cylindrical object, a sequence of actuation inputs can be calculated to
  manipulate it towards the goal by exploiting the connectivity in the graph.
  The proposed approach is experimentally implemented on a Yale T42 hand. Our
  evaluation results show that parts of the graph are well-connected, explaining
  our ability to successfully plan and execute trajectories within the gripper's
  workspace.
slides: null
url_pdf: https://hangkaiyu.github.io/pdfs/bircher2019a.pdf
title: Energy Gradient-Based Graphs for Planning Within-Hand Caging Manipulation
publication_types:
  - "1"
authors:
  - Walter G. Bircher
  - Andrew S. Morgan
  - Kaiyu Hang
  - Aaron M. Dollar
doi: ""
publication_short: IEEE-RAS International Conference on Robotics and Automation (ICRA)
projects:
  - Non-prehensile manipulation
image:
  caption: ""
  focal_point: ""
  preview_only: false
  filename: 
summary: ""
url_project: ""
url_video: 
publication: IEEE-RAS International Conference on Robotics and Automation (ICRA)
featured: true
tags: []
date: 2019-06-30T18:34:00.000Z
url_slides: ""
links:

publishDate: 2017-01-01T00:00:00.000Z
---



