/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /all':'MovieController.getAll',
  'GET /one/:id':'MovieController.getById',
  'POST /new':'MovieController.create',
  'DELETE /delete/:id':'MovieController.delete',
  'UPDATE /update/:id':'MovieController.update',


};
