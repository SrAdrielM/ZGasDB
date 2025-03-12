const clientsController = {};
import clientsModel from "../models/clientsMdl.js"

// GET
clientsController.getClients = async (req, res) => {
    const clients = await clientsModel.find()
    res.json(clients)
}

//POST
clientsController.insertClients = async (req, res) => {
    const { name, lastName, birthday, email, password, telephone, dui, isVerified  } = req.body;
    const newClient = new clientsModel ({ name, lastName, birthday, email, password, telephone, dui, isVerified })
    await newClient.save()
    res.json({message: "Clients saved"}) 
}

//DELETE
clientsController.deleteClients = async (req, res) => {
    await clientsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Clients deleted"})
}

//PUT
clientsController.updateClients = async (req, res) => {
    const { name, lastName, birthday, email, password, telephone, dui, isVerified } = req.body;
    const updateClients = await clientsModel.findByIdAndUpdate(req.params.id, { name, lastName, birthday, email, password, telephone, dui, isVerified }, {new: true});
    res.json({message: "Client update succesfully"})
}

export default clientsController;