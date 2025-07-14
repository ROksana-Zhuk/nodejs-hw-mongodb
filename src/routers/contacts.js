import { Router } from 'express';

import {
    getContactsController,
    getContactByIdController,
    createContactController,
    deleteContactController,
    upsertContactController,
    patchContactController
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contacts.js';
import { updateContactSchema } from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';



const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
//router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));
//router.post('/contacts', ctrlWrapper(createContactController));
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));
//router.put('/contacts/:contactId', ctrlWrapper(upsertContactController));
//router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));


router.get(
    '/:contactId',
    isValidId,
    ctrlWrapper(getContactByIdController),
  );

router.post(
    '/contacts/',
    validateBody(createContactSchema),
    ctrlWrapper(createContactController),
  );

router.put(
    '/contacts/:contactId',
    isValidId,
    validateBody(createContactSchema),
    ctrlWrapper(upsertContactController),
  );

router.patch(
    '/contacts/:contactId',
    isValidId,
    validateBody(updateContactSchema),
    ctrlWrapper(patchContactController),
  );

export default router;



