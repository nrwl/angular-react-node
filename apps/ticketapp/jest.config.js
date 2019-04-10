module.exports = {
  name: 'ticketapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ticketapp/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
