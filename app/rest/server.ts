import express from "express";
import { altairExpress } from "altair-express-middleware";

export function createExpressServer() {
  const server = express();

  server.use(
    "/altair",
    altairExpress({
      endpointURL: "/graphql",
      subscriptionsEndpoint: "ws://localhost:8080/graphql",
    })
  );

  return server;
}
