pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t myapp .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop myapp-container || exit 0'
                bat 'docker rm myapp-container || exit 0'
            }
        }

        stage('Run New Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name myapp-container myapp'
            }
        }
    }
}