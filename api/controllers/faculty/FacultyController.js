/**
 * FacultyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    createNewFaculty: async function (req, res) {
        let newFaculty = await Faculty.create(req.allParams()).fetch();
        if (!newFaculty) {
            res.status = 500;
            res.send({ saved: false })
        } else {
            audit(req.me.id, 'Guardar', JSON.stringify(newFaculty))
            res.send({ saved: true, newFaculty });
        }
    },
    updateOneFaculty: async function (req, res) {
        let updatedFaculty = await Faculty.updateOne(req.param('id'), req.allParams());
        if (!updatedFaculty) {
            res.status = 500;
            res.send({ updated: false })
        } else {
            audit(req.me.id, 'Editar', JSON.stringify(updatedFaculty))
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
            audit(req.me.id, 'Eliminar', JSON.stringify(deletedFaculty))
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