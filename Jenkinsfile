pipeline {
    agent any

    stages {
        stage('Pull Latest Image') {
            steps {
                bat 'docker pull hari7890/bluegreen-app:latest --validate=false'
            }
        }

        stage('Deploy Green') {
            steps {
                bat 'kubectl apply -f k8s/green-deployment.yaml --validate=false'
            }
        }

        stage('Switch Traffic') {
            steps {
                bat 'kubectl patch service my-service -p \'{"spec":{"selector":{"version":"green"}}}\''
            }
        }
    }
}