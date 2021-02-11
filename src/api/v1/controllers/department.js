import * as DepartmentService from '../../../services/department.js';

export const create = async (req, res) => {
  const department = await DepartmentService.create(req.body);
  return res.status(201).json({ success: true, data: department });
};

export const findAll = async (_, res) => {
  const department = await DepartmentService.findAll();
  return res.status(200).json({ success: true, data: department });
};

export const findSingle = async (req, res) => {
  const department = await DepartmentService.findSingle({ _id: req.params.id });
  if (department) return res.status(200).json({ success: true, data: department });
  return res.status(400).json({ success: false, message: 'Department not found!' });
};

export const update = async (req, res) => {
  const department = await DepartmentService.update(req.params.id, req.body);
  if (department)
    return res.status(200).json({ success: true, data: department });
  return res
    .status(400)
    .json({ success: false, message: 'Could not update department!' });
};

export const remove = async (req, res) => {
  const department = await DepartmentService.remove(req.params.id);
  if (department)
    return res
      .status(200)
      .json({ success: true, message: 'Department deleted successfully!' });
  return res
    .status(400)
    .json({ success: false, message: 'Could not delete department!' });
};
