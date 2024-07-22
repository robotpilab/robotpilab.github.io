---
title: Our Paper "RISeg, Robot Interactive Object Segmentation via Body Frame-Invariant Features" accepted by IEEE-RAS ICRA 2024, as well as its 3DVRM workshop
date: 2024-03-02
image:
  focal_point: top
  filename: featured.jpg
---
<!--StartFragment-->

Our paper ["RISeg: Robot Interactive Object Segmentation via Body Frame-Invariant Features" ](https://arxiv.org/abs/2403.01731) has been accepted by IEEE-RAS International Conference on Robotics and Automation (IEEE-RAS ICRA).  Check out the [video](https://www.youtube.com/watch?v=K_FU310Jm1k)!

RISeg was also recently accepted to the ["3DVRM workshop" ](https://3d-manipulation-workshop.github.io/) at ICRA!

RISeg is an interactive perception framework in which robot actions are selected based on a scene's uncertainty heatmap representation and object segmentation is improved via a body frame-invariant feature.

In order to successfully perform manipulation tasks in new environments, such as grasping, robots must be proficient in segmenting unseen objects from the background and/or other objects. Previous works perform unseen object instance segmentation (UOIS) by training deep neural networks on large-scale data to learn RGB/RGB-D feature embeddings, where cluttered environments often result in inaccurate segmentations. We build upon these methods and introduce a novel approach to correct inaccurate segmentation, such as under-segmentation, of static image-based UOIS masks by using robot interaction and a designed body frame-invariant feature. We demonstrate that the relative linear and rotational velocities of frames randomly attached to rigid bodies due to robot interactions can be used to identify objects and accumulate corrected object-level segmentation masks. By introducing motion to regions of segmentation uncertainty, we are able to drastically improve segmentation accuracy in an uncertainty-driven manner with minimal, non-disruptive interactions (ca. 2-3 per scene). We demonstrate the effectiveness of our proposed interactive perception pipeline in accurately segmenting cluttered scenes by achieving an average object segmentation accuracy rate of 80.7%, an increase of 28.2% when compared with other state-of-the-art UOIS methods.
<!--EndFragment-->