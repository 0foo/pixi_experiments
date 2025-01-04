class Entity {
  constructor() {
      this.components = new Map();
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
}
