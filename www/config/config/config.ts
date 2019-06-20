export const config = {
  "dev": {
    "username": process.env.POSTGRESQL_USERNAME,
    "password": process.env.POSTGRESQL_PASSWORD,
    "database": process.env.POSTGRESQL_DATABASE,
    "host": process.env.POSTGRESQL_HOST,
    "dialect": "postgres",
    "aws_region": process.env.POSTGRESQL_REGION,
    "aws_profile": process.env.POSTGRESQL_PROFILE,
    "aws_media_bucket": process.env.POSTGRESQL_AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
