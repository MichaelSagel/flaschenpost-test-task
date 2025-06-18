# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy only the .csproj and restore
COPY FlaschenpostBackend.csproj .
RUN dotnet restore FlaschenpostBackend.csproj

# Copy everything else and publish
COPY . .
RUN dotnet publish FlaschenpostBackend.csproj -c Release -o /app/publish

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 5174
ENTRYPOINT ["dotnet", "FlaschenpostBackend.dll"]
