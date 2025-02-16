FROM ubuntu:latest
LABEL authors="ethan"

ENTRYPOINT ["top", "-b"]