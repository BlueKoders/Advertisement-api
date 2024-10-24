import { AdvertModel } from "../models/advert.js";
import { addAdvertValidator, updateAdvertValidator } from "../validators/advert.js";

export const addAdvert = async (req, res, next) => {
    try {
        // validate vendor inputs
        const { error, value } = addAdvertValidator.validate({
            ...req.body,
            image: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error)
        }
        //  write advert to database
        await AdvertModel.create({
            ...value,
            vendor: req.auth.id
        });
        // respond to request
        res.status(201).json('Advert was added!');
    } catch (error) {
        next(error);

    }
}

export const getAdverts = async (req, res, next) => {
    try {
        const { filter = "{}", sort = "{}", limit = 10, skip = 0 } = req.query;
        //  fetch adverts from database
        const adverts = await AdvertModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .limit(limit)
            .skip(skip);
        // return response
        res.status(200).json(adverts)

    } catch (error) {
        next(error);

    }

}

export const countAdverts = async (req, res, next) => {
    try {
        const { } = req.query;
        // count adverts in database
        const count = await AdvertModel.countDocuments(JSON.parse(filter));
        // respond to request
        res.json({ count });
    } catch (error) {
        next(error);

    }
}


export const getAdvert = async (req, res, next) => {
    try {
        // get advert by id from database
        const {id} =req.params;
        //find advert from database
        const advert = await AdvertModel.findById(id);
        /// if not advert message
        if (!advert) {
            return res.status(404).json({ message: 'Advert not found!' });
        }
        // respond to request
        res.json(advert);
    } catch (error) {
      next(error);
      
    }
  }


export const updateAdvert = async (req, res, next) => {
    try {
        // validate vendor inputs
        const { error, value } = updateAdvertValidator.validate({
            ...req.body,
            image: req.file?.filename
        });
        if (error) {
            return res.status(422).json(error)
        }
        const advert = await AdvertModel.findOneAndUpdate(
            {
                _id: req.params.id,
                vendor: req.auth.id

            },
            req.body,
            {new:true}
        );
        if (!advert){
            return res.status(404).json('Advert not found!');
        }
        //respond to the update request
        res.status(201).json('Advert updated!');
    } catch (error) {
        next(error)

    }
}


export const deleteAdvert = async (req, res, next) => {
    try {
     // delete an advert  and all advert from database
     const deleteAdvert = await  AdvertModel.deleteOne(req.body.id)
     if (!deleteAdvert){
        return res.status(404).json('Advert already deleted!')
     }
      res.json('Advert deleted!');
    } catch (error) {
     next(error);
     
    }
 }