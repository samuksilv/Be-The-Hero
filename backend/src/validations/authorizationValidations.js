import { Joi, celebrate, Segments } from 'celebrate';

export const authorizationValidator = celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
});
