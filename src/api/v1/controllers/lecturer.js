import * as LecturerService from '../../../services/lecturer';

export const create = async (req, res) => {
  const lecturer = await LecturerService.create(req.body);
  return res.status(200).json({ success: true, data: lecturer });
};

export const findAll = async (_, res) => {
  const lecturers = await LecturerService.findAll();
  return res.status(200).json({ success: true, data: lecturers });
};

export const update = async (req, res) => {
  const lecturer = await LecturerService.update(req.params.id, req.body);
  if (lecturer) return res.status(200).json({ success: true, data: lecturer });
  return res.status(400).json({ success: false, message: 'Could not update lecturer!' });
};

export const remove = async (req, res) => {
  const lecturer = await LecturerService.remove(req.params.id);
  if (lecturer) return res.status(200).json({ success: true });
  return res.status(400).json({ success: false, message: 'Could not delete lecturer!' });
};
