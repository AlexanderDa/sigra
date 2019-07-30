/**
 * GraduateCareerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAll: async function (req, res) {
        let list = await GraduateCareer.find().populate('career').populate('faculty').populate('academicPeriod').populate('graduated');
        if (!list) {
            res.status = 500;
            res.send({ fetched: false })
        } else {
            for (i = 0; i < list.length; i++) {
                list[i].graduated.fullName = `${list[i].graduated.lastName} ${list[i].graduated.firstName}`
                list[i].academicPeriod.startDate = formatDate(list[i].academicPeriod.startDate)
                list[i].academicPeriod.finishDate = formatDate(list[i].academicPeriod.finishDate)
                list[i].careerStartDate = formatDate(list[i].careerStartDate)
                list[i].careerFinishDate = formatDate(list[i].careerFinishDate)
                list[i].graduationDate = formatDate(list[i].graduationDate)
                
            }
            res.send(list);
        }
    },

    createNewGraduateCareer: async function (req, res) {
        let newGraduateCareer = await GraduateCareer.create(req.allParams()).fetch();
        if (!newGraduateCareer) {
            res.status = 500;
            res.send({ saved: false })
        } else {
            audit(req.headers.userid, 'Guardar', JSON.stringify(newGraduateCareer))
            res.send({ saved: true, newGraduateCareer });
        }
    },
    updateOneGraduateCareer: async function (req, res) {
        let updatedGraduateCareer = await GraduateCareer.updateOne(req.param('id'), req.allParams());
        if (!updatedGraduateCareer) {
            res.status = 500;
            res.send({ updated: false })
        } else {
            audit(req.headers.userid, 'Editar', JSON.stringify(updatedGraduateCareer))
            res.send({
                updated: true,
                updatedGraduateCareer
            });
        }
    },
    deleteOneGraduateCareer: async function (req, res) {
        let deletedGraduateCareer = await GraduateCareer.destroyOne(req.param('id'));
        if (!deletedGraduateCareer) {
            res.status = 500;
            res.send({ deleted: false })
        } else {
            audit(req.headers.userid, 'Eliminar', JSON.stringify(deletedGraduateCareer))
            res.send({
                deleted: true,
                deletedGraduateCareer
            });
        }
    }

};

async function audit(user, action, description) {
    await Audit.create({
        tableName: 'Graduado Carrera',
        date: new Date(),
        action,
        description,
        user
    }).fetch();
}

function formatNumber(number) {
    return (number >= 0 && number < 10) ? `0${number}` : `${number}`
}
function formatDate(date) {
    date = new Date(date)
    return `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(date.getDate())}`
}