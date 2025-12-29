import Fastify from "fastify";

const app = Fastify();
const port = 3000;

app.get("/", async (request, reply) => {
    return "Welcome to What's Fare is fair!"
});

app.get("/menu", async (request, reply) => {
    return "TODO: Menu page";
});

app.get("/hours", async (request, reply) => {
    return "TODO: Hours page";
});

await app.listen({ port });
console.log(`Web server is running at http://localhost:${port}`);