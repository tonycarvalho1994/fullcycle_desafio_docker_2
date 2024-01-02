#!/bin/sh
dockerize -wait tcp://node_server:3000 -timeout 35s

./docker-entrypoint.sh 

nginx -g 'daemon off;'