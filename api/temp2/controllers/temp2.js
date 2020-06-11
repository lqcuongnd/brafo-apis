'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    /**
     * 
     * @param {*} ctx 
     */
    async find(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.temp2.search(ctx.query);
        } else {
            entities = await strapi.services.temp2.find(ctx.query);
        }

        return entities.map(entity => {
            const temp2 = sanitizeEntity(entity, {
                model: strapi.models.temp2,
            });
            delete temp2.temp_1;
            return temp2;
        });
    },


};
