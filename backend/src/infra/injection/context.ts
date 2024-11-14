export class Context {
  private static _instance: Context
  private injectables: Map<any, any> = new Map()
  private singletons: Map<any, any> = new Map()

  static get instance(): Context {
    if (!this._instance) {
      this._instance = new Context()
    }
    return this._instance
  }

  private constructor() {}

  get<T>(name: string): T {
    const Injectable = this.injectables.get(name)
    if (!Injectable) throw new Error(`Injectable not found: ${name}`)
    const scope = Reflect.getMetadata('scope', Injectable)
    if (this.singletons.has(name)) return this.singletons.get(name)
    const dependencies = Reflect.getMetadata('design:paramtypes', Injectable) || []
    const injections = dependencies.map((dep: any) => this.get(dep.name))
    const instance = Reflect.has(Injectable, 'instance')
      ? Injectable.instance
      : new Injectable(...injections)
    if (scope === 'singleton') {
      this.singletons.set(name, instance)
    }
    return instance
  }

  set<T>(token: string, target: new (...args: any[]) => T): void {
    this.injectables.set(token, target)
  }
}
