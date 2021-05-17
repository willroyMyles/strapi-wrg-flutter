'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    findByEmail: async ctx => {
        const {email} = ctx.params;
        return email;
    },

    findOneByEmail: async ctx => {
        const {email} = ctx.params;
        return email;
    }
};
