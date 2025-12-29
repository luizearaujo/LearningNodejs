import ejs from "ejs";
import Fastify from "fastify";
import fastifyView from "@fastify/view";
import operationHours from "./data/operationHours.js";
import menu from "./data/menuItem.js";

const app = Fastify();
const port = 3000;

app.register(fastifyView, {
    engine: {
        ejs: ejs,
    },
});

app.get("/", (request, reply) => {
       reply.view("views/index.ejs", { name: "What's Fare is Fair" });
});

app.get("/menu", async (request, reply) => {
    return menu;
});

app.get("/hours", async (request, reply) => {
    return operationHours;
});

await app.listen({ port }, (err, address) => {
    if (err) throw err;
    console.log(`Server listening at ${address}`);
});