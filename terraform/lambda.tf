module "selenium_sample" {
  source = "terraform-aws-modules/lambda/aws"

  function_name = "lambda-selenium-sample"
  timeout       = 60
  memory_size   = 512

  create_package = false

  package_type  = "Image"
  architectures = ["x86_64"]

  image_uri = var.image_uri
}
