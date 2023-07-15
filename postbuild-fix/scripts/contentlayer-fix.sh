#!/bin/bash

# Replace the corrupted lines with the fixed ones
sed -i '7c\import pkg from '\''@opentelemetry/sdk-trace-base'\'';\nconst { ConsoleSpanExporter, SimpleSpanProcessor } = pkg;' ./node_modules/@effect-ts/otel/_mjs/Processor/Simple/index.mjs
sed -i '10c\import pkg from '\''@opentelemetry/sdk-trace-node'\'';\nconst { NodeTracerProvider } = pkg;' ./node_modules/@effect-ts/otel-sdk-trace-node/_mjs/index.mjs
sed -i '5,6c\import resourcePkg from '\''@opentelemetry/resources'\'';\nconst { Resource } = resourcePkg;\nimport semanticConventionsPkg from '\''@opentelemetry/semantic-conventions'\'';\nconst { SemanticResourceAttributes } = semanticConventionsPkg;' ./node_modules/@contentlayer/utils/dist/tracing-effect/index.js
