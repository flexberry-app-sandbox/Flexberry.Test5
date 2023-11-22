import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-записи', 'Unit | Serializer | i-i-s-test-записи', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test-записи',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-test-должности',
    'model:i-i-s-test-записи',
    'model:i-i-s-test-заявка',
    'model:i-i-s-test-контрагент',
    'model:i-i-s-test-регистр',
    'model:i-i-s-test-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
