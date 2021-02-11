import CourseModel from '../models/course.js';

export const create = (data) => CourseModel.create(data);

export const findAll = () => CourseModel.find().lean().populate(['lecturer']);

export const findSingle = (id) => CourseModel.findOne(id).lean().populate(['lecturer']);

export const update = (id, data) => CourseModel.findByIdAndUpdate(id, data, { new: true }).lean();

export const remove = (id) => CourseModel.findByIdAndRemove(id);