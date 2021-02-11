import * as CourseService from '../../../services/course.js';

export const create = async (req, res) => {
  const course = await CourseService.create(req.body);
  return res.status(201).json({ success: true, data: course });
};

export const findAll = async (_, res) => {
  const course = await CourseService.findAll();
  return res.status(200).json({ success: true, data: course });
};

export const findSingle = async (req, res) => {
  const course = await CourseService.findSingle({ _id: req.params.id });
  if (course) return res.status(200).json({ success: true, data: course });
  return res
    .status(400)
    .json({ success: false, message: 'Course not found!' });
};

export const update = async (req, res) => {
  const course = await CourseService.update(req.params.id, req.body);
  if (course) return res.status(200).json({ success: true, data: course });
  return res
    .status(400)
    .json({ success: false, message: 'Could not update course!' });
};

export const remove = async (req, res) => {
  const course = await CourseService.remove(req.params.id);
  if (course)
    return res
      .status(200)
      .json({ success: true, message: 'Course deleted successfully!' });
  return res
    .status(400)
    .json({ success: false, message: 'Could not delete course!' });
};
