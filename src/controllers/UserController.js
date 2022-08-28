const { validationResult } = require('express-validator');

const controller = {
    register: (req, res) => {
        return res.render('userRegisterForm');
    },
    processRegister: (req, res) => {
        const resultValidations = validationResult(req);

        if (resultValidations.errors.length > 0) {
            return res.render('userRegisterForm', {
                errors: resultValidations.mapped(),
                oldData: req.body
            });
        }

        return res.send('Ok, as validações passaram');

    },

    login: (req, res) => {
        return res.render('userLoginForm');
    },

    loginProcess: (req, res) => {
        return res.render('userLoginForm');
    },

    profile: (req, res) => {
        return res.render('userProfile');
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = controller;