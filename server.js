// Require para usar express
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'ESTOY VIVOOO!'});
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto: ${port}`);
});

// un nuevo endpoint GET que regrese todos los explorers.
app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });

// un nuevo endpoint GET que te regrese el explorer al enviar un ID por query params.
app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
  });

// un nuevo endpoint POST con el que vas a poder crear nuevos explorers.
app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
  });

// un nuevo endpoint PUT, en el cuál recibirás el ID del explorer a actualizar, y en el cuerpo del request los campos a actualizar, para este caso solo haremos el update del campo mission.
app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

// un nuevo endpoint DELETE para eliminar un explorer dado un ID por query params.
app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});