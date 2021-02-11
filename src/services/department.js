import DepartmentModel from '../models/department.js';

export const create = (data) => DepartmentModel.create(data);

export const findAll = () =>
  DepartmentModel.find()
    .lean()
    .populate(['lecturers.lecturer', 'courses.course'])
    .select('-lecturers._id');

export const findSingle = (id) =>
  DepartmentModel.findOne(id)
    .lean()
    .populate(['lecturers.lecturer', 'courses.course'])
    .select('-lecturers._id -courses._id');

export const update = (id, data) =>
  DepartmentModel.findByIdAndUpdate(id, data, { new: true })
    .lean()
    .populate(['lecturers.lecturer', 'courses.course'])
    .select('-lecturers._id -courses._id');;

export const remove = (id) => DepartmentModel.findByIdAndRemove(id);
