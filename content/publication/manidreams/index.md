---
title: "ManiDreams: An Open-Source Library for Robust Object Manipulation via Uncertainty-aware Task-specific Intuitive Physics"

publication_types:
  - "paper-conference"
authors:
  - Gaotian Wang
  - Kejia Ren
  - Andrew S. Morgan
  - Kaiyu Hang
publication_short: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)
abstract: "Dynamics models, whether simulators or learned world models, have long been central to robotic manipulation, but most focus on minimizing prediction error rather than confronting a more fundamental challenge: real-world manipulation is inherently uncertain. We argue that robust manipulation under uncertainty is fundamentally an integration problem: uncertainties must be represented, propagated, and constrained within the planning loop, not merely suppressed during training. We present and open-source ManiDreams, a modular framework for uncertainty-aware manipulation planning over intuitive physics models. It realizes this integration through composable abstractions for distributional state representation, backend-agnostic dynamics prediction, and declarative constraint specification for action optimization. The framework explicitly addresses three sources of uncertainty: perceptual, parametric, and structural. It wraps any base policy with a sample-predict-constrain loop that evaluates candidate actions against distributional outcomes, adding robustness without retraining. Experiments on ManiSkill tasks show that ManiDreams maintains robust performance under various perturbations where the RL baseline degrades significantly. Runnable examples on pushing, picking, catching, and real-world deployment demonstrate flexibility across different policies, optimizers, physics backends, and executors. The framework is publicly available at https://github.com/Rice-RobotPI-Lab/ManiDreams"
draft: false
featured: false
projects: []
slides: null
url_pdf: http://arxiv.org/abs/2603.18336
summary: "ManiDreams is a modular, open-source framework for uncertainty-aware manipulation planning over intuitive physics models, addressing perceptual, parametric, and structural uncertainties through a sample-predict-constrain loop that adds robustness to any base policy without retraining."
url_dataset: ""
url_project: "https://rice-robotpi-lab.github.io/ManiDreams/"
url_source: ""
url_video: ""
author_notes: []
doi: "10.48550/arXiv.2603.18336"
publication: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)
tags:
  - Robotics
  - Manipulation
  - Planning
  - Uncertainty
image:
  caption: ""
  focal_point: ""
  preview_only: false
date: 2026-03-18T22:46:00.000Z
url_slides: ""
publishDate: 2026-03-18T22:46:00.000Z
url_poster: ""
url_code: "https://github.com/Rice-RobotPI-Lab/ManiDreams"
---
