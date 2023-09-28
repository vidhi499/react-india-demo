
FROM quay.io/minio/minio

# Set the working directory
WORKDIR /data

# Expose the required ports
EXPOSE 9000
EXPOSE 9001

# Set the default environment variables
# ENV MINIO_ACCESS_KEY gluestack
# ENV MINIO_SECRET_KEY password

# Start the Minio server
CMD ["server", "/data", "--console-address", ":9001"]
