FROM ubuntu:latest

WORKDIR /app

# ----------- sol installtion ----------- #
RUN apt-get update && apt-get install -y \
    curl
RUN sh -c "$(curl -sSfL https://release.solana.com/v1.8.0/install)"
ENV PATH="/root/.local/share/solana/install/active_release/bin:${PATH}"
RUN solana --version
# ----------- sol installtion ----------- #

# ----------- node installtion ----------- #
ENV NODE_VERSION=14.6.0
RUN apt update
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version
# -----------  node installtion ----------- #

COPY package.json . 
COPY package-lock.json .
COPY . .
RUN npm ci --silent

EXPOSE 3000
EXPOSE 80
EXPOSE 8080
EXPOSE 443
CMD ["npm", "start"]
