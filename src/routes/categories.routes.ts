import { Router } from 'express';

import { getCustomRepository } from 'typeorm';

// import CreateTransactionService from '../services/CreateTransactionService';
import CategoriesRepository from '../repositories/CategoriesRepository';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request, response) => {
  // TODO
  const categoriesRepository = getCustomRepository(CategoriesRepository);

  const categories = await categoriesRepository.find();

  return response.json(categories);
});

// categoriesRouter.post('/', async (request, response) => {
//   const { title, value, type, category } = request.body;

//   const createTransaction = new CreateCategorieService();

//   const categorie = await createCategorie.execute({
//     title,
//   });

//   return response.json(categorie);
// });

// categoriesRouter.delete('/:id', async (request, response) => {
//   const { id } = request.params;

//   const deleteCategory = new DeleteCategoryService();

//   await deleteCategory.execute(id);

//   return response.status(204).send();
// });

// categoriesRouter.post(
//   '/import',
//   upload.single('file'),
//   async (request, response) => {
//     const importCategories = new ImportCategoriesService();

//     const categories = await importCategories.execute(request.file.path);

//     return response.json(categories);
//   },
// );

export default categoriesRouter;
