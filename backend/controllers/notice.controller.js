import Notice from '../models/notice.model.js'
export const createNotice = async (req, res) => {
  try {
    const { Title, Description } = req.body;
    const { hostelName } = req.user;
    console.log(req.user)
    if (!hostelName)
      return res.status(400).json({ message: "All fields are required" });
    if (!Title)
      return res.status(400).json({ message: "All fields are required" });
    if (!Description)
      return res.status(400).json({ message: "All fields are required" });
    const newNotice = new Notice({
      hostelName,
      Title,
      Description,
      createdBy: req.user,
    });
    await newNotice.save();
    res.status(200).json({
      success: true,
      message: "Notice Created Successfully!",
      newNotice
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }

};
export const getAllNotice = async (req, res) => {
  try {
    const { hostelName } = req.user;
    const notices = await Notice.find({ hostelName })
      .sort({ date: -1, _id: -1 })
      .limit(10)
      .populate({
        path: 'createdBy',
        select: 'name email'
      });
    res.status(200).json({
      success: true,
      message: "Notice Fetched Successfully!",
      notices
    });

  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}
export const deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const item = await Notice.findByIdAndDelete(id);
    if (!item) {
      return next(new Errorhandler("Notice not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Deleted Successfully!",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });

  }
}