import { ClassLike } from '@infra/types/class-like.interface'

export class Context {
  private static _instance: Context
  private injectables: Map<any, any> = new Map()
  private instances: Map<any, any> = new Map()

  static get instance(): Context {
    if (!this._instance) {
      this._instance = new Context()
    }
    return this._instance
  }

  private constructor() {}

  get<T>(name: string): T {
    if (this.instances.has(name)) return this.instances.get(name)
    const Injectable = this.injectables.get(name)
    if (!Injectable) throw new Error(`Injectable not found: ${name}`)
    const instance = Reflect.has(Injectable, 'instance')
      ? Injectable.instance
      : Reflect.construct(Injectable, this.getDependencies(Injectable))
    if (this.isSingleton(Injectable)) this.instances.set(name, instance)
    return instance
  }

  set<T>(token: string, target: ClassLike<T>): void {
    this.injectables.set(token, target)
  }

  useValue<T>(name: string, target: T, singleton: boolean = true): T {
    if (singleton) this.instances.set(name, target)
    return target
  }

  private getDependencies(Injectable: any): any[] {
    const dependencies = Reflect.getMetadata('design:paramtypes', Injectable) || []
    return dependencies.map((dep: any) => {
      if (!dep.name) return dep
      return this.get(dep.name)
    })
  }

  private isSingleton(Injectable: any): boolean {
    const scope = Reflect.getMetadata('scope', Injectable)
    return scope === 'singleton'
  }
}
