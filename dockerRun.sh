#!/bin/bash
 
docker run -d -p 20080:20080 --name=${1} --env-file=./env ${1}
