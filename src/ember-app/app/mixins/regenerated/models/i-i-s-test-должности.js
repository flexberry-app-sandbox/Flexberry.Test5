import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодДолж: DS.attr('number'),
  наимен: DS.attr('string')
});

export let ValidationRules = {
  кодДолж: {
    descriptionKey: 'models.i-i-s-test-должности.validations.кодДолж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наимен: {
    descriptionKey: 'models.i-i-s-test-должности.validations.наимен.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-test-должности', {
    кодДолж: attr('Код долж', { index: 0 }),
    наимен: attr('Наименов', { index: 1 })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-test-должности', {
    кодДолж: attr('Код долж', { index: 0 }),
    наимен: attr('Наименов', { index: 1 })
  });
};
