import { rest } from "msw";
import datas from "./data/data";

const data = datas;

export const handlers = [
  rest.get("/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
