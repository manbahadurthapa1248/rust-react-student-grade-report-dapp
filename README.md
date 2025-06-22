# Rust + React Student Grade Report DApp

A decentralized application (dApp) built using Rust backend and React frontend on the Internet Computer Protocol (ICP). This app allows you to:

- Store student names and marks for multiple subjects
- Calculate average marks and assign grades (A, B, C, D)
- Generate and download a PDF report card

## Features

- Rust-based canister for backend logic
- React frontend for interactive UI
- Use of DFINITY SDK (`dfx`) for canister deployment and communication
- PDF generation for student report cards
- Decentralized storage on ICP blockchain

## Prerequisites

- Install [DFINITY SDK (`dfx`)](https://internetcomputer.org/docs/current/developer-docs/setup/install/)
- Install Rust toolchain and add the `wasm32-unknown-unknown` target:
  
  ```bash
  rustup target add wasm32-unknown-unknown
- Node.js and npm installed

## Installation & Deployment

### Clone this repository:

      ```bash
      git clone https://github.com/manbahadurthapa1248/rust-react-student-grade-report-dapp.git
      cd rust-react-student-grade-report-dapp

### Start the Local Internet Computer Network

  ```bash
  dfx start --background

## Build Your Rust Canister and Frontend

  ```bash
  dfx build

## Deploy the Canisters to the Local Network

  ```bash
  dfx deploy

---

## Usage

- Add student name and marks for subjects  
- Calculate average and assign grades automatically  
- View report card in UI and download as PDF  

---

## Project Structure

  ```bash
  /src/icp_student_records_backend    # Rust backend canister  
  /src/icp_student_records_frontend   # React frontend app  
  /dfx.json                           # dfx configuration file

---

## Technologies Used

- **Rust** (Backend canister)
- **React + Vite** (Frontend)
- **DFINITY SDK (`dfx`)**
- **jsPDF** for PDF generation
