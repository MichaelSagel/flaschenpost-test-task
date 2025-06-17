# backend/Dockerfile

# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore
COPY backend/*.csproj ./backend/
RUN dotnet restore backend/*.csproj

# Copy rest of the code
COPY backend/. ./backend/
WORKDIR /src/backend

RUN dotnet publish -c Release -o /app/publish

# Stage 2: Run
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 5174
ENTRYPOINT ["dotnet", "FlaschenpostBackend.dll"]
