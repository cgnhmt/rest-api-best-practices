const Record = require('../database/Record');

const getRecordForWorkout = (workoutId) => {
  try {
    console.log('service records');
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};
module.exports = { getRecordForWorkout };
