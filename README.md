# Puzzle-Party

---

Transform any image into a puzzle of varying difficulties and play solo or with a group in a real time party

## Getting Started

### Build and start the containers on your local machine

```bash
$ docker-compose up -d --build
Creating network "puzzle-party_puzzle-network" with driver "bridge"
Building server
Step 1/8 : FROM node:12.16.1-alpine3.11
...
Successfully built e4694e972e51
Successfully tagged puzzle-party_server:latest
Building client
Step 1/11 : FROM node:12.16.1-alpine3.11 AS builder
...
Successfully built 778efb020038
Successfully tagged puzzle-party_client:latest
Recreating mongo ... done
Recreating server ... done
Recreating client ... done
```

### Editing a file requires a rebuild of that container

`$ docker-compose up -d --build --force-recreate --no-deps <container-name>`
