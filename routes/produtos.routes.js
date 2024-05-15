import express from "express";
import { produtoService } from "./produtos.services.js";

export const produtosRoute = (app) => {
    var route = express.Router()
    route.get('/', produtoService.getAll)
    route.get('/', produtoService.getById)

    app.use('/api/produto', route)
}