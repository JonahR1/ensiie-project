
module.exports = class {
    constructor(db) {
        this.db = db;
    }

    create(Candidat){
        if (!Candidat) {
            throw 'Candidat object is undefined';
        }

        if (!Candidat.idOffre || !Candidat.idParticulier || !Candidat.date) {
            throw 'Candidat object is missing information';
        }

        if (Object.prototype.toString.call(Candidat.date) !== "[object Date]") {
            throw 'Invalid date in candidat object';
        }

        // this.db
        //     .get('candidats')
        //     .push(Candidat.toJson())
        //     .write()
    }

    // getAllByOffre(idOffre) {
    //     if(Object.prototype.toString.call(start_date) !== "[object Date]" || Object.prototype.toString.call(end_date) !== "[object Date]" || start_date =="Invalid Date" || end_date == "Invalid Date") {
    //         throw 'Invalid date in argument';
    //     }
    //     let candidats = this.db
    //                         .get('candidats')
    //                         .value();

    //     if (candidats != null) {
    //         let candidatsFiltered = [];
    //         let len = candidats.length

    //         for(let i = 0 ; i < len ; ++i) {
    //             if(candidats[i].idOffre == idOffre)  {
    //                 candidatsFiltered.push(candidats[i]);
    //             }
    //         }

    //         return candidatsFiltered;
    //     }

    //     return candidats;
    // }
    // getAllByParticulier(idParticulier){
    //     if(Object.prototype.toString.call(start_date) !== "[object Date]" || Object.prototype.toString.call(end_date) !== "[object Date]" || start_date =="Invalid Date" || end_date == "Invalid Date") {
    //         throw 'Invalid date in argument';
    //     }
    //     let candidats = this.db
    //                         .get('candidats')
    //                         .value();

    //     if (candidats != null) {
    //         let candidatsFiltered = [];
    //         let len = candidats.length

    //         for(let i = 0 ; i < len ; ++i) {
    //             if(candidats[i].idParticulier == idParticulier)  {
    //                 candidatsFiltered.push(candidats[i]);
    //             }
    //         }

    //         return candidatsFiltered;
    //     }

    //     return candidats;
    

    // }
};