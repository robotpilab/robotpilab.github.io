---
title: A Data-Driven Framework for Learning Dexterous Manipulation of Unknown Objects
abstract: We address the problem of developing precise, quasi-static control
  strategies for fingertip manipulation in robot hands. In general, it is
  difficult or impossible to analytically specify useful object transition maps
  or hand-object Jacobians for scenarios in which there is uncertainty in some
  key aspect of the hand-object system. This could be in scenarios with
  standard, fully-actuated hands where, for instance, there is no accurate model
  of the contact conditions, or in scenarios with fewer control inputs than
  mechanical degrees of freedom (such as underactuated hands or those that are
  controlled by synergies or impedance-controlled frameworks), since the output
  space is of higher dimension than the input space. In this work, we develop a
  method for extracting object transition maps by tracking the state of the
  grasp frame. We begin by modeling a compliant, underactuated hand and its
  mechanical properties through an energy-based approach. From this energy
  model, we provide controlled actuation inputs to change the state of the grasp
  frame. We observe the response from these actions and develop a regression map
  of the action-reaction pairs, where the map is subject to our intent for grasp
  frame movement and the regional relationship between the contacts. Once the
  regression model is developed, we perform within-hand planning of the grasp
  frame with newly introduced objects. This approach is agnostic to the global
  geometry of the object and is able to adapt when undesirable contact
  conditions, such as sliding, occur. The learning-based methodology estimates
  the nonlinearities representative in the properties of the system. We test our
  framework physically on an adapted Yale Openhand Model O. By transferring the
  learned model from simulation to the physical hand without adaptation, we show
  that this energy modeling approach is robust to inaccuracies in parameter
  estimation. We demonstrate its efficacy in a handwriting task.
slides: null
url_pdf: https://hangkaiyu.github.io/pdfs/morgan2019a.pdf
publication_types:
  - "1"
authors:
  - Andrew S. Morgan
  - Kaiyu Hang
  - Walter G. Bircher
  - Aaron M. Dollar
doi: ""
publication_short: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)
tags: []
projects:
  - Non-prehensile manipulation
summary: The paper presents a method for developing precise, quasi-static
  control strategies for fingertip manipulation in robot hands. The method
  involves extracting object transition maps by tracking the state of the grasp
  frame and developing a regression map of the action-reaction pairs. The
  approach is agnostic to the global geometry of the object and is able to adapt
  when undesirable contact conditions occur. The methodology estimates the
  nonlinearities representative in the properties of the system. The framework
  is tested physically on an adapted Yale Openhand Model O and demonstrated to
  be robust to inaccuracies in parameter estimation.
url_project: ""
url_video: 
publication: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)
featured: true
date: 2019-06-28T22:41:00.000Z
url_slides: ""
links:
image:
  caption: ""
  focal_point: ""
  preview_only: false
publishDate: 2017-01-01T00:00:00.000Z
---




