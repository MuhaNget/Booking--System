pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out your source code from version control
                checkout scm
            }
        }

        // stage('Install Dependencies') {
        //     steps {
        //         // Install Node.js dependencies
        //         sh 'npm install'
        //     }
        // }

        // stage('Build') {
        //     steps {
        //         // Build your Node.js application
        //         sh 'npm run build'
        //     }
        // }


        stage('Backend Build') {
            steps {
                dir('backend') {
                    // Run backend build commands
                    // sh 'npm install'
                    sh 'npm run build'

                    // Build Docker image for the backend
                    sh 'docker build -t backend-image .'
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    // Run frontend build commands
                    // sh 'npm install'
                    sh 'npm run build'
                    
                    // Build Docker image for the frontend
                    sh 'docker build -t frontend-image .'
                }
            }
        }


        stage('Docker Compose Deploy') {
            steps {
                // Deploy using Docker Compose
                sh 'docker-compose up -d'
            }
        }

        // stage('Test') {
        //     steps {
        //         // Run tests for your Node.js application
        //         sh 'npm test'
        //     }
        // }
    }
}
