/**
 * JobApplicationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getAll: async function (req, res) {
        let list = await JobApplication.find().populate('graduate').populate('company').populate('area');
        if (!list) {
            res.status = 500;
            res.send({ fetched: false })
        } else {
            for (i = 0; i < list.length; i++) {
                list[i].graduate.fullName = `${list[i].graduate.lastName} ${list[i].graduate.firstName}`
                list[i].vinculationDate = formatDate(list[i].vinculationDate)
                list[i].unlinkDate = formatDate(list[i].unlinkDate)
            }
            res.send(list);
        }
    },

    createNewJobApplication: async function (req, res) {
        let newJobApplication = await JobApplication.create(req.allParams()).fetch();
        if (!newJobApplication) {
            res.status = 500;
            res.send({ saved: false })
        } else {
            audit(req.headers.userid, 'Guardar', JSON.stringify(newJobApplication))
            res.send({ saved: true, newJobApplication });
        }
    },
    updateOneJobApplication: async function (req, res) {
        let updatedJobApplication = await JobApplication.updateOne(req.param('id'), req.allParams());
        if (!updatedJobApplication) {
            res.status = 500;
            res.send({ updated: false })
        } else {
            audit(req.headers.userid, 'Editar', JSON.stringify(updatedJobApplication))
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
            audit(req.headers.userid, 'Eliminar', JSON.stringify(deletedJobApplication))
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


function formatNumber(number) {
    return (number >= 0 && number < 10) ? `0${number}` : `${number}`
}
function formatDate(date) {
    date = new Date(date)
    return `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(date.getDate())}`
}