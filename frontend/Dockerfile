FROM node:21-alpine 

WORKDIR /app/    
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

# docker run -p 8080:8080 -p 50000:50000 -d -v jenkins_home:/var/jenkins_home jenkins/jenkins