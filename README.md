Rust + React Student Grade Report DApp

A decentralized application (dApp) built using a Rust backend and React frontend on the Internet Computer Protocol (ICP). This app allows you to:

* *   Store student names and marks for multiple subjects
*     
* *   Calculate average marks and assign grades (A, B, C, D)
*     
* *   Generate and download a PDF report card
*     

Features

* *   Rust-based canister for backend logic
*     
* *   React frontend for interactive UI
*     
* *   Use of DFINITY SDK (dfx) for canister deployment and communication
*     
* *   PDF generation for student report cards
*     
* *   Decentralized storage on ICP blockchain
*     

Prerequisites

* *   Install DFINITY SDK (dfx): [https://internetcomputer.org/docs/current/developer-docs/setup/install/](https://internetcomputer.org/docs/current/developer-docs/setup/install/)
*     
* *   Install Rust toolchain and add the wasm32-unknown-unknown target:  
*     rustup target add wasm32-unknown-unknown
*     
* *   Node.js and npm installed
*     

Installation & Deployment

1. 1.  Clone this repository:  
1.     git clone [https://github.com/manbahadurthapa1248/rust-react-student-grade-report-dapp.git](https://github.com/manbahadurthapa1248/rust-react-student-grade-report-dapp.git)  
1.     cd rust-react-student-grade-report-dapp
1.     
1. 2.  Start the local Internet Computer network:  
1.     dfx start --background
1.     
1. 3.  Build your Rust canister and frontend:  
1.     dfx build
1.     
1. 4.  Deploy the canisters to the local network:  
1.     dfx deploy
1.     
1. 5.  Run the frontend app (usually at [http://localhost:8000](http://localhost:8000)):  
1.     dfx canister call icp\_student\_records\_frontend greet  
1.     dfx deploy
1.     
1. 6.  Open your browser to the frontend URL to interact with the app.
1.     

Usage

* *   Add student name and marks for subjects
*     
* *   Calculate average and assign grades automatically
*     
* *   View report card in UI and download as PDF
*     

Project Structure

* *   /src/icp\_student\_records\_backend — Rust backend canister
*     
* *   /src/icp\_student\_records\_frontend — React frontend app
*     
* *   /dfx.json — dfx configuration file
*     

Technologies Used

* *   Rust (Backend canister)
*     
* *   React + Vite (Frontend)
*     
* *   DFINITY SDK (dfx)
*     
* *   jsPDF for PDF generation
*     Word or other rich text sources.
