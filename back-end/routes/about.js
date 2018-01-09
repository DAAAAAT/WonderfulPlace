
module.exports = {
    getAbout: (req, res) => {
        // const user = req.user.email;
        const year = (new Date()).getFullYear();
        res.status(200).json(year);
    },
    
}