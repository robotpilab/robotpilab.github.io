---
title: A Framework For Optimal Grasp Contact Planning
subtitle: ""
publication_types:
  - "2"
authors:
  - Kaiyu Hang
  - Johannes A. Stork
  - Nancy S. Pollard
  - Danica Kragic
publication_short: IEEE Robotics and Automation Letters (RAL)
abstract: >-
  We consider the problem of finding optimal grasp contacts for arbitrary
  objects, based on a given grasp quality function. Our approach formulates a
  framework for contact-level grasping as a path-finding problem in the space of
  super-contact grasps. The initial super-contact grasp contains all grasps, and
  in each step along a path, grasps are removed. To achieve this, we introduce
  and formally characterize search space structure and cost functions, under
  which minimal cost paths correspond to optimal grasps. Our formulation avoids
  expensive exhaustive search and reduces computational cost by several orders
  of magnitude. 


  We present admissible heuristic functions and exploit approximate heuristic search to further reduce computational cost while maintaining bounded sub-optimality for resulting grasps. We exemplify our formulation with point-contact grasping, for which we define domain-specific heuristics and demonstrate optimality and bounded sub-optimality by comparing against exhaustive and uniform cost search on example objects. Furthermore, we explain how to restrict the search graph to satisfy grasp constraints for modeling hand kinematics. We also analyze our algorithm empirically in terms of created and visited search states and resultant effective branching factor.
draft: false
featured: false
projects: []
slides: null
url_pdf: https://hangkaiyu.github.io/pdfs/hang2017a.pdf
summary: >-
  We consider the problem of finding optimal grasp contacts for arbitrary
  objects, based on a given grasp quality function. Our approach formulates a
  framework for contact-level grasping as a path-finding problem in the space of
  super-contact grasps. The initial super-contact grasp contains all grasps, and
  in each step along a path, grasps are removed. To achieve this, we introduce
  and formally characterize search space structure and cost functions, under
  which minimal cost paths correspond to optimal grasps. Our formulation avoids
  expensive exhaustive search and reduces computational cost by several orders
  of magnitude. 


  We present admissible heuristic functions and exploit approximate heuristic search to further reduce computational cost while maintaining bounded sub-optimality for resulting grasps. We exemplify our formulation with point-contact grasping, for which we define domain-specific heuristics and demonstrate optimality and bounded sub-optimality by comparing against exhaustive and uniform cost search on example objects. Furthermore, we explain how to restrict the search graph to satisfy grasp constraints for modeling hand kinematics. We also analyze our algorithm empirically in terms of created and visited search states and resultant effective branching factor.
url_dataset: ""
url_project: ""
url_source: ""
url_video: ""
author_notes: []
doi: ""
publication: IEEE Robotics and Automation Letters
tags:
  - Source Themes
image:
  caption: "Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)"
  focal_point: ""
  preview_only: false
date: 2017-08-11T20:54:00.000Z
url_slides: ""
publishDate: 2017-01-01T00:00:00.000Z
url_poster: ""
url_code: ""
---

Supplementary notes can be added here, including [code and math](https://wowchemy.com/docs/content/writing-markdown-latex/).
