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
        await AdvertModel.create(value);
        // respond to request
        res.status(201).json('Advert was added');
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
            .sort(json.parse(sort))
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
        const {id} =req.params;
        // get advert by id from database
        const todo = await AdvertModel.findById(id);
        // respond to request
        res.json(advert);
    } catch (error) {
      next(error);
      
    }
  }


export const updateAdvert = (req, res, next) => {
    try {
        const { } = updateAdvertValidator
        res.json('Advert updated');
    } catch (error) {
        next(error)

    }
}


export const deleteAdvert = async (req, res, next) => {
    try {
     // delete an advert  and all advert from database
     const deleteAllAdverts = await  AdvertModel.deleteOne(req.body.id)
      res.json('Advert deleted');
    } catch (error) {
     next(error);
     
    }
 }