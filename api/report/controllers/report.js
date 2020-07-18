'use strict';
const _ = require("lodash");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async findSmall(ctx) {
        const query = _.omit(ctx.query, ["_populate"]);
        const reportServices = strapi.services.report
        const entities = await reportServices.find({ ...query })

        // if (ctx.query._q) {
        //   entities = await strapi.services.report.search(ctx.query);
        // } else {
        //   entities = await strapi.services.report.find(ctx.query);
        // }

        // entities = await strapi.services.report.search(ctx.query);

        // return entities
     entities.map(entity => {
            entity.type = entity.report_type.name;
            delete entity.report_type
            delete entity.report_status
            delete entity.medias
            delete entity.user
            delete entity.__v
            delete entity._id
            entity.room = entity.room.name
            // delete entity.room
          });

          console.log(entities)
      
          return entities
        
    }
};
