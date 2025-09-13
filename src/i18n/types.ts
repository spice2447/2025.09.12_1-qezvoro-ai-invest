import ru from "./dictionaries/ru";

export type Dictionary = typeof ru;

/** Преобразует все листовые литералы в «широкие» типы (string/number/boolean) */
type WidenLeaf<T> =
  T extends string ? string :
  T extends number ? number :
  T extends boolean ? boolean :
  T;

export type Widen<T> =
  T extends Function ? T :
  T extends Array<infer U> ? Array<Widen<U>> :
  T extends object ? { [K in keyof T]: Widen<T[K]> } :
  WidenLeaf<T>;

export type Messages = Widen<typeof ru>;

/** Рекурсивный частичный тип для словарей */
export type DeepPartial<T> =
  T extends Function ? T :
  T extends Array<infer U> ? Array<DeepPartial<U>> :
  T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } :
  T;
