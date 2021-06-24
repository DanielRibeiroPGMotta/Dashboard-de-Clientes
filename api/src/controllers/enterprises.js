const ClientsDB = require("../../clients.mock");

const getAllEnterprises = (req, res, next) => {
  const clients = ClientsDB;
  const clientsEnterprises = clients.flatMap((clients) => clients.enterprises);
  try {
    res.send(clientsEnterprises);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
/** Here is where I get clients data by name */
const getEnterprisesByName = (req, res, next) => {
  try {
    const enterprises = ClientsDB;
    const enterpriseByName = enterprises.filter(
      (enterprise) => req.params.name === enterprise.enterprises.name
    );
    const realties = enterpriseByName[1]
      .map((enterprises) => parseInt(enterprises.realties))
      .reduce((acc, cur) => acc + cur);

    res.send({
      _id: enterpriseByName[1]._id,
      name: enterpriseByName[1].name,
      image_src: enterpriseByName[1].image_src,
    //  realtiesQuantity: enterpriseByName[1].enterprises.length,
    //  enterpriseOwner: enterpriseByName[1].enterprises.client,
      realties: realties,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/** Here is the get where i return some totals values */
const getEnterprisesTotals = (req, res, next) => {
  try {
    const enterprise = ClientsDB;
    const clientsEnterprises = enterprise.flatMap(
      (enterprises) => enterprises.realties
    );
    const enterprisesRealties = clientsEnterprises
      .map((enterprise) => parseInt(enterprise.realties))
      .reduce((acc, cur) => acc + cur);
    res.send([
      {
        totalClients: enterprisesRealties.length,
        totalEnterprises: enterprisesRealties.enterprises,
        totalRealties: enterprisesRealties.realties,
      },
    ]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// the function route to get clients details by id
const getEnterprisesById = (req, res, next) => {
  try {
    const enterprises = ClientsDB;
    const enterpriseById = enterprises.filter(
      (enterprise) => req.params._id === enterprise._id
    );
    res.send([
      {
        _id: enterpriseById[1]._id,
        name: enterpriseById[1].name,
        image_src: enterpriseById[1].image_src,
      },
    ]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// route to get client totals per id
const getEnterprisesTotalsById = (req, res, next) => {
  try {
    const enterprises = ClientsDB;
    const clientById = enterprises.filter(
      (client) => req.params._id === client._id
    );
    const clientRealties = clientById[0].enterprises
      .map((enterprise) => parseInt(enterprise.realties))
      .reduce((acc, cur) => acc + cur);

    res.send([
      {
        totalEnterprises: clientById[1].enterprises.length,
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
  getAllEnterprises,
  getEnterprisesByName,
  getEnterprisesTotals,
  getEnterprisesById,
  getEnterprisesTotalsById,
  getClientEnterprises,
};

