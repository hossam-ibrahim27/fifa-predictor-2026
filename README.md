# FIFA World Cup 2026 - Match Predictor ⚽

A full-stack ML application that predicts the goal difference and winner
of a hypothetical FIFA World Cup 2026 group-stage match using Linear Regression.

## Tech Stack
- **ML**: Python, scikit-learn, pandas, pickle
- **Backend**: FastAPI, Uvicorn
- **Frontend**: React (Vite), Tailwind CSS, Axios

## Project Structure




## Production:
Demo in Varcel: 

# 🏆 FIFA World Cup 2026 - Match Predictor ⚽

![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=for-the-badge&logo=vercel)
![Backend](https://img.shields.io/badge/API-Hugging_Face-yellow?style=for-the-badge&logo=huggingface)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)

A full-stack Machine Learning application that predicts the goal difference and the winner of any hypothetical group-stage match for the upcoming **FIFA World Cup 2026**. 

The prediction engine is powered by a **Linear Regression** model, served via a blazing-fast **FastAPI** backend, and presented through a modern **React** frontend.

---

## 🚀 Live Production
Try the live application here: **[FIFA Predictor 2026 - Demo](https://fifa-predictor-2026-tau.vercel.app/)**

---

## ✨ Features
- **48-Team Support**: Includes all officially qualified/projected teams organized into 12 groups based on the new 2026 tournament format.
- **Real-Time Predictions**: Instantly calculates the expected goal difference and predicts the winning team.
- **Cloud Hosted**: Independent deployments for the frontend (Vercel) and the backend ML API (Hugging Face Spaces + Docker).
- **Interactive UI**: Clean, responsive, and intuitive user interface built with Tailwind CSS.

---

## 🛠️ Tech Stack

### 🧠 Machine Learning
- **Python 3.11**
- **scikit-learn**: Model training and evaluation (Linear Regression).
- **Pandas & NumPy**: Data processing and feature engineering.
- **Joblib / Pickle**: Model serialization.

### ⚙️ Backend (API)
- **FastAPI**: High-performance asynchronous REST API.
- **Uvicorn**: ASGI server.
- **Hugging Face Hub**: Model storage and dynamic loading at runtime.
- **Docker**: Containerization for Hugging Face Spaces deployment.

### 💻 Frontend
- **React (Vite)**: Fast frontend tooling and framework.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for API requests.

---

## 📂 Project Structure

```text
fifa-predictor-2026/
├── frontend/               # React (Vite) application & Tailwind configs
├── backend/                # Local FastAPI server & API endpoints
├── ml_model/               # ML training scripts, Jupyter notebooks, & datasets
└── hf-space/               # Production deployment files (Dockerfile, requirements)
    ├── app.py              # Cloud API script
    ├── Dockerfile          # Docker configuration for HF Spaces
    └── groups.json         # Tournament data
