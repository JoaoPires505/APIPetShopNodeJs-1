module.exports = {
    admin: function(req, res, next) {

        if(req.authenticated()){
            return next();
        }

        req.flash("você deve estar autenticado para acessar")
        res.redirect("/")
    }
}