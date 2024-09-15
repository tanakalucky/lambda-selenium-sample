                     
# Lambda Selenium Sample
 
## Clone

```bash
git clone https://github.com/tanakalucky/lambda-selenium-sample.git
```
 
## Installation
```bash
npm install
```

## Execute locally
```bash
docker build . --platform=linux/amd64 -t lambda-selenium-sample
docker run --net=host lambda-selenium-sample
```

After completing the steps above, please execute this command in another terminal:
```bash
curl -d '{}' http://localhost:8080/2015-03-31/functions/function/invocations
```

## Publish image to private AWS ECR Repository
Please refer to the following article to push the image:<br>[How to push Docker Image to Public and Private AWS ECR Repository](https://dev.to/chinmay13/how-to-push-docker-image-to-public-and-private-aws-ecr-repository-56k5)


## Create Resources

### Config
 Use the `terraform.tfvars.example` as reference to create a `terraform.tfvars` file with your AWS Credentials and Image URI under the terraform directory

```
access_key = "XXXXXX"
secret_key = "XXXXXX"
image_uri  = "XXXXXX"
```

### Init
```bash
cd terraform
terraform init
```

### Plan
```bash
terraform plan
```

### Apply
```bash
terraform apply
```
