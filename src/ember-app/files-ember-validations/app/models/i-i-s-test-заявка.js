import {
  defineNamespace,
  defineProjections,
  Model as ЗаявкаMixin
} from '../mixins/regenerated/models/i-i-s-test-заявка';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаявкаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
