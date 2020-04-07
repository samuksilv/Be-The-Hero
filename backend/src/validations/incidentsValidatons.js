import { Joi, celebrate, Segments } from 'celebrate';

export const incidentDeleteValidator = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
});

export const incidentListPaginateValidator = celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().optional(),
    }),
});

export const incidentCreateValidator = celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required() , 
        description: Joi.string().required() , 
        value: Joi.number().required() , 
    })
});