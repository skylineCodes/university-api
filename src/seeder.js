import lecturers from './data/lecturers';
import Lecturer from './models/lecturer';
import connectDB from './db/connection';
import debug from './config/debug';

connectDB();

const importData = async () => {
  try {
    await Lecturer.deleteMany();
    await Lecturer.insertMany(lecturers);
    debug.log('Data imported');
  } catch (e) {
    debug.error(e.message);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Lecturer.deleteMany();
    debug.log('Data destroyed');
    process.exit();
  } catch (e) {
    debug.error(e.message);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
