aws configure

aws user/iam user details:
aws sts get-caller-identity

Authenticate Docker with ECR
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 092682177706.dkr.ecr.ap-south-1.amazonaws.com

Microservices:
user-service
product-service
order-service
payment-service
docker-compose.yml

build image:
docker build -t user-service ./user-service
Tag Docker Image: 
docker tag user-service:latest 092682177706.dkr.ecr.ap-south-1.amazonaws.com/user-service:latest
Push to ECR: 
docker push 092682177706.dkr.ecr.ap-south-1.amazonaws.com/user-service:latest
....continue till last microservices to upload inside ECR

#Install Terraform
command to install:
Ubuntu/Debian

wget -O - https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(grep -oP '(?<=UBUNTU_CODENAME=).*' /etc/os-release || lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install terraform




