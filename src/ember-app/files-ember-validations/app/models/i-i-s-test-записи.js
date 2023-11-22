import {
  defineNamespace,
  defineProjections,
  Model as ЗаписиMixin
} from '../mixins/regenerated/models/i-i-s-test-записи';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаписиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
