const express = require('express');
const routes = express.Router();

const MotoristaController = require('./controllers/motorista');
const PedidoController = require('./controllers/pedido');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

routes.get('/', (req, res) => {
    return res.json({ titulo: 'SNOOPY PetShop Delivery' });
});

// Rotas para Motorista
routes.post('/motoristas', MotoristaController.create);
routes.get('/motoristas', MotoristaController.read);
routes.get('/motoristas/:id', MotoristaController.readOne);
routes.put('/motoristas/:id', MotoristaController.update);
routes.delete('/motoristas/:id', MotoristaController.remove);

// Rotas para Pedido
routes.post('/pedidos', PedidoController.create);
routes.get('/pedidos', PedidoController.read);
routes.get('/pedidos/:id', PedidoController.readOne);
routes.put('/pedidos/:id', PedidoController.update);
routes.delete('/pedidos/:id', PedidoController.remove);

// Rota para somar os valores de dois pedidos de um motorista
routes.get('/motoristas/:id/soma-pedidos', async (req, res) => {
    try {
        const motoristaId = parseInt(req.params.id);

        // Busca os pedidos do motorista
        const pedidos = await prisma.pedido.findMany({
            where: { motoristaId },
            select: { valor: true }
        });

        if (pedidos.length < 2) {
            return res.status(400).json({ error: 'O motorista precisa ter pelo menos dois pedidos cadastrados.' });
        }

        // Soma os valores dos dois primeiros pedidos
        const soma = pedidos[0].valor + pedidos[1].valor;

        return res.json({ motoristaId, soma });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = routes;