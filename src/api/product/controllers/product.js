'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
    async findOne(ctx) {
        const slug = ctx.params;

        const entity = await strapi.db.query("api::product.product").findOne({
            where: {
                slug: slug.id
            },
            populate: ['image'],
        })

        return entity;
    }
}));
