---
subtitle: ""
abstract: This work proposes a framework for tracking a desired path of an
  object held by an adaptive hand via within-hand manipulation. Such
  underactuated hands are able to passively achieve stable contacts with
  objects. Combined with vision-based control and data-driven state estimation
  processes, they can solve tasks without accurate hand-object models or
  multimodal sensory feedback. In particular, a data-driven regression process
  is used here to estimate the probability of dropping the object for given
  manipulation states. Then, an optimization-based planner aims to track the
  desired path while avoiding states that are above a threshold probability of
  dropping the object. The optimized cost function, based on the principle of
  Dynamic Time Warping (DTW), seeks to minimize the area between the desired and
  the followed path. By adapting the threshold for the probability of dropping
  the object, the framework can handle objects of different weights without
  retraining. Experiments involving writing letters with a marker, as well as
  tracing randomized paths, were conducted on the Yale Model T-42 hand. Results
  indicate that the framework successfully avoids undesirable states while
  minimizing the proposed cost function, thereby producing object paths for
  within-hand manipulation that closely match the target ones.
slides: null
url_pdf: https://hangkaiyu.github.io/pdfs/calli2018.pdf
title: Path Planning for Within-Hand Manipulation over Learned Representations
  of Safe States
publication_types:
  - "1"
authors:
  - Berk Calli
  - Andrew Kimmel
  - Kaiyu Hang
  - Kostas Bekris
  - and Aaron M. Dollar
doi: ""
publication_short: International Symposium on Experimental Robotics (ISER)
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
publication: International Symposium on Experimental Robotics (ISER)
featured: true
tags: []
date: 2018-06-30T18:36:00.000Z
url_slides: ""
links:
publishDate: 2017-01-01T00:00:00.000Z
---



