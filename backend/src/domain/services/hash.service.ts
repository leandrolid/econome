export abstract class IHashService {
  abstract random(size: number): string
  abstract hash(value: string): Promise<string>
}
