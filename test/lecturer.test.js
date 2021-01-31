// import request from 'superagent';
// import app from '../src/app.js';

// test('Should create a lecturer', async () => {
//     await request(app).post('/v1/lecturer').send({
//         "name": "Armstrong Tyler",
//         "position": "Senior Lecturer",
//         "about": "This is the best descripion",
//         "qualification": "Bsc"
//     }).expect(201);
// });

// import mongoose from 'mongoose';
// import LecturerModel from '../../src/models/lecturer.js';

// const lecturerData = {
//     name: "Armstrong Tyler",
//     position: "Senior Lecturer",
//     about: "This is the best descripion",
//     qualification: "Bsc"
// };

// describe('Lecturer Model Test', () => {
//   // It's just so easy to connect to the MongoDB Memory Server
//   // By using mongoose.connect
//   beforeAll(async () => {
//     await mongoose.connect(
//       global.__MONGO_URI__,
//       { useNewUrlParser: true, useCreateIndex: true },
//       (err) => {
//         if (err) {
//           console.error(err);
//           process.exit(1);
//         }
//       }
//     );
//   });

//   it('create & save lecturer successfully', async () => {
//     const validLecturer = new LecturerModel(lecturerData);
//     const savedLecturer = await validLecturer.save();
//     // Object Id should be defined when successfully saved to MongoDB.
//     expect(savedLecturer._id).toBeDefined();
//     expect(savedLecturer.name).toBe(lecturerData.name);
//     expect(savedLecturer.position).toBe(lecturerData.position);
//     expect(savedLecturer.about).toBe(lecturerData.about);
//     expect(savedLecturer.qualification).toBe(lecturerData.qualification);
//   });

  // Test Schema is working!!!
  // You shouldn't be able to add in any field that isn't defined in the schema
//   it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
//     const userWithInvalidField = new UserModel({
//       name: 'TekLoon',
//       gender: 'Male',
//       nickname: 'Handsome TekLoon',
//     });
//     const savedUserWithInvalidField = await userWithInvalidField.save();
//     expect(savedUserWithInvalidField._id).toBeDefined();
//     expect(savedUserWithInvalidField.nickkname).toBeUndefined();
//   });

  // Test Validation is working!!!
  // It should us told us the errors in on gender field.
//   it('create user without required field should failed', async () => {
//     const userWithoutRequiredField = new UserModel({ name: 'TekLoon' });
//     let err;
//     try {
//       const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
//       error = savedUserWithoutRequiredField;
//     } catch (error) {
//       err = error;
//     }
//     expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
//     expect(err.errors.gender).toBeDefined();
//   });
// });

//inside tests/test_helper.js 
import mongoose from 'mongoose';
import assert  from 'assert';
import LecturerModel from '../src/models/lecturer.js';

const lecturerData = {
    name: "Armstrong Tyler",
    position: "Senior Lecturer",
    about: "This is the best descripion",
    qualification: "Bsc"
};

//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/universities_api_test');

mongoose.connection
  .once('open', () =>
    console.log("Connected!")
  )
  .on('error', (error) => {
    console.warn('Error : ', error);
  });//Called hooks which runs before something.
    
beforeEach((done) => {
    mongoose.connection.collections.lecturers.drop(() => {
      //this function runs after the drop is completed
      done(); //go ahead everything is done now.
    }); 
});

describe('Creating documents', () => {
  it('creates a lecturer', (done) => {
    //assertion is not included in mocha so
    //require assert which was installed along with mocha
    const lecturer = new LecturerModel(lecturerData);
    lecturer
      .save() //takes some time and returns a promise
      .then(() => {
        assert(!lecturer.isNew); //if poke is saved to db it is not new
        done();
      });
  });
});
