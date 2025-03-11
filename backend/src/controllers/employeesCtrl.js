const employeesController = {};
import employeesModel from "../models/employeesMdl.js"

// GET
employeesController.getEmployees = async (req, res) => {
    const employees = await employeesModel.find()
    res.json(employees)
}

//POST
employeesController.insertEmployees = async (req, res) => {
    const { name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified  } = req.body;
    const newEmployee = new employeesModel ({ name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified })
    await newEmployee.save()
    res.json({message: "Employee saved"}) 
}

//DELETE
employeesController.deleteEmployees = async (req, res) => {
    await employeesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Employee deleted"})
}

//PUT
employeesController.updateEmployees = async (req, res) => {
    const { name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified } = req.body;
    const updateClients = await employeesModel.findByIdAndUpdate(req.params.id, { name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified }, {new: true});
    res.json({message: "Employee update succesfully"})
}

export default employeesController;