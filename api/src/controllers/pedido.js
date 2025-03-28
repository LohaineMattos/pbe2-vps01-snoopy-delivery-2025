const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const pedido = await prisma.pedido.create({
            data: req.body
        });
        return res.status(201).json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const read = async (req, res) => {
    try {
        const pedidos = await prisma.pedido.findMany({
            include: {
                motorista: true 
            }
        });
        return res.json(pedidos);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const readOne = async (req, res) => {
    try {
        const pedido = await prisma.pedido.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                motorista: true
            }
        });
        
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        
        return res.json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};





const update = async (req, res) => {
    try {
        const pedido = await prisma.pedido.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(pedido);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        await prisma.pedido.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = { create, read, readOne, update, remove };