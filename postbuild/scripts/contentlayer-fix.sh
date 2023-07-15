#!/bin/bash

# Replace the corrupted lines with the fixed ones
sed -i '' '7c\
import pkg from '\''@opentelemetry/sdk-trace-base'\'';\
const { ConsoleSpanExporter, SimpleSpanProcessor } = pkg;
' ./node_modules/@effect-ts/otel/_mjs/Processor/Simple/index.mjs

sed -i '' '10c\
import pkg from '\''@opentelemetry/sdk-trace-node'\'';\
const { NodeTracerProvider } = pkg;
' ./node_modules/@effect-ts/otel-sdk-trace-node/_mjs/index.mjs

sed -i '' '5,6c\
import resourcePkg from '\''@opentelemetry/resources'\'';\
const { Resource } = resourcePkg;\
import semanticConventionsPkg from '\''@opentelemetry/semantic-conventions'\'';\
const { SemanticResourceAttributes } = semanticConventionsPkg;
' ./node_modules/@contentlayer/utils/dist/tracing-effect/index.js

