/**
 * CompanyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAll: async function (req, res) {
        let list = await Company.find();
        if (!list) {
            res.status = 500;
            res.send({ fetched: false })
        } else {
            res.send(list);
        }
    },

    createNewCompany: async function (req, res) {
        let newCompany = await Company.create(req.allParams()).fetch();
        if (!newCompany) {
            res.status = 500;
            res.send({ saved: false })
        } else {
            audit(req.headers.userid, 'Guardar', JSON.stringify(newCompany))
            res.send({ saved: true, newCompany });
        }
    },
    updateOneCompany: async function (req, res) {
        let updatedCompany = await Company.updateOne(req.param('id'), req.allParams());
        if (!updatedCompany) {
            res.status = 500;
            res.send({ updated: false })
        } else {
            audit(req.headers.userid, 'Editar', JSON.stringify(updatedCompany))
            res.send({
                updated: true,
                updatedCompany
            });
        }
    },
    deleteOneCompany: async function (req, res) {
        let deletedCompany = await Company.destroyOne(req.param('id'));
        if (!deletedCompany) {
            res.status = 500;
            res.send({ deleted: false })
        } else {
            audit(req.headers.userid, 'Eliminar', JSON.stringify(deletedCompany))
            res.send({
                deleted: true,
                deletedCompany
            });
        }
    }


};

async function audit(user, action, description) {
    await Audit.create({
        tableName: 'Empresa',
        date: new Date(),
        action,
        description,
        user
    }).fetch();
}