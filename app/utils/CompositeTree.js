import 'lodash';

export default class CompositeTree {

  setComposites({items, key = 'id', parentKey = 'parent_id', childrenField = 'composites'}) {
    this.composites = {items, key, parentKey, childrenField};
  }

  setLeaves({items, key = 'id', parentKey = 'parent_id', childrenField = 'leaves'}) {
    this.leaves = {items, key, parentKey, childrenField};
  }

  getTree() {
    const composites = this.composites;
    _.each(composites.items, (item) => {
      this._attachToParent({
        attachable: item,
        key: composites.key,
        parentKey: composites.parentKey,
        childrenField: composites.childrenField
      });
    });

    const leaves = this.leaves;
    _.each(leaves.items, (item) => {
      this._attachToParent({
        attachable: item,
        key: leaves.key,
        parentKey: leaves.parentKey,
        childrenField: leaves.childrenField
      });
    });

    const roots = _.filter(composites.items, (item) => {
      return null === item[composites.parentKey];
    });

    return roots;
  }

  _attachToParent({attachable, key, parentKey, childrenField}) {
    const composites = this.composites;

    if (attachable[parentKey]) {
      const parent = _.find(composites.items, (item) => {
        return attachable[parentKey] === item[key];
      });

      if (!parent) return;

      if (!_.has(parent, childrenField)) {
        parent[childrenField] = [];
      }

      parent[childrenField].push(attachable);
    }
  }


}