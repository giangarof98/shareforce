const Joi = require('joi');

module.exports.postSchema = Joi.object({
    post: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        //image: Joi.string().required(),
    }).required(),
    deleteImages: Joi.array()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        body: Joi.string().required()
    }).required()
});