const ClientsDB = require("../../clients.mock");

/** Here is where I get all clients  */
const getAllClients = (req, res, next) => {
  try {
    const clients = ClientsDB;
    const clientsAll = clients.flatMap((clients) => clients);
    res.send(clientsAll);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/** Here is where I get clients data by name */
const getClientsByName = (req, res, next) => {
  try {
    const clients = ClientsDB;
    const clientByName = clients.filter(
      (client) => req.params.name === client.name
    );
    const realties = clientByName[0].enterprises
      .map((enterprise) => parseInt(enterprise.realties))
      .reduce((acc, cur) => acc + cur);

    res.send({
      _id: clientByName[0]._id,
      name: clientByName[0].name,
      image_src: clientByName[0].image_src,
      enterpriseQuantity: clientByName[0].enterprises.length,
      realties: realties,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/** Here is the get where i return some totals values */
const getClientsTotals = (req, res, next) => {
  try {
    const clients = ClientsDB;
    const clientsEnterprises = clients.flatMap(
      (clients) => clients.enterprises
    );
    const clientsRealties = clientsEnterprises
      .map((enterprise) => parseInt(enterprise.realties))
      .reduce((acc, cur) => acc + cur);
    res.send([
      {
        totalClients: clients.length,
        totalEnterprises: clientsEnterprises.length,
        totalRealties: clientsRealties,
      },
    ]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// the function route to get clients details by id
const getClientsById = (req, res, next) => {
  try {
    const clients = ClientsDB;
    const clientById = clients.filter(
      (client) => req.params._id === client._id
    );
    res.send([
      {
        _id: clientById[0]._id,
        name: clientById[0].name,
        image_src: clientById[0].image_src,
      },
    ]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// route to get client totals per id
const getTotalsById = (req, res, next) => {
  try {
    const clients = ClientsDB;
    const clientById = clients.filter(
      (client) => req.params._id === client._id
    );
    const clientRealties = clientById[0].enterprises
      .map((enterprise) => parseInt(enterprise.realties))
      .reduce((acc, cur) => acc + cur);

    res.send([
      {
        totalEnterprises: clientById[0].enterprises.length,
        totalRealties: clientRealties,
      },
    ]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Route to get enterprises per client filter by id
const getClientEnterprises = (req, res, next) => {
  try {
    const clients = ClientsDB;
    const clientById = clients.filter(
      (client) => req.params._id === client._id
    );
    const clientsEnterprises = clientById[0].enterprises;
    res.send(clientsEnterprises);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllClients,
  getClientsByName,
  getClientsTotals,
  getClientsById,
  getTotalsById,
  getClientEnterprises,
};
