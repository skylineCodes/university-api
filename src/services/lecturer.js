import LecturerModel from '../models/lecturer';

export const create = (data) => LecturerModel.create(data);

export const findAll = () => LecturerModel.find().lean();

export const update = (id, data) => LecturerModel.findByIdAndUpdate(id, data, { new: true }).lean();

export const remove = (id) => LecturerModel.findByIdAndRemove(id);
