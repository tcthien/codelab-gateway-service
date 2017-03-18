FROM java:8-jre
MAINTAINER Thien Tran <thientran1986@gmail.com>

ADD ./target/codelab-gateway-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/codelab-gateway-service.jar"]

EXPOSE 20080