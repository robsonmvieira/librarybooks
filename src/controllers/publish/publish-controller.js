const Publish = require('../../Domain/Entitties/Publish');

module.exports = {
  create: async (req, res, next) => {
    const publishBody = req.body;
    const newPublish = new Publish(publishBody);
    const result = await newPublish.save();
    res.status(200).json(result);
  },
  index: async (req, res, next) => {
    const result = await publish.find({});
    res.status(200).json(result);
  },
  one: async (req, res, next) => {
    const { publishId } = req.params;
    const result = Publish.findById(publishId);
    res.status(200).json(result);
  },
  update: async (req, res, next) => {
    const { publishId } = req.params;
    const updatePublish = req.body;
    const result = await Publish.findByIdAndUpdate(publishId, updatePublish);
    res.status(200).json({ message: true });
  },
  replace: async (req, res, next) => {
    const { publishId } = req.params;
    const updatePublish = req.body;
    const result = await Publish.findByIdAndUpdate(publishId, updatePublish);
    res.status(200).json({ message: true });
  },
  remove: async (req, res, next) => {
    const { publishId } = req.params;
    const result = await Publish.findByIdAndRemove(publishId);
    res.status(200).json({ message: true });
  },
};
