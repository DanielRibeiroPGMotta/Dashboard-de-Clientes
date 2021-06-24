const {
  getAllClients,
  getClientsByName,
  getClientsTotals,
  getClientsById,
  getTotalsById,
  getClientEnterprises,
} = require("../controllers/clients.js");


const { getAllEnterprises,
  getEnterprisesByName,
  getEnterprisesById,
  getEnterprisesTotals,
  getEnterprisesTotalsById,
  
 } = require("../controllers/enterprises.js");

module.exports.load = (app) => {
  /** Get all clients */
  app.get("/", getAllClients);

  /** Get clients by name */
  app.get("/name/:name", getClientsByName);
  /** Get client totals */
  app.get("/:_id/totals", getTotalsById);

  /** Get all enterprises */
  app.get("/enterprises", getAllEnterprises);

  /** Get all enterprises by client */
  app.get("/:_id/enterprises", getClientEnterprises);

  /** Get general totals */
  app.get("/totals", getClientsTotals);

  /** Get a client by _id */
  app.get("/:_id", getClientsById);

  /** Get enterprise's Id */
  app.get("/enterprise/:_id", getEnterprisesById);

  /** Get all enterprises totals */
  app.get("/:enterprise/totals", getEnterprisesTotals);

    /** Get all enterprises'name' */
    app.get("/enterprise/name/:name", getEnterprisesByName);

  /** Get  enterprises totals by Id */
  app.get("/enterprise/:_id/totals", getEnterprisesTotalsById);

  /** Get all enterprises by client */
 //app.get("/enterprise/:name/name", getEnterprisesByName);
};
