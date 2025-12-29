import ejs from "ejs";
import Fastify from "fastify";
import fastifyView from "@fastify/view";
import operationHours from "./data/operationHours.js";
import menuItems from "./data/menuItem.js";
import days from "./data/days.js";

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

app.get("/menu", (request, reply) => {
    reply.view("views/menu.ejs", { menuItems });
});

app.get("/hours", (request, reply) => {
    reply.view("views/hours.ejs", { operationHours, days });
});

await app.listen({ port }, (err, address) => {
    if (err) throw err;
    console.log(`Server listening at ${address}`);
});