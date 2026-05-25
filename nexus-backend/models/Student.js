// models/Student.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: [true, 'Academic identification string token is required.'],
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'Student indexing profile name is required.'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Verified contact mail routing parameter required.'],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please supply a valid email template layout.']
  },
  department: {
    type: String,
    required: [true, 'Academic track department allocation required.'],
    enum: ['Computer Science', 'Information Technology', 'CSBS', 'Electronics', 'Mechanical']
  },
  yearOfStudy: {
    type: Number,
    required: [true, 'Matriculation level year identifier digit required.'],
    min: 1,
    max: 4
  },
  activeGrievances: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true // Appends automated createdAt and updatedAt date tracking lines
});

module.exports = mongoose.model('Student', StudentSchema);