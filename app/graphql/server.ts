import ws from "ws";
import http from "http";
import { useServer } from "graphql-ws/lib/use/ws";

import { createContext } from "./context";
import { schema } from "./schema";

export async function startGraphQLServer({
  httpServer,
}: {
  httpServer: http.Server;
}) {
  const websocketServer = new ws.Server({
    server: httpServer,
    path: "/graphql",
  });

  useServer({ schema, context: createContext() }, websocketServer);
}
