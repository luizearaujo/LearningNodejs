import Fastify from "fastify";

const app = Fastify();
const port = 3000;

app.get("/", async (request, reply) => {
    return "Welcome to What's Fare is fair!"
});

await app.listen({ port });
console.log("Web server is running at http://localhost:${port}");