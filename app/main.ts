import { createServer } from "http";
import { startGraphQLServer } from "./graphql/server";
import { createExpressServer } from "./rest/server";

async function main() {
  const expressServer = await createExpressServer();
  const httpServer = createServer(expressServer);
  await startGraphQLServer({ httpServer });

  await new Promise<void>((resolve) => httpServer.listen(8080, resolve));
  console.log("Listening on", 8080);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
