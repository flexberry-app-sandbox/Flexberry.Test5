import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-регистр', 'Unit | Model | i-i-s-test-регистр', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
