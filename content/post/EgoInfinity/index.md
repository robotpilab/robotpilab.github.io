---
title: EgoInfinity released!
date: 2026-06-27
image:
  filename: featured.png
---

🚀 We are excited to introduce EgoInfinity, a web-scale 4D hand-object interaction (HOI) data engine that automatically lifts YouTube videos into structured 4D interaction data for robot learning in any view, including egocentric.

Robot manipulation has long been bottlenecked by data. Teleoperation is expensive and hard to scale, while the internet already holds a near-limitless supply of people manipulating objects with their hands. The catch: these in-the-wild videos are unstructured 2D, whereas robots need structured 3D/4D interaction to learn from.

EgoInfinity tries to close this gap automatically, with no human in the loop. Built upon Action100M (≈14.6 years of filtered, VLM-annotated YouTube human-action video, 142M clips), it lifts ordinary RGB videos into structured 4D HOI, recovering hand and object geometry, contact, and motion over time. A functional retargeting module then compiles the recovered 3D hand motions into executable robot joint trajectories, enabling any-view video-to-action transfer across different robot embodiments.

What we care about most:

🔧 **Not just a dataset, but a modular, upgradable engine.** Every perception component can be swapped for a stronger SOTA model, so the engine keeps improving as the field does. No hardware required: anyone can upgrade a module, run the pipeline, and start collecting human manipulation data at scale.

🌍 **Diversity by design.** Unscripted internet videos span an enormous range of everyday tasks and preserve the rich, naturally-occurring manipulation behaviors that scripted lab or factory collection tends to suppress.

🤖 **Seamless linking to robots.** We provide a functional retargeting module that compiles recovered 3D hand motions into executable robot joint trajectories, enabling any-view video-to-action transfer across different robot embodiments.

Want to learn more about EgoInfinity? Check out the links below:

🌐 Interactive demo: https://huggingface.co/spaces/Rice-RobotPI-Lab/EgoInfinity  
📄 Paper: https://arxiv.org/abs/2606.17385  
🌐 Project page: https://rice-robotpi-lab.github.io/EgoInfinity/  
💻 Code: https://github.com/Rice-RobotPI-Lab/EgoInfinity  
📄 Data preview: https://huggingface.co/datasets/Rice-RobotPI-Lab/egoinfinity  
