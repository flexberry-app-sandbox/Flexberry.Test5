import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  договор: DS.attr('string'),
  контр: DS.attr('number'),
  наимен: DS.attr('string'),
  организ: DS.attr('string')
});

export let ValidationRules = {
  договор: {
    descriptionKey: 'models.i-i-s-test-контрагент.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контр: {
    descriptionKey: 'models.i-i-s-test-контрагент.validations.контр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наимен: {
    descriptionKey: 'models.i-i-s-test-контрагент.validations.наимен.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организ: {
    descriptionKey: 'models.i-i-s-test-контрагент.validations.организ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрагентE', 'i-i-s-test-контрагент', {
    договор: attr('Договор', { index: 0 }),
    контр: attr('Контраген', { index: 1 }),
    наимен: attr('Наимено', { index: 2 }),
    организ: attr('Организац', { index: 3 })
  });

  modelClass.defineProjection('КонтрагентL', 'i-i-s-test-контрагент', {
    договор: attr('Договор', { index: 0 }),
    контр: attr('Контр', { index: 1 }),
    наимен: attr('Наимен', { index: 2 }),
    организ: attr('Организ', { index: 3 })
  });
};
