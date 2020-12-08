#!/usr/bin/env bash

npm i --global protoc-gen-grpc-web

IN_DIR="proto"
OUT_DIR="ts-proto"

rm -rf $OUT_DIR;
mkdir -p $OUT_DIR;

./protoc-3.14.0-win64/bin/protoc.exe -I. \
  --js_out=import_style=commonjs,binary:$OUT_DIR \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR \
  $(find $IN_DIR -iname '*.proto');