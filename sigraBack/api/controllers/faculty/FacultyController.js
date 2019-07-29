/**
 * FacultyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getAll: async function (req, res) {
        let list = await Faculty.find();
        if (!list) {
            res.status = 500;
            res.send({ fetched: false })
        } else {
            res.send(list);
        }
    },

    createNewFaculty: async function (req, res) {
        let newFaculty = await Faculty.create(req.allParams()).fetch();
        if (!newFaculty) {
            res.status = 500;
            res.send({ saved: false })
        } else {
            audit(req.headers.userid, 'Guardar', JSON.stringify(newFaculty))
            res.send({ saved: true, newFaculty });
        }
    },
    updateOneFaculty: async function (req, res) {
        let updatedFaculty = await Faculty.updateOne(req.param('id'), req.allParams());
        if (!updatedFaculty) {
            res.status = 500;
            res.send({ updated: false })
        } else {
            audit(req.headers.userid, 'Editar', JSON.stringify(updatedFaculty))
            res.send({
                updated: true,
                updatedFaculty
            });
        }
    },
    deleteOneFaculty: async function (req, res) {
        let deletedFaculty = await Faculty.destroyOne(req.param('id'));
        if (!deletedFaculty) {
            res.status = 500;
            res.send({ deleted: false })
        } else {
            audit(req.headers.userid, 'Eliminar', JSON.stringify(deletedFaculty))
            res.send({
                deleted: true,
                deletedFaculty
            });
        }
    }
};


async function audit(user, action, description) {
    await Audit.create({
        tableName: 'Facultad',
        date: new Date(),
        action,
        description,
        user
    }).fetch();
}