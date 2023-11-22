import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времНач: DS.attr('string'),
  времОкон: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаписи: DS.attr('string'),
  кодРегист: DS.attr('number'),
  номЗаяв: DS.attr('string'),
  заявка: DS.belongsTo('i-i-s-test-заявка', { inverse: null, async: false }),
  регистр: DS.belongsTo('i-i-s-test-регистр', { inverse: null, async: false })
});

export let ValidationRules = {
  времНач: {
    descriptionKey: 'models.i-i-s-test-записи.validations.времНач.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времОкон: {
    descriptionKey: 'models.i-i-s-test-записи.validations.времОкон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-test-записи.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-test-записи.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодРегист: {
    descriptionKey: 'models.i-i-s-test-записи.validations.кодРегист.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номЗаяв: {
    descriptionKey: 'models.i-i-s-test-записи.validations.номЗаяв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заявка: {
    descriptionKey: 'models.i-i-s-test-записи.validations.заявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистр: {
    descriptionKey: 'models.i-i-s-test-записи.validations.регистр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписиE', 'i-i-s-test-записи', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    времНач: attr('Врем нач', { index: 2 }),
    времОкон: attr('Врем окон', { index: 3 })
  });

  modelClass.defineProjection('ЗаписиL', 'i-i-s-test-записи', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    времНач: attr('Врем нач', { index: 2 }),
    времОкон: attr('Врем окон', { index: 3 })
  });
};
