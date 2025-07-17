---
title: "rt-RISeg: Real-Time Model-Free Robot Interactive Segmentation for Active Instance-Level Object Understanding"

publication_types:
  - "1"
authors:
  - Howard H. Qian
  - Yiting Chen
  - Gaotian Wang
  - Podshara Chanrungmaneekul
  - Kaiyu Hang
publication_short: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)
abstract: Successful execution of dexterous robotic manipulation tasks in new environments, such as grasping, depends on the ability to proficiently segment unseen objects from the background and other objects. Previous works in unseen object instance segmentation (UOIS) train models on large-scale datasets, which often leads to overfitting on static visual features. This dependency results in poor generalization performance when confronted with out-of-distribution scenarios. To address this limitation, we rethink the task of UOIS based on the principle that vision is inherently interactive and occurs over time. We propose a novel real-time interactive perception framework, rt-RISeg, that continuously segments unseen objects by robot interactions and analysis of a designed body frame-invariant feature (BFIF). We demonstrate that the relative rotational and linear velocities of randomly sampled body frames, resulting from selected robot interactions, can be used to identify objects without any learned segmentation model. This fully self-contained segmentation pipeline generates and updates object segmentation masks throughout each robot interaction without the need to wait for an action to finish. We showcase the effectiveness of our proposed interactive perception method by achieving an average object segmentation accuracy rate 27.5% greater than state-of-the-art UOIS methods. Furthermore, although rt-RISeg is a standalone framework, we show that the autonomously generated segmentation masks can be used as prompts to vision foundation models for significantly improved performance.
draft: false
featured: false
projects: []
slides: null
url_pdf: http://arxiv.org/abs/2507.10776
summary: rt-RISeg is a real-time, model-free framework for robot interactive segmentation of unseen objects. By leveraging robot interactions and analyzing body frame-invariant features, it can segment objects without any learned model. The method achieves significantly higher accuracy than previous approaches and can also enhance the performance of vision foundation models by providing high-quality segmentation masks.
url_dataset: ""
url_project: ""
url_source: ""
url_video: "https://youtu.be/--TtC88GT_A?si=WiJqX0ZVPHX1XV_Z"
author_notes: []
doi: ""
publication: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)
tags:
  - Interactive Perception
  - Robotics
  - Segmentation
  - Unseen Object Instance Segmentation
image:
  caption: ""
  focal_point: ""
  preview_only: false
date: 2024-08-11T20:40:00.000Z
url_slides: ""
publishDate: 2025-07-11T20:40:00.000Z
url_poster: ""
url_code: ""
---

