const logoutController = {};

logoutController.logout = async(req, res) => {
    //borrar la cookie de "authToken"
    res.clearCookie("authToken")

    return res.json({message: "sesion cerrada"});
}

export default logoutController;