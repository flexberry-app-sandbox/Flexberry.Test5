import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодРегист: DS.attr('number'),
  наимен: DS.attr('string'),
  период: DS.attr('string'),
  регистрат: DS.attr('string')
});

export let ValidationRules = {
  кодРегист: {
    descriptionKey: 'models.i-i-s-test-регистр.validations.кодРегист.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наимен: {
    descriptionKey: 'models.i-i-s-test-регистр.validations.наимен.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  период: {
    descriptionKey: 'models.i-i-s-test-регистр.validations.период.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  регистрат: {
    descriptionKey: 'models.i-i-s-test-регистр.validations.регистрат.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрE', 'i-i-s-test-регистр', {
    кодРегист: attr('Код регистра', { index: 0 }),
    регистрат: attr('Регистрат', { index: 1 }),
    период: attr('Период', { index: 2 }),
    наимен: attr('Наименов', { index: 3 })
  });

  modelClass.defineProjection('РегистрL', 'i-i-s-test-регистр', {
    кодРегист: attr('Код регист', { index: 0 }),
    наимен: attr('Наименование', { index: 1 }),
    регистрат: attr('Регистрат', { index: 2 }),
    период: attr('Период', { index: 3 })
  });
};
