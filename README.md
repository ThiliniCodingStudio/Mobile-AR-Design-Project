# Mobile AR Plant Health Detector 🌿

<img width="376" height="818" alt="Screenshot 2026-01-11 at 17 08 24" src="https://github.com/user-attachments/assets/688f5e49-184e-414b-87b2-108254d8ef60" 
/><img width="858" height="911" alt="Screenshot 2026-01-11 at 17 10 50" src="https://github.com/user-attachments/assets/61f54bd0-757d-491f-bb2b-2aead5771811" />


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
