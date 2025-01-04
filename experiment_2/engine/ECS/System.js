export class System {
    constructor() {
      this.entities = [];
    }
    
    addEntity(entity) {
      this.entities.push(entity);
    }
    
    removeEntity(entity) {
      this.entities = this.entities.filter(e => e !== entity);
    }
    
    update(delta) {
      throw new Error('Update method not implemented');
    }
  }