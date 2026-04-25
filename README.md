# Loop — Appliance Repair Service

![Loop Header](loop-react-app/public/logo.svg)

**Loop** is a high-fidelity mobile application designed to revolutionize the appliance repair industry. Built with a focus on sustainability and user experience, Loop connects users with expert technicians to extend the lifespan of household appliances and reduce environmental impact.

## 📱 Project Overview

Loop provides a dual-interface experience:
- **User Flow**: A seamless journey from reporting a breakdown to payment and certification, including real-time tracking of the technician's arrival.
- **Technician Flow**: A specialized toolkit for repair professionals to manage missions, perform structured diagnostics, and document interventions.

## ✨ Key Features

### For Users
- **Scan & Go**: Identify appliances instantly via QR code or NFC.
- **Impact Tracking**: Visualize your environmental contribution through CO2 savings metrics.
- **Interactive Tracking**: Real-time status updates and technician geolocation.
- **Secure Payment**: Integrated payment flow with instant repair certificates.
- **Notifications**: Stay informed with a dedicated notification system.

### For Technicians
- **Mission Brief**: Comprehensive overview of upcoming interventions and required parts.
- **Smart Diagnostic**: Structured technical questionnaire to identify failures accurately.
- **Photo Documentation**: Capture repair evidence directly within the app.
- **Performance Metrics**: Track daily missions, travel time, and success rates.

## 🎨 Design Philosophy

Loop follows a **Premium Native iOS Aesthetic**:
- **Typography**: Uses the system font stack (SF Pro) with high-impact, bold-italic display headings.
- **Micro-Interactions**: Smooth transitions and haptic-style feedback powered by Framer Motion.
- **Safe Area Aware**: Fully optimized for modern mobile devices (notches, home indicators).
- **Glassmorphism**: Subtle use of blurs and transparency for a modern, layered feel.

## 🛠 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS & Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Google Material Symbols
- **Maps**: Leaflet (for technician tracking)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/PaulCochet/Loop_bachlor_project.git
   ```
2. Navigate to the app directory:
   ```bash
   cd loop-react-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🌐 Deployment

The project is automatically deployed on **Vercel** via GitHub Actions.
Live demo: [https://loop-bachelor.vercel.app](https://loop-bachelor.vercel.app)

---
*Developed as part of a Bachelor Project by Paul Cochet.*