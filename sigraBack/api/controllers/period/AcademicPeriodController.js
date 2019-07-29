/**
 * AcademicPeriodController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    createNewAcademicPeriod: async function (req, res) {
        let newAcademicPeriod = await AcademicPeriod.create(req.allParams()).fetch();
        if (!newAcademicPeriod) {
            res.status = 500;
            res.send({ saved: false })
        } else {
            audit(req.me.id, 'Guardar', JSON.stringify(newAcademicPeriod))
            res.send({ saved: true, newAcademicPeriod });
        }
    },
    updateOneAcademicPeriod: async function (req, res) {
        let updatedAcademicPeriod = await AcademicPeriod.updateOne(req.param('id'), req.allParams());
        if (!updatedAcademicPeriod) {
            res.status = 500;
            res.send({ updated: false })
        } else {
            audit(req.me.id, 'Editar', JSON.stringify(updatedAcademicPeriod))
            res.send({
                updated: true,
                updatedAcademicPeriod
            });
        }
    },
    deleteOneAcademicPeriod: async function (req, res) {
        let deletedAcademicPeriod = await AcademicPeriod.destroyOne(req.param('id'));
        if (!deletedAcademicPeriod) {
            res.status = 500;
            res.send({ deleted: false })
        } else {
            audit(req.me.id, 'Eliminar', JSON.stringify(deletedAcademicPeriod))
            res.send({
                deleted: true,
                deletedAcademicPeriod
            });
        }

    }
}

async function audit(user, action, description) {
    await Audit.create({
        tableName: 'Periodo Academico',
        date: new Date(),
        action,
        description,
        user
    }).fetch();
}