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
mongoose.connect('mongodb://localhost:27017/universities_api_test', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useFindAndModify: false
});

mongoose.connection
  .once('open', () =>
    console.log("Connected!")
  )
  .on('error', (error) => {
    console.warn('Error : ', error);
  });//Called hooks which runs before something.

describe('Lecturer documents', () => {
  after((done) => {
    mongoose.connection.collections.lecturers.drop(() => {
      done();
    });
  });

  // Post Method
  it('creates a lecturer with status code 201', (done) => {
    const lecturer = new LecturerModel(lecturerData);
    lecturer
      .save()
      .then(() => {
        assert(!lecturer.isNew);
        done();
      });
  });

  // Get Method
  it('finds lecturer with the name of Armstrong Tyler', (done) => {
    LecturerModel.findOne({ name: 'Armstrong Tyler' }).then((lecturer) => {
      assert(lecturer.name === 'Armstrong Tyler');
      assert(lecturer.position === 'Senior Lecturer');
      assert(lecturer.about === 'This is the best descripion');
      assert(lecturer.qualification === 'Bsc');
      done();
    });
  });

  // Delete Method
  it ('removes a lecturer using its instance', (done) => {
    LecturerModel.deleteOne().then(() =>
      LecturerModel.findOne({ name: 'Armstrong Tyler' })
      .then((lecturer) => {
        assert(lecturer === null);
        done();
      })
    );
  });

  it('removes multiple lecturers', (done) => {
    LecturerModel.deleteMany().then(() =>
      LecturerModel.findOne({ name: 'Armstrong Tyler' })
        .then((lecturer) => {
        assert(lecturer === null);
        done();
      })
    );
  });

  it('removes a lecturer', (done) => {
    LecturerModel.findOneAndDelete({ name: 'Armstrong Tyler' }).then(() =>
      LecturerModel.findOne({ name: 'Armstrong Tyler' }).then((lecturer) => {
        assert(lecturer === null);
        done();
      })
    );
  });

  it('removes a lecturer using id', (done) => {
    const lecturer = new LecturerModel({ name: 'Armstrong Tyler' });
    lecturer.save().then(() => done());
    LecturerModel.findByIdAndDelete(lecturer._id).then(() =>
      LecturerModel.findOne({ name: 'Armstrong Tyler' }).then((lecturer) => {
        assert(lecturer === null);
        done();
      })
    );
  });

  // Update Method
  function assertHelper(statement, done) {
  statement
    .then(() => LecturerModel.find({}))
    .then((lecturers) => {
      assert(lecturers.length === 1);
      assert(lecturers[0].name === 'Armstrong Tyler');
      assert(lecturers[0].position === 'Senior Lecturer');
      assert(lecturers[0].about === 'This is the best descripion');
      assert(lecturers[0].qualification === 'Bsc');
      done();
    });
  }

  it('sets and saves lecturer using an instance', (done) => {
    const lecturer = new LecturerModel(lecturerData);
    lecturer.save().then(() => done());

    lecturer.set('name', 'Armstrong Tyler');
    lecturer.set('position', 'Senior Lecturer');
    lecturer.set('about', 'This is the best descripion');
    lecturer.set('qualification', 'Bsc');
    assertHelper(lecturer.save(), done);
  });

  it('update lecturer using instance', (done) => {
    const lecturer = new LecturerModel(lecturerData);
    lecturer.save().then(() => done());

    assertHelper(lecturer.updateOne({ name: 'Armstrong' }), done);
  });

  it('update all matching lecturers using model', (done) => {
    const lecturer = new LecturerModel(lecturerData);
    lecturer.save().then(() => done());

    assertHelper(
      lecturer.updateOne({ name: 'Chinedu' }, { name: 'Armstrong' }),
      done
    );
  });

  it('update one lecturer using model', (done) => {
    const lecturer = new LecturerModel(lecturerData);
    lecturer.save().then(() => done());
    
    assertHelper(
      LecturerModel.findOneAndUpdate({ name: 'Shellington' }, { name: 'Jack' }),
      done
    );
  });

  it('update one lecturer with id using model', (done) => {
    const lecturer = new LecturerModel(lecturerData);
    lecturer.save().then(() => done());

    assertHelper(
      LecturerModel.findByIdAndUpdate(lecturer._id, { name: 'Korede' }),
      done
    );
  });
});
