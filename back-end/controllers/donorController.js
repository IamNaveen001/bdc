const Donor = require('../models/donor');

exports.registerDonor = async (req, res) => {
  try {
    const { name, email, bloodType, phone, address, password } = req.body;

    const existingDonor = await Donor.findOne({ email });
    if (existingDonor) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newDonor = new Donor({ name, email, bloodType, phone, address, password });
    await newDonor.save();

    res.status(201).json({ message: 'Donor registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const donor = await Donor.findOne({ email });
    if (!donor) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    if (donor.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.json(donor);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addDonor = async (req, res) => {
  try {
    const { name, email, bloodType, phone, address, password } = req.body;
    const newDonor = new Donor({ name, email, bloodType, phone, address, password });
    await newDonor.save();
    res.status(201).json(newDonor);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateDonor = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDonor = await Donor.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedDonor);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteDonor = async (req, res) => {
  try {
    const { id } = req.params;
    await Donor.findByIdAndDelete(id);
    res.json({ message: 'Donor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};