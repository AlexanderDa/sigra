/**
 * GraduateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getAll: async function (req, res) {
        let list = await Graduate.find();
        if (!list) {
            res.status = 500;
            res.send({ fetched: false })
        } else {
            for (i = 0; i < list.length; i++) {
                list[i].fullName = `${list[i].lastName} ${list[i].firstName}`
            }
            res.send(list);
        }
    },

    createNewGraduate: async function (req, res) {
        let newGraduate = await Graduate.create(req.allParams()).fetch();
        if (!newGraduate) {
            res.status = 500;
            res.send({ saved: false })
        } else {
            audit(req.headers.userid, 'Guardar', JSON.stringify(newGraduate))
            res.send({ saved: true, newGraduate });
        }
    },
    updateOneGraduate: async function (req, res) {
        let updatedGraduate = await Graduate.updateOne(req.param('id'), req.allParams());
        if (!updatedGraduate) {
            res.status = 500;
            res.send({ updated: false })
        } else {
            audit(req.headers.userid, 'Editar', JSON.stringify(updatedGraduate))
            res.send({
                updated: true,
                updatedGraduate
            });
        }
    },
    deleteOneGraduate: async function (req, res) {
        let deletedGraduate = await Graduate.destroyOne(req.param('id'));
        if (!deletedGraduate) {
            res.status = 500;
            res.send({ deleted: false })
        } else {
            audit(req.headers.userid, 'Eliminar', JSON.stringify(deletedGraduate))
            res.send({
                deleted: true,
                deletedGraduate
            });
        }
    }
};

async function audit(user, action, description) {
    await Audit.create({
        tableName: 'Graduado',
        date: new Date(),
        action,
        description,
        user
    }).fetch();
}