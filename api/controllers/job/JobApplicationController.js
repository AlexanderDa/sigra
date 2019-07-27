/**
 * JobApplicationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    createNewJobApplication: async function (req, res) {
        let newJobApplication = await JobApplication.create(req.allParams()).fetch();
        if (!newJobApplication) {
            res.status = 500;
            res.send({ saved: false })
        } else {
            audit(req.me.id, 'Guardar', JSON.stringify(newJobApplication))
            res.send({ saved: true, newJobApplication });
        }
    },
    updateOneJobApplication: async function (req, res) {
        let updatedJobApplication = await JobApplication.updateOne(req.param('id'), req.allParams());
        if (!updatedJobApplication) {
            res.status = 500;
            res.send({ updated: false })
        } else {
            audit(req.me.id, 'Editar', JSON.stringify(updatedJobApplication))
            res.send({
                updated: true,
                updatedJobApplication
            });
        }
    },
    deleteOneJobApplication: async function (req, res) {
        let deletedJobApplication = await JobApplication.destroyOne(req.param('id'));
        if (!deletedJobApplication) {
            res.status = 500;
            res.send({ deleted: false })
        } else {
            audit(req.me.id, 'Eliminar', JSON.stringify(deletedJobApplication))
            res.send({
                deleted: true,
                deletedJobApplication
            });
        }
    }

};

async function audit(user, action, description) {
    await Audit.create({
        tableName: 'Aplicacion de Trabajo',
        date: new Date(),
        action,
        description,
        user
    }).fetch();
}