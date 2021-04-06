import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const app = express()


const port = 3000


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: 'openapi: 3.0.0',
    },
  },
  apis: ['./*.js'], // files containing annotations as above
};

swaggerJsdoc(options)
  .then(openapiSpecification => {
    console.log(openapiSpecification)

/**
 * @openapi
 * /api-docs:
 *   get:
 *     description: Welcome to the jungle!
 *     responses:
 *       200:
 *         description: Returns a mysterious webpage.
 */
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
  });

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/', (req, res) => {
  res.status(200).json({ ola: 'k ase'});
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


