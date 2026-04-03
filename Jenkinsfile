pipeline {
    agent any

    stages {
        stage('Pull Latest Image') {
            steps {
                sh 'docker pull hari7890/bluegreen-app:latest'
            }
        }

        stage('Deploy Green') {
            steps {
                sh 'kubectl apply -f k8s/green-deployment.yaml'
            }
        }

        stage('Switch Traffic') {
            steps {
                sh 'kubectl patch service my-service -p \'{"spec":{"selector":{"version":"green"}}}\''
            }
        }
    }
}