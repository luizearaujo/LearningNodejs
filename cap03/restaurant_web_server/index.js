import Fastify from "fastify";
import operationHours from "./data/operationHours.js";
import menu from "./data/menuItem.js";

const app = Fastify();
const port = 3000;

app.get("/", async (request, reply) => {
    return "Welcome to What's Fare is fair!"
});

app.get("/menu", async (request, reply) => {
    return menu;
});

app.get("/hours", async (request, reply) => {
    return operationHours;
});

await app.listen({ port });
console.log(`Web server is running at http://localhost:${port}`);