/**
 * AreaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    createNewArea: async function (req, res) {
        let newArea = await Area.create(req.allParams()).fetch();
        if (!newArea) {
            res.status = 500;
            res.send({ saved: false })
        } else {
            audit(req.me.id, 'Guardar', JSON.stringify(newArea))
            res.send({ saved: true, newArea });

        }
    },
    updateOneArea: async function (req, res) {
        let updatedArea = await Area.updateOne(req.param('id'), req.allParams());
        if (!updatedArea) {
            res.status = 500;
            res.send({ updated: false })
        } else {
            audit(req.me.id, 'Editar', JSON.stringify(updatedArea))
            res.send({
                updated: true,
                updatedArea
            });
        }
    },
    deleteOneArea: async function (req, res) {
        let deletedArea = await Area.destroyOne(req.param('id'));
        if (!deletedArea) {
            res.status = 500;
            res.send({ deleted: false })
        } else {
            audit(req.me.id, 'Eliminar', JSON.stringify(deletedArea))
            res.send({
                deleted: true,
                deletedArea
            });
        }
    }

};

async function audit(user, action, description) {
    await Audit.create({
        tableName: 'Area',
        date: new Date(),
        action,
        description,
        user
    }).fetch();
}