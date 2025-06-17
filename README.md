# Flaschenpost Test Task

This is a full-stack web application for the Flaschenpost test task.  
It consists of:

- **Frontend**: Vue 3 + Vite + TypeScript + Tailwind CSS
- **Backend**: ASP.NET Core 8 Web API
- **Containerization**: Docker & Docker Compose

---

## 📦 Project Structure

```
.
├── backend/           # ASP.NET Core Web API project
├── frontend/          # Vue 3 application (built with Vite)
├── docker-compose.yml
└── README.md
```

---

## 🚀 Prerequisites

Make sure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)
- [WSL2 (for Windows users)](https://learn.microsoft.com/en-us/windows/wsl/install)

---

## 🛠️ Setup & Run

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd flaschenpostTestTask
   ```

2. **Build and run containers**

   From the project root, run:

   ```bash
   DOCKER_BUILDKIT=1 docker-compose up --build
   ```

   This will:

   - Build the .NET backend and Vue frontend
   - Launch them in separate containers
   - Create a shared Docker network (`flaschenpost-net`)

3. **Access the app**

   - Backend API: [http://localhost:5174/api/products](http://localhost:5174/api/products)
   - Frontend UI: [http://localhost](http://localhost)

   > If you're using WSL2, make sure port forwarding is set up (see below).

---

## 🧩 WSL2 Port Forwarding (Windows only)

If you're using Docker inside WSL2, you'll need to set up port forwarding to access your app from Windows browser:

```powershell
# Run these in Windows PowerShell (as Administrator)

# Port 80 (for frontend)
netsh interface portproxy add v4tov4 listenport=80 listenaddress=0.0.0.0 connectport=5173 connectaddress=<WSL_IP>

# Port 5174 (for backend API)
netsh interface portproxy add v4tov4 listenport=5174 listenaddress=0.0.0.0 connectport=5174 connectaddress=<WSL_IP>
```

To get your WSL IP address:

```bash
hostname -I
```

Use the first address shown.

---

## ⚙️ Backend Details

- ASP.NET Core 8
- Swagger UI is enabled in development mode at `/swagger`
- API endpoint for product data: `/api/products`

### Example response

```json
[
  {
    "id": 1,
    "name": "Beer Crate",
    "brand": "Flaschenpost",
    "price": 14.99
  }
]
```

## 🧪 Development Tips

- When making changes to backend or frontend, you can rebuild containers:

  ```bash
  docker-compose build
  docker-compose up
  ```

- To stop everything:

  ```bash
  docker-compose down
  ```

---

## 🔍 Troubleshooting

- **Frontend not opening on `http://localhost`?**  
  Check if port 80 is forwarded correctly from WSL to Windows.

- **Backend API unreachable from frontend?**  
  Ensure CORS policy allows correct origin (configured for `http://localhost`).

- **Permission denied accessing Docker in WSL?**  
  Run `sudo chmod 666 /var/run/docker.sock` inside WSL.

---

## 🧹 Cleanup

To remove all containers and networks:

```bash
docker-compose down --volumes --remove-orphans
```

---

## 📬 Questions

For any issues or clarifications, feel free to contact the maintainer or open a GitHub issue.

---