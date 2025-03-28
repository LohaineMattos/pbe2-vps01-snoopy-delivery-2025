use petshop;

insert into Motorista (id, email, nome, telefones, pedidos) values
(1, 'johndoe@example.com', 'John Doe', '1234-5678', NULL),
(2, 'maria.silva@example.com', 'Maria Silva', '9876-5432', NULL),
(3, 'pedro.oliveira@example.com', 'Pedro Oliveira', '3456-7890', NULL),
(4, 'lucas.martins@example.com', 'Lucas Martins', '5678-1234', NULL),
(6, 'ana.pereira@example.com', 'Ana Pereira', '', NULL);

insert into Pedido (id, data, valor, produto, endereco, numero, complemento, cep, motoristaId) values
(1, '2025-03-28T16:17:00.406Z', 150.75, 'Produto X', 'Rua das Flores, 123', '45', 'Apartamento 101', '12345-678', 1),
(2, '2025-03-28T16:19:19.758Z', 80.5, 'Produto A', 'Avenida Brasil, 234', '78', 'Loja 3', '98765-432', 2),
(3, '2025-03-28T16:19:24.149Z', 250, 'Produto B', 'Rua das Palmeiras, 456', '102', 'Andar 2', '54321-987', 3),
(4, '2025-03-28T16:19:34.936Z', 120.3, 'Produto C', 'Rua Central, 789', '501', 'Sala 10', '56789-654', 4),
(5, '2025-03-28T16:29:39.059Z', 150.75, 'Produto X', 'Rua das Flores, 123', '45', 'Apartamento 101', '12345-678', 6),
(6, '2025-03-28T16:29:56.420Z', 95.5, 'Produto Y', 'Avenida das Palmeiras, 876', '212', 'Bloco B', '87654-321', 6);

select * from Motorista;
select * from Pedido;