'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const _ = require("lodash");
const moment = require("moment");
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
     * get allOrg
     */
    find: async ctx => {
        const orgServices = strapi.services.org;
        const { _populate } = ctx.query;
        
        const query = _.omit(ctx.query, ["_populate"]);
    
        const entities = await orgServices.find({ ...query }, _populate);

        return entities.map(entity => {
            const org = sanitizeEntity(entity, {
              model: strapi.models.org,
            });
            // if (org.chef && org.chef.email) {
            //  delete org.avatar;
            // }
            return org;
          });
      
      },

      findOne: async ctx => {

        const orgServices = strapi.services.org;
        const { _populate } = ctx.query;
        const { id } = ctx.params;
    
        let org = await orgServices.findOne(this.params);
        // org.avatar = null;
        
        return org;
      },

      findOneNonAvatar: async ctx => {

        const orgServices = strapi.services.org
        const { _populate } = ctx.query
        const { id } = ctx.params
        let org = await orgServices.findOne(this.params)

        // org.avatar = null
        
        return org;
      },
    
};
