# Mobile AR Plant Health Detector 🌿

![ar-result-details gif](https://github.com/user-attachments/assets/7a23de54-eb8f-4be6-baee-75cf12df1471)
![ar-scanning-flow gif](https://github.com/user-attachments/assets/9cfa5950-5825-4aec-b089-884e81f5ceae)


> **Interaction Preview:** A 3-stage scanning flow (Scanning → Locked → Result) designed for high outdoor visibility using Glassmorphism and High-Contrast type.

A **Mobile Augmented Reality (AR)** interface designed to assist users in evaluating plant health in dynamic outdoor lighting conditions.

## 📐 UX Engineering Focus
This project bridges the gap between **Computer Vision** constraints and **Human-Computer Interaction (HCI)**.
* **Context Aware UI:** Designed for high glare/outdoor use, utilizing **High-Contrast Typography Scales** and "Glassmorphism" overlays to maintain visibility against complex organic backgrounds.
* **Scanning Heuristics:** Implements a visual "Reticle" state machine (Idle $\rightarrow$ Searching $\rightarrow$ Locked) to guide users toward optimal scanning distance.
* **Information Architecture:** progressive disclosure of plant data (Health Score first, detailed metrics on tap) to reduce cognitive load during the AR experience.

## 🛠 Prototype Logic
The interface demonstrates the "Happy Path" of the detection flow:
1.  **Camera Initialization:** Viewport setup with scanning overlays.
2.  **Object Recognition:** Simulated state change when a plant is identified.
3.  **Data Overlay:** Spatially anchored cards displaying "Hydration Level" and "Pest Detection."

---
*Based on the Design Project (M.Sc. Web Science).*
