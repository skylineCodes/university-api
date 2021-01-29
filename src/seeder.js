import dotenv from 'dotenv';
import lecturers from './data/lecturers.js';
import Lecturer from './models/lecturer.js';
import connectDB from './db/connection.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Lecturer.deleteMany();

        await Lecturer.insertMany(lecturers);

        console.log('Data imported');
        process.exit();
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
};

const destroyData = async () => {
  try {
    await Lecturer.deleteMany();

    console.log('Data destroyed');
    process.exit();
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}