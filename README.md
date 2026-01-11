# Mobile AR Plant Health Detector 🌿

<table>
  <tr>
    <td width="50%">
      <h3 align="center">State 1: Context-Aware Scanning</h3>
      <img src="ar-scanning-flow.gif" width="100%" alt="AR Scanning Animation">
    </td>
    <td width="50%">
      <h3 align="center">State 2: High-Contrast Results</h3>
      <img src="ar-result-details.gif" width="100%" alt="AR Result Card UI">
    </td>
  </tr>
</table>
![Uploading ar-result-details.gif.gif…]()

> **UX Engineering Highlight:** The interface transitions from a minimal "Scanning Reticle" (to maximize camera visibility) to a "Glassmorphism" Result Card. This ensures high readability of health metrics (e.g., Hydration: 30%) even against complex, organic backgrounds in outdoor lighting.

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
