// src/presentation/di-container.ts

function isFunction(val: unknown): val is CallableFunction {
    return typeof val === 'function';
  }
  
  type FactoryType = 'singletone' | 'transcient';
  type Factory<T> = () => T;
  
  class InvalidFactoryError extends Error {
    constructor(key: string) {
      super(`The factory provided for the key "${key}" must be a function`);
    }
  }
  
  class DependencyNotRegisteredError extends Error {
    constructor(key: string) {
      super(`The dependency with the key "${key}" is not registered`);
    }
  }
  
  class FactoryReturnsEmptyError extends Error {
    constructor(key: string) {
      super(`The factory of the dependency with the key "${key}" does not return anything (undefined)`);
    }
  }
  
  export class DIContainer {
    private dependencies = new Map<string, unknown>();
    private creators = new Map<
      string,
      { type: FactoryType; factory: Factory<unknown> }
    >();
  
    registerSingletone<T>(factory: () => T, key: string) {
      this.creators.set(key, { type: 'singletone', factory });
    }
  
    registerTranscient<T>(factory: () => T, key: string) {
      this.creators.set(key, { type: 'transcient', factory });
    }
  
    get<T>(key: string): T {
      const factoryCreator = this.creators.get(key);
  
      if (!factoryCreator) {
        throw new DependencyNotRegisteredError(key);
      }
  
      if (!isFunction(factoryCreator.factory)) {
        throw new InvalidFactoryError(key);
      }
  
      if (factoryCreator.type === 'transcient') {
        const dependency = factoryCreator.factory() as T;
  
        if (!dependency) {
          throw new FactoryReturnsEmptyError(key);
        }
  
        return dependency;
      }
  
      let instance = this.dependencies.get(key);
  
      if (!instance) {
        instance = factoryCreator.factory();
        if (!instance) {
          throw new FactoryReturnsEmptyError(key);
        }
        this.dependencies.set(key, instance);
      }
  
      return instance as T;
    }
  }
  