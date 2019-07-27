/**
 * CareerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    createNewCareer: async function (req, res) {
        let newCareer = await Career.create(req.allParams()).fetch();
        if (!newCareer) {
            res.status = 500;
            res.send({ saved: false })
        } else {
            audit(req.me.id, 'Guardar', JSON.stringify(newCarrer))
            res.send({ saved: true, newCareer });
        }
    },
    updateOneCareer: async function (req, res) {
        let updatedCareer = await Career.updateOne(req.param('id'), req.allParams());
        if (!updatedCareer) {
            res.status = 500;
            res.send({ updated: false })
        } else {
            audit(req.me.id, 'Editar', JSON.stringify(updatedCarrer))
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
            audit(req.me.id, 'Eliminar', JSON.stringify(deletedCarrer))
            res.send({
                deleted: true,
                deletedCareer
            });
        }
    }

};

async function audit(user, action, description) {
    await Audit.create({
        tableName: 'Carrera',
        date: new Date(),
        action,
        description,
        user
    }).fetch();
}