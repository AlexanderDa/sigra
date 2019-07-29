/**
 * CareerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getAll: async function (req, res) {
        let list = await Career.find();
        if (!list) {
            res.status = 500;
            res.send({ fetched: false })
        } else {
            res.send(list);
        }
    },

    createNewCareer: async function (req, res) {
        let newCareer = await Career.create(req.allParams()).fetch();
        if (!newCareer) {
            res.status = 500;
            res.send({ saved: false })
        } else {
            audit(req.headers.userid, 'Guardar', JSON.stringify(newCareer))
            res.send({ saved: true, newCareer });
        }
    },
    updateOneCareer: async function (req, res) {
        let updatedCareer = await Career.updateOne(req.param('id'), req.allParams());
        if (!updatedCareer) {
            res.status = 500;
            res.send({ updated: false })
        } else {
            audit(req.headers.userid, 'Editar', JSON.stringify(updatedCareer))
            res.send({
                updated: true,
                updatedCareer
            });
        }
    },
    deleteOneCareer: async function (req, res) {
        let deletedCareer = await Career.destroyOne(req.param('id'));
        if (!deletedCareer) {
            res.status = 500;
            res.send({ deleted: false })
        } else {
            audit(req.headers.userid, 'Eliminar', JSON.stringify(deletedCareer))
            res.send({
                deleted: true,
                deletedCareer
            });
        }
    }

};

async function audit(user, action, description) {
    await Audit.create({
        tableName: 'Careera',
        date: new Date(),
        action,
        description,
        user
    }).fetch();
}