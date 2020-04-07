import { Joi, celebrate, Segments } from 'celebrate';

export const sessionLoginValidator = celebrate({
    [Segments.BODY]: Joi.object().keys({
       id: Joi.string().required(),
    })
});