---
title: Self-Supervised Unseen Object Instance Segmentation via Long-Term Robot
  Interaction
url_pdf: https://arxiv.org/abs/2302.03793
url_video: https://youtu.be/_ykvsRAXRT0
publication_types:
  - "1"
authors:
  - Yangxiao Lu
  - Ninad Khargonkar
  - Zesheng Xu
  - Charles Averill
  - Kamalesh Palanisamy
  - Kaiyu Hang
  - Yunhui Guo
  - Nicholas Ruozzi
  - Yu Xiang
publication: "Robotics: Science and Systems "
publication_short: "Robotics: Science and Systems (RSS)"
abstract: We introduce a novel robotic system for improving unseen object
  instance segmentation in the real world by leveraging long-term robot
  interaction with objects. Previous approaches either grasp or push an object
  and then obtain the segmentation mask of the grasped or pushed object after
  one action. Instead, our system defers the decision on segmenting objects
  after a sequence of robot pushing actions. By applying multi-object tracking
  and video object segmentation on the images collected via robot pushing, our
  system can generate segmentation masks of all the objects in these images in a
  self-supervised way. These include images where objects are very close to each
  other, and segmentation errors usually occur on these images for existing
  object segmentation networks. We demonstrate the usefulness of our system by
  fine-tuning segmentation networks trained on synthetic data with real-world
  data collected by our system. We show that, after fine-tuning, the
  segmentation accuracy of the networks is significantly improved both in the
  same domain and across different domains. In addition, we verify that the
  fine-tuned networks improve top-down robotic grasping of unseen objects in the
  real world.
draft: false
featured: false
image:
  filename: featured
  focal_point: Smart
  preview_only: false
summary: Our robot system improves segmentation of unseen object instances in
  the real world using multi-object tracking and video object segmentation on
  images collected via robot pushing. This self-supervised approach generates
  segmentation masks of all objects in the images, including those where objects
  are close together and segmentation errors are common. We fine-tune
  segmentation networks trained on synthetic data with real-world data collected
  by our system, significantly improving accuracy across domains and enhancing
  robotic grasping of previously unseen objects.
date: 2023-06-28T17:02:54.900Z
---
