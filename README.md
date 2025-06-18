# Flaschenpost Test Task

A full-stack web application for the Flaschenpost test assignment.

- **Frontend**: Vue 3 + Vite + TypeScript + Tailwind CSS  
- **Backend**: ASP.NET Core 8 Web API  
- **Dockerized**: Backend only (via Docker Compose)

---

## 🚀 Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js + npm](https://nodejs.org/)
- [WSL2 (for Windows users)](https://learn.microsoft.com/en-us/windows/wsl/install)

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MichaelSagel/flaschenpost-test-task.git
cd flaschenpostTestTask
```

### 2. Start backend (Docker)

```bash
DOCKER_BUILDKIT=1 docker-compose up --build
```

Backend will be available at: `http://localhost:5174/api/products`

---

### 3. Start frontend (locally)

```bash
cd frontend
npm install
npm run dev
```

Frontend will be running at: `http://localhost:5173`

---

## 🔄 Live development

- Frontend runs locally with hot-reload (`npm run dev`)
- Backend runs in Docker, rebuild when needed:

```bash
docker-compose build backend
docker-compose up backend
```

To stop all:

```bash
docker-compose down
```

---

## 🧩 WSL2 Notes (Windows only)

If you're using WSL2 and can't access `localhost`, forward ports:

```powershell
# Replace <WSL_IP> with the output of `hostname -I` inside WSL

netsh interface portproxy add v4tov4 listenport=5173 listenaddress=0.0.0.0 connectport=5173 connectaddress=<WSL_IP>
netsh interface portproxy add v4tov4 listenport=5174 listenaddress=0.0.0.0 connectport=5174 connectaddress=<WSL_IP>
```

To get WSL IP address:

```bash
hostname -I
```

---

## 📦 Cleanup

```bash
docker-compose down --volumes --remove-orphans
```

---