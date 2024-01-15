const ModelImg = require('../models/ModelImg')
const Services = require('../models/Services')

exports.createService = async (req, res) => {
    try {
        const serviceData = req.body;
        const response = await Services.create(serviceData);

        let car = await ModelImg.findOne({ carCompany: serviceData.carCompany });

        if (car) {
            car.modelImages.push({ model: serviceData.carModel, img: serviceData.img });

            await car.save();
        } else {
            car = await ModelImg.create({
                carCompany: serviceData.carCompany,
                modelImages: [{ model: serviceData.carModel, img: serviceData.img }],
            });
        }

        res.status(200).json({
            success: true,
            data: response,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};

exports.getServiceByCarModel = async (req, res) => {
    try {
        const { carModel } = req.params;

        const service = await Services.findOne({ carModel });

        if (!service) {
            return res.status(404).json({
                success: false,
                error: 'Service not found for the specified car model.',
            });
        }

        res.status(200).json({
            success: true,
            data: service,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};

exports.getModelImagesByCarCompany = async (req, res) => {
    try {
        const { carCompany } = req.params;

        const modelImg = await ModelImg.findOne({ carCompany });

        if (!modelImg) {
            return res.status(404).json({
                success: false,
                error: `Model images not found for the specified car company: ${carCompany}.`,
            });
        }

        res.status(200).json({
            success: true,
            data: modelImg.modelImages,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};
