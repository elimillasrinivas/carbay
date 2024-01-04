const Services = require('../models/Services')

exports.createService = async (req,res)=>{
    try{
        const serviceData = req.body
        const response = await Services.create(serviceData)
        res.status(200).json({
            success:true,
            data:response
        })
    }catch(err){
        res.status(500).json({
            success:false,
            error:err.message
        })
    }
}

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
