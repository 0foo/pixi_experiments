export class Entity {
  constructor() {
      this.components = new Map();
      this.labels = []
  }

  addComponent(component) {
      this.components.set(component.constructor, component);
  }

  getComponent(componentClass) {
      return this.components.get(componentClass);
  }

  hasComponent(componentClass) {
      return this.components.has(componentClass);
  }

  addLabel(label){
    this.labels.push(label)
  }

  hasLabel(label){
    return this.labels.includes(label)
  }
}
