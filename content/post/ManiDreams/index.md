---
title: ManiDreams released!
date: 2026-03-18
image:
  filename: featured.png
---

We are excited to announce ManiDreams, an open-source modular framework for uncertainty-aware manipulation planning over intuitive physics models. ManiDreams addresses a fundamental challenge in robotic manipulation: real-world manipulation is inherently uncertain. Rather than suppressing uncertainties during training, ManiDreams explicitly represents, propagates, and constrains perceptual, parametric, and structural uncertainties within the planning loop.

The framework wraps any base policy with a sample-predict-constrain loop that evaluates candidate actions against distributional outcomes, adding robustness without retraining. Experiments on ManiSkill tasks show that ManiDreams maintains robust performance under various perturbations where the RL baseline degrades significantly.

Project page: https://rice-robotpi-lab.github.io/ManiDreams/  
GitHub Repository: https://github.com/Rice-RobotPI-Lab/ManiDreams  
Documentation: https://rice-robotpi-lab.github.io/ManiDreams/documentation.html  
Paper: https://arxiv.org/abs/2603.18336
