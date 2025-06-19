
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model App
 * 
 */
export type App = $Result.DefaultSelection<Prisma.$AppPayload>
/**
 * Model AuthMethods
 * 
 */
export type AuthMethods = $Result.DefaultSelection<Prisma.$AuthMethodsPayload>
/**
 * Model AvailableAuthMethods
 * 
 */
export type AvailableAuthMethods = $Result.DefaultSelection<Prisma.$AvailableAuthMethodsPayload>
/**
 * Model Zap
 * 
 */
export type Zap = $Result.DefaultSelection<Prisma.$ZapPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model AvailableTriggers
 * 
 */
export type AvailableTriggers = $Result.DefaultSelection<Prisma.$AvailableTriggersPayload>
/**
 * Model AvailableActions
 * 
 */
export type AvailableActions = $Result.DefaultSelection<Prisma.$AvailableActionsPayload>
/**
 * Model ZapRun
 * 
 */
export type ZapRun = $Result.DefaultSelection<Prisma.$ZapRunPayload>
/**
 * Model ZapRunOutBox
 * 
 */
export type ZapRunOutBox = $Result.DefaultSelection<Prisma.$ZapRunOutBoxPayload>
/**
 * Model TokenStore
 * 
 */
export type TokenStore = $Result.DefaultSelection<Prisma.$TokenStorePayload>
/**
 * Model ZapTemplate
 * 
 */
export type ZapTemplate = $Result.DefaultSelection<Prisma.$ZapTemplatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.app`: Exposes CRUD operations for the **App** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apps
    * const apps = await prisma.app.findMany()
    * ```
    */
  get app(): Prisma.AppDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authMethods`: Exposes CRUD operations for the **AuthMethods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthMethods
    * const authMethods = await prisma.authMethods.findMany()
    * ```
    */
  get authMethods(): Prisma.AuthMethodsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableAuthMethods`: Exposes CRUD operations for the **AvailableAuthMethods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableAuthMethods
    * const availableAuthMethods = await prisma.availableAuthMethods.findMany()
    * ```
    */
  get availableAuthMethods(): Prisma.AvailableAuthMethodsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zap`: Exposes CRUD operations for the **Zap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zaps
    * const zaps = await prisma.zap.findMany()
    * ```
    */
  get zap(): Prisma.ZapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableTriggers`: Exposes CRUD operations for the **AvailableTriggers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableTriggers
    * const availableTriggers = await prisma.availableTriggers.findMany()
    * ```
    */
  get availableTriggers(): Prisma.AvailableTriggersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableActions`: Exposes CRUD operations for the **AvailableActions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableActions
    * const availableActions = await prisma.availableActions.findMany()
    * ```
    */
  get availableActions(): Prisma.AvailableActionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapRun`: Exposes CRUD operations for the **ZapRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZapRuns
    * const zapRuns = await prisma.zapRun.findMany()
    * ```
    */
  get zapRun(): Prisma.ZapRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapRunOutBox`: Exposes CRUD operations for the **ZapRunOutBox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZapRunOutBoxes
    * const zapRunOutBoxes = await prisma.zapRunOutBox.findMany()
    * ```
    */
  get zapRunOutBox(): Prisma.ZapRunOutBoxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenStore`: Exposes CRUD operations for the **TokenStore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenStores
    * const tokenStores = await prisma.tokenStore.findMany()
    * ```
    */
  get tokenStore(): Prisma.TokenStoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapTemplate`: Exposes CRUD operations for the **ZapTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZapTemplates
    * const zapTemplates = await prisma.zapTemplate.findMany()
    * ```
    */
  get zapTemplate(): Prisma.ZapTemplateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Team: 'Team',
    App: 'App',
    AuthMethods: 'AuthMethods',
    AvailableAuthMethods: 'AvailableAuthMethods',
    Zap: 'Zap',
    Trigger: 'Trigger',
    Action: 'Action',
    AvailableTriggers: 'AvailableTriggers',
    AvailableActions: 'AvailableActions',
    ZapRun: 'ZapRun',
    ZapRunOutBox: 'ZapRunOutBox',
    TokenStore: 'TokenStore',
    ZapTemplate: 'ZapTemplate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "team" | "app" | "authMethods" | "availableAuthMethods" | "zap" | "trigger" | "action" | "availableTriggers" | "availableActions" | "zapRun" | "zapRunOutBox" | "tokenStore" | "zapTemplate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      App: {
        payload: Prisma.$AppPayload<ExtArgs>
        fields: Prisma.AppFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          findFirst: {
            args: Prisma.AppFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          findMany: {
            args: Prisma.AppFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>[]
          }
          create: {
            args: Prisma.AppCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          createMany: {
            args: Prisma.AppCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>[]
          }
          delete: {
            args: Prisma.AppDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          update: {
            args: Prisma.AppUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          deleteMany: {
            args: Prisma.AppDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          aggregate: {
            args: Prisma.AppAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApp>
          }
          groupBy: {
            args: Prisma.AppGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppCountArgs<ExtArgs>
            result: $Utils.Optional<AppCountAggregateOutputType> | number
          }
        }
      }
      AuthMethods: {
        payload: Prisma.$AuthMethodsPayload<ExtArgs>
        fields: Prisma.AuthMethodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthMethodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthMethodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthMethodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthMethodsPayload>
          }
          findFirst: {
            args: Prisma.AuthMethodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthMethodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthMethodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthMethodsPayload>
          }
          findMany: {
            args: Prisma.AuthMethodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthMethodsPayload>[]
          }
          create: {
            args: Prisma.AuthMethodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthMethodsPayload>
          }
          createMany: {
            args: Prisma.AuthMethodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthMethodsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthMethodsPayload>[]
          }
          delete: {
            args: Prisma.AuthMethodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthMethodsPayload>
          }
          update: {
            args: Prisma.AuthMethodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthMethodsPayload>
          }
          deleteMany: {
            args: Prisma.AuthMethodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthMethodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthMethodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthMethodsPayload>
          }
          aggregate: {
            args: Prisma.AuthMethodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthMethods>
          }
          groupBy: {
            args: Prisma.AuthMethodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthMethodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthMethodsCountArgs<ExtArgs>
            result: $Utils.Optional<AuthMethodsCountAggregateOutputType> | number
          }
        }
      }
      AvailableAuthMethods: {
        payload: Prisma.$AvailableAuthMethodsPayload<ExtArgs>
        fields: Prisma.AvailableAuthMethodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableAuthMethodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableAuthMethodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableAuthMethodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableAuthMethodsPayload>
          }
          findFirst: {
            args: Prisma.AvailableAuthMethodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableAuthMethodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableAuthMethodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableAuthMethodsPayload>
          }
          findMany: {
            args: Prisma.AvailableAuthMethodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableAuthMethodsPayload>[]
          }
          create: {
            args: Prisma.AvailableAuthMethodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableAuthMethodsPayload>
          }
          createMany: {
            args: Prisma.AvailableAuthMethodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableAuthMethodsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableAuthMethodsPayload>[]
          }
          delete: {
            args: Prisma.AvailableAuthMethodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableAuthMethodsPayload>
          }
          update: {
            args: Prisma.AvailableAuthMethodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableAuthMethodsPayload>
          }
          deleteMany: {
            args: Prisma.AvailableAuthMethodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableAuthMethodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvailableAuthMethodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableAuthMethodsPayload>
          }
          aggregate: {
            args: Prisma.AvailableAuthMethodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableAuthMethods>
          }
          groupBy: {
            args: Prisma.AvailableAuthMethodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableAuthMethodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableAuthMethodsCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableAuthMethodsCountAggregateOutputType> | number
          }
        }
      }
      Zap: {
        payload: Prisma.$ZapPayload<ExtArgs>
        fields: Prisma.ZapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          findFirst: {
            args: Prisma.ZapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          findMany: {
            args: Prisma.ZapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          create: {
            args: Prisma.ZapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          createMany: {
            args: Prisma.ZapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          delete: {
            args: Prisma.ZapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          update: {
            args: Prisma.ZapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          deleteMany: {
            args: Prisma.ZapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ZapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          aggregate: {
            args: Prisma.ZapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZap>
          }
          groupBy: {
            args: Prisma.ZapGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapCountArgs<ExtArgs>
            result: $Utils.Optional<ZapCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      AvailableTriggers: {
        payload: Prisma.$AvailableTriggersPayload<ExtArgs>
        fields: Prisma.AvailableTriggersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableTriggersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableTriggersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          findFirst: {
            args: Prisma.AvailableTriggersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableTriggersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          findMany: {
            args: Prisma.AvailableTriggersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>[]
          }
          create: {
            args: Prisma.AvailableTriggersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          createMany: {
            args: Prisma.AvailableTriggersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableTriggersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>[]
          }
          delete: {
            args: Prisma.AvailableTriggersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          update: {
            args: Prisma.AvailableTriggersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          deleteMany: {
            args: Prisma.AvailableTriggersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableTriggersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvailableTriggersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggersPayload>
          }
          aggregate: {
            args: Prisma.AvailableTriggersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableTriggers>
          }
          groupBy: {
            args: Prisma.AvailableTriggersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableTriggersCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggersCountAggregateOutputType> | number
          }
        }
      }
      AvailableActions: {
        payload: Prisma.$AvailableActionsPayload<ExtArgs>
        fields: Prisma.AvailableActionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableActionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableActionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          findFirst: {
            args: Prisma.AvailableActionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableActionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          findMany: {
            args: Prisma.AvailableActionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>[]
          }
          create: {
            args: Prisma.AvailableActionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          createMany: {
            args: Prisma.AvailableActionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableActionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>[]
          }
          delete: {
            args: Prisma.AvailableActionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          update: {
            args: Prisma.AvailableActionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          deleteMany: {
            args: Prisma.AvailableActionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableActionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvailableActionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          aggregate: {
            args: Prisma.AvailableActionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableActions>
          }
          groupBy: {
            args: Prisma.AvailableActionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableActionsCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionsCountAggregateOutputType> | number
          }
        }
      }
      ZapRun: {
        payload: Prisma.$ZapRunPayload<ExtArgs>
        fields: Prisma.ZapRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>
          }
          findFirst: {
            args: Prisma.ZapRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>
          }
          findMany: {
            args: Prisma.ZapRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>[]
          }
          create: {
            args: Prisma.ZapRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>
          }
          createMany: {
            args: Prisma.ZapRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>[]
          }
          delete: {
            args: Prisma.ZapRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>
          }
          update: {
            args: Prisma.ZapRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>
          }
          deleteMany: {
            args: Prisma.ZapRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ZapRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunPayload>
          }
          aggregate: {
            args: Prisma.ZapRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZapRun>
          }
          groupBy: {
            args: Prisma.ZapRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapRunCountArgs<ExtArgs>
            result: $Utils.Optional<ZapRunCountAggregateOutputType> | number
          }
        }
      }
      ZapRunOutBox: {
        payload: Prisma.$ZapRunOutBoxPayload<ExtArgs>
        fields: Prisma.ZapRunOutBoxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapRunOutBoxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutBoxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapRunOutBoxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutBoxPayload>
          }
          findFirst: {
            args: Prisma.ZapRunOutBoxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutBoxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapRunOutBoxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutBoxPayload>
          }
          findMany: {
            args: Prisma.ZapRunOutBoxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutBoxPayload>[]
          }
          create: {
            args: Prisma.ZapRunOutBoxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutBoxPayload>
          }
          createMany: {
            args: Prisma.ZapRunOutBoxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapRunOutBoxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutBoxPayload>[]
          }
          delete: {
            args: Prisma.ZapRunOutBoxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutBoxPayload>
          }
          update: {
            args: Prisma.ZapRunOutBoxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutBoxPayload>
          }
          deleteMany: {
            args: Prisma.ZapRunOutBoxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapRunOutBoxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ZapRunOutBoxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapRunOutBoxPayload>
          }
          aggregate: {
            args: Prisma.ZapRunOutBoxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZapRunOutBox>
          }
          groupBy: {
            args: Prisma.ZapRunOutBoxGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapRunOutBoxGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapRunOutBoxCountArgs<ExtArgs>
            result: $Utils.Optional<ZapRunOutBoxCountAggregateOutputType> | number
          }
        }
      }
      TokenStore: {
        payload: Prisma.$TokenStorePayload<ExtArgs>
        fields: Prisma.TokenStoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenStoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenStorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenStoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenStorePayload>
          }
          findFirst: {
            args: Prisma.TokenStoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenStorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenStoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenStorePayload>
          }
          findMany: {
            args: Prisma.TokenStoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenStorePayload>[]
          }
          create: {
            args: Prisma.TokenStoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenStorePayload>
          }
          createMany: {
            args: Prisma.TokenStoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenStoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenStorePayload>[]
          }
          delete: {
            args: Prisma.TokenStoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenStorePayload>
          }
          update: {
            args: Prisma.TokenStoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenStorePayload>
          }
          deleteMany: {
            args: Prisma.TokenStoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenStoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenStoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenStorePayload>
          }
          aggregate: {
            args: Prisma.TokenStoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenStore>
          }
          groupBy: {
            args: Prisma.TokenStoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenStoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenStoreCountArgs<ExtArgs>
            result: $Utils.Optional<TokenStoreCountAggregateOutputType> | number
          }
        }
      }
      ZapTemplate: {
        payload: Prisma.$ZapTemplatePayload<ExtArgs>
        fields: Prisma.ZapTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapTemplatePayload>
          }
          findFirst: {
            args: Prisma.ZapTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapTemplatePayload>
          }
          findMany: {
            args: Prisma.ZapTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapTemplatePayload>[]
          }
          create: {
            args: Prisma.ZapTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapTemplatePayload>
          }
          createMany: {
            args: Prisma.ZapTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapTemplatePayload>[]
          }
          delete: {
            args: Prisma.ZapTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapTemplatePayload>
          }
          update: {
            args: Prisma.ZapTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ZapTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ZapTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapTemplatePayload>
          }
          aggregate: {
            args: Prisma.ZapTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZapTemplate>
          }
          groupBy: {
            args: Prisma.ZapTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ZapTemplateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    team?: TeamOmit
    app?: AppOmit
    authMethods?: AuthMethodsOmit
    availableAuthMethods?: AvailableAuthMethodsOmit
    zap?: ZapOmit
    trigger?: TriggerOmit
    action?: ActionOmit
    availableTriggers?: AvailableTriggersOmit
    availableActions?: AvailableActionsOmit
    zapRun?: ZapRunOmit
    zapRunOutBox?: ZapRunOutBoxOmit
    tokenStore?: TokenStoreOmit
    zapTemplate?: ZapTemplateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number
    zaps: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
    zaps?: boolean | UserCountOutputTypeCountZapsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenStoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountZapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    apps: number
    members: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apps?: boolean | TeamCountOutputTypeCountAppsArgs
    members?: boolean | TeamCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAppsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type AppCountOutputType
   */

  export type AppCountOutputType = {
    authMethods: number
    actions: number
    triggers: number
    triggerTemplates: number
    actionTemplates: number
  }

  export type AppCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authMethods?: boolean | AppCountOutputTypeCountAuthMethodsArgs
    actions?: boolean | AppCountOutputTypeCountActionsArgs
    triggers?: boolean | AppCountOutputTypeCountTriggersArgs
    triggerTemplates?: boolean | AppCountOutputTypeCountTriggerTemplatesArgs
    actionTemplates?: boolean | AppCountOutputTypeCountActionTemplatesArgs
  }

  // Custom InputTypes
  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppCountOutputType
     */
    select?: AppCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeCountAuthMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthMethodsWhereInput
  }

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableActionsWhereInput
  }

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeCountTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableTriggersWhereInput
  }

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeCountTriggerTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapTemplateWhereInput
  }

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeCountActionTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapTemplateWhereInput
  }


  /**
   * Count Type AvailableAuthMethodsCountOutputType
   */

  export type AvailableAuthMethodsCountOutputType = {
    authMethods: number
  }

  export type AvailableAuthMethodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authMethods?: boolean | AvailableAuthMethodsCountOutputTypeCountAuthMethodsArgs
  }

  // Custom InputTypes
  /**
   * AvailableAuthMethodsCountOutputType without action
   */
  export type AvailableAuthMethodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAuthMethodsCountOutputType
     */
    select?: AvailableAuthMethodsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableAuthMethodsCountOutputType without action
   */
  export type AvailableAuthMethodsCountOutputTypeCountAuthMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthMethodsWhereInput
  }


  /**
   * Count Type ZapCountOutputType
   */

  export type ZapCountOutputType = {
    actions: number
    zapRuns: number
  }

  export type ZapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | ZapCountOutputTypeCountActionsArgs
    zapRuns?: boolean | ZapCountOutputTypeCountZapRunsArgs
  }

  // Custom InputTypes
  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapCountOutputType
     */
    select?: ZapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountZapRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapRunWhereInput
  }


  /**
   * Count Type AvailableTriggersCountOutputType
   */

  export type AvailableTriggersCountOutputType = {
    triggers: number
    templates: number
  }

  export type AvailableTriggersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggers?: boolean | AvailableTriggersCountOutputTypeCountTriggersArgs
    templates?: boolean | AvailableTriggersCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * AvailableTriggersCountOutputType without action
   */
  export type AvailableTriggersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggersCountOutputType
     */
    select?: AvailableTriggersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableTriggersCountOutputType without action
   */
  export type AvailableTriggersCountOutputTypeCountTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }

  /**
   * AvailableTriggersCountOutputType without action
   */
  export type AvailableTriggersCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapTemplateWhereInput
  }


  /**
   * Count Type AvailableActionsCountOutputType
   */

  export type AvailableActionsCountOutputType = {
    actions: number
    templates: number
  }

  export type AvailableActionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | AvailableActionsCountOutputTypeCountActionsArgs
    templates?: boolean | AvailableActionsCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * AvailableActionsCountOutputType without action
   */
  export type AvailableActionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionsCountOutputType
     */
    select?: AvailableActionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableActionsCountOutputType without action
   */
  export type AvailableActionsCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }

  /**
   * AvailableActionsCountOutputType without action
   */
  export type AvailableActionsCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapTemplateWhereInput
  }


  /**
   * Count Type ZapTemplateCountOutputType
   */

  export type ZapTemplateCountOutputType = {
    zaps: number
  }

  export type ZapTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zaps?: boolean | ZapTemplateCountOutputTypeCountZapsArgs
  }

  // Custom InputTypes
  /**
   * ZapTemplateCountOutputType without action
   */
  export type ZapTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplateCountOutputType
     */
    select?: ZapTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZapTemplateCountOutputType without action
   */
  export type ZapTemplateCountOutputTypeCountZapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
    teamId: string | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
    teamId: string | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    email: number
    teamId: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    teamId?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    teamId?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    teamId?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    password: string
    email: string
    teamId: string | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    teamId?: boolean
    image?: boolean
    tokens?: boolean | User$tokensArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    zaps?: boolean | User$zapsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    teamId?: boolean
    image?: boolean
    team?: boolean | User$teamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    teamId?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "email" | "teamId" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | User$tokensArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    zaps?: boolean | User$zapsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | User$teamArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tokens: Prisma.$TokenStorePayload<ExtArgs>[]
      team: Prisma.$TeamPayload<ExtArgs> | null
      zaps: Prisma.$ZapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      email: string
      teamId: string | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenStorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    team<T extends User$teamArgs<ExtArgs> = {}>(args?: Subset<T, User$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    zaps<T extends User$zapsArgs<ExtArgs> = {}>(args?: Subset<T, User$zapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly teamId: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenStore
     */
    select?: TokenStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenStore
     */
    omit?: TokenStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenStoreInclude<ExtArgs> | null
    where?: TokenStoreWhereInput
    orderBy?: TokenStoreOrderByWithRelationInput | TokenStoreOrderByWithRelationInput[]
    cursor?: TokenStoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenStoreScalarFieldEnum | TokenStoreScalarFieldEnum[]
  }

  /**
   * User.team
   */
  export type User$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * User.zaps
   */
  export type User$zapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    where?: ZapWhereInput
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    cursor?: ZapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    updatedAt: Date | null
    createdAt: Date | null
    createdById: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    updatedAt: Date | null
    createdAt: Date | null
    createdById: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    metadata: number
    updatedAt: number
    createdAt: number
    createdById: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    updatedAt?: true
    createdAt?: true
    createdById?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    updatedAt?: true
    createdAt?: true
    createdById?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    metadata?: true
    updatedAt?: true
    createdAt?: true
    createdById?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    metadata: JsonValue
    updatedAt: Date
    createdAt: Date
    createdById: string
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    metadata?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    createdById?: boolean
    apps?: boolean | Team$appsArgs<ExtArgs>
    members?: boolean | Team$membersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    metadata?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    createdById?: boolean
  }, ExtArgs["result"]["team"]>


  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    metadata?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    createdById?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "metadata" | "updatedAt" | "createdAt" | "createdById", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apps?: boolean | Team$appsArgs<ExtArgs>
    members?: boolean | Team$membersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      apps: Prisma.$AppPayload<ExtArgs>[]
      members: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      metadata: Prisma.JsonValue
      updatedAt: Date
      createdAt: Date
      createdById: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apps<T extends Team$appsArgs<ExtArgs> = {}>(args?: Subset<T, Team$appsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly metadata: FieldRef<"Team", 'Json'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly createdById: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
  }

  /**
   * Team.apps
   */
  export type Team$appsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    where?: AppWhereInput
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    cursor?: AppWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model App
   */

  export type AggregateApp = {
    _count: AppCountAggregateOutputType | null
    _min: AppMinAggregateOutputType | null
    _max: AppMaxAggregateOutputType | null
  }

  export type AppMinAggregateOutputType = {
    name: string | null
    description: string | null
    teamId: string | null
    id: string | null
  }

  export type AppMaxAggregateOutputType = {
    name: string | null
    description: string | null
    teamId: string | null
    id: string | null
  }

  export type AppCountAggregateOutputType = {
    name: number
    description: number
    teamId: number
    id: number
    _all: number
  }


  export type AppMinAggregateInputType = {
    name?: true
    description?: true
    teamId?: true
    id?: true
  }

  export type AppMaxAggregateInputType = {
    name?: true
    description?: true
    teamId?: true
    id?: true
  }

  export type AppCountAggregateInputType = {
    name?: true
    description?: true
    teamId?: true
    id?: true
    _all?: true
  }

  export type AppAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which App to aggregate.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apps
    **/
    _count?: true | AppCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppMaxAggregateInputType
  }

  export type GetAppAggregateType<T extends AppAggregateArgs> = {
        [P in keyof T & keyof AggregateApp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApp[P]>
      : GetScalarType<T[P], AggregateApp[P]>
  }




  export type AppGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppWhereInput
    orderBy?: AppOrderByWithAggregationInput | AppOrderByWithAggregationInput[]
    by: AppScalarFieldEnum[] | AppScalarFieldEnum
    having?: AppScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppCountAggregateInputType | true
    _min?: AppMinAggregateInputType
    _max?: AppMaxAggregateInputType
  }

  export type AppGroupByOutputType = {
    name: string
    description: string
    teamId: string
    id: string
    _count: AppCountAggregateOutputType | null
    _min: AppMinAggregateOutputType | null
    _max: AppMaxAggregateOutputType | null
  }

  type GetAppGroupByPayload<T extends AppGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppGroupByOutputType[P]>
            : GetScalarType<T[P], AppGroupByOutputType[P]>
        }
      >
    >


  export type AppSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    teamId?: boolean
    id?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    authMethods?: boolean | App$authMethodsArgs<ExtArgs>
    actions?: boolean | App$actionsArgs<ExtArgs>
    triggers?: boolean | App$triggersArgs<ExtArgs>
    triggerTemplates?: boolean | App$triggerTemplatesArgs<ExtArgs>
    actionTemplates?: boolean | App$actionTemplatesArgs<ExtArgs>
    _count?: boolean | AppCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["app"]>

  export type AppSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    teamId?: boolean
    id?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["app"]>


  export type AppSelectScalar = {
    name?: boolean
    description?: boolean
    teamId?: boolean
    id?: boolean
  }

  export type AppOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "description" | "teamId" | "id", ExtArgs["result"]["app"]>
  export type AppInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    authMethods?: boolean | App$authMethodsArgs<ExtArgs>
    actions?: boolean | App$actionsArgs<ExtArgs>
    triggers?: boolean | App$triggersArgs<ExtArgs>
    triggerTemplates?: boolean | App$triggerTemplatesArgs<ExtArgs>
    actionTemplates?: boolean | App$actionTemplatesArgs<ExtArgs>
    _count?: boolean | AppCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $AppPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "App"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      authMethods: Prisma.$AuthMethodsPayload<ExtArgs>[]
      actions: Prisma.$AvailableActionsPayload<ExtArgs>[]
      triggers: Prisma.$AvailableTriggersPayload<ExtArgs>[]
      triggerTemplates: Prisma.$ZapTemplatePayload<ExtArgs>[]
      actionTemplates: Prisma.$ZapTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      description: string
      teamId: string
      id: string
    }, ExtArgs["result"]["app"]>
    composites: {}
  }

  type AppGetPayload<S extends boolean | null | undefined | AppDefaultArgs> = $Result.GetResult<Prisma.$AppPayload, S>

  type AppCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppCountAggregateInputType | true
    }

  export interface AppDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['App'], meta: { name: 'App' } }
    /**
     * Find zero or one App that matches the filter.
     * @param {AppFindUniqueArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppFindUniqueArgs>(args: SelectSubset<T, AppFindUniqueArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one App that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppFindUniqueOrThrowArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppFindUniqueOrThrowArgs>(args: SelectSubset<T, AppFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFindFirstArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppFindFirstArgs>(args?: SelectSubset<T, AppFindFirstArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFindFirstOrThrowArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppFindFirstOrThrowArgs>(args?: SelectSubset<T, AppFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apps
     * const apps = await prisma.app.findMany()
     * 
     * // Get first 10 Apps
     * const apps = await prisma.app.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const appWithNameOnly = await prisma.app.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends AppFindManyArgs>(args?: SelectSubset<T, AppFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a App.
     * @param {AppCreateArgs} args - Arguments to create a App.
     * @example
     * // Create one App
     * const App = await prisma.app.create({
     *   data: {
     *     // ... data to create a App
     *   }
     * })
     * 
     */
    create<T extends AppCreateArgs>(args: SelectSubset<T, AppCreateArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apps.
     * @param {AppCreateManyArgs} args - Arguments to create many Apps.
     * @example
     * // Create many Apps
     * const app = await prisma.app.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppCreateManyArgs>(args?: SelectSubset<T, AppCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apps and returns the data saved in the database.
     * @param {AppCreateManyAndReturnArgs} args - Arguments to create many Apps.
     * @example
     * // Create many Apps
     * const app = await prisma.app.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apps and only return the `name`
     * const appWithNameOnly = await prisma.app.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppCreateManyAndReturnArgs>(args?: SelectSubset<T, AppCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a App.
     * @param {AppDeleteArgs} args - Arguments to delete one App.
     * @example
     * // Delete one App
     * const App = await prisma.app.delete({
     *   where: {
     *     // ... filter to delete one App
     *   }
     * })
     * 
     */
    delete<T extends AppDeleteArgs>(args: SelectSubset<T, AppDeleteArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one App.
     * @param {AppUpdateArgs} args - Arguments to update one App.
     * @example
     * // Update one App
     * const app = await prisma.app.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUpdateArgs>(args: SelectSubset<T, AppUpdateArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apps.
     * @param {AppDeleteManyArgs} args - Arguments to filter Apps to delete.
     * @example
     * // Delete a few Apps
     * const { count } = await prisma.app.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppDeleteManyArgs>(args?: SelectSubset<T, AppDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apps
     * const app = await prisma.app.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUpdateManyArgs>(args: SelectSubset<T, AppUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one App.
     * @param {AppUpsertArgs} args - Arguments to update or create a App.
     * @example
     * // Update or create a App
     * const app = await prisma.app.upsert({
     *   create: {
     *     // ... data to create a App
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the App we want to update
     *   }
     * })
     */
    upsert<T extends AppUpsertArgs>(args: SelectSubset<T, AppUpsertArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppCountArgs} args - Arguments to filter Apps to count.
     * @example
     * // Count the number of Apps
     * const count = await prisma.app.count({
     *   where: {
     *     // ... the filter for the Apps we want to count
     *   }
     * })
    **/
    count<T extends AppCountArgs>(
      args?: Subset<T, AppCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a App.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppAggregateArgs>(args: Subset<T, AppAggregateArgs>): Prisma.PrismaPromise<GetAppAggregateType<T>>

    /**
     * Group by App.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppGroupByArgs['orderBy'] }
        : { orderBy?: AppGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the App model
   */
  readonly fields: AppFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for App.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    authMethods<T extends App$authMethodsArgs<ExtArgs> = {}>(args?: Subset<T, App$authMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthMethodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actions<T extends App$actionsArgs<ExtArgs> = {}>(args?: Subset<T, App$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    triggers<T extends App$triggersArgs<ExtArgs> = {}>(args?: Subset<T, App$triggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    triggerTemplates<T extends App$triggerTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, App$triggerTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actionTemplates<T extends App$actionTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, App$actionTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the App model
   */
  interface AppFieldRefs {
    readonly name: FieldRef<"App", 'String'>
    readonly description: FieldRef<"App", 'String'>
    readonly teamId: FieldRef<"App", 'String'>
    readonly id: FieldRef<"App", 'String'>
  }
    

  // Custom InputTypes
  /**
   * App findUnique
   */
  export type AppFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * Filter, which App to fetch.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App findUniqueOrThrow
   */
  export type AppFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * Filter, which App to fetch.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App findFirst
   */
  export type AppFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * Filter, which App to fetch.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apps.
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apps.
     */
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * App findFirstOrThrow
   */
  export type AppFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * Filter, which App to fetch.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apps.
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apps.
     */
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * App findMany
   */
  export type AppFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * Filter, which Apps to fetch.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apps.
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * App create
   */
  export type AppCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * The data needed to create a App.
     */
    data: XOR<AppCreateInput, AppUncheckedCreateInput>
  }

  /**
   * App createMany
   */
  export type AppCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apps.
     */
    data: AppCreateManyInput | AppCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * App createManyAndReturn
   */
  export type AppCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * The data used to create many Apps.
     */
    data: AppCreateManyInput | AppCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * App update
   */
  export type AppUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * The data needed to update a App.
     */
    data: XOR<AppUpdateInput, AppUncheckedUpdateInput>
    /**
     * Choose, which App to update.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App updateMany
   */
  export type AppUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apps.
     */
    data: XOR<AppUpdateManyMutationInput, AppUncheckedUpdateManyInput>
    /**
     * Filter which Apps to update
     */
    where?: AppWhereInput
  }

  /**
   * App upsert
   */
  export type AppUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * The filter to search for the App to update in case it exists.
     */
    where: AppWhereUniqueInput
    /**
     * In case the App found by the `where` argument doesn't exist, create a new App with this data.
     */
    create: XOR<AppCreateInput, AppUncheckedCreateInput>
    /**
     * In case the App was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUpdateInput, AppUncheckedUpdateInput>
  }

  /**
   * App delete
   */
  export type AppDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * Filter which App to delete.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App deleteMany
   */
  export type AppDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apps to delete
     */
    where?: AppWhereInput
  }

  /**
   * App.authMethods
   */
  export type App$authMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsInclude<ExtArgs> | null
    where?: AuthMethodsWhereInput
    orderBy?: AuthMethodsOrderByWithRelationInput | AuthMethodsOrderByWithRelationInput[]
    cursor?: AuthMethodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthMethodsScalarFieldEnum | AuthMethodsScalarFieldEnum[]
  }

  /**
   * App.actions
   */
  export type App$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    where?: AvailableActionsWhereInput
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    cursor?: AvailableActionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailableActionsScalarFieldEnum | AvailableActionsScalarFieldEnum[]
  }

  /**
   * App.triggers
   */
  export type App$triggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    where?: AvailableTriggersWhereInput
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    cursor?: AvailableTriggersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailableTriggersScalarFieldEnum | AvailableTriggersScalarFieldEnum[]
  }

  /**
   * App.triggerTemplates
   */
  export type App$triggerTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    where?: ZapTemplateWhereInput
    orderBy?: ZapTemplateOrderByWithRelationInput | ZapTemplateOrderByWithRelationInput[]
    cursor?: ZapTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapTemplateScalarFieldEnum | ZapTemplateScalarFieldEnum[]
  }

  /**
   * App.actionTemplates
   */
  export type App$actionTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    where?: ZapTemplateWhereInput
    orderBy?: ZapTemplateOrderByWithRelationInput | ZapTemplateOrderByWithRelationInput[]
    cursor?: ZapTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapTemplateScalarFieldEnum | ZapTemplateScalarFieldEnum[]
  }

  /**
   * App without action
   */
  export type AppDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Omit specific fields from the App
     */
    omit?: AppOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
  }


  /**
   * Model AuthMethods
   */

  export type AggregateAuthMethods = {
    _count: AuthMethodsCountAggregateOutputType | null
    _min: AuthMethodsMinAggregateOutputType | null
    _max: AuthMethodsMaxAggregateOutputType | null
  }

  export type AuthMethodsMinAggregateOutputType = {
    id: string | null
    appId: string | null
    authId: string | null
  }

  export type AuthMethodsMaxAggregateOutputType = {
    id: string | null
    appId: string | null
    authId: string | null
  }

  export type AuthMethodsCountAggregateOutputType = {
    id: number
    appId: number
    authId: number
    metadata: number
    _all: number
  }


  export type AuthMethodsMinAggregateInputType = {
    id?: true
    appId?: true
    authId?: true
  }

  export type AuthMethodsMaxAggregateInputType = {
    id?: true
    appId?: true
    authId?: true
  }

  export type AuthMethodsCountAggregateInputType = {
    id?: true
    appId?: true
    authId?: true
    metadata?: true
    _all?: true
  }

  export type AuthMethodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthMethods to aggregate.
     */
    where?: AuthMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthMethods to fetch.
     */
    orderBy?: AuthMethodsOrderByWithRelationInput | AuthMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthMethods
    **/
    _count?: true | AuthMethodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthMethodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthMethodsMaxAggregateInputType
  }

  export type GetAuthMethodsAggregateType<T extends AuthMethodsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthMethods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthMethods[P]>
      : GetScalarType<T[P], AggregateAuthMethods[P]>
  }




  export type AuthMethodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthMethodsWhereInput
    orderBy?: AuthMethodsOrderByWithAggregationInput | AuthMethodsOrderByWithAggregationInput[]
    by: AuthMethodsScalarFieldEnum[] | AuthMethodsScalarFieldEnum
    having?: AuthMethodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthMethodsCountAggregateInputType | true
    _min?: AuthMethodsMinAggregateInputType
    _max?: AuthMethodsMaxAggregateInputType
  }

  export type AuthMethodsGroupByOutputType = {
    id: string
    appId: string
    authId: string
    metadata: JsonValue
    _count: AuthMethodsCountAggregateOutputType | null
    _min: AuthMethodsMinAggregateOutputType | null
    _max: AuthMethodsMaxAggregateOutputType | null
  }

  type GetAuthMethodsGroupByPayload<T extends AuthMethodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthMethodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthMethodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthMethodsGroupByOutputType[P]>
            : GetScalarType<T[P], AuthMethodsGroupByOutputType[P]>
        }
      >
    >


  export type AuthMethodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appId?: boolean
    authId?: boolean
    metadata?: boolean
    app?: boolean | AppDefaultArgs<ExtArgs>
    availableAuth?: boolean | AvailableAuthMethodsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authMethods"]>

  export type AuthMethodsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appId?: boolean
    authId?: boolean
    metadata?: boolean
    app?: boolean | AppDefaultArgs<ExtArgs>
    availableAuth?: boolean | AvailableAuthMethodsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authMethods"]>


  export type AuthMethodsSelectScalar = {
    id?: boolean
    appId?: boolean
    authId?: boolean
    metadata?: boolean
  }

  export type AuthMethodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appId" | "authId" | "metadata", ExtArgs["result"]["authMethods"]>
  export type AuthMethodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | AppDefaultArgs<ExtArgs>
    availableAuth?: boolean | AvailableAuthMethodsDefaultArgs<ExtArgs>
  }
  export type AuthMethodsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | AppDefaultArgs<ExtArgs>
    availableAuth?: boolean | AvailableAuthMethodsDefaultArgs<ExtArgs>
  }

  export type $AuthMethodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthMethods"
    objects: {
      app: Prisma.$AppPayload<ExtArgs>
      availableAuth: Prisma.$AvailableAuthMethodsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appId: string
      authId: string
      metadata: Prisma.JsonValue
    }, ExtArgs["result"]["authMethods"]>
    composites: {}
  }

  type AuthMethodsGetPayload<S extends boolean | null | undefined | AuthMethodsDefaultArgs> = $Result.GetResult<Prisma.$AuthMethodsPayload, S>

  type AuthMethodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthMethodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthMethodsCountAggregateInputType | true
    }

  export interface AuthMethodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthMethods'], meta: { name: 'AuthMethods' } }
    /**
     * Find zero or one AuthMethods that matches the filter.
     * @param {AuthMethodsFindUniqueArgs} args - Arguments to find a AuthMethods
     * @example
     * // Get one AuthMethods
     * const authMethods = await prisma.authMethods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthMethodsFindUniqueArgs>(args: SelectSubset<T, AuthMethodsFindUniqueArgs<ExtArgs>>): Prisma__AuthMethodsClient<$Result.GetResult<Prisma.$AuthMethodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthMethods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthMethodsFindUniqueOrThrowArgs} args - Arguments to find a AuthMethods
     * @example
     * // Get one AuthMethods
     * const authMethods = await prisma.authMethods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthMethodsFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthMethodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthMethodsClient<$Result.GetResult<Prisma.$AuthMethodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthMethodsFindFirstArgs} args - Arguments to find a AuthMethods
     * @example
     * // Get one AuthMethods
     * const authMethods = await prisma.authMethods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthMethodsFindFirstArgs>(args?: SelectSubset<T, AuthMethodsFindFirstArgs<ExtArgs>>): Prisma__AuthMethodsClient<$Result.GetResult<Prisma.$AuthMethodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthMethods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthMethodsFindFirstOrThrowArgs} args - Arguments to find a AuthMethods
     * @example
     * // Get one AuthMethods
     * const authMethods = await prisma.authMethods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthMethodsFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthMethodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthMethodsClient<$Result.GetResult<Prisma.$AuthMethodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthMethodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthMethods
     * const authMethods = await prisma.authMethods.findMany()
     * 
     * // Get first 10 AuthMethods
     * const authMethods = await prisma.authMethods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authMethodsWithIdOnly = await prisma.authMethods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthMethodsFindManyArgs>(args?: SelectSubset<T, AuthMethodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthMethodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthMethods.
     * @param {AuthMethodsCreateArgs} args - Arguments to create a AuthMethods.
     * @example
     * // Create one AuthMethods
     * const AuthMethods = await prisma.authMethods.create({
     *   data: {
     *     // ... data to create a AuthMethods
     *   }
     * })
     * 
     */
    create<T extends AuthMethodsCreateArgs>(args: SelectSubset<T, AuthMethodsCreateArgs<ExtArgs>>): Prisma__AuthMethodsClient<$Result.GetResult<Prisma.$AuthMethodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthMethods.
     * @param {AuthMethodsCreateManyArgs} args - Arguments to create many AuthMethods.
     * @example
     * // Create many AuthMethods
     * const authMethods = await prisma.authMethods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthMethodsCreateManyArgs>(args?: SelectSubset<T, AuthMethodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthMethods and returns the data saved in the database.
     * @param {AuthMethodsCreateManyAndReturnArgs} args - Arguments to create many AuthMethods.
     * @example
     * // Create many AuthMethods
     * const authMethods = await prisma.authMethods.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthMethods and only return the `id`
     * const authMethodsWithIdOnly = await prisma.authMethods.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthMethodsCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthMethodsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthMethodsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthMethods.
     * @param {AuthMethodsDeleteArgs} args - Arguments to delete one AuthMethods.
     * @example
     * // Delete one AuthMethods
     * const AuthMethods = await prisma.authMethods.delete({
     *   where: {
     *     // ... filter to delete one AuthMethods
     *   }
     * })
     * 
     */
    delete<T extends AuthMethodsDeleteArgs>(args: SelectSubset<T, AuthMethodsDeleteArgs<ExtArgs>>): Prisma__AuthMethodsClient<$Result.GetResult<Prisma.$AuthMethodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthMethods.
     * @param {AuthMethodsUpdateArgs} args - Arguments to update one AuthMethods.
     * @example
     * // Update one AuthMethods
     * const authMethods = await prisma.authMethods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthMethodsUpdateArgs>(args: SelectSubset<T, AuthMethodsUpdateArgs<ExtArgs>>): Prisma__AuthMethodsClient<$Result.GetResult<Prisma.$AuthMethodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthMethods.
     * @param {AuthMethodsDeleteManyArgs} args - Arguments to filter AuthMethods to delete.
     * @example
     * // Delete a few AuthMethods
     * const { count } = await prisma.authMethods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthMethodsDeleteManyArgs>(args?: SelectSubset<T, AuthMethodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthMethodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthMethods
     * const authMethods = await prisma.authMethods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthMethodsUpdateManyArgs>(args: SelectSubset<T, AuthMethodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthMethods.
     * @param {AuthMethodsUpsertArgs} args - Arguments to update or create a AuthMethods.
     * @example
     * // Update or create a AuthMethods
     * const authMethods = await prisma.authMethods.upsert({
     *   create: {
     *     // ... data to create a AuthMethods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthMethods we want to update
     *   }
     * })
     */
    upsert<T extends AuthMethodsUpsertArgs>(args: SelectSubset<T, AuthMethodsUpsertArgs<ExtArgs>>): Prisma__AuthMethodsClient<$Result.GetResult<Prisma.$AuthMethodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthMethodsCountArgs} args - Arguments to filter AuthMethods to count.
     * @example
     * // Count the number of AuthMethods
     * const count = await prisma.authMethods.count({
     *   where: {
     *     // ... the filter for the AuthMethods we want to count
     *   }
     * })
    **/
    count<T extends AuthMethodsCountArgs>(
      args?: Subset<T, AuthMethodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthMethodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthMethodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthMethodsAggregateArgs>(args: Subset<T, AuthMethodsAggregateArgs>): Prisma.PrismaPromise<GetAuthMethodsAggregateType<T>>

    /**
     * Group by AuthMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthMethodsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthMethodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthMethodsGroupByArgs['orderBy'] }
        : { orderBy?: AuthMethodsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthMethodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthMethodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthMethods model
   */
  readonly fields: AuthMethodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthMethods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthMethodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    app<T extends AppDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppDefaultArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availableAuth<T extends AvailableAuthMethodsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableAuthMethodsDefaultArgs<ExtArgs>>): Prisma__AvailableAuthMethodsClient<$Result.GetResult<Prisma.$AvailableAuthMethodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthMethods model
   */
  interface AuthMethodsFieldRefs {
    readonly id: FieldRef<"AuthMethods", 'String'>
    readonly appId: FieldRef<"AuthMethods", 'String'>
    readonly authId: FieldRef<"AuthMethods", 'String'>
    readonly metadata: FieldRef<"AuthMethods", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * AuthMethods findUnique
   */
  export type AuthMethodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsInclude<ExtArgs> | null
    /**
     * Filter, which AuthMethods to fetch.
     */
    where: AuthMethodsWhereUniqueInput
  }

  /**
   * AuthMethods findUniqueOrThrow
   */
  export type AuthMethodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsInclude<ExtArgs> | null
    /**
     * Filter, which AuthMethods to fetch.
     */
    where: AuthMethodsWhereUniqueInput
  }

  /**
   * AuthMethods findFirst
   */
  export type AuthMethodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsInclude<ExtArgs> | null
    /**
     * Filter, which AuthMethods to fetch.
     */
    where?: AuthMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthMethods to fetch.
     */
    orderBy?: AuthMethodsOrderByWithRelationInput | AuthMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthMethods.
     */
    cursor?: AuthMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthMethods.
     */
    distinct?: AuthMethodsScalarFieldEnum | AuthMethodsScalarFieldEnum[]
  }

  /**
   * AuthMethods findFirstOrThrow
   */
  export type AuthMethodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsInclude<ExtArgs> | null
    /**
     * Filter, which AuthMethods to fetch.
     */
    where?: AuthMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthMethods to fetch.
     */
    orderBy?: AuthMethodsOrderByWithRelationInput | AuthMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthMethods.
     */
    cursor?: AuthMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthMethods.
     */
    distinct?: AuthMethodsScalarFieldEnum | AuthMethodsScalarFieldEnum[]
  }

  /**
   * AuthMethods findMany
   */
  export type AuthMethodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsInclude<ExtArgs> | null
    /**
     * Filter, which AuthMethods to fetch.
     */
    where?: AuthMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthMethods to fetch.
     */
    orderBy?: AuthMethodsOrderByWithRelationInput | AuthMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthMethods.
     */
    cursor?: AuthMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthMethods.
     */
    skip?: number
    distinct?: AuthMethodsScalarFieldEnum | AuthMethodsScalarFieldEnum[]
  }

  /**
   * AuthMethods create
   */
  export type AuthMethodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthMethods.
     */
    data: XOR<AuthMethodsCreateInput, AuthMethodsUncheckedCreateInput>
  }

  /**
   * AuthMethods createMany
   */
  export type AuthMethodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthMethods.
     */
    data: AuthMethodsCreateManyInput | AuthMethodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthMethods createManyAndReturn
   */
  export type AuthMethodsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * The data used to create many AuthMethods.
     */
    data: AuthMethodsCreateManyInput | AuthMethodsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthMethods update
   */
  export type AuthMethodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthMethods.
     */
    data: XOR<AuthMethodsUpdateInput, AuthMethodsUncheckedUpdateInput>
    /**
     * Choose, which AuthMethods to update.
     */
    where: AuthMethodsWhereUniqueInput
  }

  /**
   * AuthMethods updateMany
   */
  export type AuthMethodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthMethods.
     */
    data: XOR<AuthMethodsUpdateManyMutationInput, AuthMethodsUncheckedUpdateManyInput>
    /**
     * Filter which AuthMethods to update
     */
    where?: AuthMethodsWhereInput
  }

  /**
   * AuthMethods upsert
   */
  export type AuthMethodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthMethods to update in case it exists.
     */
    where: AuthMethodsWhereUniqueInput
    /**
     * In case the AuthMethods found by the `where` argument doesn't exist, create a new AuthMethods with this data.
     */
    create: XOR<AuthMethodsCreateInput, AuthMethodsUncheckedCreateInput>
    /**
     * In case the AuthMethods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthMethodsUpdateInput, AuthMethodsUncheckedUpdateInput>
  }

  /**
   * AuthMethods delete
   */
  export type AuthMethodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsInclude<ExtArgs> | null
    /**
     * Filter which AuthMethods to delete.
     */
    where: AuthMethodsWhereUniqueInput
  }

  /**
   * AuthMethods deleteMany
   */
  export type AuthMethodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthMethods to delete
     */
    where?: AuthMethodsWhereInput
  }

  /**
   * AuthMethods without action
   */
  export type AuthMethodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsInclude<ExtArgs> | null
  }


  /**
   * Model AvailableAuthMethods
   */

  export type AggregateAvailableAuthMethods = {
    _count: AvailableAuthMethodsCountAggregateOutputType | null
    _min: AvailableAuthMethodsMinAggregateOutputType | null
    _max: AvailableAuthMethodsMaxAggregateOutputType | null
  }

  export type AvailableAuthMethodsMinAggregateOutputType = {
    name: string | null
    provider: string | null
    description: string | null
    id: string | null
  }

  export type AvailableAuthMethodsMaxAggregateOutputType = {
    name: string | null
    provider: string | null
    description: string | null
    id: string | null
  }

  export type AvailableAuthMethodsCountAggregateOutputType = {
    name: number
    provider: number
    description: number
    metadata: number
    id: number
    _all: number
  }


  export type AvailableAuthMethodsMinAggregateInputType = {
    name?: true
    provider?: true
    description?: true
    id?: true
  }

  export type AvailableAuthMethodsMaxAggregateInputType = {
    name?: true
    provider?: true
    description?: true
    id?: true
  }

  export type AvailableAuthMethodsCountAggregateInputType = {
    name?: true
    provider?: true
    description?: true
    metadata?: true
    id?: true
    _all?: true
  }

  export type AvailableAuthMethodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableAuthMethods to aggregate.
     */
    where?: AvailableAuthMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableAuthMethods to fetch.
     */
    orderBy?: AvailableAuthMethodsOrderByWithRelationInput | AvailableAuthMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableAuthMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableAuthMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableAuthMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableAuthMethods
    **/
    _count?: true | AvailableAuthMethodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableAuthMethodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableAuthMethodsMaxAggregateInputType
  }

  export type GetAvailableAuthMethodsAggregateType<T extends AvailableAuthMethodsAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableAuthMethods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableAuthMethods[P]>
      : GetScalarType<T[P], AggregateAvailableAuthMethods[P]>
  }




  export type AvailableAuthMethodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableAuthMethodsWhereInput
    orderBy?: AvailableAuthMethodsOrderByWithAggregationInput | AvailableAuthMethodsOrderByWithAggregationInput[]
    by: AvailableAuthMethodsScalarFieldEnum[] | AvailableAuthMethodsScalarFieldEnum
    having?: AvailableAuthMethodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableAuthMethodsCountAggregateInputType | true
    _min?: AvailableAuthMethodsMinAggregateInputType
    _max?: AvailableAuthMethodsMaxAggregateInputType
  }

  export type AvailableAuthMethodsGroupByOutputType = {
    name: string
    provider: string
    description: string
    metadata: JsonValue
    id: string
    _count: AvailableAuthMethodsCountAggregateOutputType | null
    _min: AvailableAuthMethodsMinAggregateOutputType | null
    _max: AvailableAuthMethodsMaxAggregateOutputType | null
  }

  type GetAvailableAuthMethodsGroupByPayload<T extends AvailableAuthMethodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableAuthMethodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableAuthMethodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableAuthMethodsGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableAuthMethodsGroupByOutputType[P]>
        }
      >
    >


  export type AvailableAuthMethodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    provider?: boolean
    description?: boolean
    metadata?: boolean
    id?: boolean
    authMethods?: boolean | AvailableAuthMethods$authMethodsArgs<ExtArgs>
    _count?: boolean | AvailableAuthMethodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableAuthMethods"]>

  export type AvailableAuthMethodsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    provider?: boolean
    description?: boolean
    metadata?: boolean
    id?: boolean
  }, ExtArgs["result"]["availableAuthMethods"]>


  export type AvailableAuthMethodsSelectScalar = {
    name?: boolean
    provider?: boolean
    description?: boolean
    metadata?: boolean
    id?: boolean
  }

  export type AvailableAuthMethodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "provider" | "description" | "metadata" | "id", ExtArgs["result"]["availableAuthMethods"]>
  export type AvailableAuthMethodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authMethods?: boolean | AvailableAuthMethods$authMethodsArgs<ExtArgs>
    _count?: boolean | AvailableAuthMethodsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableAuthMethodsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableAuthMethodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableAuthMethods"
    objects: {
      authMethods: Prisma.$AuthMethodsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      provider: string
      description: string
      metadata: Prisma.JsonValue
      id: string
    }, ExtArgs["result"]["availableAuthMethods"]>
    composites: {}
  }

  type AvailableAuthMethodsGetPayload<S extends boolean | null | undefined | AvailableAuthMethodsDefaultArgs> = $Result.GetResult<Prisma.$AvailableAuthMethodsPayload, S>

  type AvailableAuthMethodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableAuthMethodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableAuthMethodsCountAggregateInputType | true
    }

  export interface AvailableAuthMethodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableAuthMethods'], meta: { name: 'AvailableAuthMethods' } }
    /**
     * Find zero or one AvailableAuthMethods that matches the filter.
     * @param {AvailableAuthMethodsFindUniqueArgs} args - Arguments to find a AvailableAuthMethods
     * @example
     * // Get one AvailableAuthMethods
     * const availableAuthMethods = await prisma.availableAuthMethods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableAuthMethodsFindUniqueArgs>(args: SelectSubset<T, AvailableAuthMethodsFindUniqueArgs<ExtArgs>>): Prisma__AvailableAuthMethodsClient<$Result.GetResult<Prisma.$AvailableAuthMethodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableAuthMethods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableAuthMethodsFindUniqueOrThrowArgs} args - Arguments to find a AvailableAuthMethods
     * @example
     * // Get one AvailableAuthMethods
     * const availableAuthMethods = await prisma.availableAuthMethods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableAuthMethodsFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableAuthMethodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableAuthMethodsClient<$Result.GetResult<Prisma.$AvailableAuthMethodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableAuthMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableAuthMethodsFindFirstArgs} args - Arguments to find a AvailableAuthMethods
     * @example
     * // Get one AvailableAuthMethods
     * const availableAuthMethods = await prisma.availableAuthMethods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableAuthMethodsFindFirstArgs>(args?: SelectSubset<T, AvailableAuthMethodsFindFirstArgs<ExtArgs>>): Prisma__AvailableAuthMethodsClient<$Result.GetResult<Prisma.$AvailableAuthMethodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableAuthMethods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableAuthMethodsFindFirstOrThrowArgs} args - Arguments to find a AvailableAuthMethods
     * @example
     * // Get one AvailableAuthMethods
     * const availableAuthMethods = await prisma.availableAuthMethods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableAuthMethodsFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableAuthMethodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableAuthMethodsClient<$Result.GetResult<Prisma.$AvailableAuthMethodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableAuthMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableAuthMethodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableAuthMethods
     * const availableAuthMethods = await prisma.availableAuthMethods.findMany()
     * 
     * // Get first 10 AvailableAuthMethods
     * const availableAuthMethods = await prisma.availableAuthMethods.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const availableAuthMethodsWithNameOnly = await prisma.availableAuthMethods.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends AvailableAuthMethodsFindManyArgs>(args?: SelectSubset<T, AvailableAuthMethodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableAuthMethodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableAuthMethods.
     * @param {AvailableAuthMethodsCreateArgs} args - Arguments to create a AvailableAuthMethods.
     * @example
     * // Create one AvailableAuthMethods
     * const AvailableAuthMethods = await prisma.availableAuthMethods.create({
     *   data: {
     *     // ... data to create a AvailableAuthMethods
     *   }
     * })
     * 
     */
    create<T extends AvailableAuthMethodsCreateArgs>(args: SelectSubset<T, AvailableAuthMethodsCreateArgs<ExtArgs>>): Prisma__AvailableAuthMethodsClient<$Result.GetResult<Prisma.$AvailableAuthMethodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableAuthMethods.
     * @param {AvailableAuthMethodsCreateManyArgs} args - Arguments to create many AvailableAuthMethods.
     * @example
     * // Create many AvailableAuthMethods
     * const availableAuthMethods = await prisma.availableAuthMethods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableAuthMethodsCreateManyArgs>(args?: SelectSubset<T, AvailableAuthMethodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableAuthMethods and returns the data saved in the database.
     * @param {AvailableAuthMethodsCreateManyAndReturnArgs} args - Arguments to create many AvailableAuthMethods.
     * @example
     * // Create many AvailableAuthMethods
     * const availableAuthMethods = await prisma.availableAuthMethods.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableAuthMethods and only return the `name`
     * const availableAuthMethodsWithNameOnly = await prisma.availableAuthMethods.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableAuthMethodsCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableAuthMethodsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableAuthMethodsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableAuthMethods.
     * @param {AvailableAuthMethodsDeleteArgs} args - Arguments to delete one AvailableAuthMethods.
     * @example
     * // Delete one AvailableAuthMethods
     * const AvailableAuthMethods = await prisma.availableAuthMethods.delete({
     *   where: {
     *     // ... filter to delete one AvailableAuthMethods
     *   }
     * })
     * 
     */
    delete<T extends AvailableAuthMethodsDeleteArgs>(args: SelectSubset<T, AvailableAuthMethodsDeleteArgs<ExtArgs>>): Prisma__AvailableAuthMethodsClient<$Result.GetResult<Prisma.$AvailableAuthMethodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableAuthMethods.
     * @param {AvailableAuthMethodsUpdateArgs} args - Arguments to update one AvailableAuthMethods.
     * @example
     * // Update one AvailableAuthMethods
     * const availableAuthMethods = await prisma.availableAuthMethods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableAuthMethodsUpdateArgs>(args: SelectSubset<T, AvailableAuthMethodsUpdateArgs<ExtArgs>>): Prisma__AvailableAuthMethodsClient<$Result.GetResult<Prisma.$AvailableAuthMethodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableAuthMethods.
     * @param {AvailableAuthMethodsDeleteManyArgs} args - Arguments to filter AvailableAuthMethods to delete.
     * @example
     * // Delete a few AvailableAuthMethods
     * const { count } = await prisma.availableAuthMethods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableAuthMethodsDeleteManyArgs>(args?: SelectSubset<T, AvailableAuthMethodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableAuthMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableAuthMethodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableAuthMethods
     * const availableAuthMethods = await prisma.availableAuthMethods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableAuthMethodsUpdateManyArgs>(args: SelectSubset<T, AvailableAuthMethodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AvailableAuthMethods.
     * @param {AvailableAuthMethodsUpsertArgs} args - Arguments to update or create a AvailableAuthMethods.
     * @example
     * // Update or create a AvailableAuthMethods
     * const availableAuthMethods = await prisma.availableAuthMethods.upsert({
     *   create: {
     *     // ... data to create a AvailableAuthMethods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableAuthMethods we want to update
     *   }
     * })
     */
    upsert<T extends AvailableAuthMethodsUpsertArgs>(args: SelectSubset<T, AvailableAuthMethodsUpsertArgs<ExtArgs>>): Prisma__AvailableAuthMethodsClient<$Result.GetResult<Prisma.$AvailableAuthMethodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableAuthMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableAuthMethodsCountArgs} args - Arguments to filter AvailableAuthMethods to count.
     * @example
     * // Count the number of AvailableAuthMethods
     * const count = await prisma.availableAuthMethods.count({
     *   where: {
     *     // ... the filter for the AvailableAuthMethods we want to count
     *   }
     * })
    **/
    count<T extends AvailableAuthMethodsCountArgs>(
      args?: Subset<T, AvailableAuthMethodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableAuthMethodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableAuthMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableAuthMethodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailableAuthMethodsAggregateArgs>(args: Subset<T, AvailableAuthMethodsAggregateArgs>): Prisma.PrismaPromise<GetAvailableAuthMethodsAggregateType<T>>

    /**
     * Group by AvailableAuthMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableAuthMethodsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailableAuthMethodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableAuthMethodsGroupByArgs['orderBy'] }
        : { orderBy?: AvailableAuthMethodsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailableAuthMethodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableAuthMethodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableAuthMethods model
   */
  readonly fields: AvailableAuthMethodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableAuthMethods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableAuthMethodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authMethods<T extends AvailableAuthMethods$authMethodsArgs<ExtArgs> = {}>(args?: Subset<T, AvailableAuthMethods$authMethodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthMethodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailableAuthMethods model
   */
  interface AvailableAuthMethodsFieldRefs {
    readonly name: FieldRef<"AvailableAuthMethods", 'String'>
    readonly provider: FieldRef<"AvailableAuthMethods", 'String'>
    readonly description: FieldRef<"AvailableAuthMethods", 'String'>
    readonly metadata: FieldRef<"AvailableAuthMethods", 'Json'>
    readonly id: FieldRef<"AvailableAuthMethods", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableAuthMethods findUnique
   */
  export type AvailableAuthMethodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAuthMethods
     */
    select?: AvailableAuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAuthMethods
     */
    omit?: AvailableAuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableAuthMethodsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAuthMethods to fetch.
     */
    where: AvailableAuthMethodsWhereUniqueInput
  }

  /**
   * AvailableAuthMethods findUniqueOrThrow
   */
  export type AvailableAuthMethodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAuthMethods
     */
    select?: AvailableAuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAuthMethods
     */
    omit?: AvailableAuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableAuthMethodsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAuthMethods to fetch.
     */
    where: AvailableAuthMethodsWhereUniqueInput
  }

  /**
   * AvailableAuthMethods findFirst
   */
  export type AvailableAuthMethodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAuthMethods
     */
    select?: AvailableAuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAuthMethods
     */
    omit?: AvailableAuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableAuthMethodsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAuthMethods to fetch.
     */
    where?: AvailableAuthMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableAuthMethods to fetch.
     */
    orderBy?: AvailableAuthMethodsOrderByWithRelationInput | AvailableAuthMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableAuthMethods.
     */
    cursor?: AvailableAuthMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableAuthMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableAuthMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableAuthMethods.
     */
    distinct?: AvailableAuthMethodsScalarFieldEnum | AvailableAuthMethodsScalarFieldEnum[]
  }

  /**
   * AvailableAuthMethods findFirstOrThrow
   */
  export type AvailableAuthMethodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAuthMethods
     */
    select?: AvailableAuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAuthMethods
     */
    omit?: AvailableAuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableAuthMethodsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAuthMethods to fetch.
     */
    where?: AvailableAuthMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableAuthMethods to fetch.
     */
    orderBy?: AvailableAuthMethodsOrderByWithRelationInput | AvailableAuthMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableAuthMethods.
     */
    cursor?: AvailableAuthMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableAuthMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableAuthMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableAuthMethods.
     */
    distinct?: AvailableAuthMethodsScalarFieldEnum | AvailableAuthMethodsScalarFieldEnum[]
  }

  /**
   * AvailableAuthMethods findMany
   */
  export type AvailableAuthMethodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAuthMethods
     */
    select?: AvailableAuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAuthMethods
     */
    omit?: AvailableAuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableAuthMethodsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAuthMethods to fetch.
     */
    where?: AvailableAuthMethodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableAuthMethods to fetch.
     */
    orderBy?: AvailableAuthMethodsOrderByWithRelationInput | AvailableAuthMethodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableAuthMethods.
     */
    cursor?: AvailableAuthMethodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableAuthMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableAuthMethods.
     */
    skip?: number
    distinct?: AvailableAuthMethodsScalarFieldEnum | AvailableAuthMethodsScalarFieldEnum[]
  }

  /**
   * AvailableAuthMethods create
   */
  export type AvailableAuthMethodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAuthMethods
     */
    select?: AvailableAuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAuthMethods
     */
    omit?: AvailableAuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableAuthMethodsInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableAuthMethods.
     */
    data: XOR<AvailableAuthMethodsCreateInput, AvailableAuthMethodsUncheckedCreateInput>
  }

  /**
   * AvailableAuthMethods createMany
   */
  export type AvailableAuthMethodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableAuthMethods.
     */
    data: AvailableAuthMethodsCreateManyInput | AvailableAuthMethodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableAuthMethods createManyAndReturn
   */
  export type AvailableAuthMethodsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAuthMethods
     */
    select?: AvailableAuthMethodsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAuthMethods
     */
    omit?: AvailableAuthMethodsOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableAuthMethods.
     */
    data: AvailableAuthMethodsCreateManyInput | AvailableAuthMethodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableAuthMethods update
   */
  export type AvailableAuthMethodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAuthMethods
     */
    select?: AvailableAuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAuthMethods
     */
    omit?: AvailableAuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableAuthMethodsInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableAuthMethods.
     */
    data: XOR<AvailableAuthMethodsUpdateInput, AvailableAuthMethodsUncheckedUpdateInput>
    /**
     * Choose, which AvailableAuthMethods to update.
     */
    where: AvailableAuthMethodsWhereUniqueInput
  }

  /**
   * AvailableAuthMethods updateMany
   */
  export type AvailableAuthMethodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableAuthMethods.
     */
    data: XOR<AvailableAuthMethodsUpdateManyMutationInput, AvailableAuthMethodsUncheckedUpdateManyInput>
    /**
     * Filter which AvailableAuthMethods to update
     */
    where?: AvailableAuthMethodsWhereInput
  }

  /**
   * AvailableAuthMethods upsert
   */
  export type AvailableAuthMethodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAuthMethods
     */
    select?: AvailableAuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAuthMethods
     */
    omit?: AvailableAuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableAuthMethodsInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableAuthMethods to update in case it exists.
     */
    where: AvailableAuthMethodsWhereUniqueInput
    /**
     * In case the AvailableAuthMethods found by the `where` argument doesn't exist, create a new AvailableAuthMethods with this data.
     */
    create: XOR<AvailableAuthMethodsCreateInput, AvailableAuthMethodsUncheckedCreateInput>
    /**
     * In case the AvailableAuthMethods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableAuthMethodsUpdateInput, AvailableAuthMethodsUncheckedUpdateInput>
  }

  /**
   * AvailableAuthMethods delete
   */
  export type AvailableAuthMethodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAuthMethods
     */
    select?: AvailableAuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAuthMethods
     */
    omit?: AvailableAuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableAuthMethodsInclude<ExtArgs> | null
    /**
     * Filter which AvailableAuthMethods to delete.
     */
    where: AvailableAuthMethodsWhereUniqueInput
  }

  /**
   * AvailableAuthMethods deleteMany
   */
  export type AvailableAuthMethodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableAuthMethods to delete
     */
    where?: AvailableAuthMethodsWhereInput
  }

  /**
   * AvailableAuthMethods.authMethods
   */
  export type AvailableAuthMethods$authMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthMethods
     */
    select?: AuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthMethods
     */
    omit?: AuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthMethodsInclude<ExtArgs> | null
    where?: AuthMethodsWhereInput
    orderBy?: AuthMethodsOrderByWithRelationInput | AuthMethodsOrderByWithRelationInput[]
    cursor?: AuthMethodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthMethodsScalarFieldEnum | AuthMethodsScalarFieldEnum[]
  }

  /**
   * AvailableAuthMethods without action
   */
  export type AvailableAuthMethodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAuthMethods
     */
    select?: AvailableAuthMethodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAuthMethods
     */
    omit?: AvailableAuthMethodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableAuthMethodsInclude<ExtArgs> | null
  }


  /**
   * Model Zap
   */

  export type AggregateZap = {
    _count: ZapCountAggregateOutputType | null
    _min: ZapMinAggregateOutputType | null
    _max: ZapMaxAggregateOutputType | null
  }

  export type ZapMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    image: string | null
    templateId: string | null
  }

  export type ZapMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    userId: string | null
    image: string | null
    templateId: string | null
  }

  export type ZapCountAggregateOutputType = {
    id: number
    name: number
    description: number
    metadata: number
    userId: number
    image: number
    templateId: number
    _all: number
  }


  export type ZapMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    image?: true
    templateId?: true
  }

  export type ZapMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    image?: true
    templateId?: true
  }

  export type ZapCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    metadata?: true
    userId?: true
    image?: true
    templateId?: true
    _all?: true
  }

  export type ZapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zap to aggregate.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zaps
    **/
    _count?: true | ZapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapMaxAggregateInputType
  }

  export type GetZapAggregateType<T extends ZapAggregateArgs> = {
        [P in keyof T & keyof AggregateZap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZap[P]>
      : GetScalarType<T[P], AggregateZap[P]>
  }




  export type ZapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapWhereInput
    orderBy?: ZapOrderByWithAggregationInput | ZapOrderByWithAggregationInput[]
    by: ZapScalarFieldEnum[] | ZapScalarFieldEnum
    having?: ZapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapCountAggregateInputType | true
    _min?: ZapMinAggregateInputType
    _max?: ZapMaxAggregateInputType
  }

  export type ZapGroupByOutputType = {
    id: string
    name: string
    description: string
    metadata: JsonValue
    userId: string
    image: string | null
    templateId: string | null
    _count: ZapCountAggregateOutputType | null
    _min: ZapMinAggregateOutputType | null
    _max: ZapMaxAggregateOutputType | null
  }

  type GetZapGroupByPayload<T extends ZapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapGroupByOutputType[P]>
            : GetScalarType<T[P], ZapGroupByOutputType[P]>
        }
      >
    >


  export type ZapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    metadata?: boolean
    userId?: boolean
    image?: boolean
    templateId?: boolean
    actions?: boolean | Zap$actionsArgs<ExtArgs>
    trigger?: boolean | Zap$triggerArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    zapRuns?: boolean | Zap$zapRunsArgs<ExtArgs>
    template?: boolean | Zap$templateArgs<ExtArgs>
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    metadata?: boolean
    userId?: boolean
    image?: boolean
    templateId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Zap$templateArgs<ExtArgs>
  }, ExtArgs["result"]["zap"]>


  export type ZapSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    metadata?: boolean
    userId?: boolean
    image?: boolean
    templateId?: boolean
  }

  export type ZapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "metadata" | "userId" | "image" | "templateId", ExtArgs["result"]["zap"]>
  export type ZapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | Zap$actionsArgs<ExtArgs>
    trigger?: boolean | Zap$triggerArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    zapRuns?: boolean | Zap$zapRunsArgs<ExtArgs>
    template?: boolean | Zap$templateArgs<ExtArgs>
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | Zap$templateArgs<ExtArgs>
  }

  export type $ZapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zap"
    objects: {
      actions: Prisma.$ActionPayload<ExtArgs>[]
      trigger: Prisma.$TriggerPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      zapRuns: Prisma.$ZapRunPayload<ExtArgs>[]
      template: Prisma.$ZapTemplatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      metadata: Prisma.JsonValue
      userId: string
      image: string | null
      templateId: string | null
    }, ExtArgs["result"]["zap"]>
    composites: {}
  }

  type ZapGetPayload<S extends boolean | null | undefined | ZapDefaultArgs> = $Result.GetResult<Prisma.$ZapPayload, S>

  type ZapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapCountAggregateInputType | true
    }

  export interface ZapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zap'], meta: { name: 'Zap' } }
    /**
     * Find zero or one Zap that matches the filter.
     * @param {ZapFindUniqueArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapFindUniqueArgs>(args: SelectSubset<T, ZapFindUniqueArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapFindUniqueOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapFindFirstArgs>(args?: SelectSubset<T, ZapFindFirstArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zaps
     * const zaps = await prisma.zap.findMany()
     * 
     * // Get first 10 Zaps
     * const zaps = await prisma.zap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapWithIdOnly = await prisma.zap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapFindManyArgs>(args?: SelectSubset<T, ZapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zap.
     * @param {ZapCreateArgs} args - Arguments to create a Zap.
     * @example
     * // Create one Zap
     * const Zap = await prisma.zap.create({
     *   data: {
     *     // ... data to create a Zap
     *   }
     * })
     * 
     */
    create<T extends ZapCreateArgs>(args: SelectSubset<T, ZapCreateArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zaps.
     * @param {ZapCreateManyArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapCreateManyArgs>(args?: SelectSubset<T, ZapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zaps and returns the data saved in the database.
     * @param {ZapCreateManyAndReturnArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zap.
     * @param {ZapDeleteArgs} args - Arguments to delete one Zap.
     * @example
     * // Delete one Zap
     * const Zap = await prisma.zap.delete({
     *   where: {
     *     // ... filter to delete one Zap
     *   }
     * })
     * 
     */
    delete<T extends ZapDeleteArgs>(args: SelectSubset<T, ZapDeleteArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zap.
     * @param {ZapUpdateArgs} args - Arguments to update one Zap.
     * @example
     * // Update one Zap
     * const zap = await prisma.zap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapUpdateArgs>(args: SelectSubset<T, ZapUpdateArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zaps.
     * @param {ZapDeleteManyArgs} args - Arguments to filter Zaps to delete.
     * @example
     * // Delete a few Zaps
     * const { count } = await prisma.zap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapDeleteManyArgs>(args?: SelectSubset<T, ZapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapUpdateManyArgs>(args: SelectSubset<T, ZapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Zap.
     * @param {ZapUpsertArgs} args - Arguments to update or create a Zap.
     * @example
     * // Update or create a Zap
     * const zap = await prisma.zap.upsert({
     *   create: {
     *     // ... data to create a Zap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zap we want to update
     *   }
     * })
     */
    upsert<T extends ZapUpsertArgs>(args: SelectSubset<T, ZapUpsertArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapCountArgs} args - Arguments to filter Zaps to count.
     * @example
     * // Count the number of Zaps
     * const count = await prisma.zap.count({
     *   where: {
     *     // ... the filter for the Zaps we want to count
     *   }
     * })
    **/
    count<T extends ZapCountArgs>(
      args?: Subset<T, ZapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapAggregateArgs>(args: Subset<T, ZapAggregateArgs>): Prisma.PrismaPromise<GetZapAggregateType<T>>

    /**
     * Group by Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapGroupByArgs['orderBy'] }
        : { orderBy?: ZapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zap model
   */
  readonly fields: ZapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actions<T extends Zap$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Zap$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trigger<T extends Zap$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Zap$triggerArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zapRuns<T extends Zap$zapRunsArgs<ExtArgs> = {}>(args?: Subset<T, Zap$zapRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    template<T extends Zap$templateArgs<ExtArgs> = {}>(args?: Subset<T, Zap$templateArgs<ExtArgs>>): Prisma__ZapTemplateClient<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Zap model
   */
  interface ZapFieldRefs {
    readonly id: FieldRef<"Zap", 'String'>
    readonly name: FieldRef<"Zap", 'String'>
    readonly description: FieldRef<"Zap", 'String'>
    readonly metadata: FieldRef<"Zap", 'Json'>
    readonly userId: FieldRef<"Zap", 'String'>
    readonly image: FieldRef<"Zap", 'String'>
    readonly templateId: FieldRef<"Zap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Zap findUnique
   */
  export type ZapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap findUniqueOrThrow
   */
  export type ZapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap findFirst
   */
  export type ZapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap findFirstOrThrow
   */
  export type ZapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap findMany
   */
  export type ZapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zaps to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap create
   */
  export type ZapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The data needed to create a Zap.
     */
    data: XOR<ZapCreateInput, ZapUncheckedCreateInput>
  }

  /**
   * Zap createMany
   */
  export type ZapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zap createManyAndReturn
   */
  export type ZapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Zap update
   */
  export type ZapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The data needed to update a Zap.
     */
    data: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>
    /**
     * Choose, which Zap to update.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap updateMany
   */
  export type ZapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zaps.
     */
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyInput>
    /**
     * Filter which Zaps to update
     */
    where?: ZapWhereInput
  }

  /**
   * Zap upsert
   */
  export type ZapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The filter to search for the Zap to update in case it exists.
     */
    where: ZapWhereUniqueInput
    /**
     * In case the Zap found by the `where` argument doesn't exist, create a new Zap with this data.
     */
    create: XOR<ZapCreateInput, ZapUncheckedCreateInput>
    /**
     * In case the Zap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>
  }

  /**
   * Zap delete
   */
  export type ZapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter which Zap to delete.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap deleteMany
   */
  export type ZapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zaps to delete
     */
    where?: ZapWhereInput
  }

  /**
   * Zap.actions
   */
  export type Zap$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Zap.trigger
   */
  export type Zap$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
  }

  /**
   * Zap.zapRuns
   */
  export type Zap$zapRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    where?: ZapRunWhereInput
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[]
    cursor?: ZapRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * Zap.template
   */
  export type Zap$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    where?: ZapTemplateWhereInput
  }

  /**
   * Zap without action
   */
  export type ZapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    zapId: string | null
    availableTriggerId: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    zapId: string | null
    availableTriggerId: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    name: number
    description: number
    zapId: number
    metadata: number
    availableTriggerId: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    zapId?: true
    availableTriggerId?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    zapId?: true
    availableTriggerId?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    zapId?: true
    metadata?: true
    availableTriggerId?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    name: string
    description: string
    zapId: string
    metadata: JsonValue
    availableTriggerId: string
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    zapId?: boolean
    metadata?: boolean
    availableTriggerId?: boolean
    available?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    zapId?: boolean
    metadata?: boolean
    availableTriggerId?: boolean
    available?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>


  export type TriggerSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    zapId?: boolean
    metadata?: boolean
    availableTriggerId?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "zapId" | "metadata" | "availableTriggerId", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    available?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    available?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      available: Prisma.$AvailableTriggersPayload<ExtArgs>
      zap: Prisma.$ZapPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      zapId: string
      metadata: Prisma.JsonValue
      availableTriggerId: string
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    available<T extends AvailableTriggersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggersDefaultArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly name: FieldRef<"Trigger", 'String'>
    readonly description: FieldRef<"Trigger", 'String'>
    readonly zapId: FieldRef<"Trigger", 'String'>
    readonly metadata: FieldRef<"Trigger", 'Json'>
    readonly availableTriggerId: FieldRef<"Trigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionAvgAggregateOutputType = {
    sortingOrder: number | null
  }

  export type ActionSumAggregateOutputType = {
    sortingOrder: number | null
  }

  export type ActionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    zapId: string | null
    sortingOrder: number | null
    actionType: string | null
  }

  export type ActionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    zapId: string | null
    sortingOrder: number | null
    actionType: string | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    metadata: number
    zapId: number
    sortingOrder: number
    actionType: number
    _all: number
  }


  export type ActionAvgAggregateInputType = {
    sortingOrder?: true
  }

  export type ActionSumAggregateInputType = {
    sortingOrder?: true
  }

  export type ActionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    zapId?: true
    sortingOrder?: true
    actionType?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    zapId?: true
    sortingOrder?: true
    actionType?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    metadata?: true
    zapId?: true
    sortingOrder?: true
    actionType?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _avg?: ActionAvgAggregateInputType
    _sum?: ActionSumAggregateInputType
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: string
    name: string
    description: string
    metadata: JsonValue
    zapId: string
    sortingOrder: number
    actionType: string
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    metadata?: boolean
    zapId?: boolean
    sortingOrder?: boolean
    actionType?: boolean
    available?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    metadata?: boolean
    zapId?: boolean
    sortingOrder?: boolean
    actionType?: boolean
    available?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>


  export type ActionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    metadata?: boolean
    zapId?: boolean
    sortingOrder?: boolean
    actionType?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "metadata" | "zapId" | "sortingOrder" | "actionType", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    available?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    available?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      available: Prisma.$AvailableActionsPayload<ExtArgs>
      zap: Prisma.$ZapPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      metadata: Prisma.JsonValue
      zapId: string
      sortingOrder: number
      actionType: string
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    available<T extends AvailableActionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActionsDefaultArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'String'>
    readonly name: FieldRef<"Action", 'String'>
    readonly description: FieldRef<"Action", 'String'>
    readonly metadata: FieldRef<"Action", 'Json'>
    readonly zapId: FieldRef<"Action", 'String'>
    readonly sortingOrder: FieldRef<"Action", 'Int'>
    readonly actionType: FieldRef<"Action", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Model AvailableTriggers
   */

  export type AggregateAvailableTriggers = {
    _count: AvailableTriggersCountAggregateOutputType | null
    _min: AvailableTriggersMinAggregateOutputType | null
    _max: AvailableTriggersMaxAggregateOutputType | null
  }

  export type AvailableTriggersMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: string | null
    appId: string | null
  }

  export type AvailableTriggersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: string | null
    appId: string | null
  }

  export type AvailableTriggersCountAggregateOutputType = {
    id: number
    name: number
    description: number
    metadata: number
    configMetadata: number
    type: number
    appId: number
    _all: number
  }


  export type AvailableTriggersMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    appId?: true
  }

  export type AvailableTriggersMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    appId?: true
  }

  export type AvailableTriggersCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    metadata?: true
    configMetadata?: true
    type?: true
    appId?: true
    _all?: true
  }

  export type AvailableTriggersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTriggers to aggregate.
     */
    where?: AvailableTriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableTriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableTriggers
    **/
    _count?: true | AvailableTriggersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableTriggersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableTriggersMaxAggregateInputType
  }

  export type GetAvailableTriggersAggregateType<T extends AvailableTriggersAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableTriggers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableTriggers[P]>
      : GetScalarType<T[P], AggregateAvailableTriggers[P]>
  }




  export type AvailableTriggersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableTriggersWhereInput
    orderBy?: AvailableTriggersOrderByWithAggregationInput | AvailableTriggersOrderByWithAggregationInput[]
    by: AvailableTriggersScalarFieldEnum[] | AvailableTriggersScalarFieldEnum
    having?: AvailableTriggersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableTriggersCountAggregateInputType | true
    _min?: AvailableTriggersMinAggregateInputType
    _max?: AvailableTriggersMaxAggregateInputType
  }

  export type AvailableTriggersGroupByOutputType = {
    id: string
    name: string
    description: string
    metadata: JsonValue
    configMetadata: JsonValue
    type: string
    appId: string
    _count: AvailableTriggersCountAggregateOutputType | null
    _min: AvailableTriggersMinAggregateOutputType | null
    _max: AvailableTriggersMaxAggregateOutputType | null
  }

  type GetAvailableTriggersGroupByPayload<T extends AvailableTriggersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableTriggersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableTriggersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableTriggersGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableTriggersGroupByOutputType[P]>
        }
      >
    >


  export type AvailableTriggersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    metadata?: boolean
    configMetadata?: boolean
    type?: boolean
    appId?: boolean
    app?: boolean | AppDefaultArgs<ExtArgs>
    triggers?: boolean | AvailableTriggers$triggersArgs<ExtArgs>
    templates?: boolean | AvailableTriggers$templatesArgs<ExtArgs>
    _count?: boolean | AvailableTriggersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableTriggers"]>

  export type AvailableTriggersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    metadata?: boolean
    configMetadata?: boolean
    type?: boolean
    appId?: boolean
    app?: boolean | AppDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableTriggers"]>


  export type AvailableTriggersSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    metadata?: boolean
    configMetadata?: boolean
    type?: boolean
    appId?: boolean
  }

  export type AvailableTriggersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "metadata" | "configMetadata" | "type" | "appId", ExtArgs["result"]["availableTriggers"]>
  export type AvailableTriggersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | AppDefaultArgs<ExtArgs>
    triggers?: boolean | AvailableTriggers$triggersArgs<ExtArgs>
    templates?: boolean | AvailableTriggers$templatesArgs<ExtArgs>
    _count?: boolean | AvailableTriggersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableTriggersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | AppDefaultArgs<ExtArgs>
  }

  export type $AvailableTriggersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableTriggers"
    objects: {
      app: Prisma.$AppPayload<ExtArgs>
      triggers: Prisma.$TriggerPayload<ExtArgs>[]
      templates: Prisma.$ZapTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      metadata: Prisma.JsonValue
      configMetadata: Prisma.JsonValue
      type: string
      appId: string
    }, ExtArgs["result"]["availableTriggers"]>
    composites: {}
  }

  type AvailableTriggersGetPayload<S extends boolean | null | undefined | AvailableTriggersDefaultArgs> = $Result.GetResult<Prisma.$AvailableTriggersPayload, S>

  type AvailableTriggersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableTriggersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableTriggersCountAggregateInputType | true
    }

  export interface AvailableTriggersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableTriggers'], meta: { name: 'AvailableTriggers' } }
    /**
     * Find zero or one AvailableTriggers that matches the filter.
     * @param {AvailableTriggersFindUniqueArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableTriggersFindUniqueArgs>(args: SelectSubset<T, AvailableTriggersFindUniqueArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableTriggers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableTriggersFindUniqueOrThrowArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableTriggersFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableTriggersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersFindFirstArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableTriggersFindFirstArgs>(args?: SelectSubset<T, AvailableTriggersFindFirstArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTriggers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersFindFirstOrThrowArgs} args - Arguments to find a AvailableTriggers
     * @example
     * // Get one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableTriggersFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableTriggersFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findMany()
     * 
     * // Get first 10 AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableTriggersWithIdOnly = await prisma.availableTriggers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableTriggersFindManyArgs>(args?: SelectSubset<T, AvailableTriggersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableTriggers.
     * @param {AvailableTriggersCreateArgs} args - Arguments to create a AvailableTriggers.
     * @example
     * // Create one AvailableTriggers
     * const AvailableTriggers = await prisma.availableTriggers.create({
     *   data: {
     *     // ... data to create a AvailableTriggers
     *   }
     * })
     * 
     */
    create<T extends AvailableTriggersCreateArgs>(args: SelectSubset<T, AvailableTriggersCreateArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableTriggers.
     * @param {AvailableTriggersCreateManyArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableTriggersCreateManyArgs>(args?: SelectSubset<T, AvailableTriggersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableTriggers and returns the data saved in the database.
     * @param {AvailableTriggersCreateManyAndReturnArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableTriggers and only return the `id`
     * const availableTriggersWithIdOnly = await prisma.availableTriggers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableTriggersCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableTriggersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableTriggers.
     * @param {AvailableTriggersDeleteArgs} args - Arguments to delete one AvailableTriggers.
     * @example
     * // Delete one AvailableTriggers
     * const AvailableTriggers = await prisma.availableTriggers.delete({
     *   where: {
     *     // ... filter to delete one AvailableTriggers
     *   }
     * })
     * 
     */
    delete<T extends AvailableTriggersDeleteArgs>(args: SelectSubset<T, AvailableTriggersDeleteArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableTriggers.
     * @param {AvailableTriggersUpdateArgs} args - Arguments to update one AvailableTriggers.
     * @example
     * // Update one AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableTriggersUpdateArgs>(args: SelectSubset<T, AvailableTriggersUpdateArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableTriggers.
     * @param {AvailableTriggersDeleteManyArgs} args - Arguments to filter AvailableTriggers to delete.
     * @example
     * // Delete a few AvailableTriggers
     * const { count } = await prisma.availableTriggers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableTriggersDeleteManyArgs>(args?: SelectSubset<T, AvailableTriggersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableTriggersUpdateManyArgs>(args: SelectSubset<T, AvailableTriggersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AvailableTriggers.
     * @param {AvailableTriggersUpsertArgs} args - Arguments to update or create a AvailableTriggers.
     * @example
     * // Update or create a AvailableTriggers
     * const availableTriggers = await prisma.availableTriggers.upsert({
     *   create: {
     *     // ... data to create a AvailableTriggers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableTriggers we want to update
     *   }
     * })
     */
    upsert<T extends AvailableTriggersUpsertArgs>(args: SelectSubset<T, AvailableTriggersUpsertArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersCountArgs} args - Arguments to filter AvailableTriggers to count.
     * @example
     * // Count the number of AvailableTriggers
     * const count = await prisma.availableTriggers.count({
     *   where: {
     *     // ... the filter for the AvailableTriggers we want to count
     *   }
     * })
    **/
    count<T extends AvailableTriggersCountArgs>(
      args?: Subset<T, AvailableTriggersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableTriggersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailableTriggersAggregateArgs>(args: Subset<T, AvailableTriggersAggregateArgs>): Prisma.PrismaPromise<GetAvailableTriggersAggregateType<T>>

    /**
     * Group by AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailableTriggersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableTriggersGroupByArgs['orderBy'] }
        : { orderBy?: AvailableTriggersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailableTriggersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableTriggersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableTriggers model
   */
  readonly fields: AvailableTriggersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableTriggers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableTriggersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    app<T extends AppDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppDefaultArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    triggers<T extends AvailableTriggers$triggersArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggers$triggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends AvailableTriggers$templatesArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggers$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailableTriggers model
   */
  interface AvailableTriggersFieldRefs {
    readonly id: FieldRef<"AvailableTriggers", 'String'>
    readonly name: FieldRef<"AvailableTriggers", 'String'>
    readonly description: FieldRef<"AvailableTriggers", 'String'>
    readonly metadata: FieldRef<"AvailableTriggers", 'Json'>
    readonly configMetadata: FieldRef<"AvailableTriggers", 'Json'>
    readonly type: FieldRef<"AvailableTriggers", 'String'>
    readonly appId: FieldRef<"AvailableTriggers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableTriggers findUnique
   */
  export type AvailableTriggersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where: AvailableTriggersWhereUniqueInput
  }

  /**
   * AvailableTriggers findUniqueOrThrow
   */
  export type AvailableTriggersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where: AvailableTriggersWhereUniqueInput
  }

  /**
   * AvailableTriggers findFirst
   */
  export type AvailableTriggersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggersScalarFieldEnum | AvailableTriggersScalarFieldEnum[]
  }

  /**
   * AvailableTriggers findFirstOrThrow
   */
  export type AvailableTriggersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggersScalarFieldEnum | AvailableTriggersScalarFieldEnum[]
  }

  /**
   * AvailableTriggers findMany
   */
  export type AvailableTriggersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggersOrderByWithRelationInput | AvailableTriggersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableTriggers.
     */
    cursor?: AvailableTriggersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    distinct?: AvailableTriggersScalarFieldEnum | AvailableTriggersScalarFieldEnum[]
  }

  /**
   * AvailableTriggers create
   */
  export type AvailableTriggersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableTriggers.
     */
    data: XOR<AvailableTriggersCreateInput, AvailableTriggersUncheckedCreateInput>
  }

  /**
   * AvailableTriggers createMany
   */
  export type AvailableTriggersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggersCreateManyInput | AvailableTriggersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTriggers createManyAndReturn
   */
  export type AvailableTriggersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggersCreateManyInput | AvailableTriggersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailableTriggers update
   */
  export type AvailableTriggersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableTriggers.
     */
    data: XOR<AvailableTriggersUpdateInput, AvailableTriggersUncheckedUpdateInput>
    /**
     * Choose, which AvailableTriggers to update.
     */
    where: AvailableTriggersWhereUniqueInput
  }

  /**
   * AvailableTriggers updateMany
   */
  export type AvailableTriggersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggersUpdateManyMutationInput, AvailableTriggersUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggersWhereInput
  }

  /**
   * AvailableTriggers upsert
   */
  export type AvailableTriggersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableTriggers to update in case it exists.
     */
    where: AvailableTriggersWhereUniqueInput
    /**
     * In case the AvailableTriggers found by the `where` argument doesn't exist, create a new AvailableTriggers with this data.
     */
    create: XOR<AvailableTriggersCreateInput, AvailableTriggersUncheckedCreateInput>
    /**
     * In case the AvailableTriggers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableTriggersUpdateInput, AvailableTriggersUncheckedUpdateInput>
  }

  /**
   * AvailableTriggers delete
   */
  export type AvailableTriggersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
    /**
     * Filter which AvailableTriggers to delete.
     */
    where: AvailableTriggersWhereUniqueInput
  }

  /**
   * AvailableTriggers deleteMany
   */
  export type AvailableTriggersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTriggers to delete
     */
    where?: AvailableTriggersWhereInput
  }

  /**
   * AvailableTriggers.triggers
   */
  export type AvailableTriggers$triggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * AvailableTriggers.templates
   */
  export type AvailableTriggers$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    where?: ZapTemplateWhereInput
    orderBy?: ZapTemplateOrderByWithRelationInput | ZapTemplateOrderByWithRelationInput[]
    cursor?: ZapTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapTemplateScalarFieldEnum | ZapTemplateScalarFieldEnum[]
  }

  /**
   * AvailableTriggers without action
   */
  export type AvailableTriggersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggers
     */
    select?: AvailableTriggersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTriggers
     */
    omit?: AvailableTriggersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggersInclude<ExtArgs> | null
  }


  /**
   * Model AvailableActions
   */

  export type AggregateAvailableActions = {
    _count: AvailableActionsCountAggregateOutputType | null
    _min: AvailableActionsMinAggregateOutputType | null
    _max: AvailableActionsMaxAggregateOutputType | null
  }

  export type AvailableActionsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: string | null
    appId: string | null
  }

  export type AvailableActionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: string | null
    appId: string | null
  }

  export type AvailableActionsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    metadata: number
    configMetadata: number
    type: number
    appId: number
    _all: number
  }


  export type AvailableActionsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    appId?: true
  }

  export type AvailableActionsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    appId?: true
  }

  export type AvailableActionsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    metadata?: true
    configMetadata?: true
    type?: true
    appId?: true
    _all?: true
  }

  export type AvailableActionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableActions to aggregate.
     */
    where?: AvailableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableActions
    **/
    _count?: true | AvailableActionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableActionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableActionsMaxAggregateInputType
  }

  export type GetAvailableActionsAggregateType<T extends AvailableActionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableActions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableActions[P]>
      : GetScalarType<T[P], AggregateAvailableActions[P]>
  }




  export type AvailableActionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableActionsWhereInput
    orderBy?: AvailableActionsOrderByWithAggregationInput | AvailableActionsOrderByWithAggregationInput[]
    by: AvailableActionsScalarFieldEnum[] | AvailableActionsScalarFieldEnum
    having?: AvailableActionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableActionsCountAggregateInputType | true
    _min?: AvailableActionsMinAggregateInputType
    _max?: AvailableActionsMaxAggregateInputType
  }

  export type AvailableActionsGroupByOutputType = {
    id: string
    name: string
    description: string
    metadata: JsonValue
    configMetadata: JsonValue
    type: string
    appId: string
    _count: AvailableActionsCountAggregateOutputType | null
    _min: AvailableActionsMinAggregateOutputType | null
    _max: AvailableActionsMaxAggregateOutputType | null
  }

  type GetAvailableActionsGroupByPayload<T extends AvailableActionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableActionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableActionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableActionsGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableActionsGroupByOutputType[P]>
        }
      >
    >


  export type AvailableActionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    metadata?: boolean
    configMetadata?: boolean
    type?: boolean
    appId?: boolean
    actions?: boolean | AvailableActions$actionsArgs<ExtArgs>
    app?: boolean | AppDefaultArgs<ExtArgs>
    templates?: boolean | AvailableActions$templatesArgs<ExtArgs>
    _count?: boolean | AvailableActionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableActions"]>

  export type AvailableActionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    metadata?: boolean
    configMetadata?: boolean
    type?: boolean
    appId?: boolean
    app?: boolean | AppDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableActions"]>


  export type AvailableActionsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    metadata?: boolean
    configMetadata?: boolean
    type?: boolean
    appId?: boolean
  }

  export type AvailableActionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "metadata" | "configMetadata" | "type" | "appId", ExtArgs["result"]["availableActions"]>
  export type AvailableActionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | AvailableActions$actionsArgs<ExtArgs>
    app?: boolean | AppDefaultArgs<ExtArgs>
    templates?: boolean | AvailableActions$templatesArgs<ExtArgs>
    _count?: boolean | AvailableActionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableActionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | AppDefaultArgs<ExtArgs>
  }

  export type $AvailableActionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableActions"
    objects: {
      actions: Prisma.$ActionPayload<ExtArgs>[]
      app: Prisma.$AppPayload<ExtArgs>
      templates: Prisma.$ZapTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      metadata: Prisma.JsonValue
      configMetadata: Prisma.JsonValue
      type: string
      appId: string
    }, ExtArgs["result"]["availableActions"]>
    composites: {}
  }

  type AvailableActionsGetPayload<S extends boolean | null | undefined | AvailableActionsDefaultArgs> = $Result.GetResult<Prisma.$AvailableActionsPayload, S>

  type AvailableActionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableActionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableActionsCountAggregateInputType | true
    }

  export interface AvailableActionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableActions'], meta: { name: 'AvailableActions' } }
    /**
     * Find zero or one AvailableActions that matches the filter.
     * @param {AvailableActionsFindUniqueArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableActionsFindUniqueArgs>(args: SelectSubset<T, AvailableActionsFindUniqueArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableActions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableActionsFindUniqueOrThrowArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableActionsFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableActionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsFindFirstArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableActionsFindFirstArgs>(args?: SelectSubset<T, AvailableActionsFindFirstArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableActions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsFindFirstOrThrowArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableActionsFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableActionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableActions
     * const availableActions = await prisma.availableActions.findMany()
     * 
     * // Get first 10 AvailableActions
     * const availableActions = await prisma.availableActions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableActionsWithIdOnly = await prisma.availableActions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableActionsFindManyArgs>(args?: SelectSubset<T, AvailableActionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableActions.
     * @param {AvailableActionsCreateArgs} args - Arguments to create a AvailableActions.
     * @example
     * // Create one AvailableActions
     * const AvailableActions = await prisma.availableActions.create({
     *   data: {
     *     // ... data to create a AvailableActions
     *   }
     * })
     * 
     */
    create<T extends AvailableActionsCreateArgs>(args: SelectSubset<T, AvailableActionsCreateArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableActions.
     * @param {AvailableActionsCreateManyArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableActions = await prisma.availableActions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableActionsCreateManyArgs>(args?: SelectSubset<T, AvailableActionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableActions and returns the data saved in the database.
     * @param {AvailableActionsCreateManyAndReturnArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableActions = await prisma.availableActions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableActions and only return the `id`
     * const availableActionsWithIdOnly = await prisma.availableActions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableActionsCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableActionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableActions.
     * @param {AvailableActionsDeleteArgs} args - Arguments to delete one AvailableActions.
     * @example
     * // Delete one AvailableActions
     * const AvailableActions = await prisma.availableActions.delete({
     *   where: {
     *     // ... filter to delete one AvailableActions
     *   }
     * })
     * 
     */
    delete<T extends AvailableActionsDeleteArgs>(args: SelectSubset<T, AvailableActionsDeleteArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableActions.
     * @param {AvailableActionsUpdateArgs} args - Arguments to update one AvailableActions.
     * @example
     * // Update one AvailableActions
     * const availableActions = await prisma.availableActions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableActionsUpdateArgs>(args: SelectSubset<T, AvailableActionsUpdateArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableActions.
     * @param {AvailableActionsDeleteManyArgs} args - Arguments to filter AvailableActions to delete.
     * @example
     * // Delete a few AvailableActions
     * const { count } = await prisma.availableActions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableActionsDeleteManyArgs>(args?: SelectSubset<T, AvailableActionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableActions
     * const availableActions = await prisma.availableActions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableActionsUpdateManyArgs>(args: SelectSubset<T, AvailableActionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AvailableActions.
     * @param {AvailableActionsUpsertArgs} args - Arguments to update or create a AvailableActions.
     * @example
     * // Update or create a AvailableActions
     * const availableActions = await prisma.availableActions.upsert({
     *   create: {
     *     // ... data to create a AvailableActions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableActions we want to update
     *   }
     * })
     */
    upsert<T extends AvailableActionsUpsertArgs>(args: SelectSubset<T, AvailableActionsUpsertArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsCountArgs} args - Arguments to filter AvailableActions to count.
     * @example
     * // Count the number of AvailableActions
     * const count = await prisma.availableActions.count({
     *   where: {
     *     // ... the filter for the AvailableActions we want to count
     *   }
     * })
    **/
    count<T extends AvailableActionsCountArgs>(
      args?: Subset<T, AvailableActionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableActionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailableActionsAggregateArgs>(args: Subset<T, AvailableActionsAggregateArgs>): Prisma.PrismaPromise<GetAvailableActionsAggregateType<T>>

    /**
     * Group by AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailableActionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableActionsGroupByArgs['orderBy'] }
        : { orderBy?: AvailableActionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailableActionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableActionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableActions model
   */
  readonly fields: AvailableActionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableActions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableActionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actions<T extends AvailableActions$actionsArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActions$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    app<T extends AppDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppDefaultArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    templates<T extends AvailableActions$templatesArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActions$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailableActions model
   */
  interface AvailableActionsFieldRefs {
    readonly id: FieldRef<"AvailableActions", 'String'>
    readonly name: FieldRef<"AvailableActions", 'String'>
    readonly description: FieldRef<"AvailableActions", 'String'>
    readonly metadata: FieldRef<"AvailableActions", 'Json'>
    readonly configMetadata: FieldRef<"AvailableActions", 'Json'>
    readonly type: FieldRef<"AvailableActions", 'String'>
    readonly appId: FieldRef<"AvailableActions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableActions findUnique
   */
  export type AvailableActionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where: AvailableActionsWhereUniqueInput
  }

  /**
   * AvailableActions findUniqueOrThrow
   */
  export type AvailableActionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where: AvailableActionsWhereUniqueInput
  }

  /**
   * AvailableActions findFirst
   */
  export type AvailableActionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionsScalarFieldEnum | AvailableActionsScalarFieldEnum[]
  }

  /**
   * AvailableActions findFirstOrThrow
   */
  export type AvailableActionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionsScalarFieldEnum | AvailableActionsScalarFieldEnum[]
  }

  /**
   * AvailableActions findMany
   */
  export type AvailableActionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableActions.
     */
    cursor?: AvailableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    distinct?: AvailableActionsScalarFieldEnum | AvailableActionsScalarFieldEnum[]
  }

  /**
   * AvailableActions create
   */
  export type AvailableActionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableActions.
     */
    data: XOR<AvailableActionsCreateInput, AvailableActionsUncheckedCreateInput>
  }

  /**
   * AvailableActions createMany
   */
  export type AvailableActionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionsCreateManyInput | AvailableActionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableActions createManyAndReturn
   */
  export type AvailableActionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionsCreateManyInput | AvailableActionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailableActions update
   */
  export type AvailableActionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableActions.
     */
    data: XOR<AvailableActionsUpdateInput, AvailableActionsUncheckedUpdateInput>
    /**
     * Choose, which AvailableActions to update.
     */
    where: AvailableActionsWhereUniqueInput
  }

  /**
   * AvailableActions updateMany
   */
  export type AvailableActionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionsUpdateManyMutationInput, AvailableActionsUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionsWhereInput
  }

  /**
   * AvailableActions upsert
   */
  export type AvailableActionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableActions to update in case it exists.
     */
    where: AvailableActionsWhereUniqueInput
    /**
     * In case the AvailableActions found by the `where` argument doesn't exist, create a new AvailableActions with this data.
     */
    create: XOR<AvailableActionsCreateInput, AvailableActionsUncheckedCreateInput>
    /**
     * In case the AvailableActions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableActionsUpdateInput, AvailableActionsUncheckedUpdateInput>
  }

  /**
   * AvailableActions delete
   */
  export type AvailableActionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter which AvailableActions to delete.
     */
    where: AvailableActionsWhereUniqueInput
  }

  /**
   * AvailableActions deleteMany
   */
  export type AvailableActionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableActions to delete
     */
    where?: AvailableActionsWhereInput
  }

  /**
   * AvailableActions.actions
   */
  export type AvailableActions$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * AvailableActions.templates
   */
  export type AvailableActions$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    where?: ZapTemplateWhereInput
    orderBy?: ZapTemplateOrderByWithRelationInput | ZapTemplateOrderByWithRelationInput[]
    cursor?: ZapTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapTemplateScalarFieldEnum | ZapTemplateScalarFieldEnum[]
  }

  /**
   * AvailableActions without action
   */
  export type AvailableActionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
  }


  /**
   * Model ZapRun
   */

  export type AggregateZapRun = {
    _count: ZapRunCountAggregateOutputType | null
    _min: ZapRunMinAggregateOutputType | null
    _max: ZapRunMaxAggregateOutputType | null
  }

  export type ZapRunMinAggregateOutputType = {
    id: string | null
    zapId: string | null
  }

  export type ZapRunMaxAggregateOutputType = {
    id: string | null
    zapId: string | null
  }

  export type ZapRunCountAggregateOutputType = {
    id: number
    metadata: number
    zapId: number
    _all: number
  }


  export type ZapRunMinAggregateInputType = {
    id?: true
    zapId?: true
  }

  export type ZapRunMaxAggregateInputType = {
    id?: true
    zapId?: true
  }

  export type ZapRunCountAggregateInputType = {
    id?: true
    metadata?: true
    zapId?: true
    _all?: true
  }

  export type ZapRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapRun to aggregate.
     */
    where?: ZapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZapRuns
    **/
    _count?: true | ZapRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapRunMaxAggregateInputType
  }

  export type GetZapRunAggregateType<T extends ZapRunAggregateArgs> = {
        [P in keyof T & keyof AggregateZapRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapRun[P]>
      : GetScalarType<T[P], AggregateZapRun[P]>
  }




  export type ZapRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapRunWhereInput
    orderBy?: ZapRunOrderByWithAggregationInput | ZapRunOrderByWithAggregationInput[]
    by: ZapRunScalarFieldEnum[] | ZapRunScalarFieldEnum
    having?: ZapRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapRunCountAggregateInputType | true
    _min?: ZapRunMinAggregateInputType
    _max?: ZapRunMaxAggregateInputType
  }

  export type ZapRunGroupByOutputType = {
    id: string
    metadata: JsonValue
    zapId: string
    _count: ZapRunCountAggregateOutputType | null
    _min: ZapRunMinAggregateOutputType | null
    _max: ZapRunMaxAggregateOutputType | null
  }

  type GetZapRunGroupByPayload<T extends ZapRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapRunGroupByOutputType[P]>
            : GetScalarType<T[P], ZapRunGroupByOutputType[P]>
        }
      >
    >


  export type ZapRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metadata?: boolean
    zapId?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    ZapRunOutBox?: boolean | ZapRun$ZapRunOutBoxArgs<ExtArgs>
  }, ExtArgs["result"]["zapRun"]>

  export type ZapRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metadata?: boolean
    zapId?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRun"]>


  export type ZapRunSelectScalar = {
    id?: boolean
    metadata?: boolean
    zapId?: boolean
  }

  export type ZapRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metadata" | "zapId", ExtArgs["result"]["zapRun"]>
  export type ZapRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    ZapRunOutBox?: boolean | ZapRun$ZapRunOutBoxArgs<ExtArgs>
  }
  export type ZapRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $ZapRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZapRun"
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>
      ZapRunOutBox: Prisma.$ZapRunOutBoxPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      metadata: Prisma.JsonValue
      zapId: string
    }, ExtArgs["result"]["zapRun"]>
    composites: {}
  }

  type ZapRunGetPayload<S extends boolean | null | undefined | ZapRunDefaultArgs> = $Result.GetResult<Prisma.$ZapRunPayload, S>

  type ZapRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapRunCountAggregateInputType | true
    }

  export interface ZapRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZapRun'], meta: { name: 'ZapRun' } }
    /**
     * Find zero or one ZapRun that matches the filter.
     * @param {ZapRunFindUniqueArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapRunFindUniqueArgs>(args: SelectSubset<T, ZapRunFindUniqueArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZapRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapRunFindUniqueOrThrowArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapRunFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunFindFirstArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapRunFindFirstArgs>(args?: SelectSubset<T, ZapRunFindFirstArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunFindFirstOrThrowArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapRunFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZapRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRuns
     * const zapRuns = await prisma.zapRun.findMany()
     * 
     * // Get first 10 ZapRuns
     * const zapRuns = await prisma.zapRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapRunFindManyArgs>(args?: SelectSubset<T, ZapRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZapRun.
     * @param {ZapRunCreateArgs} args - Arguments to create a ZapRun.
     * @example
     * // Create one ZapRun
     * const ZapRun = await prisma.zapRun.create({
     *   data: {
     *     // ... data to create a ZapRun
     *   }
     * })
     * 
     */
    create<T extends ZapRunCreateArgs>(args: SelectSubset<T, ZapRunCreateArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZapRuns.
     * @param {ZapRunCreateManyArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRun = await prisma.zapRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapRunCreateManyArgs>(args?: SelectSubset<T, ZapRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZapRuns and returns the data saved in the database.
     * @param {ZapRunCreateManyAndReturnArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRun = await prisma.zapRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZapRuns and only return the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapRunCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZapRun.
     * @param {ZapRunDeleteArgs} args - Arguments to delete one ZapRun.
     * @example
     * // Delete one ZapRun
     * const ZapRun = await prisma.zapRun.delete({
     *   where: {
     *     // ... filter to delete one ZapRun
     *   }
     * })
     * 
     */
    delete<T extends ZapRunDeleteArgs>(args: SelectSubset<T, ZapRunDeleteArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZapRun.
     * @param {ZapRunUpdateArgs} args - Arguments to update one ZapRun.
     * @example
     * // Update one ZapRun
     * const zapRun = await prisma.zapRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapRunUpdateArgs>(args: SelectSubset<T, ZapRunUpdateArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZapRuns.
     * @param {ZapRunDeleteManyArgs} args - Arguments to filter ZapRuns to delete.
     * @example
     * // Delete a few ZapRuns
     * const { count } = await prisma.zapRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapRunDeleteManyArgs>(args?: SelectSubset<T, ZapRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRuns
     * const zapRun = await prisma.zapRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapRunUpdateManyArgs>(args: SelectSubset<T, ZapRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ZapRun.
     * @param {ZapRunUpsertArgs} args - Arguments to update or create a ZapRun.
     * @example
     * // Update or create a ZapRun
     * const zapRun = await prisma.zapRun.upsert({
     *   create: {
     *     // ... data to create a ZapRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRun we want to update
     *   }
     * })
     */
    upsert<T extends ZapRunUpsertArgs>(args: SelectSubset<T, ZapRunUpsertArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunCountArgs} args - Arguments to filter ZapRuns to count.
     * @example
     * // Count the number of ZapRuns
     * const count = await prisma.zapRun.count({
     *   where: {
     *     // ... the filter for the ZapRuns we want to count
     *   }
     * })
    **/
    count<T extends ZapRunCountArgs>(
      args?: Subset<T, ZapRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZapRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapRunAggregateArgs>(args: Subset<T, ZapRunAggregateArgs>): Prisma.PrismaPromise<GetZapRunAggregateType<T>>

    /**
     * Group by ZapRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZapRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapRunGroupByArgs['orderBy'] }
        : { orderBy?: ZapRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZapRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZapRun model
   */
  readonly fields: ZapRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZapRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ZapRunOutBox<T extends ZapRun$ZapRunOutBoxArgs<ExtArgs> = {}>(args?: Subset<T, ZapRun$ZapRunOutBoxArgs<ExtArgs>>): Prisma__ZapRunOutBoxClient<$Result.GetResult<Prisma.$ZapRunOutBoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ZapRun model
   */
  interface ZapRunFieldRefs {
    readonly id: FieldRef<"ZapRun", 'String'>
    readonly metadata: FieldRef<"ZapRun", 'Json'>
    readonly zapId: FieldRef<"ZapRun", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ZapRun findUnique
   */
  export type ZapRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * Filter, which ZapRun to fetch.
     */
    where: ZapRunWhereUniqueInput
  }

  /**
   * ZapRun findUniqueOrThrow
   */
  export type ZapRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * Filter, which ZapRun to fetch.
     */
    where: ZapRunWhereUniqueInput
  }

  /**
   * ZapRun findFirst
   */
  export type ZapRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * Filter, which ZapRun to fetch.
     */
    where?: ZapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapRuns.
     */
    cursor?: ZapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapRuns.
     */
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * ZapRun findFirstOrThrow
   */
  export type ZapRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * Filter, which ZapRun to fetch.
     */
    where?: ZapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapRuns.
     */
    cursor?: ZapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapRuns.
     */
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * ZapRun findMany
   */
  export type ZapRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * Filter, which ZapRuns to fetch.
     */
    where?: ZapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRuns to fetch.
     */
    orderBy?: ZapRunOrderByWithRelationInput | ZapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZapRuns.
     */
    cursor?: ZapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRuns.
     */
    skip?: number
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * ZapRun create
   */
  export type ZapRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * The data needed to create a ZapRun.
     */
    data: XOR<ZapRunCreateInput, ZapRunUncheckedCreateInput>
  }

  /**
   * ZapRun createMany
   */
  export type ZapRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZapRuns.
     */
    data: ZapRunCreateManyInput | ZapRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZapRun createManyAndReturn
   */
  export type ZapRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * The data used to create many ZapRuns.
     */
    data: ZapRunCreateManyInput | ZapRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZapRun update
   */
  export type ZapRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * The data needed to update a ZapRun.
     */
    data: XOR<ZapRunUpdateInput, ZapRunUncheckedUpdateInput>
    /**
     * Choose, which ZapRun to update.
     */
    where: ZapRunWhereUniqueInput
  }

  /**
   * ZapRun updateMany
   */
  export type ZapRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZapRuns.
     */
    data: XOR<ZapRunUpdateManyMutationInput, ZapRunUncheckedUpdateManyInput>
    /**
     * Filter which ZapRuns to update
     */
    where?: ZapRunWhereInput
  }

  /**
   * ZapRun upsert
   */
  export type ZapRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * The filter to search for the ZapRun to update in case it exists.
     */
    where: ZapRunWhereUniqueInput
    /**
     * In case the ZapRun found by the `where` argument doesn't exist, create a new ZapRun with this data.
     */
    create: XOR<ZapRunCreateInput, ZapRunUncheckedCreateInput>
    /**
     * In case the ZapRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapRunUpdateInput, ZapRunUncheckedUpdateInput>
  }

  /**
   * ZapRun delete
   */
  export type ZapRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
    /**
     * Filter which ZapRun to delete.
     */
    where: ZapRunWhereUniqueInput
  }

  /**
   * ZapRun deleteMany
   */
  export type ZapRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapRuns to delete
     */
    where?: ZapRunWhereInput
  }

  /**
   * ZapRun.ZapRunOutBox
   */
  export type ZapRun$ZapRunOutBoxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutBox
     */
    select?: ZapRunOutBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutBox
     */
    omit?: ZapRunOutBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutBoxInclude<ExtArgs> | null
    where?: ZapRunOutBoxWhereInput
  }

  /**
   * ZapRun without action
   */
  export type ZapRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRun
     */
    select?: ZapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRun
     */
    omit?: ZapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunInclude<ExtArgs> | null
  }


  /**
   * Model ZapRunOutBox
   */

  export type AggregateZapRunOutBox = {
    _count: ZapRunOutBoxCountAggregateOutputType | null
    _min: ZapRunOutBoxMinAggregateOutputType | null
    _max: ZapRunOutBoxMaxAggregateOutputType | null
  }

  export type ZapRunOutBoxMinAggregateOutputType = {
    id: string | null
    zaprunId: string | null
  }

  export type ZapRunOutBoxMaxAggregateOutputType = {
    id: string | null
    zaprunId: string | null
  }

  export type ZapRunOutBoxCountAggregateOutputType = {
    id: number
    zaprunId: number
    _all: number
  }


  export type ZapRunOutBoxMinAggregateInputType = {
    id?: true
    zaprunId?: true
  }

  export type ZapRunOutBoxMaxAggregateInputType = {
    id?: true
    zaprunId?: true
  }

  export type ZapRunOutBoxCountAggregateInputType = {
    id?: true
    zaprunId?: true
    _all?: true
  }

  export type ZapRunOutBoxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapRunOutBox to aggregate.
     */
    where?: ZapRunOutBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRunOutBoxes to fetch.
     */
    orderBy?: ZapRunOutBoxOrderByWithRelationInput | ZapRunOutBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapRunOutBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRunOutBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRunOutBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZapRunOutBoxes
    **/
    _count?: true | ZapRunOutBoxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapRunOutBoxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapRunOutBoxMaxAggregateInputType
  }

  export type GetZapRunOutBoxAggregateType<T extends ZapRunOutBoxAggregateArgs> = {
        [P in keyof T & keyof AggregateZapRunOutBox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapRunOutBox[P]>
      : GetScalarType<T[P], AggregateZapRunOutBox[P]>
  }




  export type ZapRunOutBoxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapRunOutBoxWhereInput
    orderBy?: ZapRunOutBoxOrderByWithAggregationInput | ZapRunOutBoxOrderByWithAggregationInput[]
    by: ZapRunOutBoxScalarFieldEnum[] | ZapRunOutBoxScalarFieldEnum
    having?: ZapRunOutBoxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapRunOutBoxCountAggregateInputType | true
    _min?: ZapRunOutBoxMinAggregateInputType
    _max?: ZapRunOutBoxMaxAggregateInputType
  }

  export type ZapRunOutBoxGroupByOutputType = {
    id: string
    zaprunId: string
    _count: ZapRunOutBoxCountAggregateOutputType | null
    _min: ZapRunOutBoxMinAggregateOutputType | null
    _max: ZapRunOutBoxMaxAggregateOutputType | null
  }

  type GetZapRunOutBoxGroupByPayload<T extends ZapRunOutBoxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapRunOutBoxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapRunOutBoxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapRunOutBoxGroupByOutputType[P]>
            : GetScalarType<T[P], ZapRunOutBoxGroupByOutputType[P]>
        }
      >
    >


  export type ZapRunOutBoxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zaprunId?: boolean
    ZapRun?: boolean | ZapRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunOutBox"]>

  export type ZapRunOutBoxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zaprunId?: boolean
    ZapRun?: boolean | ZapRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunOutBox"]>


  export type ZapRunOutBoxSelectScalar = {
    id?: boolean
    zaprunId?: boolean
  }

  export type ZapRunOutBoxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zaprunId", ExtArgs["result"]["zapRunOutBox"]>
  export type ZapRunOutBoxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ZapRun?: boolean | ZapRunDefaultArgs<ExtArgs>
  }
  export type ZapRunOutBoxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ZapRun?: boolean | ZapRunDefaultArgs<ExtArgs>
  }

  export type $ZapRunOutBoxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZapRunOutBox"
    objects: {
      ZapRun: Prisma.$ZapRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zaprunId: string
    }, ExtArgs["result"]["zapRunOutBox"]>
    composites: {}
  }

  type ZapRunOutBoxGetPayload<S extends boolean | null | undefined | ZapRunOutBoxDefaultArgs> = $Result.GetResult<Prisma.$ZapRunOutBoxPayload, S>

  type ZapRunOutBoxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapRunOutBoxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapRunOutBoxCountAggregateInputType | true
    }

  export interface ZapRunOutBoxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZapRunOutBox'], meta: { name: 'ZapRunOutBox' } }
    /**
     * Find zero or one ZapRunOutBox that matches the filter.
     * @param {ZapRunOutBoxFindUniqueArgs} args - Arguments to find a ZapRunOutBox
     * @example
     * // Get one ZapRunOutBox
     * const zapRunOutBox = await prisma.zapRunOutBox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapRunOutBoxFindUniqueArgs>(args: SelectSubset<T, ZapRunOutBoxFindUniqueArgs<ExtArgs>>): Prisma__ZapRunOutBoxClient<$Result.GetResult<Prisma.$ZapRunOutBoxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZapRunOutBox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapRunOutBoxFindUniqueOrThrowArgs} args - Arguments to find a ZapRunOutBox
     * @example
     * // Get one ZapRunOutBox
     * const zapRunOutBox = await prisma.zapRunOutBox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapRunOutBoxFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapRunOutBoxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapRunOutBoxClient<$Result.GetResult<Prisma.$ZapRunOutBoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRunOutBox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutBoxFindFirstArgs} args - Arguments to find a ZapRunOutBox
     * @example
     * // Get one ZapRunOutBox
     * const zapRunOutBox = await prisma.zapRunOutBox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapRunOutBoxFindFirstArgs>(args?: SelectSubset<T, ZapRunOutBoxFindFirstArgs<ExtArgs>>): Prisma__ZapRunOutBoxClient<$Result.GetResult<Prisma.$ZapRunOutBoxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRunOutBox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutBoxFindFirstOrThrowArgs} args - Arguments to find a ZapRunOutBox
     * @example
     * // Get one ZapRunOutBox
     * const zapRunOutBox = await prisma.zapRunOutBox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapRunOutBoxFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapRunOutBoxFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapRunOutBoxClient<$Result.GetResult<Prisma.$ZapRunOutBoxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZapRunOutBoxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutBoxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRunOutBoxes
     * const zapRunOutBoxes = await prisma.zapRunOutBox.findMany()
     * 
     * // Get first 10 ZapRunOutBoxes
     * const zapRunOutBoxes = await prisma.zapRunOutBox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapRunOutBoxWithIdOnly = await prisma.zapRunOutBox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapRunOutBoxFindManyArgs>(args?: SelectSubset<T, ZapRunOutBoxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunOutBoxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZapRunOutBox.
     * @param {ZapRunOutBoxCreateArgs} args - Arguments to create a ZapRunOutBox.
     * @example
     * // Create one ZapRunOutBox
     * const ZapRunOutBox = await prisma.zapRunOutBox.create({
     *   data: {
     *     // ... data to create a ZapRunOutBox
     *   }
     * })
     * 
     */
    create<T extends ZapRunOutBoxCreateArgs>(args: SelectSubset<T, ZapRunOutBoxCreateArgs<ExtArgs>>): Prisma__ZapRunOutBoxClient<$Result.GetResult<Prisma.$ZapRunOutBoxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZapRunOutBoxes.
     * @param {ZapRunOutBoxCreateManyArgs} args - Arguments to create many ZapRunOutBoxes.
     * @example
     * // Create many ZapRunOutBoxes
     * const zapRunOutBox = await prisma.zapRunOutBox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapRunOutBoxCreateManyArgs>(args?: SelectSubset<T, ZapRunOutBoxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZapRunOutBoxes and returns the data saved in the database.
     * @param {ZapRunOutBoxCreateManyAndReturnArgs} args - Arguments to create many ZapRunOutBoxes.
     * @example
     * // Create many ZapRunOutBoxes
     * const zapRunOutBox = await prisma.zapRunOutBox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZapRunOutBoxes and only return the `id`
     * const zapRunOutBoxWithIdOnly = await prisma.zapRunOutBox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapRunOutBoxCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapRunOutBoxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapRunOutBoxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZapRunOutBox.
     * @param {ZapRunOutBoxDeleteArgs} args - Arguments to delete one ZapRunOutBox.
     * @example
     * // Delete one ZapRunOutBox
     * const ZapRunOutBox = await prisma.zapRunOutBox.delete({
     *   where: {
     *     // ... filter to delete one ZapRunOutBox
     *   }
     * })
     * 
     */
    delete<T extends ZapRunOutBoxDeleteArgs>(args: SelectSubset<T, ZapRunOutBoxDeleteArgs<ExtArgs>>): Prisma__ZapRunOutBoxClient<$Result.GetResult<Prisma.$ZapRunOutBoxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZapRunOutBox.
     * @param {ZapRunOutBoxUpdateArgs} args - Arguments to update one ZapRunOutBox.
     * @example
     * // Update one ZapRunOutBox
     * const zapRunOutBox = await prisma.zapRunOutBox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapRunOutBoxUpdateArgs>(args: SelectSubset<T, ZapRunOutBoxUpdateArgs<ExtArgs>>): Prisma__ZapRunOutBoxClient<$Result.GetResult<Prisma.$ZapRunOutBoxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZapRunOutBoxes.
     * @param {ZapRunOutBoxDeleteManyArgs} args - Arguments to filter ZapRunOutBoxes to delete.
     * @example
     * // Delete a few ZapRunOutBoxes
     * const { count } = await prisma.zapRunOutBox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapRunOutBoxDeleteManyArgs>(args?: SelectSubset<T, ZapRunOutBoxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRunOutBoxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutBoxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRunOutBoxes
     * const zapRunOutBox = await prisma.zapRunOutBox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapRunOutBoxUpdateManyArgs>(args: SelectSubset<T, ZapRunOutBoxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ZapRunOutBox.
     * @param {ZapRunOutBoxUpsertArgs} args - Arguments to update or create a ZapRunOutBox.
     * @example
     * // Update or create a ZapRunOutBox
     * const zapRunOutBox = await prisma.zapRunOutBox.upsert({
     *   create: {
     *     // ... data to create a ZapRunOutBox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRunOutBox we want to update
     *   }
     * })
     */
    upsert<T extends ZapRunOutBoxUpsertArgs>(args: SelectSubset<T, ZapRunOutBoxUpsertArgs<ExtArgs>>): Prisma__ZapRunOutBoxClient<$Result.GetResult<Prisma.$ZapRunOutBoxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZapRunOutBoxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutBoxCountArgs} args - Arguments to filter ZapRunOutBoxes to count.
     * @example
     * // Count the number of ZapRunOutBoxes
     * const count = await prisma.zapRunOutBox.count({
     *   where: {
     *     // ... the filter for the ZapRunOutBoxes we want to count
     *   }
     * })
    **/
    count<T extends ZapRunOutBoxCountArgs>(
      args?: Subset<T, ZapRunOutBoxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapRunOutBoxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZapRunOutBox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutBoxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapRunOutBoxAggregateArgs>(args: Subset<T, ZapRunOutBoxAggregateArgs>): Prisma.PrismaPromise<GetZapRunOutBoxAggregateType<T>>

    /**
     * Group by ZapRunOutBox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunOutBoxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZapRunOutBoxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapRunOutBoxGroupByArgs['orderBy'] }
        : { orderBy?: ZapRunOutBoxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZapRunOutBoxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapRunOutBoxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZapRunOutBox model
   */
  readonly fields: ZapRunOutBoxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZapRunOutBox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapRunOutBoxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ZapRun<T extends ZapRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapRunDefaultArgs<ExtArgs>>): Prisma__ZapRunClient<$Result.GetResult<Prisma.$ZapRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ZapRunOutBox model
   */
  interface ZapRunOutBoxFieldRefs {
    readonly id: FieldRef<"ZapRunOutBox", 'String'>
    readonly zaprunId: FieldRef<"ZapRunOutBox", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ZapRunOutBox findUnique
   */
  export type ZapRunOutBoxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutBox
     */
    select?: ZapRunOutBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutBox
     */
    omit?: ZapRunOutBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutBoxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutBox to fetch.
     */
    where: ZapRunOutBoxWhereUniqueInput
  }

  /**
   * ZapRunOutBox findUniqueOrThrow
   */
  export type ZapRunOutBoxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutBox
     */
    select?: ZapRunOutBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutBox
     */
    omit?: ZapRunOutBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutBoxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutBox to fetch.
     */
    where: ZapRunOutBoxWhereUniqueInput
  }

  /**
   * ZapRunOutBox findFirst
   */
  export type ZapRunOutBoxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutBox
     */
    select?: ZapRunOutBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutBox
     */
    omit?: ZapRunOutBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutBoxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutBox to fetch.
     */
    where?: ZapRunOutBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRunOutBoxes to fetch.
     */
    orderBy?: ZapRunOutBoxOrderByWithRelationInput | ZapRunOutBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapRunOutBoxes.
     */
    cursor?: ZapRunOutBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRunOutBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRunOutBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapRunOutBoxes.
     */
    distinct?: ZapRunOutBoxScalarFieldEnum | ZapRunOutBoxScalarFieldEnum[]
  }

  /**
   * ZapRunOutBox findFirstOrThrow
   */
  export type ZapRunOutBoxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutBox
     */
    select?: ZapRunOutBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutBox
     */
    omit?: ZapRunOutBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutBoxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutBox to fetch.
     */
    where?: ZapRunOutBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRunOutBoxes to fetch.
     */
    orderBy?: ZapRunOutBoxOrderByWithRelationInput | ZapRunOutBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapRunOutBoxes.
     */
    cursor?: ZapRunOutBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRunOutBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRunOutBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapRunOutBoxes.
     */
    distinct?: ZapRunOutBoxScalarFieldEnum | ZapRunOutBoxScalarFieldEnum[]
  }

  /**
   * ZapRunOutBox findMany
   */
  export type ZapRunOutBoxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutBox
     */
    select?: ZapRunOutBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutBox
     */
    omit?: ZapRunOutBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutBoxInclude<ExtArgs> | null
    /**
     * Filter, which ZapRunOutBoxes to fetch.
     */
    where?: ZapRunOutBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapRunOutBoxes to fetch.
     */
    orderBy?: ZapRunOutBoxOrderByWithRelationInput | ZapRunOutBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZapRunOutBoxes.
     */
    cursor?: ZapRunOutBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapRunOutBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapRunOutBoxes.
     */
    skip?: number
    distinct?: ZapRunOutBoxScalarFieldEnum | ZapRunOutBoxScalarFieldEnum[]
  }

  /**
   * ZapRunOutBox create
   */
  export type ZapRunOutBoxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutBox
     */
    select?: ZapRunOutBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutBox
     */
    omit?: ZapRunOutBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutBoxInclude<ExtArgs> | null
    /**
     * The data needed to create a ZapRunOutBox.
     */
    data: XOR<ZapRunOutBoxCreateInput, ZapRunOutBoxUncheckedCreateInput>
  }

  /**
   * ZapRunOutBox createMany
   */
  export type ZapRunOutBoxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZapRunOutBoxes.
     */
    data: ZapRunOutBoxCreateManyInput | ZapRunOutBoxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZapRunOutBox createManyAndReturn
   */
  export type ZapRunOutBoxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutBox
     */
    select?: ZapRunOutBoxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutBox
     */
    omit?: ZapRunOutBoxOmit<ExtArgs> | null
    /**
     * The data used to create many ZapRunOutBoxes.
     */
    data: ZapRunOutBoxCreateManyInput | ZapRunOutBoxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutBoxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZapRunOutBox update
   */
  export type ZapRunOutBoxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutBox
     */
    select?: ZapRunOutBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutBox
     */
    omit?: ZapRunOutBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutBoxInclude<ExtArgs> | null
    /**
     * The data needed to update a ZapRunOutBox.
     */
    data: XOR<ZapRunOutBoxUpdateInput, ZapRunOutBoxUncheckedUpdateInput>
    /**
     * Choose, which ZapRunOutBox to update.
     */
    where: ZapRunOutBoxWhereUniqueInput
  }

  /**
   * ZapRunOutBox updateMany
   */
  export type ZapRunOutBoxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZapRunOutBoxes.
     */
    data: XOR<ZapRunOutBoxUpdateManyMutationInput, ZapRunOutBoxUncheckedUpdateManyInput>
    /**
     * Filter which ZapRunOutBoxes to update
     */
    where?: ZapRunOutBoxWhereInput
  }

  /**
   * ZapRunOutBox upsert
   */
  export type ZapRunOutBoxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutBox
     */
    select?: ZapRunOutBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutBox
     */
    omit?: ZapRunOutBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutBoxInclude<ExtArgs> | null
    /**
     * The filter to search for the ZapRunOutBox to update in case it exists.
     */
    where: ZapRunOutBoxWhereUniqueInput
    /**
     * In case the ZapRunOutBox found by the `where` argument doesn't exist, create a new ZapRunOutBox with this data.
     */
    create: XOR<ZapRunOutBoxCreateInput, ZapRunOutBoxUncheckedCreateInput>
    /**
     * In case the ZapRunOutBox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapRunOutBoxUpdateInput, ZapRunOutBoxUncheckedUpdateInput>
  }

  /**
   * ZapRunOutBox delete
   */
  export type ZapRunOutBoxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutBox
     */
    select?: ZapRunOutBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutBox
     */
    omit?: ZapRunOutBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutBoxInclude<ExtArgs> | null
    /**
     * Filter which ZapRunOutBox to delete.
     */
    where: ZapRunOutBoxWhereUniqueInput
  }

  /**
   * ZapRunOutBox deleteMany
   */
  export type ZapRunOutBoxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapRunOutBoxes to delete
     */
    where?: ZapRunOutBoxWhereInput
  }

  /**
   * ZapRunOutBox without action
   */
  export type ZapRunOutBoxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunOutBox
     */
    select?: ZapRunOutBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapRunOutBox
     */
    omit?: ZapRunOutBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapRunOutBoxInclude<ExtArgs> | null
  }


  /**
   * Model TokenStore
   */

  export type AggregateTokenStore = {
    _count: TokenStoreCountAggregateOutputType | null
    _min: TokenStoreMinAggregateOutputType | null
    _max: TokenStoreMaxAggregateOutputType | null
  }

  export type TokenStoreMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    provider: string | null
    updatedAt: Date | null
    accessToken: string | null
    refreshToken: string | null
    userId: string | null
  }

  export type TokenStoreMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    provider: string | null
    updatedAt: Date | null
    accessToken: string | null
    refreshToken: string | null
    userId: string | null
  }

  export type TokenStoreCountAggregateOutputType = {
    id: number
    createdAt: number
    provider: number
    updatedAt: number
    accessToken: number
    refreshToken: number
    userId: number
    _all: number
  }


  export type TokenStoreMinAggregateInputType = {
    id?: true
    createdAt?: true
    provider?: true
    updatedAt?: true
    accessToken?: true
    refreshToken?: true
    userId?: true
  }

  export type TokenStoreMaxAggregateInputType = {
    id?: true
    createdAt?: true
    provider?: true
    updatedAt?: true
    accessToken?: true
    refreshToken?: true
    userId?: true
  }

  export type TokenStoreCountAggregateInputType = {
    id?: true
    createdAt?: true
    provider?: true
    updatedAt?: true
    accessToken?: true
    refreshToken?: true
    userId?: true
    _all?: true
  }

  export type TokenStoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenStore to aggregate.
     */
    where?: TokenStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenStores to fetch.
     */
    orderBy?: TokenStoreOrderByWithRelationInput | TokenStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenStores
    **/
    _count?: true | TokenStoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenStoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenStoreMaxAggregateInputType
  }

  export type GetTokenStoreAggregateType<T extends TokenStoreAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenStore[P]>
      : GetScalarType<T[P], AggregateTokenStore[P]>
  }




  export type TokenStoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenStoreWhereInput
    orderBy?: TokenStoreOrderByWithAggregationInput | TokenStoreOrderByWithAggregationInput[]
    by: TokenStoreScalarFieldEnum[] | TokenStoreScalarFieldEnum
    having?: TokenStoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenStoreCountAggregateInputType | true
    _min?: TokenStoreMinAggregateInputType
    _max?: TokenStoreMaxAggregateInputType
  }

  export type TokenStoreGroupByOutputType = {
    id: string
    createdAt: Date
    provider: string
    updatedAt: Date
    accessToken: string
    refreshToken: string
    userId: string
    _count: TokenStoreCountAggregateOutputType | null
    _min: TokenStoreMinAggregateOutputType | null
    _max: TokenStoreMaxAggregateOutputType | null
  }

  type GetTokenStoreGroupByPayload<T extends TokenStoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenStoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenStoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenStoreGroupByOutputType[P]>
            : GetScalarType<T[P], TokenStoreGroupByOutputType[P]>
        }
      >
    >


  export type TokenStoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    provider?: boolean
    updatedAt?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenStore"]>

  export type TokenStoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    provider?: boolean
    updatedAt?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenStore"]>


  export type TokenStoreSelectScalar = {
    id?: boolean
    createdAt?: boolean
    provider?: boolean
    updatedAt?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    userId?: boolean
  }

  export type TokenStoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "provider" | "updatedAt" | "accessToken" | "refreshToken" | "userId", ExtArgs["result"]["tokenStore"]>
  export type TokenStoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenStoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenStorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenStore"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      provider: string
      updatedAt: Date
      accessToken: string
      refreshToken: string
      userId: string
    }, ExtArgs["result"]["tokenStore"]>
    composites: {}
  }

  type TokenStoreGetPayload<S extends boolean | null | undefined | TokenStoreDefaultArgs> = $Result.GetResult<Prisma.$TokenStorePayload, S>

  type TokenStoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenStoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenStoreCountAggregateInputType | true
    }

  export interface TokenStoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenStore'], meta: { name: 'TokenStore' } }
    /**
     * Find zero or one TokenStore that matches the filter.
     * @param {TokenStoreFindUniqueArgs} args - Arguments to find a TokenStore
     * @example
     * // Get one TokenStore
     * const tokenStore = await prisma.tokenStore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenStoreFindUniqueArgs>(args: SelectSubset<T, TokenStoreFindUniqueArgs<ExtArgs>>): Prisma__TokenStoreClient<$Result.GetResult<Prisma.$TokenStorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenStore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenStoreFindUniqueOrThrowArgs} args - Arguments to find a TokenStore
     * @example
     * // Get one TokenStore
     * const tokenStore = await prisma.tokenStore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenStoreFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenStoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenStoreClient<$Result.GetResult<Prisma.$TokenStorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenStore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenStoreFindFirstArgs} args - Arguments to find a TokenStore
     * @example
     * // Get one TokenStore
     * const tokenStore = await prisma.tokenStore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenStoreFindFirstArgs>(args?: SelectSubset<T, TokenStoreFindFirstArgs<ExtArgs>>): Prisma__TokenStoreClient<$Result.GetResult<Prisma.$TokenStorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenStore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenStoreFindFirstOrThrowArgs} args - Arguments to find a TokenStore
     * @example
     * // Get one TokenStore
     * const tokenStore = await prisma.tokenStore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenStoreFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenStoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenStoreClient<$Result.GetResult<Prisma.$TokenStorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenStores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenStoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenStores
     * const tokenStores = await prisma.tokenStore.findMany()
     * 
     * // Get first 10 TokenStores
     * const tokenStores = await prisma.tokenStore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenStoreWithIdOnly = await prisma.tokenStore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenStoreFindManyArgs>(args?: SelectSubset<T, TokenStoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenStorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenStore.
     * @param {TokenStoreCreateArgs} args - Arguments to create a TokenStore.
     * @example
     * // Create one TokenStore
     * const TokenStore = await prisma.tokenStore.create({
     *   data: {
     *     // ... data to create a TokenStore
     *   }
     * })
     * 
     */
    create<T extends TokenStoreCreateArgs>(args: SelectSubset<T, TokenStoreCreateArgs<ExtArgs>>): Prisma__TokenStoreClient<$Result.GetResult<Prisma.$TokenStorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenStores.
     * @param {TokenStoreCreateManyArgs} args - Arguments to create many TokenStores.
     * @example
     * // Create many TokenStores
     * const tokenStore = await prisma.tokenStore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenStoreCreateManyArgs>(args?: SelectSubset<T, TokenStoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenStores and returns the data saved in the database.
     * @param {TokenStoreCreateManyAndReturnArgs} args - Arguments to create many TokenStores.
     * @example
     * // Create many TokenStores
     * const tokenStore = await prisma.tokenStore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenStores and only return the `id`
     * const tokenStoreWithIdOnly = await prisma.tokenStore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenStoreCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenStoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenStorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenStore.
     * @param {TokenStoreDeleteArgs} args - Arguments to delete one TokenStore.
     * @example
     * // Delete one TokenStore
     * const TokenStore = await prisma.tokenStore.delete({
     *   where: {
     *     // ... filter to delete one TokenStore
     *   }
     * })
     * 
     */
    delete<T extends TokenStoreDeleteArgs>(args: SelectSubset<T, TokenStoreDeleteArgs<ExtArgs>>): Prisma__TokenStoreClient<$Result.GetResult<Prisma.$TokenStorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenStore.
     * @param {TokenStoreUpdateArgs} args - Arguments to update one TokenStore.
     * @example
     * // Update one TokenStore
     * const tokenStore = await prisma.tokenStore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenStoreUpdateArgs>(args: SelectSubset<T, TokenStoreUpdateArgs<ExtArgs>>): Prisma__TokenStoreClient<$Result.GetResult<Prisma.$TokenStorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenStores.
     * @param {TokenStoreDeleteManyArgs} args - Arguments to filter TokenStores to delete.
     * @example
     * // Delete a few TokenStores
     * const { count } = await prisma.tokenStore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenStoreDeleteManyArgs>(args?: SelectSubset<T, TokenStoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenStoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenStores
     * const tokenStore = await prisma.tokenStore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenStoreUpdateManyArgs>(args: SelectSubset<T, TokenStoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TokenStore.
     * @param {TokenStoreUpsertArgs} args - Arguments to update or create a TokenStore.
     * @example
     * // Update or create a TokenStore
     * const tokenStore = await prisma.tokenStore.upsert({
     *   create: {
     *     // ... data to create a TokenStore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenStore we want to update
     *   }
     * })
     */
    upsert<T extends TokenStoreUpsertArgs>(args: SelectSubset<T, TokenStoreUpsertArgs<ExtArgs>>): Prisma__TokenStoreClient<$Result.GetResult<Prisma.$TokenStorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenStores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenStoreCountArgs} args - Arguments to filter TokenStores to count.
     * @example
     * // Count the number of TokenStores
     * const count = await prisma.tokenStore.count({
     *   where: {
     *     // ... the filter for the TokenStores we want to count
     *   }
     * })
    **/
    count<T extends TokenStoreCountArgs>(
      args?: Subset<T, TokenStoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenStoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenStoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenStoreAggregateArgs>(args: Subset<T, TokenStoreAggregateArgs>): Prisma.PrismaPromise<GetTokenStoreAggregateType<T>>

    /**
     * Group by TokenStore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenStoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenStoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenStoreGroupByArgs['orderBy'] }
        : { orderBy?: TokenStoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenStoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenStore model
   */
  readonly fields: TokenStoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenStore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenStoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenStore model
   */
  interface TokenStoreFieldRefs {
    readonly id: FieldRef<"TokenStore", 'String'>
    readonly createdAt: FieldRef<"TokenStore", 'DateTime'>
    readonly provider: FieldRef<"TokenStore", 'String'>
    readonly updatedAt: FieldRef<"TokenStore", 'DateTime'>
    readonly accessToken: FieldRef<"TokenStore", 'String'>
    readonly refreshToken: FieldRef<"TokenStore", 'String'>
    readonly userId: FieldRef<"TokenStore", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TokenStore findUnique
   */
  export type TokenStoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenStore
     */
    select?: TokenStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenStore
     */
    omit?: TokenStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenStoreInclude<ExtArgs> | null
    /**
     * Filter, which TokenStore to fetch.
     */
    where: TokenStoreWhereUniqueInput
  }

  /**
   * TokenStore findUniqueOrThrow
   */
  export type TokenStoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenStore
     */
    select?: TokenStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenStore
     */
    omit?: TokenStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenStoreInclude<ExtArgs> | null
    /**
     * Filter, which TokenStore to fetch.
     */
    where: TokenStoreWhereUniqueInput
  }

  /**
   * TokenStore findFirst
   */
  export type TokenStoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenStore
     */
    select?: TokenStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenStore
     */
    omit?: TokenStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenStoreInclude<ExtArgs> | null
    /**
     * Filter, which TokenStore to fetch.
     */
    where?: TokenStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenStores to fetch.
     */
    orderBy?: TokenStoreOrderByWithRelationInput | TokenStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenStores.
     */
    cursor?: TokenStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenStores.
     */
    distinct?: TokenStoreScalarFieldEnum | TokenStoreScalarFieldEnum[]
  }

  /**
   * TokenStore findFirstOrThrow
   */
  export type TokenStoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenStore
     */
    select?: TokenStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenStore
     */
    omit?: TokenStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenStoreInclude<ExtArgs> | null
    /**
     * Filter, which TokenStore to fetch.
     */
    where?: TokenStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenStores to fetch.
     */
    orderBy?: TokenStoreOrderByWithRelationInput | TokenStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenStores.
     */
    cursor?: TokenStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenStores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenStores.
     */
    distinct?: TokenStoreScalarFieldEnum | TokenStoreScalarFieldEnum[]
  }

  /**
   * TokenStore findMany
   */
  export type TokenStoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenStore
     */
    select?: TokenStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenStore
     */
    omit?: TokenStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenStoreInclude<ExtArgs> | null
    /**
     * Filter, which TokenStores to fetch.
     */
    where?: TokenStoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenStores to fetch.
     */
    orderBy?: TokenStoreOrderByWithRelationInput | TokenStoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenStores.
     */
    cursor?: TokenStoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenStores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenStores.
     */
    skip?: number
    distinct?: TokenStoreScalarFieldEnum | TokenStoreScalarFieldEnum[]
  }

  /**
   * TokenStore create
   */
  export type TokenStoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenStore
     */
    select?: TokenStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenStore
     */
    omit?: TokenStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenStoreInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenStore.
     */
    data: XOR<TokenStoreCreateInput, TokenStoreUncheckedCreateInput>
  }

  /**
   * TokenStore createMany
   */
  export type TokenStoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenStores.
     */
    data: TokenStoreCreateManyInput | TokenStoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenStore createManyAndReturn
   */
  export type TokenStoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenStore
     */
    select?: TokenStoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenStore
     */
    omit?: TokenStoreOmit<ExtArgs> | null
    /**
     * The data used to create many TokenStores.
     */
    data: TokenStoreCreateManyInput | TokenStoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenStoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenStore update
   */
  export type TokenStoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenStore
     */
    select?: TokenStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenStore
     */
    omit?: TokenStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenStoreInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenStore.
     */
    data: XOR<TokenStoreUpdateInput, TokenStoreUncheckedUpdateInput>
    /**
     * Choose, which TokenStore to update.
     */
    where: TokenStoreWhereUniqueInput
  }

  /**
   * TokenStore updateMany
   */
  export type TokenStoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenStores.
     */
    data: XOR<TokenStoreUpdateManyMutationInput, TokenStoreUncheckedUpdateManyInput>
    /**
     * Filter which TokenStores to update
     */
    where?: TokenStoreWhereInput
  }

  /**
   * TokenStore upsert
   */
  export type TokenStoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenStore
     */
    select?: TokenStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenStore
     */
    omit?: TokenStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenStoreInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenStore to update in case it exists.
     */
    where: TokenStoreWhereUniqueInput
    /**
     * In case the TokenStore found by the `where` argument doesn't exist, create a new TokenStore with this data.
     */
    create: XOR<TokenStoreCreateInput, TokenStoreUncheckedCreateInput>
    /**
     * In case the TokenStore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenStoreUpdateInput, TokenStoreUncheckedUpdateInput>
  }

  /**
   * TokenStore delete
   */
  export type TokenStoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenStore
     */
    select?: TokenStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenStore
     */
    omit?: TokenStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenStoreInclude<ExtArgs> | null
    /**
     * Filter which TokenStore to delete.
     */
    where: TokenStoreWhereUniqueInput
  }

  /**
   * TokenStore deleteMany
   */
  export type TokenStoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenStores to delete
     */
    where?: TokenStoreWhereInput
  }

  /**
   * TokenStore without action
   */
  export type TokenStoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenStore
     */
    select?: TokenStoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenStore
     */
    omit?: TokenStoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenStoreInclude<ExtArgs> | null
  }


  /**
   * Model ZapTemplate
   */

  export type AggregateZapTemplate = {
    _count: ZapTemplateCountAggregateOutputType | null
    _min: ZapTemplateMinAggregateOutputType | null
    _max: ZapTemplateMaxAggregateOutputType | null
  }

  export type ZapTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: string | null
    isPopular: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    triggerAppId: string | null
    triggerId: string | null
    actionAppId: string | null
    actionId: string | null
  }

  export type ZapTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    category: string | null
    isPopular: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    triggerAppId: string | null
    triggerId: string | null
    actionAppId: string | null
    actionId: string | null
  }

  export type ZapTemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    isPopular: number
    createdAt: number
    updatedAt: number
    triggerAppId: number
    triggerId: number
    actionAppId: number
    actionId: number
    triggerConfig: number
    actionConfig: number
    _all: number
  }


  export type ZapTemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isPopular?: true
    createdAt?: true
    updatedAt?: true
    triggerAppId?: true
    triggerId?: true
    actionAppId?: true
    actionId?: true
  }

  export type ZapTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isPopular?: true
    createdAt?: true
    updatedAt?: true
    triggerAppId?: true
    triggerId?: true
    actionAppId?: true
    actionId?: true
  }

  export type ZapTemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    isPopular?: true
    createdAt?: true
    updatedAt?: true
    triggerAppId?: true
    triggerId?: true
    actionAppId?: true
    actionId?: true
    triggerConfig?: true
    actionConfig?: true
    _all?: true
  }

  export type ZapTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapTemplate to aggregate.
     */
    where?: ZapTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapTemplates to fetch.
     */
    orderBy?: ZapTemplateOrderByWithRelationInput | ZapTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZapTemplates
    **/
    _count?: true | ZapTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapTemplateMaxAggregateInputType
  }

  export type GetZapTemplateAggregateType<T extends ZapTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateZapTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapTemplate[P]>
      : GetScalarType<T[P], AggregateZapTemplate[P]>
  }




  export type ZapTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapTemplateWhereInput
    orderBy?: ZapTemplateOrderByWithAggregationInput | ZapTemplateOrderByWithAggregationInput[]
    by: ZapTemplateScalarFieldEnum[] | ZapTemplateScalarFieldEnum
    having?: ZapTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapTemplateCountAggregateInputType | true
    _min?: ZapTemplateMinAggregateInputType
    _max?: ZapTemplateMaxAggregateInputType
  }

  export type ZapTemplateGroupByOutputType = {
    id: string
    name: string
    description: string
    category: string
    isPopular: boolean
    createdAt: Date
    updatedAt: Date
    triggerAppId: string
    triggerId: string
    actionAppId: string
    actionId: string
    triggerConfig: JsonValue
    actionConfig: JsonValue
    _count: ZapTemplateCountAggregateOutputType | null
    _min: ZapTemplateMinAggregateOutputType | null
    _max: ZapTemplateMaxAggregateOutputType | null
  }

  type GetZapTemplateGroupByPayload<T extends ZapTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ZapTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ZapTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isPopular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    triggerAppId?: boolean
    triggerId?: boolean
    actionAppId?: boolean
    actionId?: boolean
    triggerConfig?: boolean
    actionConfig?: boolean
    triggerApp?: boolean | AppDefaultArgs<ExtArgs>
    trigger?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    actionApp?: boolean | AppDefaultArgs<ExtArgs>
    action?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    zaps?: boolean | ZapTemplate$zapsArgs<ExtArgs>
    _count?: boolean | ZapTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapTemplate"]>

  export type ZapTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isPopular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    triggerAppId?: boolean
    triggerId?: boolean
    actionAppId?: boolean
    actionId?: boolean
    triggerConfig?: boolean
    actionConfig?: boolean
    triggerApp?: boolean | AppDefaultArgs<ExtArgs>
    trigger?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    actionApp?: boolean | AppDefaultArgs<ExtArgs>
    action?: boolean | AvailableActionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapTemplate"]>


  export type ZapTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isPopular?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    triggerAppId?: boolean
    triggerId?: boolean
    actionAppId?: boolean
    actionId?: boolean
    triggerConfig?: boolean
    actionConfig?: boolean
  }

  export type ZapTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "isPopular" | "createdAt" | "updatedAt" | "triggerAppId" | "triggerId" | "actionAppId" | "actionId" | "triggerConfig" | "actionConfig", ExtArgs["result"]["zapTemplate"]>
  export type ZapTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggerApp?: boolean | AppDefaultArgs<ExtArgs>
    trigger?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    actionApp?: boolean | AppDefaultArgs<ExtArgs>
    action?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    zaps?: boolean | ZapTemplate$zapsArgs<ExtArgs>
    _count?: boolean | ZapTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZapTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    triggerApp?: boolean | AppDefaultArgs<ExtArgs>
    trigger?: boolean | AvailableTriggersDefaultArgs<ExtArgs>
    actionApp?: boolean | AppDefaultArgs<ExtArgs>
    action?: boolean | AvailableActionsDefaultArgs<ExtArgs>
  }

  export type $ZapTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZapTemplate"
    objects: {
      triggerApp: Prisma.$AppPayload<ExtArgs>
      trigger: Prisma.$AvailableTriggersPayload<ExtArgs>
      actionApp: Prisma.$AppPayload<ExtArgs>
      action: Prisma.$AvailableActionsPayload<ExtArgs>
      zaps: Prisma.$ZapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      category: string
      isPopular: boolean
      createdAt: Date
      updatedAt: Date
      triggerAppId: string
      triggerId: string
      actionAppId: string
      actionId: string
      triggerConfig: Prisma.JsonValue
      actionConfig: Prisma.JsonValue
    }, ExtArgs["result"]["zapTemplate"]>
    composites: {}
  }

  type ZapTemplateGetPayload<S extends boolean | null | undefined | ZapTemplateDefaultArgs> = $Result.GetResult<Prisma.$ZapTemplatePayload, S>

  type ZapTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapTemplateCountAggregateInputType | true
    }

  export interface ZapTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZapTemplate'], meta: { name: 'ZapTemplate' } }
    /**
     * Find zero or one ZapTemplate that matches the filter.
     * @param {ZapTemplateFindUniqueArgs} args - Arguments to find a ZapTemplate
     * @example
     * // Get one ZapTemplate
     * const zapTemplate = await prisma.zapTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapTemplateFindUniqueArgs>(args: SelectSubset<T, ZapTemplateFindUniqueArgs<ExtArgs>>): Prisma__ZapTemplateClient<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZapTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapTemplateFindUniqueOrThrowArgs} args - Arguments to find a ZapTemplate
     * @example
     * // Get one ZapTemplate
     * const zapTemplate = await prisma.zapTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapTemplateClient<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapTemplateFindFirstArgs} args - Arguments to find a ZapTemplate
     * @example
     * // Get one ZapTemplate
     * const zapTemplate = await prisma.zapTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapTemplateFindFirstArgs>(args?: SelectSubset<T, ZapTemplateFindFirstArgs<ExtArgs>>): Prisma__ZapTemplateClient<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapTemplateFindFirstOrThrowArgs} args - Arguments to find a ZapTemplate
     * @example
     * // Get one ZapTemplate
     * const zapTemplate = await prisma.zapTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapTemplateClient<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZapTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapTemplates
     * const zapTemplates = await prisma.zapTemplate.findMany()
     * 
     * // Get first 10 ZapTemplates
     * const zapTemplates = await prisma.zapTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapTemplateWithIdOnly = await prisma.zapTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapTemplateFindManyArgs>(args?: SelectSubset<T, ZapTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZapTemplate.
     * @param {ZapTemplateCreateArgs} args - Arguments to create a ZapTemplate.
     * @example
     * // Create one ZapTemplate
     * const ZapTemplate = await prisma.zapTemplate.create({
     *   data: {
     *     // ... data to create a ZapTemplate
     *   }
     * })
     * 
     */
    create<T extends ZapTemplateCreateArgs>(args: SelectSubset<T, ZapTemplateCreateArgs<ExtArgs>>): Prisma__ZapTemplateClient<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZapTemplates.
     * @param {ZapTemplateCreateManyArgs} args - Arguments to create many ZapTemplates.
     * @example
     * // Create many ZapTemplates
     * const zapTemplate = await prisma.zapTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapTemplateCreateManyArgs>(args?: SelectSubset<T, ZapTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZapTemplates and returns the data saved in the database.
     * @param {ZapTemplateCreateManyAndReturnArgs} args - Arguments to create many ZapTemplates.
     * @example
     * // Create many ZapTemplates
     * const zapTemplate = await prisma.zapTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZapTemplates and only return the `id`
     * const zapTemplateWithIdOnly = await prisma.zapTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZapTemplate.
     * @param {ZapTemplateDeleteArgs} args - Arguments to delete one ZapTemplate.
     * @example
     * // Delete one ZapTemplate
     * const ZapTemplate = await prisma.zapTemplate.delete({
     *   where: {
     *     // ... filter to delete one ZapTemplate
     *   }
     * })
     * 
     */
    delete<T extends ZapTemplateDeleteArgs>(args: SelectSubset<T, ZapTemplateDeleteArgs<ExtArgs>>): Prisma__ZapTemplateClient<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZapTemplate.
     * @param {ZapTemplateUpdateArgs} args - Arguments to update one ZapTemplate.
     * @example
     * // Update one ZapTemplate
     * const zapTemplate = await prisma.zapTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapTemplateUpdateArgs>(args: SelectSubset<T, ZapTemplateUpdateArgs<ExtArgs>>): Prisma__ZapTemplateClient<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZapTemplates.
     * @param {ZapTemplateDeleteManyArgs} args - Arguments to filter ZapTemplates to delete.
     * @example
     * // Delete a few ZapTemplates
     * const { count } = await prisma.zapTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapTemplateDeleteManyArgs>(args?: SelectSubset<T, ZapTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapTemplates
     * const zapTemplate = await prisma.zapTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapTemplateUpdateManyArgs>(args: SelectSubset<T, ZapTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ZapTemplate.
     * @param {ZapTemplateUpsertArgs} args - Arguments to update or create a ZapTemplate.
     * @example
     * // Update or create a ZapTemplate
     * const zapTemplate = await prisma.zapTemplate.upsert({
     *   create: {
     *     // ... data to create a ZapTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ZapTemplateUpsertArgs>(args: SelectSubset<T, ZapTemplateUpsertArgs<ExtArgs>>): Prisma__ZapTemplateClient<$Result.GetResult<Prisma.$ZapTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZapTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapTemplateCountArgs} args - Arguments to filter ZapTemplates to count.
     * @example
     * // Count the number of ZapTemplates
     * const count = await prisma.zapTemplate.count({
     *   where: {
     *     // ... the filter for the ZapTemplates we want to count
     *   }
     * })
    **/
    count<T extends ZapTemplateCountArgs>(
      args?: Subset<T, ZapTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZapTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapTemplateAggregateArgs>(args: Subset<T, ZapTemplateAggregateArgs>): Prisma.PrismaPromise<GetZapTemplateAggregateType<T>>

    /**
     * Group by ZapTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZapTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ZapTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZapTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZapTemplate model
   */
  readonly fields: ZapTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZapTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    triggerApp<T extends AppDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppDefaultArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trigger<T extends AvailableTriggersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggersDefaultArgs<ExtArgs>>): Prisma__AvailableTriggersClient<$Result.GetResult<Prisma.$AvailableTriggersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actionApp<T extends AppDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppDefaultArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    action<T extends AvailableActionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActionsDefaultArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zaps<T extends ZapTemplate$zapsArgs<ExtArgs> = {}>(args?: Subset<T, ZapTemplate$zapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ZapTemplate model
   */
  interface ZapTemplateFieldRefs {
    readonly id: FieldRef<"ZapTemplate", 'String'>
    readonly name: FieldRef<"ZapTemplate", 'String'>
    readonly description: FieldRef<"ZapTemplate", 'String'>
    readonly category: FieldRef<"ZapTemplate", 'String'>
    readonly isPopular: FieldRef<"ZapTemplate", 'Boolean'>
    readonly createdAt: FieldRef<"ZapTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"ZapTemplate", 'DateTime'>
    readonly triggerAppId: FieldRef<"ZapTemplate", 'String'>
    readonly triggerId: FieldRef<"ZapTemplate", 'String'>
    readonly actionAppId: FieldRef<"ZapTemplate", 'String'>
    readonly actionId: FieldRef<"ZapTemplate", 'String'>
    readonly triggerConfig: FieldRef<"ZapTemplate", 'Json'>
    readonly actionConfig: FieldRef<"ZapTemplate", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ZapTemplate findUnique
   */
  export type ZapTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ZapTemplate to fetch.
     */
    where: ZapTemplateWhereUniqueInput
  }

  /**
   * ZapTemplate findUniqueOrThrow
   */
  export type ZapTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ZapTemplate to fetch.
     */
    where: ZapTemplateWhereUniqueInput
  }

  /**
   * ZapTemplate findFirst
   */
  export type ZapTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ZapTemplate to fetch.
     */
    where?: ZapTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapTemplates to fetch.
     */
    orderBy?: ZapTemplateOrderByWithRelationInput | ZapTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapTemplates.
     */
    cursor?: ZapTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapTemplates.
     */
    distinct?: ZapTemplateScalarFieldEnum | ZapTemplateScalarFieldEnum[]
  }

  /**
   * ZapTemplate findFirstOrThrow
   */
  export type ZapTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ZapTemplate to fetch.
     */
    where?: ZapTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapTemplates to fetch.
     */
    orderBy?: ZapTemplateOrderByWithRelationInput | ZapTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZapTemplates.
     */
    cursor?: ZapTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZapTemplates.
     */
    distinct?: ZapTemplateScalarFieldEnum | ZapTemplateScalarFieldEnum[]
  }

  /**
   * ZapTemplate findMany
   */
  export type ZapTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ZapTemplates to fetch.
     */
    where?: ZapTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZapTemplates to fetch.
     */
    orderBy?: ZapTemplateOrderByWithRelationInput | ZapTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZapTemplates.
     */
    cursor?: ZapTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZapTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZapTemplates.
     */
    skip?: number
    distinct?: ZapTemplateScalarFieldEnum | ZapTemplateScalarFieldEnum[]
  }

  /**
   * ZapTemplate create
   */
  export type ZapTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a ZapTemplate.
     */
    data: XOR<ZapTemplateCreateInput, ZapTemplateUncheckedCreateInput>
  }

  /**
   * ZapTemplate createMany
   */
  export type ZapTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZapTemplates.
     */
    data: ZapTemplateCreateManyInput | ZapTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZapTemplate createManyAndReturn
   */
  export type ZapTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many ZapTemplates.
     */
    data: ZapTemplateCreateManyInput | ZapTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZapTemplate update
   */
  export type ZapTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a ZapTemplate.
     */
    data: XOR<ZapTemplateUpdateInput, ZapTemplateUncheckedUpdateInput>
    /**
     * Choose, which ZapTemplate to update.
     */
    where: ZapTemplateWhereUniqueInput
  }

  /**
   * ZapTemplate updateMany
   */
  export type ZapTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZapTemplates.
     */
    data: XOR<ZapTemplateUpdateManyMutationInput, ZapTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ZapTemplates to update
     */
    where?: ZapTemplateWhereInput
  }

  /**
   * ZapTemplate upsert
   */
  export type ZapTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the ZapTemplate to update in case it exists.
     */
    where: ZapTemplateWhereUniqueInput
    /**
     * In case the ZapTemplate found by the `where` argument doesn't exist, create a new ZapTemplate with this data.
     */
    create: XOR<ZapTemplateCreateInput, ZapTemplateUncheckedCreateInput>
    /**
     * In case the ZapTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapTemplateUpdateInput, ZapTemplateUncheckedUpdateInput>
  }

  /**
   * ZapTemplate delete
   */
  export type ZapTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
    /**
     * Filter which ZapTemplate to delete.
     */
    where: ZapTemplateWhereUniqueInput
  }

  /**
   * ZapTemplate deleteMany
   */
  export type ZapTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZapTemplates to delete
     */
    where?: ZapTemplateWhereInput
  }

  /**
   * ZapTemplate.zaps
   */
  export type ZapTemplate$zapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    where?: ZapWhereInput
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    cursor?: ZapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * ZapTemplate without action
   */
  export type ZapTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapTemplate
     */
    select?: ZapTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZapTemplate
     */
    omit?: ZapTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapTemplateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    email: 'email',
    teamId: 'teamId',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    metadata: 'metadata',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    createdById: 'createdById'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const AppScalarFieldEnum: {
    name: 'name',
    description: 'description',
    teamId: 'teamId',
    id: 'id'
  };

  export type AppScalarFieldEnum = (typeof AppScalarFieldEnum)[keyof typeof AppScalarFieldEnum]


  export const AuthMethodsScalarFieldEnum: {
    id: 'id',
    appId: 'appId',
    authId: 'authId',
    metadata: 'metadata'
  };

  export type AuthMethodsScalarFieldEnum = (typeof AuthMethodsScalarFieldEnum)[keyof typeof AuthMethodsScalarFieldEnum]


  export const AvailableAuthMethodsScalarFieldEnum: {
    name: 'name',
    provider: 'provider',
    description: 'description',
    metadata: 'metadata',
    id: 'id'
  };

  export type AvailableAuthMethodsScalarFieldEnum = (typeof AvailableAuthMethodsScalarFieldEnum)[keyof typeof AvailableAuthMethodsScalarFieldEnum]


  export const ZapScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    metadata: 'metadata',
    userId: 'userId',
    image: 'image',
    templateId: 'templateId'
  };

  export type ZapScalarFieldEnum = (typeof ZapScalarFieldEnum)[keyof typeof ZapScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    zapId: 'zapId',
    metadata: 'metadata',
    availableTriggerId: 'availableTriggerId'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    metadata: 'metadata',
    zapId: 'zapId',
    sortingOrder: 'sortingOrder',
    actionType: 'actionType'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const AvailableTriggersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    metadata: 'metadata',
    configMetadata: 'configMetadata',
    type: 'type',
    appId: 'appId'
  };

  export type AvailableTriggersScalarFieldEnum = (typeof AvailableTriggersScalarFieldEnum)[keyof typeof AvailableTriggersScalarFieldEnum]


  export const AvailableActionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    metadata: 'metadata',
    configMetadata: 'configMetadata',
    type: 'type',
    appId: 'appId'
  };

  export type AvailableActionsScalarFieldEnum = (typeof AvailableActionsScalarFieldEnum)[keyof typeof AvailableActionsScalarFieldEnum]


  export const ZapRunScalarFieldEnum: {
    id: 'id',
    metadata: 'metadata',
    zapId: 'zapId'
  };

  export type ZapRunScalarFieldEnum = (typeof ZapRunScalarFieldEnum)[keyof typeof ZapRunScalarFieldEnum]


  export const ZapRunOutBoxScalarFieldEnum: {
    id: 'id',
    zaprunId: 'zaprunId'
  };

  export type ZapRunOutBoxScalarFieldEnum = (typeof ZapRunOutBoxScalarFieldEnum)[keyof typeof ZapRunOutBoxScalarFieldEnum]


  export const TokenStoreScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    provider: 'provider',
    updatedAt: 'updatedAt',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    userId: 'userId'
  };

  export type TokenStoreScalarFieldEnum = (typeof TokenStoreScalarFieldEnum)[keyof typeof TokenStoreScalarFieldEnum]


  export const ZapTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    isPopular: 'isPopular',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    triggerAppId: 'triggerAppId',
    triggerId: 'triggerId',
    actionAppId: 'actionAppId',
    actionId: 'actionId',
    triggerConfig: 'triggerConfig',
    actionConfig: 'actionConfig'
  };

  export type ZapTemplateScalarFieldEnum = (typeof ZapTemplateScalarFieldEnum)[keyof typeof ZapTemplateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    teamId?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    tokens?: TokenStoreListRelationFilter
    team?: XOR<TeamNullableRelationFilter, TeamWhereInput> | null
    zaps?: ZapListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    teamId?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    tokens?: TokenStoreOrderByRelationAggregateInput
    team?: TeamOrderByWithRelationInput
    zaps?: ZapOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    teamId?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    tokens?: TokenStoreListRelationFilter
    team?: XOR<TeamNullableRelationFilter, TeamWhereInput> | null
    zaps?: ZapListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    teamId?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    teamId?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    metadata?: JsonFilter<"Team">
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    createdById?: StringFilter<"Team"> | string
    apps?: AppListRelationFilter
    members?: UserListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    metadata?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    apps?: AppOrderByRelationAggregateInput
    members?: UserOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    createdById?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    metadata?: JsonFilter<"Team">
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    apps?: AppListRelationFilter
    members?: UserListRelationFilter
  }, "id" | "createdById">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    metadata?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    metadata?: JsonWithAggregatesFilter<"Team">
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    createdById?: StringWithAggregatesFilter<"Team"> | string
  }

  export type AppWhereInput = {
    AND?: AppWhereInput | AppWhereInput[]
    OR?: AppWhereInput[]
    NOT?: AppWhereInput | AppWhereInput[]
    name?: StringFilter<"App"> | string
    description?: StringFilter<"App"> | string
    teamId?: StringFilter<"App"> | string
    id?: StringFilter<"App"> | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    authMethods?: AuthMethodsListRelationFilter
    actions?: AvailableActionsListRelationFilter
    triggers?: AvailableTriggersListRelationFilter
    triggerTemplates?: ZapTemplateListRelationFilter
    actionTemplates?: ZapTemplateListRelationFilter
  }

  export type AppOrderByWithRelationInput = {
    name?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    id?: SortOrder
    team?: TeamOrderByWithRelationInput
    authMethods?: AuthMethodsOrderByRelationAggregateInput
    actions?: AvailableActionsOrderByRelationAggregateInput
    triggers?: AvailableTriggersOrderByRelationAggregateInput
    triggerTemplates?: ZapTemplateOrderByRelationAggregateInput
    actionTemplates?: ZapTemplateOrderByRelationAggregateInput
  }

  export type AppWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppWhereInput | AppWhereInput[]
    OR?: AppWhereInput[]
    NOT?: AppWhereInput | AppWhereInput[]
    name?: StringFilter<"App"> | string
    description?: StringFilter<"App"> | string
    teamId?: StringFilter<"App"> | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    authMethods?: AuthMethodsListRelationFilter
    actions?: AvailableActionsListRelationFilter
    triggers?: AvailableTriggersListRelationFilter
    triggerTemplates?: ZapTemplateListRelationFilter
    actionTemplates?: ZapTemplateListRelationFilter
  }, "id">

  export type AppOrderByWithAggregationInput = {
    name?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    id?: SortOrder
    _count?: AppCountOrderByAggregateInput
    _max?: AppMaxOrderByAggregateInput
    _min?: AppMinOrderByAggregateInput
  }

  export type AppScalarWhereWithAggregatesInput = {
    AND?: AppScalarWhereWithAggregatesInput | AppScalarWhereWithAggregatesInput[]
    OR?: AppScalarWhereWithAggregatesInput[]
    NOT?: AppScalarWhereWithAggregatesInput | AppScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"App"> | string
    description?: StringWithAggregatesFilter<"App"> | string
    teamId?: StringWithAggregatesFilter<"App"> | string
    id?: StringWithAggregatesFilter<"App"> | string
  }

  export type AuthMethodsWhereInput = {
    AND?: AuthMethodsWhereInput | AuthMethodsWhereInput[]
    OR?: AuthMethodsWhereInput[]
    NOT?: AuthMethodsWhereInput | AuthMethodsWhereInput[]
    id?: StringFilter<"AuthMethods"> | string
    appId?: StringFilter<"AuthMethods"> | string
    authId?: StringFilter<"AuthMethods"> | string
    metadata?: JsonFilter<"AuthMethods">
    app?: XOR<AppRelationFilter, AppWhereInput>
    availableAuth?: XOR<AvailableAuthMethodsRelationFilter, AvailableAuthMethodsWhereInput>
  }

  export type AuthMethodsOrderByWithRelationInput = {
    id?: SortOrder
    appId?: SortOrder
    authId?: SortOrder
    metadata?: SortOrder
    app?: AppOrderByWithRelationInput
    availableAuth?: AvailableAuthMethodsOrderByWithRelationInput
  }

  export type AuthMethodsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthMethodsWhereInput | AuthMethodsWhereInput[]
    OR?: AuthMethodsWhereInput[]
    NOT?: AuthMethodsWhereInput | AuthMethodsWhereInput[]
    appId?: StringFilter<"AuthMethods"> | string
    authId?: StringFilter<"AuthMethods"> | string
    metadata?: JsonFilter<"AuthMethods">
    app?: XOR<AppRelationFilter, AppWhereInput>
    availableAuth?: XOR<AvailableAuthMethodsRelationFilter, AvailableAuthMethodsWhereInput>
  }, "id">

  export type AuthMethodsOrderByWithAggregationInput = {
    id?: SortOrder
    appId?: SortOrder
    authId?: SortOrder
    metadata?: SortOrder
    _count?: AuthMethodsCountOrderByAggregateInput
    _max?: AuthMethodsMaxOrderByAggregateInput
    _min?: AuthMethodsMinOrderByAggregateInput
  }

  export type AuthMethodsScalarWhereWithAggregatesInput = {
    AND?: AuthMethodsScalarWhereWithAggregatesInput | AuthMethodsScalarWhereWithAggregatesInput[]
    OR?: AuthMethodsScalarWhereWithAggregatesInput[]
    NOT?: AuthMethodsScalarWhereWithAggregatesInput | AuthMethodsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthMethods"> | string
    appId?: StringWithAggregatesFilter<"AuthMethods"> | string
    authId?: StringWithAggregatesFilter<"AuthMethods"> | string
    metadata?: JsonWithAggregatesFilter<"AuthMethods">
  }

  export type AvailableAuthMethodsWhereInput = {
    AND?: AvailableAuthMethodsWhereInput | AvailableAuthMethodsWhereInput[]
    OR?: AvailableAuthMethodsWhereInput[]
    NOT?: AvailableAuthMethodsWhereInput | AvailableAuthMethodsWhereInput[]
    name?: StringFilter<"AvailableAuthMethods"> | string
    provider?: StringFilter<"AvailableAuthMethods"> | string
    description?: StringFilter<"AvailableAuthMethods"> | string
    metadata?: JsonFilter<"AvailableAuthMethods">
    id?: StringFilter<"AvailableAuthMethods"> | string
    authMethods?: AuthMethodsListRelationFilter
  }

  export type AvailableAuthMethodsOrderByWithRelationInput = {
    name?: SortOrder
    provider?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    id?: SortOrder
    authMethods?: AuthMethodsOrderByRelationAggregateInput
  }

  export type AvailableAuthMethodsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableAuthMethodsWhereInput | AvailableAuthMethodsWhereInput[]
    OR?: AvailableAuthMethodsWhereInput[]
    NOT?: AvailableAuthMethodsWhereInput | AvailableAuthMethodsWhereInput[]
    name?: StringFilter<"AvailableAuthMethods"> | string
    provider?: StringFilter<"AvailableAuthMethods"> | string
    description?: StringFilter<"AvailableAuthMethods"> | string
    metadata?: JsonFilter<"AvailableAuthMethods">
    authMethods?: AuthMethodsListRelationFilter
  }, "id">

  export type AvailableAuthMethodsOrderByWithAggregationInput = {
    name?: SortOrder
    provider?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    id?: SortOrder
    _count?: AvailableAuthMethodsCountOrderByAggregateInput
    _max?: AvailableAuthMethodsMaxOrderByAggregateInput
    _min?: AvailableAuthMethodsMinOrderByAggregateInput
  }

  export type AvailableAuthMethodsScalarWhereWithAggregatesInput = {
    AND?: AvailableAuthMethodsScalarWhereWithAggregatesInput | AvailableAuthMethodsScalarWhereWithAggregatesInput[]
    OR?: AvailableAuthMethodsScalarWhereWithAggregatesInput[]
    NOT?: AvailableAuthMethodsScalarWhereWithAggregatesInput | AvailableAuthMethodsScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"AvailableAuthMethods"> | string
    provider?: StringWithAggregatesFilter<"AvailableAuthMethods"> | string
    description?: StringWithAggregatesFilter<"AvailableAuthMethods"> | string
    metadata?: JsonWithAggregatesFilter<"AvailableAuthMethods">
    id?: StringWithAggregatesFilter<"AvailableAuthMethods"> | string
  }

  export type ZapWhereInput = {
    AND?: ZapWhereInput | ZapWhereInput[]
    OR?: ZapWhereInput[]
    NOT?: ZapWhereInput | ZapWhereInput[]
    id?: StringFilter<"Zap"> | string
    name?: StringFilter<"Zap"> | string
    description?: StringFilter<"Zap"> | string
    metadata?: JsonFilter<"Zap">
    userId?: StringFilter<"Zap"> | string
    image?: StringNullableFilter<"Zap"> | string | null
    templateId?: StringNullableFilter<"Zap"> | string | null
    actions?: ActionListRelationFilter
    trigger?: XOR<TriggerNullableRelationFilter, TriggerWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    zapRuns?: ZapRunListRelationFilter
    template?: XOR<ZapTemplateNullableRelationFilter, ZapTemplateWhereInput> | null
  }

  export type ZapOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    userId?: SortOrder
    image?: SortOrderInput | SortOrder
    templateId?: SortOrderInput | SortOrder
    actions?: ActionOrderByRelationAggregateInput
    trigger?: TriggerOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    zapRuns?: ZapRunOrderByRelationAggregateInput
    template?: ZapTemplateOrderByWithRelationInput
  }

  export type ZapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZapWhereInput | ZapWhereInput[]
    OR?: ZapWhereInput[]
    NOT?: ZapWhereInput | ZapWhereInput[]
    name?: StringFilter<"Zap"> | string
    description?: StringFilter<"Zap"> | string
    metadata?: JsonFilter<"Zap">
    userId?: StringFilter<"Zap"> | string
    image?: StringNullableFilter<"Zap"> | string | null
    templateId?: StringNullableFilter<"Zap"> | string | null
    actions?: ActionListRelationFilter
    trigger?: XOR<TriggerNullableRelationFilter, TriggerWhereInput> | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    zapRuns?: ZapRunListRelationFilter
    template?: XOR<ZapTemplateNullableRelationFilter, ZapTemplateWhereInput> | null
  }, "id">

  export type ZapOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    userId?: SortOrder
    image?: SortOrderInput | SortOrder
    templateId?: SortOrderInput | SortOrder
    _count?: ZapCountOrderByAggregateInput
    _max?: ZapMaxOrderByAggregateInput
    _min?: ZapMinOrderByAggregateInput
  }

  export type ZapScalarWhereWithAggregatesInput = {
    AND?: ZapScalarWhereWithAggregatesInput | ZapScalarWhereWithAggregatesInput[]
    OR?: ZapScalarWhereWithAggregatesInput[]
    NOT?: ZapScalarWhereWithAggregatesInput | ZapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Zap"> | string
    name?: StringWithAggregatesFilter<"Zap"> | string
    description?: StringWithAggregatesFilter<"Zap"> | string
    metadata?: JsonWithAggregatesFilter<"Zap">
    userId?: StringWithAggregatesFilter<"Zap"> | string
    image?: StringNullableWithAggregatesFilter<"Zap"> | string | null
    templateId?: StringNullableWithAggregatesFilter<"Zap"> | string | null
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    name?: StringFilter<"Trigger"> | string
    description?: StringFilter<"Trigger"> | string
    zapId?: StringFilter<"Trigger"> | string
    metadata?: JsonFilter<"Trigger">
    availableTriggerId?: StringFilter<"Trigger"> | string
    available?: XOR<AvailableTriggersRelationFilter, AvailableTriggersWhereInput>
    zap?: XOR<ZapRelationFilter, ZapWhereInput>
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    zapId?: SortOrder
    metadata?: SortOrder
    availableTriggerId?: SortOrder
    available?: AvailableTriggersOrderByWithRelationInput
    zap?: ZapOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zapId?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    name?: StringFilter<"Trigger"> | string
    description?: StringFilter<"Trigger"> | string
    metadata?: JsonFilter<"Trigger">
    availableTriggerId?: StringFilter<"Trigger"> | string
    available?: XOR<AvailableTriggersRelationFilter, AvailableTriggersWhereInput>
    zap?: XOR<ZapRelationFilter, ZapWhereInput>
  }, "id" | "zapId">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    zapId?: SortOrder
    metadata?: SortOrder
    availableTriggerId?: SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    name?: StringWithAggregatesFilter<"Trigger"> | string
    description?: StringWithAggregatesFilter<"Trigger"> | string
    zapId?: StringWithAggregatesFilter<"Trigger"> | string
    metadata?: JsonWithAggregatesFilter<"Trigger">
    availableTriggerId?: StringWithAggregatesFilter<"Trigger"> | string
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: StringFilter<"Action"> | string
    name?: StringFilter<"Action"> | string
    description?: StringFilter<"Action"> | string
    metadata?: JsonFilter<"Action">
    zapId?: StringFilter<"Action"> | string
    sortingOrder?: IntFilter<"Action"> | number
    actionType?: StringFilter<"Action"> | string
    available?: XOR<AvailableActionsRelationFilter, AvailableActionsWhereInput>
    zap?: XOR<ZapRelationFilter, ZapWhereInput>
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    zapId?: SortOrder
    sortingOrder?: SortOrder
    actionType?: SortOrder
    available?: AvailableActionsOrderByWithRelationInput
    zap?: ZapOrderByWithRelationInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    name?: StringFilter<"Action"> | string
    description?: StringFilter<"Action"> | string
    metadata?: JsonFilter<"Action">
    zapId?: StringFilter<"Action"> | string
    sortingOrder?: IntFilter<"Action"> | number
    actionType?: StringFilter<"Action"> | string
    available?: XOR<AvailableActionsRelationFilter, AvailableActionsWhereInput>
    zap?: XOR<ZapRelationFilter, ZapWhereInput>
  }, "id">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    zapId?: SortOrder
    sortingOrder?: SortOrder
    actionType?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _avg?: ActionAvgOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
    _sum?: ActionSumOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Action"> | string
    name?: StringWithAggregatesFilter<"Action"> | string
    description?: StringWithAggregatesFilter<"Action"> | string
    metadata?: JsonWithAggregatesFilter<"Action">
    zapId?: StringWithAggregatesFilter<"Action"> | string
    sortingOrder?: IntWithAggregatesFilter<"Action"> | number
    actionType?: StringWithAggregatesFilter<"Action"> | string
  }

  export type AvailableTriggersWhereInput = {
    AND?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[]
    OR?: AvailableTriggersWhereInput[]
    NOT?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[]
    id?: StringFilter<"AvailableTriggers"> | string
    name?: StringFilter<"AvailableTriggers"> | string
    description?: StringFilter<"AvailableTriggers"> | string
    metadata?: JsonFilter<"AvailableTriggers">
    configMetadata?: JsonFilter<"AvailableTriggers">
    type?: StringFilter<"AvailableTriggers"> | string
    appId?: StringFilter<"AvailableTriggers"> | string
    app?: XOR<AppRelationFilter, AppWhereInput>
    triggers?: TriggerListRelationFilter
    templates?: ZapTemplateListRelationFilter
  }

  export type AvailableTriggersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    configMetadata?: SortOrder
    type?: SortOrder
    appId?: SortOrder
    app?: AppOrderByWithRelationInput
    triggers?: TriggerOrderByRelationAggregateInput
    templates?: ZapTemplateOrderByRelationAggregateInput
  }

  export type AvailableTriggersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[]
    OR?: AvailableTriggersWhereInput[]
    NOT?: AvailableTriggersWhereInput | AvailableTriggersWhereInput[]
    name?: StringFilter<"AvailableTriggers"> | string
    description?: StringFilter<"AvailableTriggers"> | string
    metadata?: JsonFilter<"AvailableTriggers">
    configMetadata?: JsonFilter<"AvailableTriggers">
    type?: StringFilter<"AvailableTriggers"> | string
    appId?: StringFilter<"AvailableTriggers"> | string
    app?: XOR<AppRelationFilter, AppWhereInput>
    triggers?: TriggerListRelationFilter
    templates?: ZapTemplateListRelationFilter
  }, "id">

  export type AvailableTriggersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    configMetadata?: SortOrder
    type?: SortOrder
    appId?: SortOrder
    _count?: AvailableTriggersCountOrderByAggregateInput
    _max?: AvailableTriggersMaxOrderByAggregateInput
    _min?: AvailableTriggersMinOrderByAggregateInput
  }

  export type AvailableTriggersScalarWhereWithAggregatesInput = {
    AND?: AvailableTriggersScalarWhereWithAggregatesInput | AvailableTriggersScalarWhereWithAggregatesInput[]
    OR?: AvailableTriggersScalarWhereWithAggregatesInput[]
    NOT?: AvailableTriggersScalarWhereWithAggregatesInput | AvailableTriggersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableTriggers"> | string
    name?: StringWithAggregatesFilter<"AvailableTriggers"> | string
    description?: StringWithAggregatesFilter<"AvailableTriggers"> | string
    metadata?: JsonWithAggregatesFilter<"AvailableTriggers">
    configMetadata?: JsonWithAggregatesFilter<"AvailableTriggers">
    type?: StringWithAggregatesFilter<"AvailableTriggers"> | string
    appId?: StringWithAggregatesFilter<"AvailableTriggers"> | string
  }

  export type AvailableActionsWhereInput = {
    AND?: AvailableActionsWhereInput | AvailableActionsWhereInput[]
    OR?: AvailableActionsWhereInput[]
    NOT?: AvailableActionsWhereInput | AvailableActionsWhereInput[]
    id?: StringFilter<"AvailableActions"> | string
    name?: StringFilter<"AvailableActions"> | string
    description?: StringFilter<"AvailableActions"> | string
    metadata?: JsonFilter<"AvailableActions">
    configMetadata?: JsonFilter<"AvailableActions">
    type?: StringFilter<"AvailableActions"> | string
    appId?: StringFilter<"AvailableActions"> | string
    actions?: ActionListRelationFilter
    app?: XOR<AppRelationFilter, AppWhereInput>
    templates?: ZapTemplateListRelationFilter
  }

  export type AvailableActionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    configMetadata?: SortOrder
    type?: SortOrder
    appId?: SortOrder
    actions?: ActionOrderByRelationAggregateInput
    app?: AppOrderByWithRelationInput
    templates?: ZapTemplateOrderByRelationAggregateInput
  }

  export type AvailableActionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableActionsWhereInput | AvailableActionsWhereInput[]
    OR?: AvailableActionsWhereInput[]
    NOT?: AvailableActionsWhereInput | AvailableActionsWhereInput[]
    name?: StringFilter<"AvailableActions"> | string
    description?: StringFilter<"AvailableActions"> | string
    metadata?: JsonFilter<"AvailableActions">
    configMetadata?: JsonFilter<"AvailableActions">
    type?: StringFilter<"AvailableActions"> | string
    appId?: StringFilter<"AvailableActions"> | string
    actions?: ActionListRelationFilter
    app?: XOR<AppRelationFilter, AppWhereInput>
    templates?: ZapTemplateListRelationFilter
  }, "id">

  export type AvailableActionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    configMetadata?: SortOrder
    type?: SortOrder
    appId?: SortOrder
    _count?: AvailableActionsCountOrderByAggregateInput
    _max?: AvailableActionsMaxOrderByAggregateInput
    _min?: AvailableActionsMinOrderByAggregateInput
  }

  export type AvailableActionsScalarWhereWithAggregatesInput = {
    AND?: AvailableActionsScalarWhereWithAggregatesInput | AvailableActionsScalarWhereWithAggregatesInput[]
    OR?: AvailableActionsScalarWhereWithAggregatesInput[]
    NOT?: AvailableActionsScalarWhereWithAggregatesInput | AvailableActionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableActions"> | string
    name?: StringWithAggregatesFilter<"AvailableActions"> | string
    description?: StringWithAggregatesFilter<"AvailableActions"> | string
    metadata?: JsonWithAggregatesFilter<"AvailableActions">
    configMetadata?: JsonWithAggregatesFilter<"AvailableActions">
    type?: StringWithAggregatesFilter<"AvailableActions"> | string
    appId?: StringWithAggregatesFilter<"AvailableActions"> | string
  }

  export type ZapRunWhereInput = {
    AND?: ZapRunWhereInput | ZapRunWhereInput[]
    OR?: ZapRunWhereInput[]
    NOT?: ZapRunWhereInput | ZapRunWhereInput[]
    id?: StringFilter<"ZapRun"> | string
    metadata?: JsonFilter<"ZapRun">
    zapId?: StringFilter<"ZapRun"> | string
    zap?: XOR<ZapRelationFilter, ZapWhereInput>
    ZapRunOutBox?: XOR<ZapRunOutBoxNullableRelationFilter, ZapRunOutBoxWhereInput> | null
  }

  export type ZapRunOrderByWithRelationInput = {
    id?: SortOrder
    metadata?: SortOrder
    zapId?: SortOrder
    zap?: ZapOrderByWithRelationInput
    ZapRunOutBox?: ZapRunOutBoxOrderByWithRelationInput
  }

  export type ZapRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZapRunWhereInput | ZapRunWhereInput[]
    OR?: ZapRunWhereInput[]
    NOT?: ZapRunWhereInput | ZapRunWhereInput[]
    metadata?: JsonFilter<"ZapRun">
    zapId?: StringFilter<"ZapRun"> | string
    zap?: XOR<ZapRelationFilter, ZapWhereInput>
    ZapRunOutBox?: XOR<ZapRunOutBoxNullableRelationFilter, ZapRunOutBoxWhereInput> | null
  }, "id">

  export type ZapRunOrderByWithAggregationInput = {
    id?: SortOrder
    metadata?: SortOrder
    zapId?: SortOrder
    _count?: ZapRunCountOrderByAggregateInput
    _max?: ZapRunMaxOrderByAggregateInput
    _min?: ZapRunMinOrderByAggregateInput
  }

  export type ZapRunScalarWhereWithAggregatesInput = {
    AND?: ZapRunScalarWhereWithAggregatesInput | ZapRunScalarWhereWithAggregatesInput[]
    OR?: ZapRunScalarWhereWithAggregatesInput[]
    NOT?: ZapRunScalarWhereWithAggregatesInput | ZapRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ZapRun"> | string
    metadata?: JsonWithAggregatesFilter<"ZapRun">
    zapId?: StringWithAggregatesFilter<"ZapRun"> | string
  }

  export type ZapRunOutBoxWhereInput = {
    AND?: ZapRunOutBoxWhereInput | ZapRunOutBoxWhereInput[]
    OR?: ZapRunOutBoxWhereInput[]
    NOT?: ZapRunOutBoxWhereInput | ZapRunOutBoxWhereInput[]
    id?: StringFilter<"ZapRunOutBox"> | string
    zaprunId?: StringFilter<"ZapRunOutBox"> | string
    ZapRun?: XOR<ZapRunRelationFilter, ZapRunWhereInput>
  }

  export type ZapRunOutBoxOrderByWithRelationInput = {
    id?: SortOrder
    zaprunId?: SortOrder
    ZapRun?: ZapRunOrderByWithRelationInput
  }

  export type ZapRunOutBoxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zaprunId?: string
    AND?: ZapRunOutBoxWhereInput | ZapRunOutBoxWhereInput[]
    OR?: ZapRunOutBoxWhereInput[]
    NOT?: ZapRunOutBoxWhereInput | ZapRunOutBoxWhereInput[]
    ZapRun?: XOR<ZapRunRelationFilter, ZapRunWhereInput>
  }, "id" | "zaprunId">

  export type ZapRunOutBoxOrderByWithAggregationInput = {
    id?: SortOrder
    zaprunId?: SortOrder
    _count?: ZapRunOutBoxCountOrderByAggregateInput
    _max?: ZapRunOutBoxMaxOrderByAggregateInput
    _min?: ZapRunOutBoxMinOrderByAggregateInput
  }

  export type ZapRunOutBoxScalarWhereWithAggregatesInput = {
    AND?: ZapRunOutBoxScalarWhereWithAggregatesInput | ZapRunOutBoxScalarWhereWithAggregatesInput[]
    OR?: ZapRunOutBoxScalarWhereWithAggregatesInput[]
    NOT?: ZapRunOutBoxScalarWhereWithAggregatesInput | ZapRunOutBoxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ZapRunOutBox"> | string
    zaprunId?: StringWithAggregatesFilter<"ZapRunOutBox"> | string
  }

  export type TokenStoreWhereInput = {
    AND?: TokenStoreWhereInput | TokenStoreWhereInput[]
    OR?: TokenStoreWhereInput[]
    NOT?: TokenStoreWhereInput | TokenStoreWhereInput[]
    id?: StringFilter<"TokenStore"> | string
    createdAt?: DateTimeFilter<"TokenStore"> | Date | string
    provider?: StringFilter<"TokenStore"> | string
    updatedAt?: DateTimeFilter<"TokenStore"> | Date | string
    accessToken?: StringFilter<"TokenStore"> | string
    refreshToken?: StringFilter<"TokenStore"> | string
    userId?: StringFilter<"TokenStore"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TokenStoreOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    provider?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenStoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenStoreWhereInput | TokenStoreWhereInput[]
    OR?: TokenStoreWhereInput[]
    NOT?: TokenStoreWhereInput | TokenStoreWhereInput[]
    createdAt?: DateTimeFilter<"TokenStore"> | Date | string
    provider?: StringFilter<"TokenStore"> | string
    updatedAt?: DateTimeFilter<"TokenStore"> | Date | string
    accessToken?: StringFilter<"TokenStore"> | string
    refreshToken?: StringFilter<"TokenStore"> | string
    userId?: StringFilter<"TokenStore"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TokenStoreOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    provider?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    _count?: TokenStoreCountOrderByAggregateInput
    _max?: TokenStoreMaxOrderByAggregateInput
    _min?: TokenStoreMinOrderByAggregateInput
  }

  export type TokenStoreScalarWhereWithAggregatesInput = {
    AND?: TokenStoreScalarWhereWithAggregatesInput | TokenStoreScalarWhereWithAggregatesInput[]
    OR?: TokenStoreScalarWhereWithAggregatesInput[]
    NOT?: TokenStoreScalarWhereWithAggregatesInput | TokenStoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokenStore"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TokenStore"> | Date | string
    provider?: StringWithAggregatesFilter<"TokenStore"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"TokenStore"> | Date | string
    accessToken?: StringWithAggregatesFilter<"TokenStore"> | string
    refreshToken?: StringWithAggregatesFilter<"TokenStore"> | string
    userId?: StringWithAggregatesFilter<"TokenStore"> | string
  }

  export type ZapTemplateWhereInput = {
    AND?: ZapTemplateWhereInput | ZapTemplateWhereInput[]
    OR?: ZapTemplateWhereInput[]
    NOT?: ZapTemplateWhereInput | ZapTemplateWhereInput[]
    id?: StringFilter<"ZapTemplate"> | string
    name?: StringFilter<"ZapTemplate"> | string
    description?: StringFilter<"ZapTemplate"> | string
    category?: StringFilter<"ZapTemplate"> | string
    isPopular?: BoolFilter<"ZapTemplate"> | boolean
    createdAt?: DateTimeFilter<"ZapTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ZapTemplate"> | Date | string
    triggerAppId?: StringFilter<"ZapTemplate"> | string
    triggerId?: StringFilter<"ZapTemplate"> | string
    actionAppId?: StringFilter<"ZapTemplate"> | string
    actionId?: StringFilter<"ZapTemplate"> | string
    triggerConfig?: JsonFilter<"ZapTemplate">
    actionConfig?: JsonFilter<"ZapTemplate">
    triggerApp?: XOR<AppRelationFilter, AppWhereInput>
    trigger?: XOR<AvailableTriggersRelationFilter, AvailableTriggersWhereInput>
    actionApp?: XOR<AppRelationFilter, AppWhereInput>
    action?: XOR<AvailableActionsRelationFilter, AvailableActionsWhereInput>
    zaps?: ZapListRelationFilter
  }

  export type ZapTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isPopular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    triggerAppId?: SortOrder
    triggerId?: SortOrder
    actionAppId?: SortOrder
    actionId?: SortOrder
    triggerConfig?: SortOrder
    actionConfig?: SortOrder
    triggerApp?: AppOrderByWithRelationInput
    trigger?: AvailableTriggersOrderByWithRelationInput
    actionApp?: AppOrderByWithRelationInput
    action?: AvailableActionsOrderByWithRelationInput
    zaps?: ZapOrderByRelationAggregateInput
  }

  export type ZapTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZapTemplateWhereInput | ZapTemplateWhereInput[]
    OR?: ZapTemplateWhereInput[]
    NOT?: ZapTemplateWhereInput | ZapTemplateWhereInput[]
    name?: StringFilter<"ZapTemplate"> | string
    description?: StringFilter<"ZapTemplate"> | string
    category?: StringFilter<"ZapTemplate"> | string
    isPopular?: BoolFilter<"ZapTemplate"> | boolean
    createdAt?: DateTimeFilter<"ZapTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ZapTemplate"> | Date | string
    triggerAppId?: StringFilter<"ZapTemplate"> | string
    triggerId?: StringFilter<"ZapTemplate"> | string
    actionAppId?: StringFilter<"ZapTemplate"> | string
    actionId?: StringFilter<"ZapTemplate"> | string
    triggerConfig?: JsonFilter<"ZapTemplate">
    actionConfig?: JsonFilter<"ZapTemplate">
    triggerApp?: XOR<AppRelationFilter, AppWhereInput>
    trigger?: XOR<AvailableTriggersRelationFilter, AvailableTriggersWhereInput>
    actionApp?: XOR<AppRelationFilter, AppWhereInput>
    action?: XOR<AvailableActionsRelationFilter, AvailableActionsWhereInput>
    zaps?: ZapListRelationFilter
  }, "id">

  export type ZapTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isPopular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    triggerAppId?: SortOrder
    triggerId?: SortOrder
    actionAppId?: SortOrder
    actionId?: SortOrder
    triggerConfig?: SortOrder
    actionConfig?: SortOrder
    _count?: ZapTemplateCountOrderByAggregateInput
    _max?: ZapTemplateMaxOrderByAggregateInput
    _min?: ZapTemplateMinOrderByAggregateInput
  }

  export type ZapTemplateScalarWhereWithAggregatesInput = {
    AND?: ZapTemplateScalarWhereWithAggregatesInput | ZapTemplateScalarWhereWithAggregatesInput[]
    OR?: ZapTemplateScalarWhereWithAggregatesInput[]
    NOT?: ZapTemplateScalarWhereWithAggregatesInput | ZapTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ZapTemplate"> | string
    name?: StringWithAggregatesFilter<"ZapTemplate"> | string
    description?: StringWithAggregatesFilter<"ZapTemplate"> | string
    category?: StringWithAggregatesFilter<"ZapTemplate"> | string
    isPopular?: BoolWithAggregatesFilter<"ZapTemplate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ZapTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ZapTemplate"> | Date | string
    triggerAppId?: StringWithAggregatesFilter<"ZapTemplate"> | string
    triggerId?: StringWithAggregatesFilter<"ZapTemplate"> | string
    actionAppId?: StringWithAggregatesFilter<"ZapTemplate"> | string
    actionId?: StringWithAggregatesFilter<"ZapTemplate"> | string
    triggerConfig?: JsonWithAggregatesFilter<"ZapTemplate">
    actionConfig?: JsonWithAggregatesFilter<"ZapTemplate">
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    tokens?: TokenStoreCreateNestedManyWithoutUserInput
    team?: TeamCreateNestedOneWithoutMembersInput
    zaps?: ZapCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    email: string
    teamId?: string | null
    image?: string | null
    tokens?: TokenStoreUncheckedCreateNestedManyWithoutUserInput
    zaps?: ZapUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: TokenStoreUpdateManyWithoutUserNestedInput
    team?: TeamUpdateOneWithoutMembersNestedInput
    zaps?: ZapUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: TokenStoreUncheckedUpdateManyWithoutUserNestedInput
    zaps?: ZapUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    password: string
    email: string
    teamId?: string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    createdById: string
    apps?: AppCreateNestedManyWithoutTeamInput
    members?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    createdById: string
    apps?: AppUncheckedCreateNestedManyWithoutTeamInput
    members?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    apps?: AppUpdateManyWithoutTeamNestedInput
    members?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    apps?: AppUncheckedUpdateManyWithoutTeamNestedInput
    members?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    createdById: string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type AppCreateInput = {
    name: string
    description: string
    id?: string
    team: TeamCreateNestedOneWithoutAppsInput
    authMethods?: AuthMethodsCreateNestedManyWithoutAppInput
    actions?: AvailableActionsCreateNestedManyWithoutAppInput
    triggers?: AvailableTriggersCreateNestedManyWithoutAppInput
    triggerTemplates?: ZapTemplateCreateNestedManyWithoutTriggerAppInput
    actionTemplates?: ZapTemplateCreateNestedManyWithoutActionAppInput
  }

  export type AppUncheckedCreateInput = {
    name: string
    description: string
    teamId: string
    id?: string
    authMethods?: AuthMethodsUncheckedCreateNestedManyWithoutAppInput
    actions?: AvailableActionsUncheckedCreateNestedManyWithoutAppInput
    triggers?: AvailableTriggersUncheckedCreateNestedManyWithoutAppInput
    triggerTemplates?: ZapTemplateUncheckedCreateNestedManyWithoutTriggerAppInput
    actionTemplates?: ZapTemplateUncheckedCreateNestedManyWithoutActionAppInput
  }

  export type AppUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutAppsNestedInput
    authMethods?: AuthMethodsUpdateManyWithoutAppNestedInput
    actions?: AvailableActionsUpdateManyWithoutAppNestedInput
    triggers?: AvailableTriggersUpdateManyWithoutAppNestedInput
    triggerTemplates?: ZapTemplateUpdateManyWithoutTriggerAppNestedInput
    actionTemplates?: ZapTemplateUpdateManyWithoutActionAppNestedInput
  }

  export type AppUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    authMethods?: AuthMethodsUncheckedUpdateManyWithoutAppNestedInput
    actions?: AvailableActionsUncheckedUpdateManyWithoutAppNestedInput
    triggers?: AvailableTriggersUncheckedUpdateManyWithoutAppNestedInput
    triggerTemplates?: ZapTemplateUncheckedUpdateManyWithoutTriggerAppNestedInput
    actionTemplates?: ZapTemplateUncheckedUpdateManyWithoutActionAppNestedInput
  }

  export type AppCreateManyInput = {
    name: string
    description: string
    teamId: string
    id?: string
  }

  export type AppUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AppUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AuthMethodsCreateInput = {
    id?: string
    metadata?: JsonNullValueInput | InputJsonValue
    app: AppCreateNestedOneWithoutAuthMethodsInput
    availableAuth: AvailableAuthMethodsCreateNestedOneWithoutAuthMethodsInput
  }

  export type AuthMethodsUncheckedCreateInput = {
    id?: string
    appId: string
    authId: string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AuthMethodsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    app?: AppUpdateOneRequiredWithoutAuthMethodsNestedInput
    availableAuth?: AvailableAuthMethodsUpdateOneRequiredWithoutAuthMethodsNestedInput
  }

  export type AuthMethodsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AuthMethodsCreateManyInput = {
    id?: string
    appId: string
    authId: string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AuthMethodsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AuthMethodsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AvailableAuthMethodsCreateInput = {
    name: string
    provider: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    id?: string
    authMethods?: AuthMethodsCreateNestedManyWithoutAvailableAuthInput
  }

  export type AvailableAuthMethodsUncheckedCreateInput = {
    name: string
    provider: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    id?: string
    authMethods?: AuthMethodsUncheckedCreateNestedManyWithoutAvailableAuthInput
  }

  export type AvailableAuthMethodsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
    authMethods?: AuthMethodsUpdateManyWithoutAvailableAuthNestedInput
  }

  export type AvailableAuthMethodsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
    authMethods?: AuthMethodsUncheckedUpdateManyWithoutAvailableAuthNestedInput
  }

  export type AvailableAuthMethodsCreateManyInput = {
    name: string
    provider: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type AvailableAuthMethodsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableAuthMethodsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapCreateInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: string | null
    actions?: ActionCreateNestedManyWithoutZapInput
    trigger?: TriggerCreateNestedOneWithoutZapInput
    user: UserCreateNestedOneWithoutZapsInput
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput
    template?: ZapTemplateCreateNestedOneWithoutZapsInput
  }

  export type ZapUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    userId: string
    image?: string | null
    templateId?: string | null
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUpdateManyWithoutZapNestedInput
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    user?: UserUpdateOneRequiredWithoutZapsNestedInput
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput
    template?: ZapTemplateUpdateOneWithoutZapsNestedInput
  }

  export type ZapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapCreateManyInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    userId: string
    image?: string | null
    templateId?: string | null
  }

  export type ZapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ZapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TriggerCreateInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    available: AvailableTriggersCreateNestedOneWithoutTriggersInput
    zap: ZapCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    zapId: string
    metadata?: JsonNullValueInput | InputJsonValue
    availableTriggerId: string
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    available?: AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    availableTriggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateManyInput = {
    id?: string
    name: string
    description: string
    zapId: string
    metadata?: JsonNullValueInput | InputJsonValue
    availableTriggerId: string
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    availableTriggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    sortingOrder?: number
    available: AvailableActionsCreateNestedOneWithoutActionsInput
    zap: ZapCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId: string
    sortingOrder?: number
    actionType: string
  }

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    sortingOrder?: IntFieldUpdateOperationsInput | number
    available?: AvailableActionsUpdateOneRequiredWithoutActionsNestedInput
    zap?: ZapUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    actionType?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId: string
    sortingOrder?: number
    actionType: string
  }

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    actionType?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggersCreateInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    app: AppCreateNestedOneWithoutTriggersInput
    triggers?: TriggerCreateNestedManyWithoutAvailableInput
    templates?: ZapTemplateCreateNestedManyWithoutTriggerInput
  }

  export type AvailableTriggersUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    appId: string
    triggers?: TriggerUncheckedCreateNestedManyWithoutAvailableInput
    templates?: ZapTemplateUncheckedCreateNestedManyWithoutTriggerInput
  }

  export type AvailableTriggersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    app?: AppUpdateOneRequiredWithoutTriggersNestedInput
    triggers?: TriggerUpdateManyWithoutAvailableNestedInput
    templates?: ZapTemplateUpdateManyWithoutTriggerNestedInput
  }

  export type AvailableTriggersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUncheckedUpdateManyWithoutAvailableNestedInput
    templates?: ZapTemplateUncheckedUpdateManyWithoutTriggerNestedInput
  }

  export type AvailableTriggersCreateManyInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    appId: string
  }

  export type AvailableTriggersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionsCreateInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    actions?: ActionCreateNestedManyWithoutAvailableInput
    app: AppCreateNestedOneWithoutActionsInput
    templates?: ZapTemplateCreateNestedManyWithoutActionInput
  }

  export type AvailableActionsUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    appId: string
    actions?: ActionUncheckedCreateNestedManyWithoutAvailableInput
    templates?: ZapTemplateUncheckedCreateNestedManyWithoutActionInput
  }

  export type AvailableActionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    actions?: ActionUpdateManyWithoutAvailableNestedInput
    app?: AppUpdateOneRequiredWithoutActionsNestedInput
    templates?: ZapTemplateUpdateManyWithoutActionNestedInput
  }

  export type AvailableActionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    actions?: ActionUncheckedUpdateManyWithoutAvailableNestedInput
    templates?: ZapTemplateUncheckedUpdateManyWithoutActionNestedInput
  }

  export type AvailableActionsCreateManyInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    appId: string
  }

  export type AvailableActionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunCreateInput = {
    id?: string
    metadata?: JsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutZapRunsInput
    ZapRunOutBox?: ZapRunOutBoxCreateNestedOneWithoutZapRunInput
  }

  export type ZapRunUncheckedCreateInput = {
    id?: string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId: string
    ZapRunOutBox?: ZapRunOutBoxUncheckedCreateNestedOneWithoutZapRunInput
  }

  export type ZapRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutZapRunsNestedInput
    ZapRunOutBox?: ZapRunOutBoxUpdateOneWithoutZapRunNestedInput
  }

  export type ZapRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId?: StringFieldUpdateOperationsInput | string
    ZapRunOutBox?: ZapRunOutBoxUncheckedUpdateOneWithoutZapRunNestedInput
  }

  export type ZapRunCreateManyInput = {
    id?: string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId: string
  }

  export type ZapRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ZapRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunOutBoxCreateInput = {
    id?: string
    ZapRun: ZapRunCreateNestedOneWithoutZapRunOutBoxInput
  }

  export type ZapRunOutBoxUncheckedCreateInput = {
    id?: string
    zaprunId: string
  }

  export type ZapRunOutBoxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ZapRun?: ZapRunUpdateOneRequiredWithoutZapRunOutBoxNestedInput
  }

  export type ZapRunOutBoxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zaprunId?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunOutBoxCreateManyInput = {
    id?: string
    zaprunId: string
  }

  export type ZapRunOutBoxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunOutBoxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zaprunId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenStoreCreateInput = {
    id?: string
    createdAt?: Date | string
    provider: string
    updatedAt?: Date | string
    accessToken: string
    refreshToken: string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenStoreUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    provider: string
    updatedAt?: Date | string
    accessToken: string
    refreshToken: string
    userId: string
  }

  export type TokenStoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenStoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenStoreCreateManyInput = {
    id?: string
    createdAt?: Date | string
    provider: string
    updatedAt?: Date | string
    accessToken: string
    refreshToken: string
    userId: string
  }

  export type TokenStoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type TokenStoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ZapTemplateCreateInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    triggerApp: AppCreateNestedOneWithoutTriggerTemplatesInput
    trigger: AvailableTriggersCreateNestedOneWithoutTemplatesInput
    actionApp: AppCreateNestedOneWithoutActionTemplatesInput
    action: AvailableActionsCreateNestedOneWithoutTemplatesInput
    zaps?: ZapCreateNestedManyWithoutTemplateInput
  }

  export type ZapTemplateUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerAppId: string
    triggerId: string
    actionAppId: string
    actionId: string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    zaps?: ZapUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ZapTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    triggerApp?: AppUpdateOneRequiredWithoutTriggerTemplatesNestedInput
    trigger?: AvailableTriggersUpdateOneRequiredWithoutTemplatesNestedInput
    actionApp?: AppUpdateOneRequiredWithoutActionTemplatesNestedInput
    action?: AvailableActionsUpdateOneRequiredWithoutTemplatesNestedInput
    zaps?: ZapUpdateManyWithoutTemplateNestedInput
  }

  export type ZapTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerAppId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    actionAppId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    zaps?: ZapUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ZapTemplateCreateManyInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerAppId: string
    triggerId: string
    actionAppId: string
    actionId: string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type ZapTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type ZapTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerAppId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    actionAppId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TokenStoreListRelationFilter = {
    every?: TokenStoreWhereInput
    some?: TokenStoreWhereInput
    none?: TokenStoreWhereInput
  }

  export type TeamNullableRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type ZapListRelationFilter = {
    every?: ZapWhereInput
    some?: ZapWhereInput
    none?: ZapWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenStoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    image?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AppListRelationFilter = {
    every?: AppWhereInput
    some?: AppWhereInput
    none?: AppWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AppOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    metadata?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TeamRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type AuthMethodsListRelationFilter = {
    every?: AuthMethodsWhereInput
    some?: AuthMethodsWhereInput
    none?: AuthMethodsWhereInput
  }

  export type AvailableActionsListRelationFilter = {
    every?: AvailableActionsWhereInput
    some?: AvailableActionsWhereInput
    none?: AvailableActionsWhereInput
  }

  export type AvailableTriggersListRelationFilter = {
    every?: AvailableTriggersWhereInput
    some?: AvailableTriggersWhereInput
    none?: AvailableTriggersWhereInput
  }

  export type ZapTemplateListRelationFilter = {
    every?: ZapTemplateWhereInput
    some?: ZapTemplateWhereInput
    none?: ZapTemplateWhereInput
  }

  export type AuthMethodsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailableActionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailableTriggersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZapTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppCountOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    id?: SortOrder
  }

  export type AppMaxOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    id?: SortOrder
  }

  export type AppMinOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    id?: SortOrder
  }

  export type AppRelationFilter = {
    is?: AppWhereInput
    isNot?: AppWhereInput
  }

  export type AvailableAuthMethodsRelationFilter = {
    is?: AvailableAuthMethodsWhereInput
    isNot?: AvailableAuthMethodsWhereInput
  }

  export type AuthMethodsCountOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
    authId?: SortOrder
    metadata?: SortOrder
  }

  export type AuthMethodsMaxOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
    authId?: SortOrder
  }

  export type AuthMethodsMinOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
    authId?: SortOrder
  }

  export type AvailableAuthMethodsCountOrderByAggregateInput = {
    name?: SortOrder
    provider?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    id?: SortOrder
  }

  export type AvailableAuthMethodsMaxOrderByAggregateInput = {
    name?: SortOrder
    provider?: SortOrder
    description?: SortOrder
    id?: SortOrder
  }

  export type AvailableAuthMethodsMinOrderByAggregateInput = {
    name?: SortOrder
    provider?: SortOrder
    description?: SortOrder
    id?: SortOrder
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type TriggerNullableRelationFilter = {
    is?: TriggerWhereInput | null
    isNot?: TriggerWhereInput | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ZapRunListRelationFilter = {
    every?: ZapRunWhereInput
    some?: ZapRunWhereInput
    none?: ZapRunWhereInput
  }

  export type ZapTemplateNullableRelationFilter = {
    is?: ZapTemplateWhereInput | null
    isNot?: ZapTemplateWhereInput | null
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZapRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZapCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    userId?: SortOrder
    image?: SortOrder
    templateId?: SortOrder
  }

  export type ZapMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    image?: SortOrder
    templateId?: SortOrder
  }

  export type ZapMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    image?: SortOrder
    templateId?: SortOrder
  }

  export type AvailableTriggersRelationFilter = {
    is?: AvailableTriggersWhereInput
    isNot?: AvailableTriggersWhereInput
  }

  export type ZapRelationFilter = {
    is?: ZapWhereInput
    isNot?: ZapWhereInput
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    zapId?: SortOrder
    metadata?: SortOrder
    availableTriggerId?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    zapId?: SortOrder
    availableTriggerId?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    zapId?: SortOrder
    availableTriggerId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AvailableActionsRelationFilter = {
    is?: AvailableActionsWhereInput
    isNot?: AvailableActionsWhereInput
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    zapId?: SortOrder
    sortingOrder?: SortOrder
    actionType?: SortOrder
  }

  export type ActionAvgOrderByAggregateInput = {
    sortingOrder?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    zapId?: SortOrder
    sortingOrder?: SortOrder
    actionType?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    zapId?: SortOrder
    sortingOrder?: SortOrder
    actionType?: SortOrder
  }

  export type ActionSumOrderByAggregateInput = {
    sortingOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailableTriggersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    configMetadata?: SortOrder
    type?: SortOrder
    appId?: SortOrder
  }

  export type AvailableTriggersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    appId?: SortOrder
  }

  export type AvailableTriggersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    appId?: SortOrder
  }

  export type AvailableActionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    configMetadata?: SortOrder
    type?: SortOrder
    appId?: SortOrder
  }

  export type AvailableActionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    appId?: SortOrder
  }

  export type AvailableActionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    appId?: SortOrder
  }

  export type ZapRunOutBoxNullableRelationFilter = {
    is?: ZapRunOutBoxWhereInput | null
    isNot?: ZapRunOutBoxWhereInput | null
  }

  export type ZapRunCountOrderByAggregateInput = {
    id?: SortOrder
    metadata?: SortOrder
    zapId?: SortOrder
  }

  export type ZapRunMaxOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
  }

  export type ZapRunMinOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
  }

  export type ZapRunRelationFilter = {
    is?: ZapRunWhereInput
    isNot?: ZapRunWhereInput
  }

  export type ZapRunOutBoxCountOrderByAggregateInput = {
    id?: SortOrder
    zaprunId?: SortOrder
  }

  export type ZapRunOutBoxMaxOrderByAggregateInput = {
    id?: SortOrder
    zaprunId?: SortOrder
  }

  export type ZapRunOutBoxMinOrderByAggregateInput = {
    id?: SortOrder
    zaprunId?: SortOrder
  }

  export type TokenStoreCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    provider?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
  }

  export type TokenStoreMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    provider?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
  }

  export type TokenStoreMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    provider?: SortOrder
    updatedAt?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ZapTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isPopular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    triggerAppId?: SortOrder
    triggerId?: SortOrder
    actionAppId?: SortOrder
    actionId?: SortOrder
    triggerConfig?: SortOrder
    actionConfig?: SortOrder
  }

  export type ZapTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isPopular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    triggerAppId?: SortOrder
    triggerId?: SortOrder
    actionAppId?: SortOrder
    actionId?: SortOrder
  }

  export type ZapTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isPopular?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    triggerAppId?: SortOrder
    triggerId?: SortOrder
    actionAppId?: SortOrder
    actionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TokenStoreCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenStoreCreateWithoutUserInput, TokenStoreUncheckedCreateWithoutUserInput> | TokenStoreCreateWithoutUserInput[] | TokenStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenStoreCreateOrConnectWithoutUserInput | TokenStoreCreateOrConnectWithoutUserInput[]
    createMany?: TokenStoreCreateManyUserInputEnvelope
    connect?: TokenStoreWhereUniqueInput | TokenStoreWhereUniqueInput[]
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type ZapCreateNestedManyWithoutUserInput = {
    create?: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput> | ZapCreateWithoutUserInput[] | ZapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutUserInput | ZapCreateOrConnectWithoutUserInput[]
    createMany?: ZapCreateManyUserInputEnvelope
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
  }

  export type TokenStoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenStoreCreateWithoutUserInput, TokenStoreUncheckedCreateWithoutUserInput> | TokenStoreCreateWithoutUserInput[] | TokenStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenStoreCreateOrConnectWithoutUserInput | TokenStoreCreateOrConnectWithoutUserInput[]
    createMany?: TokenStoreCreateManyUserInputEnvelope
    connect?: TokenStoreWhereUniqueInput | TokenStoreWhereUniqueInput[]
  }

  export type ZapUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput> | ZapCreateWithoutUserInput[] | ZapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutUserInput | ZapCreateOrConnectWithoutUserInput[]
    createMany?: ZapCreateManyUserInputEnvelope
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TokenStoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenStoreCreateWithoutUserInput, TokenStoreUncheckedCreateWithoutUserInput> | TokenStoreCreateWithoutUserInput[] | TokenStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenStoreCreateOrConnectWithoutUserInput | TokenStoreCreateOrConnectWithoutUserInput[]
    upsert?: TokenStoreUpsertWithWhereUniqueWithoutUserInput | TokenStoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenStoreCreateManyUserInputEnvelope
    set?: TokenStoreWhereUniqueInput | TokenStoreWhereUniqueInput[]
    disconnect?: TokenStoreWhereUniqueInput | TokenStoreWhereUniqueInput[]
    delete?: TokenStoreWhereUniqueInput | TokenStoreWhereUniqueInput[]
    connect?: TokenStoreWhereUniqueInput | TokenStoreWhereUniqueInput[]
    update?: TokenStoreUpdateWithWhereUniqueWithoutUserInput | TokenStoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenStoreUpdateManyWithWhereWithoutUserInput | TokenStoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenStoreScalarWhereInput | TokenStoreScalarWhereInput[]
  }

  export type TeamUpdateOneWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type ZapUpdateManyWithoutUserNestedInput = {
    create?: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput> | ZapCreateWithoutUserInput[] | ZapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutUserInput | ZapCreateOrConnectWithoutUserInput[]
    upsert?: ZapUpsertWithWhereUniqueWithoutUserInput | ZapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ZapCreateManyUserInputEnvelope
    set?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    disconnect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    delete?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    update?: ZapUpdateWithWhereUniqueWithoutUserInput | ZapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ZapUpdateManyWithWhereWithoutUserInput | ZapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ZapScalarWhereInput | ZapScalarWhereInput[]
  }

  export type TokenStoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenStoreCreateWithoutUserInput, TokenStoreUncheckedCreateWithoutUserInput> | TokenStoreCreateWithoutUserInput[] | TokenStoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenStoreCreateOrConnectWithoutUserInput | TokenStoreCreateOrConnectWithoutUserInput[]
    upsert?: TokenStoreUpsertWithWhereUniqueWithoutUserInput | TokenStoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenStoreCreateManyUserInputEnvelope
    set?: TokenStoreWhereUniqueInput | TokenStoreWhereUniqueInput[]
    disconnect?: TokenStoreWhereUniqueInput | TokenStoreWhereUniqueInput[]
    delete?: TokenStoreWhereUniqueInput | TokenStoreWhereUniqueInput[]
    connect?: TokenStoreWhereUniqueInput | TokenStoreWhereUniqueInput[]
    update?: TokenStoreUpdateWithWhereUniqueWithoutUserInput | TokenStoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenStoreUpdateManyWithWhereWithoutUserInput | TokenStoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenStoreScalarWhereInput | TokenStoreScalarWhereInput[]
  }

  export type ZapUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput> | ZapCreateWithoutUserInput[] | ZapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutUserInput | ZapCreateOrConnectWithoutUserInput[]
    upsert?: ZapUpsertWithWhereUniqueWithoutUserInput | ZapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ZapCreateManyUserInputEnvelope
    set?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    disconnect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    delete?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    update?: ZapUpdateWithWhereUniqueWithoutUserInput | ZapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ZapUpdateManyWithWhereWithoutUserInput | ZapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ZapScalarWhereInput | ZapScalarWhereInput[]
  }

  export type AppCreateNestedManyWithoutTeamInput = {
    create?: XOR<AppCreateWithoutTeamInput, AppUncheckedCreateWithoutTeamInput> | AppCreateWithoutTeamInput[] | AppUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AppCreateOrConnectWithoutTeamInput | AppCreateOrConnectWithoutTeamInput[]
    createMany?: AppCreateManyTeamInputEnvelope
    connect?: AppWhereUniqueInput | AppWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AppUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<AppCreateWithoutTeamInput, AppUncheckedCreateWithoutTeamInput> | AppCreateWithoutTeamInput[] | AppUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AppCreateOrConnectWithoutTeamInput | AppCreateOrConnectWithoutTeamInput[]
    createMany?: AppCreateManyTeamInputEnvelope
    connect?: AppWhereUniqueInput | AppWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AppUpdateManyWithoutTeamNestedInput = {
    create?: XOR<AppCreateWithoutTeamInput, AppUncheckedCreateWithoutTeamInput> | AppCreateWithoutTeamInput[] | AppUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AppCreateOrConnectWithoutTeamInput | AppCreateOrConnectWithoutTeamInput[]
    upsert?: AppUpsertWithWhereUniqueWithoutTeamInput | AppUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: AppCreateManyTeamInputEnvelope
    set?: AppWhereUniqueInput | AppWhereUniqueInput[]
    disconnect?: AppWhereUniqueInput | AppWhereUniqueInput[]
    delete?: AppWhereUniqueInput | AppWhereUniqueInput[]
    connect?: AppWhereUniqueInput | AppWhereUniqueInput[]
    update?: AppUpdateWithWhereUniqueWithoutTeamInput | AppUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: AppUpdateManyWithWhereWithoutTeamInput | AppUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: AppScalarWhereInput | AppScalarWhereInput[]
  }

  export type UserUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AppUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<AppCreateWithoutTeamInput, AppUncheckedCreateWithoutTeamInput> | AppCreateWithoutTeamInput[] | AppUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AppCreateOrConnectWithoutTeamInput | AppCreateOrConnectWithoutTeamInput[]
    upsert?: AppUpsertWithWhereUniqueWithoutTeamInput | AppUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: AppCreateManyTeamInputEnvelope
    set?: AppWhereUniqueInput | AppWhereUniqueInput[]
    disconnect?: AppWhereUniqueInput | AppWhereUniqueInput[]
    delete?: AppWhereUniqueInput | AppWhereUniqueInput[]
    connect?: AppWhereUniqueInput | AppWhereUniqueInput[]
    update?: AppUpdateWithWhereUniqueWithoutTeamInput | AppUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: AppUpdateManyWithWhereWithoutTeamInput | AppUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: AppScalarWhereInput | AppScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutAppsInput = {
    create?: XOR<TeamCreateWithoutAppsInput, TeamUncheckedCreateWithoutAppsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAppsInput
    connect?: TeamWhereUniqueInput
  }

  export type AuthMethodsCreateNestedManyWithoutAppInput = {
    create?: XOR<AuthMethodsCreateWithoutAppInput, AuthMethodsUncheckedCreateWithoutAppInput> | AuthMethodsCreateWithoutAppInput[] | AuthMethodsUncheckedCreateWithoutAppInput[]
    connectOrCreate?: AuthMethodsCreateOrConnectWithoutAppInput | AuthMethodsCreateOrConnectWithoutAppInput[]
    createMany?: AuthMethodsCreateManyAppInputEnvelope
    connect?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
  }

  export type AvailableActionsCreateNestedManyWithoutAppInput = {
    create?: XOR<AvailableActionsCreateWithoutAppInput, AvailableActionsUncheckedCreateWithoutAppInput> | AvailableActionsCreateWithoutAppInput[] | AvailableActionsUncheckedCreateWithoutAppInput[]
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutAppInput | AvailableActionsCreateOrConnectWithoutAppInput[]
    createMany?: AvailableActionsCreateManyAppInputEnvelope
    connect?: AvailableActionsWhereUniqueInput | AvailableActionsWhereUniqueInput[]
  }

  export type AvailableTriggersCreateNestedManyWithoutAppInput = {
    create?: XOR<AvailableTriggersCreateWithoutAppInput, AvailableTriggersUncheckedCreateWithoutAppInput> | AvailableTriggersCreateWithoutAppInput[] | AvailableTriggersUncheckedCreateWithoutAppInput[]
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutAppInput | AvailableTriggersCreateOrConnectWithoutAppInput[]
    createMany?: AvailableTriggersCreateManyAppInputEnvelope
    connect?: AvailableTriggersWhereUniqueInput | AvailableTriggersWhereUniqueInput[]
  }

  export type ZapTemplateCreateNestedManyWithoutTriggerAppInput = {
    create?: XOR<ZapTemplateCreateWithoutTriggerAppInput, ZapTemplateUncheckedCreateWithoutTriggerAppInput> | ZapTemplateCreateWithoutTriggerAppInput[] | ZapTemplateUncheckedCreateWithoutTriggerAppInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutTriggerAppInput | ZapTemplateCreateOrConnectWithoutTriggerAppInput[]
    createMany?: ZapTemplateCreateManyTriggerAppInputEnvelope
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
  }

  export type ZapTemplateCreateNestedManyWithoutActionAppInput = {
    create?: XOR<ZapTemplateCreateWithoutActionAppInput, ZapTemplateUncheckedCreateWithoutActionAppInput> | ZapTemplateCreateWithoutActionAppInput[] | ZapTemplateUncheckedCreateWithoutActionAppInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutActionAppInput | ZapTemplateCreateOrConnectWithoutActionAppInput[]
    createMany?: ZapTemplateCreateManyActionAppInputEnvelope
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
  }

  export type AuthMethodsUncheckedCreateNestedManyWithoutAppInput = {
    create?: XOR<AuthMethodsCreateWithoutAppInput, AuthMethodsUncheckedCreateWithoutAppInput> | AuthMethodsCreateWithoutAppInput[] | AuthMethodsUncheckedCreateWithoutAppInput[]
    connectOrCreate?: AuthMethodsCreateOrConnectWithoutAppInput | AuthMethodsCreateOrConnectWithoutAppInput[]
    createMany?: AuthMethodsCreateManyAppInputEnvelope
    connect?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
  }

  export type AvailableActionsUncheckedCreateNestedManyWithoutAppInput = {
    create?: XOR<AvailableActionsCreateWithoutAppInput, AvailableActionsUncheckedCreateWithoutAppInput> | AvailableActionsCreateWithoutAppInput[] | AvailableActionsUncheckedCreateWithoutAppInput[]
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutAppInput | AvailableActionsCreateOrConnectWithoutAppInput[]
    createMany?: AvailableActionsCreateManyAppInputEnvelope
    connect?: AvailableActionsWhereUniqueInput | AvailableActionsWhereUniqueInput[]
  }

  export type AvailableTriggersUncheckedCreateNestedManyWithoutAppInput = {
    create?: XOR<AvailableTriggersCreateWithoutAppInput, AvailableTriggersUncheckedCreateWithoutAppInput> | AvailableTriggersCreateWithoutAppInput[] | AvailableTriggersUncheckedCreateWithoutAppInput[]
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutAppInput | AvailableTriggersCreateOrConnectWithoutAppInput[]
    createMany?: AvailableTriggersCreateManyAppInputEnvelope
    connect?: AvailableTriggersWhereUniqueInput | AvailableTriggersWhereUniqueInput[]
  }

  export type ZapTemplateUncheckedCreateNestedManyWithoutTriggerAppInput = {
    create?: XOR<ZapTemplateCreateWithoutTriggerAppInput, ZapTemplateUncheckedCreateWithoutTriggerAppInput> | ZapTemplateCreateWithoutTriggerAppInput[] | ZapTemplateUncheckedCreateWithoutTriggerAppInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutTriggerAppInput | ZapTemplateCreateOrConnectWithoutTriggerAppInput[]
    createMany?: ZapTemplateCreateManyTriggerAppInputEnvelope
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
  }

  export type ZapTemplateUncheckedCreateNestedManyWithoutActionAppInput = {
    create?: XOR<ZapTemplateCreateWithoutActionAppInput, ZapTemplateUncheckedCreateWithoutActionAppInput> | ZapTemplateCreateWithoutActionAppInput[] | ZapTemplateUncheckedCreateWithoutActionAppInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutActionAppInput | ZapTemplateCreateOrConnectWithoutActionAppInput[]
    createMany?: ZapTemplateCreateManyActionAppInputEnvelope
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
  }

  export type TeamUpdateOneRequiredWithoutAppsNestedInput = {
    create?: XOR<TeamCreateWithoutAppsInput, TeamUncheckedCreateWithoutAppsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAppsInput
    upsert?: TeamUpsertWithoutAppsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutAppsInput, TeamUpdateWithoutAppsInput>, TeamUncheckedUpdateWithoutAppsInput>
  }

  export type AuthMethodsUpdateManyWithoutAppNestedInput = {
    create?: XOR<AuthMethodsCreateWithoutAppInput, AuthMethodsUncheckedCreateWithoutAppInput> | AuthMethodsCreateWithoutAppInput[] | AuthMethodsUncheckedCreateWithoutAppInput[]
    connectOrCreate?: AuthMethodsCreateOrConnectWithoutAppInput | AuthMethodsCreateOrConnectWithoutAppInput[]
    upsert?: AuthMethodsUpsertWithWhereUniqueWithoutAppInput | AuthMethodsUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: AuthMethodsCreateManyAppInputEnvelope
    set?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    disconnect?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    delete?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    connect?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    update?: AuthMethodsUpdateWithWhereUniqueWithoutAppInput | AuthMethodsUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: AuthMethodsUpdateManyWithWhereWithoutAppInput | AuthMethodsUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: AuthMethodsScalarWhereInput | AuthMethodsScalarWhereInput[]
  }

  export type AvailableActionsUpdateManyWithoutAppNestedInput = {
    create?: XOR<AvailableActionsCreateWithoutAppInput, AvailableActionsUncheckedCreateWithoutAppInput> | AvailableActionsCreateWithoutAppInput[] | AvailableActionsUncheckedCreateWithoutAppInput[]
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutAppInput | AvailableActionsCreateOrConnectWithoutAppInput[]
    upsert?: AvailableActionsUpsertWithWhereUniqueWithoutAppInput | AvailableActionsUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: AvailableActionsCreateManyAppInputEnvelope
    set?: AvailableActionsWhereUniqueInput | AvailableActionsWhereUniqueInput[]
    disconnect?: AvailableActionsWhereUniqueInput | AvailableActionsWhereUniqueInput[]
    delete?: AvailableActionsWhereUniqueInput | AvailableActionsWhereUniqueInput[]
    connect?: AvailableActionsWhereUniqueInput | AvailableActionsWhereUniqueInput[]
    update?: AvailableActionsUpdateWithWhereUniqueWithoutAppInput | AvailableActionsUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: AvailableActionsUpdateManyWithWhereWithoutAppInput | AvailableActionsUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: AvailableActionsScalarWhereInput | AvailableActionsScalarWhereInput[]
  }

  export type AvailableTriggersUpdateManyWithoutAppNestedInput = {
    create?: XOR<AvailableTriggersCreateWithoutAppInput, AvailableTriggersUncheckedCreateWithoutAppInput> | AvailableTriggersCreateWithoutAppInput[] | AvailableTriggersUncheckedCreateWithoutAppInput[]
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutAppInput | AvailableTriggersCreateOrConnectWithoutAppInput[]
    upsert?: AvailableTriggersUpsertWithWhereUniqueWithoutAppInput | AvailableTriggersUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: AvailableTriggersCreateManyAppInputEnvelope
    set?: AvailableTriggersWhereUniqueInput | AvailableTriggersWhereUniqueInput[]
    disconnect?: AvailableTriggersWhereUniqueInput | AvailableTriggersWhereUniqueInput[]
    delete?: AvailableTriggersWhereUniqueInput | AvailableTriggersWhereUniqueInput[]
    connect?: AvailableTriggersWhereUniqueInput | AvailableTriggersWhereUniqueInput[]
    update?: AvailableTriggersUpdateWithWhereUniqueWithoutAppInput | AvailableTriggersUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: AvailableTriggersUpdateManyWithWhereWithoutAppInput | AvailableTriggersUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: AvailableTriggersScalarWhereInput | AvailableTriggersScalarWhereInput[]
  }

  export type ZapTemplateUpdateManyWithoutTriggerAppNestedInput = {
    create?: XOR<ZapTemplateCreateWithoutTriggerAppInput, ZapTemplateUncheckedCreateWithoutTriggerAppInput> | ZapTemplateCreateWithoutTriggerAppInput[] | ZapTemplateUncheckedCreateWithoutTriggerAppInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutTriggerAppInput | ZapTemplateCreateOrConnectWithoutTriggerAppInput[]
    upsert?: ZapTemplateUpsertWithWhereUniqueWithoutTriggerAppInput | ZapTemplateUpsertWithWhereUniqueWithoutTriggerAppInput[]
    createMany?: ZapTemplateCreateManyTriggerAppInputEnvelope
    set?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    disconnect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    delete?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    update?: ZapTemplateUpdateWithWhereUniqueWithoutTriggerAppInput | ZapTemplateUpdateWithWhereUniqueWithoutTriggerAppInput[]
    updateMany?: ZapTemplateUpdateManyWithWhereWithoutTriggerAppInput | ZapTemplateUpdateManyWithWhereWithoutTriggerAppInput[]
    deleteMany?: ZapTemplateScalarWhereInput | ZapTemplateScalarWhereInput[]
  }

  export type ZapTemplateUpdateManyWithoutActionAppNestedInput = {
    create?: XOR<ZapTemplateCreateWithoutActionAppInput, ZapTemplateUncheckedCreateWithoutActionAppInput> | ZapTemplateCreateWithoutActionAppInput[] | ZapTemplateUncheckedCreateWithoutActionAppInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutActionAppInput | ZapTemplateCreateOrConnectWithoutActionAppInput[]
    upsert?: ZapTemplateUpsertWithWhereUniqueWithoutActionAppInput | ZapTemplateUpsertWithWhereUniqueWithoutActionAppInput[]
    createMany?: ZapTemplateCreateManyActionAppInputEnvelope
    set?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    disconnect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    delete?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    update?: ZapTemplateUpdateWithWhereUniqueWithoutActionAppInput | ZapTemplateUpdateWithWhereUniqueWithoutActionAppInput[]
    updateMany?: ZapTemplateUpdateManyWithWhereWithoutActionAppInput | ZapTemplateUpdateManyWithWhereWithoutActionAppInput[]
    deleteMany?: ZapTemplateScalarWhereInput | ZapTemplateScalarWhereInput[]
  }

  export type AuthMethodsUncheckedUpdateManyWithoutAppNestedInput = {
    create?: XOR<AuthMethodsCreateWithoutAppInput, AuthMethodsUncheckedCreateWithoutAppInput> | AuthMethodsCreateWithoutAppInput[] | AuthMethodsUncheckedCreateWithoutAppInput[]
    connectOrCreate?: AuthMethodsCreateOrConnectWithoutAppInput | AuthMethodsCreateOrConnectWithoutAppInput[]
    upsert?: AuthMethodsUpsertWithWhereUniqueWithoutAppInput | AuthMethodsUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: AuthMethodsCreateManyAppInputEnvelope
    set?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    disconnect?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    delete?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    connect?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    update?: AuthMethodsUpdateWithWhereUniqueWithoutAppInput | AuthMethodsUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: AuthMethodsUpdateManyWithWhereWithoutAppInput | AuthMethodsUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: AuthMethodsScalarWhereInput | AuthMethodsScalarWhereInput[]
  }

  export type AvailableActionsUncheckedUpdateManyWithoutAppNestedInput = {
    create?: XOR<AvailableActionsCreateWithoutAppInput, AvailableActionsUncheckedCreateWithoutAppInput> | AvailableActionsCreateWithoutAppInput[] | AvailableActionsUncheckedCreateWithoutAppInput[]
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutAppInput | AvailableActionsCreateOrConnectWithoutAppInput[]
    upsert?: AvailableActionsUpsertWithWhereUniqueWithoutAppInput | AvailableActionsUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: AvailableActionsCreateManyAppInputEnvelope
    set?: AvailableActionsWhereUniqueInput | AvailableActionsWhereUniqueInput[]
    disconnect?: AvailableActionsWhereUniqueInput | AvailableActionsWhereUniqueInput[]
    delete?: AvailableActionsWhereUniqueInput | AvailableActionsWhereUniqueInput[]
    connect?: AvailableActionsWhereUniqueInput | AvailableActionsWhereUniqueInput[]
    update?: AvailableActionsUpdateWithWhereUniqueWithoutAppInput | AvailableActionsUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: AvailableActionsUpdateManyWithWhereWithoutAppInput | AvailableActionsUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: AvailableActionsScalarWhereInput | AvailableActionsScalarWhereInput[]
  }

  export type AvailableTriggersUncheckedUpdateManyWithoutAppNestedInput = {
    create?: XOR<AvailableTriggersCreateWithoutAppInput, AvailableTriggersUncheckedCreateWithoutAppInput> | AvailableTriggersCreateWithoutAppInput[] | AvailableTriggersUncheckedCreateWithoutAppInput[]
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutAppInput | AvailableTriggersCreateOrConnectWithoutAppInput[]
    upsert?: AvailableTriggersUpsertWithWhereUniqueWithoutAppInput | AvailableTriggersUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: AvailableTriggersCreateManyAppInputEnvelope
    set?: AvailableTriggersWhereUniqueInput | AvailableTriggersWhereUniqueInput[]
    disconnect?: AvailableTriggersWhereUniqueInput | AvailableTriggersWhereUniqueInput[]
    delete?: AvailableTriggersWhereUniqueInput | AvailableTriggersWhereUniqueInput[]
    connect?: AvailableTriggersWhereUniqueInput | AvailableTriggersWhereUniqueInput[]
    update?: AvailableTriggersUpdateWithWhereUniqueWithoutAppInput | AvailableTriggersUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: AvailableTriggersUpdateManyWithWhereWithoutAppInput | AvailableTriggersUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: AvailableTriggersScalarWhereInput | AvailableTriggersScalarWhereInput[]
  }

  export type ZapTemplateUncheckedUpdateManyWithoutTriggerAppNestedInput = {
    create?: XOR<ZapTemplateCreateWithoutTriggerAppInput, ZapTemplateUncheckedCreateWithoutTriggerAppInput> | ZapTemplateCreateWithoutTriggerAppInput[] | ZapTemplateUncheckedCreateWithoutTriggerAppInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutTriggerAppInput | ZapTemplateCreateOrConnectWithoutTriggerAppInput[]
    upsert?: ZapTemplateUpsertWithWhereUniqueWithoutTriggerAppInput | ZapTemplateUpsertWithWhereUniqueWithoutTriggerAppInput[]
    createMany?: ZapTemplateCreateManyTriggerAppInputEnvelope
    set?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    disconnect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    delete?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    update?: ZapTemplateUpdateWithWhereUniqueWithoutTriggerAppInput | ZapTemplateUpdateWithWhereUniqueWithoutTriggerAppInput[]
    updateMany?: ZapTemplateUpdateManyWithWhereWithoutTriggerAppInput | ZapTemplateUpdateManyWithWhereWithoutTriggerAppInput[]
    deleteMany?: ZapTemplateScalarWhereInput | ZapTemplateScalarWhereInput[]
  }

  export type ZapTemplateUncheckedUpdateManyWithoutActionAppNestedInput = {
    create?: XOR<ZapTemplateCreateWithoutActionAppInput, ZapTemplateUncheckedCreateWithoutActionAppInput> | ZapTemplateCreateWithoutActionAppInput[] | ZapTemplateUncheckedCreateWithoutActionAppInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutActionAppInput | ZapTemplateCreateOrConnectWithoutActionAppInput[]
    upsert?: ZapTemplateUpsertWithWhereUniqueWithoutActionAppInput | ZapTemplateUpsertWithWhereUniqueWithoutActionAppInput[]
    createMany?: ZapTemplateCreateManyActionAppInputEnvelope
    set?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    disconnect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    delete?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    update?: ZapTemplateUpdateWithWhereUniqueWithoutActionAppInput | ZapTemplateUpdateWithWhereUniqueWithoutActionAppInput[]
    updateMany?: ZapTemplateUpdateManyWithWhereWithoutActionAppInput | ZapTemplateUpdateManyWithWhereWithoutActionAppInput[]
    deleteMany?: ZapTemplateScalarWhereInput | ZapTemplateScalarWhereInput[]
  }

  export type AppCreateNestedOneWithoutAuthMethodsInput = {
    create?: XOR<AppCreateWithoutAuthMethodsInput, AppUncheckedCreateWithoutAuthMethodsInput>
    connectOrCreate?: AppCreateOrConnectWithoutAuthMethodsInput
    connect?: AppWhereUniqueInput
  }

  export type AvailableAuthMethodsCreateNestedOneWithoutAuthMethodsInput = {
    create?: XOR<AvailableAuthMethodsCreateWithoutAuthMethodsInput, AvailableAuthMethodsUncheckedCreateWithoutAuthMethodsInput>
    connectOrCreate?: AvailableAuthMethodsCreateOrConnectWithoutAuthMethodsInput
    connect?: AvailableAuthMethodsWhereUniqueInput
  }

  export type AppUpdateOneRequiredWithoutAuthMethodsNestedInput = {
    create?: XOR<AppCreateWithoutAuthMethodsInput, AppUncheckedCreateWithoutAuthMethodsInput>
    connectOrCreate?: AppCreateOrConnectWithoutAuthMethodsInput
    upsert?: AppUpsertWithoutAuthMethodsInput
    connect?: AppWhereUniqueInput
    update?: XOR<XOR<AppUpdateToOneWithWhereWithoutAuthMethodsInput, AppUpdateWithoutAuthMethodsInput>, AppUncheckedUpdateWithoutAuthMethodsInput>
  }

  export type AvailableAuthMethodsUpdateOneRequiredWithoutAuthMethodsNestedInput = {
    create?: XOR<AvailableAuthMethodsCreateWithoutAuthMethodsInput, AvailableAuthMethodsUncheckedCreateWithoutAuthMethodsInput>
    connectOrCreate?: AvailableAuthMethodsCreateOrConnectWithoutAuthMethodsInput
    upsert?: AvailableAuthMethodsUpsertWithoutAuthMethodsInput
    connect?: AvailableAuthMethodsWhereUniqueInput
    update?: XOR<XOR<AvailableAuthMethodsUpdateToOneWithWhereWithoutAuthMethodsInput, AvailableAuthMethodsUpdateWithoutAuthMethodsInput>, AvailableAuthMethodsUncheckedUpdateWithoutAuthMethodsInput>
  }

  export type AuthMethodsCreateNestedManyWithoutAvailableAuthInput = {
    create?: XOR<AuthMethodsCreateWithoutAvailableAuthInput, AuthMethodsUncheckedCreateWithoutAvailableAuthInput> | AuthMethodsCreateWithoutAvailableAuthInput[] | AuthMethodsUncheckedCreateWithoutAvailableAuthInput[]
    connectOrCreate?: AuthMethodsCreateOrConnectWithoutAvailableAuthInput | AuthMethodsCreateOrConnectWithoutAvailableAuthInput[]
    createMany?: AuthMethodsCreateManyAvailableAuthInputEnvelope
    connect?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
  }

  export type AuthMethodsUncheckedCreateNestedManyWithoutAvailableAuthInput = {
    create?: XOR<AuthMethodsCreateWithoutAvailableAuthInput, AuthMethodsUncheckedCreateWithoutAvailableAuthInput> | AuthMethodsCreateWithoutAvailableAuthInput[] | AuthMethodsUncheckedCreateWithoutAvailableAuthInput[]
    connectOrCreate?: AuthMethodsCreateOrConnectWithoutAvailableAuthInput | AuthMethodsCreateOrConnectWithoutAvailableAuthInput[]
    createMany?: AuthMethodsCreateManyAvailableAuthInputEnvelope
    connect?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
  }

  export type AuthMethodsUpdateManyWithoutAvailableAuthNestedInput = {
    create?: XOR<AuthMethodsCreateWithoutAvailableAuthInput, AuthMethodsUncheckedCreateWithoutAvailableAuthInput> | AuthMethodsCreateWithoutAvailableAuthInput[] | AuthMethodsUncheckedCreateWithoutAvailableAuthInput[]
    connectOrCreate?: AuthMethodsCreateOrConnectWithoutAvailableAuthInput | AuthMethodsCreateOrConnectWithoutAvailableAuthInput[]
    upsert?: AuthMethodsUpsertWithWhereUniqueWithoutAvailableAuthInput | AuthMethodsUpsertWithWhereUniqueWithoutAvailableAuthInput[]
    createMany?: AuthMethodsCreateManyAvailableAuthInputEnvelope
    set?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    disconnect?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    delete?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    connect?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    update?: AuthMethodsUpdateWithWhereUniqueWithoutAvailableAuthInput | AuthMethodsUpdateWithWhereUniqueWithoutAvailableAuthInput[]
    updateMany?: AuthMethodsUpdateManyWithWhereWithoutAvailableAuthInput | AuthMethodsUpdateManyWithWhereWithoutAvailableAuthInput[]
    deleteMany?: AuthMethodsScalarWhereInput | AuthMethodsScalarWhereInput[]
  }

  export type AuthMethodsUncheckedUpdateManyWithoutAvailableAuthNestedInput = {
    create?: XOR<AuthMethodsCreateWithoutAvailableAuthInput, AuthMethodsUncheckedCreateWithoutAvailableAuthInput> | AuthMethodsCreateWithoutAvailableAuthInput[] | AuthMethodsUncheckedCreateWithoutAvailableAuthInput[]
    connectOrCreate?: AuthMethodsCreateOrConnectWithoutAvailableAuthInput | AuthMethodsCreateOrConnectWithoutAvailableAuthInput[]
    upsert?: AuthMethodsUpsertWithWhereUniqueWithoutAvailableAuthInput | AuthMethodsUpsertWithWhereUniqueWithoutAvailableAuthInput[]
    createMany?: AuthMethodsCreateManyAvailableAuthInputEnvelope
    set?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    disconnect?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    delete?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    connect?: AuthMethodsWhereUniqueInput | AuthMethodsWhereUniqueInput[]
    update?: AuthMethodsUpdateWithWhereUniqueWithoutAvailableAuthInput | AuthMethodsUpdateWithWhereUniqueWithoutAvailableAuthInput[]
    updateMany?: AuthMethodsUpdateManyWithWhereWithoutAvailableAuthInput | AuthMethodsUpdateManyWithWhereWithoutAvailableAuthInput[]
    deleteMany?: AuthMethodsScalarWhereInput | AuthMethodsScalarWhereInput[]
  }

  export type ActionCreateNestedManyWithoutZapInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type TriggerCreateNestedOneWithoutZapInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    connect?: TriggerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutZapsInput = {
    create?: XOR<UserCreateWithoutZapsInput, UserUncheckedCreateWithoutZapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutZapsInput
    connect?: UserWhereUniqueInput
  }

  export type ZapRunCreateNestedManyWithoutZapInput = {
    create?: XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput> | ZapRunCreateWithoutZapInput[] | ZapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapInput | ZapRunCreateOrConnectWithoutZapInput[]
    createMany?: ZapRunCreateManyZapInputEnvelope
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
  }

  export type ZapTemplateCreateNestedOneWithoutZapsInput = {
    create?: XOR<ZapTemplateCreateWithoutZapsInput, ZapTemplateUncheckedCreateWithoutZapsInput>
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutZapsInput
    connect?: ZapTemplateWhereUniqueInput
  }

  export type ActionUncheckedCreateNestedManyWithoutZapInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedOneWithoutZapInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    connect?: TriggerWhereUniqueInput
  }

  export type ZapRunUncheckedCreateNestedManyWithoutZapInput = {
    create?: XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput> | ZapRunCreateWithoutZapInput[] | ZapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapInput | ZapRunCreateOrConnectWithoutZapInput[]
    createMany?: ZapRunCreateManyZapInputEnvelope
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
  }

  export type ActionUpdateManyWithoutZapNestedInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutZapInput | ActionUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutZapInput | ActionUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutZapInput | ActionUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type TriggerUpdateOneWithoutZapNestedInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    upsert?: TriggerUpsertWithoutZapInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutZapInput, TriggerUpdateWithoutZapInput>, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type UserUpdateOneRequiredWithoutZapsNestedInput = {
    create?: XOR<UserCreateWithoutZapsInput, UserUncheckedCreateWithoutZapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutZapsInput
    upsert?: UserUpsertWithoutZapsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutZapsInput, UserUpdateWithoutZapsInput>, UserUncheckedUpdateWithoutZapsInput>
  }

  export type ZapRunUpdateManyWithoutZapNestedInput = {
    create?: XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput> | ZapRunCreateWithoutZapInput[] | ZapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapInput | ZapRunCreateOrConnectWithoutZapInput[]
    upsert?: ZapRunUpsertWithWhereUniqueWithoutZapInput | ZapRunUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ZapRunCreateManyZapInputEnvelope
    set?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    disconnect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    delete?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    update?: ZapRunUpdateWithWhereUniqueWithoutZapInput | ZapRunUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ZapRunUpdateManyWithWhereWithoutZapInput | ZapRunUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[]
  }

  export type ZapTemplateUpdateOneWithoutZapsNestedInput = {
    create?: XOR<ZapTemplateCreateWithoutZapsInput, ZapTemplateUncheckedCreateWithoutZapsInput>
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutZapsInput
    upsert?: ZapTemplateUpsertWithoutZapsInput
    disconnect?: ZapTemplateWhereInput | boolean
    delete?: ZapTemplateWhereInput | boolean
    connect?: ZapTemplateWhereUniqueInput
    update?: XOR<XOR<ZapTemplateUpdateToOneWithWhereWithoutZapsInput, ZapTemplateUpdateWithoutZapsInput>, ZapTemplateUncheckedUpdateWithoutZapsInput>
  }

  export type ActionUncheckedUpdateManyWithoutZapNestedInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutZapInput | ActionUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutZapInput | ActionUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutZapInput | ActionUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateOneWithoutZapNestedInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    upsert?: TriggerUpsertWithoutZapInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutZapInput, TriggerUpdateWithoutZapInput>, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type ZapRunUncheckedUpdateManyWithoutZapNestedInput = {
    create?: XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput> | ZapRunCreateWithoutZapInput[] | ZapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapInput | ZapRunCreateOrConnectWithoutZapInput[]
    upsert?: ZapRunUpsertWithWhereUniqueWithoutZapInput | ZapRunUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ZapRunCreateManyZapInputEnvelope
    set?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    disconnect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    delete?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    connect?: ZapRunWhereUniqueInput | ZapRunWhereUniqueInput[]
    update?: ZapRunUpdateWithWhereUniqueWithoutZapInput | ZapRunUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ZapRunUpdateManyWithWhereWithoutZapInput | ZapRunUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[]
  }

  export type AvailableTriggersCreateNestedOneWithoutTriggersInput = {
    create?: XOR<AvailableTriggersCreateWithoutTriggersInput, AvailableTriggersUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutTriggersInput
    connect?: AvailableTriggersWhereUniqueInput
  }

  export type ZapCreateNestedOneWithoutTriggerInput = {
    create?: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput
    connect?: ZapWhereUniqueInput
  }

  export type AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput = {
    create?: XOR<AvailableTriggersCreateWithoutTriggersInput, AvailableTriggersUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutTriggersInput
    upsert?: AvailableTriggersUpsertWithoutTriggersInput
    connect?: AvailableTriggersWhereUniqueInput
    update?: XOR<XOR<AvailableTriggersUpdateToOneWithWhereWithoutTriggersInput, AvailableTriggersUpdateWithoutTriggersInput>, AvailableTriggersUncheckedUpdateWithoutTriggersInput>
  }

  export type ZapUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput
    upsert?: ZapUpsertWithoutTriggerInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutTriggerInput, ZapUpdateWithoutTriggerInput>, ZapUncheckedUpdateWithoutTriggerInput>
  }

  export type AvailableActionsCreateNestedOneWithoutActionsInput = {
    create?: XOR<AvailableActionsCreateWithoutActionsInput, AvailableActionsUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutActionsInput
    connect?: AvailableActionsWhereUniqueInput
  }

  export type ZapCreateNestedOneWithoutActionsInput = {
    create?: XOR<ZapCreateWithoutActionsInput, ZapUncheckedCreateWithoutActionsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutActionsInput
    connect?: ZapWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AvailableActionsUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<AvailableActionsCreateWithoutActionsInput, AvailableActionsUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutActionsInput
    upsert?: AvailableActionsUpsertWithoutActionsInput
    connect?: AvailableActionsWhereUniqueInput
    update?: XOR<XOR<AvailableActionsUpdateToOneWithWhereWithoutActionsInput, AvailableActionsUpdateWithoutActionsInput>, AvailableActionsUncheckedUpdateWithoutActionsInput>
  }

  export type ZapUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<ZapCreateWithoutActionsInput, ZapUncheckedCreateWithoutActionsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutActionsInput
    upsert?: ZapUpsertWithoutActionsInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutActionsInput, ZapUpdateWithoutActionsInput>, ZapUncheckedUpdateWithoutActionsInput>
  }

  export type AppCreateNestedOneWithoutTriggersInput = {
    create?: XOR<AppCreateWithoutTriggersInput, AppUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AppCreateOrConnectWithoutTriggersInput
    connect?: AppWhereUniqueInput
  }

  export type TriggerCreateNestedManyWithoutAvailableInput = {
    create?: XOR<TriggerCreateWithoutAvailableInput, TriggerUncheckedCreateWithoutAvailableInput> | TriggerCreateWithoutAvailableInput[] | TriggerUncheckedCreateWithoutAvailableInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAvailableInput | TriggerCreateOrConnectWithoutAvailableInput[]
    createMany?: TriggerCreateManyAvailableInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type ZapTemplateCreateNestedManyWithoutTriggerInput = {
    create?: XOR<ZapTemplateCreateWithoutTriggerInput, ZapTemplateUncheckedCreateWithoutTriggerInput> | ZapTemplateCreateWithoutTriggerInput[] | ZapTemplateUncheckedCreateWithoutTriggerInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutTriggerInput | ZapTemplateCreateOrConnectWithoutTriggerInput[]
    createMany?: ZapTemplateCreateManyTriggerInputEnvelope
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutAvailableInput = {
    create?: XOR<TriggerCreateWithoutAvailableInput, TriggerUncheckedCreateWithoutAvailableInput> | TriggerCreateWithoutAvailableInput[] | TriggerUncheckedCreateWithoutAvailableInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAvailableInput | TriggerCreateOrConnectWithoutAvailableInput[]
    createMany?: TriggerCreateManyAvailableInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type ZapTemplateUncheckedCreateNestedManyWithoutTriggerInput = {
    create?: XOR<ZapTemplateCreateWithoutTriggerInput, ZapTemplateUncheckedCreateWithoutTriggerInput> | ZapTemplateCreateWithoutTriggerInput[] | ZapTemplateUncheckedCreateWithoutTriggerInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutTriggerInput | ZapTemplateCreateOrConnectWithoutTriggerInput[]
    createMany?: ZapTemplateCreateManyTriggerInputEnvelope
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
  }

  export type AppUpdateOneRequiredWithoutTriggersNestedInput = {
    create?: XOR<AppCreateWithoutTriggersInput, AppUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: AppCreateOrConnectWithoutTriggersInput
    upsert?: AppUpsertWithoutTriggersInput
    connect?: AppWhereUniqueInput
    update?: XOR<XOR<AppUpdateToOneWithWhereWithoutTriggersInput, AppUpdateWithoutTriggersInput>, AppUncheckedUpdateWithoutTriggersInput>
  }

  export type TriggerUpdateManyWithoutAvailableNestedInput = {
    create?: XOR<TriggerCreateWithoutAvailableInput, TriggerUncheckedCreateWithoutAvailableInput> | TriggerCreateWithoutAvailableInput[] | TriggerUncheckedCreateWithoutAvailableInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAvailableInput | TriggerCreateOrConnectWithoutAvailableInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutAvailableInput | TriggerUpsertWithWhereUniqueWithoutAvailableInput[]
    createMany?: TriggerCreateManyAvailableInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutAvailableInput | TriggerUpdateWithWhereUniqueWithoutAvailableInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutAvailableInput | TriggerUpdateManyWithWhereWithoutAvailableInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type ZapTemplateUpdateManyWithoutTriggerNestedInput = {
    create?: XOR<ZapTemplateCreateWithoutTriggerInput, ZapTemplateUncheckedCreateWithoutTriggerInput> | ZapTemplateCreateWithoutTriggerInput[] | ZapTemplateUncheckedCreateWithoutTriggerInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutTriggerInput | ZapTemplateCreateOrConnectWithoutTriggerInput[]
    upsert?: ZapTemplateUpsertWithWhereUniqueWithoutTriggerInput | ZapTemplateUpsertWithWhereUniqueWithoutTriggerInput[]
    createMany?: ZapTemplateCreateManyTriggerInputEnvelope
    set?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    disconnect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    delete?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    update?: ZapTemplateUpdateWithWhereUniqueWithoutTriggerInput | ZapTemplateUpdateWithWhereUniqueWithoutTriggerInput[]
    updateMany?: ZapTemplateUpdateManyWithWhereWithoutTriggerInput | ZapTemplateUpdateManyWithWhereWithoutTriggerInput[]
    deleteMany?: ZapTemplateScalarWhereInput | ZapTemplateScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutAvailableNestedInput = {
    create?: XOR<TriggerCreateWithoutAvailableInput, TriggerUncheckedCreateWithoutAvailableInput> | TriggerCreateWithoutAvailableInput[] | TriggerUncheckedCreateWithoutAvailableInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAvailableInput | TriggerCreateOrConnectWithoutAvailableInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutAvailableInput | TriggerUpsertWithWhereUniqueWithoutAvailableInput[]
    createMany?: TriggerCreateManyAvailableInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutAvailableInput | TriggerUpdateWithWhereUniqueWithoutAvailableInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutAvailableInput | TriggerUpdateManyWithWhereWithoutAvailableInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type ZapTemplateUncheckedUpdateManyWithoutTriggerNestedInput = {
    create?: XOR<ZapTemplateCreateWithoutTriggerInput, ZapTemplateUncheckedCreateWithoutTriggerInput> | ZapTemplateCreateWithoutTriggerInput[] | ZapTemplateUncheckedCreateWithoutTriggerInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutTriggerInput | ZapTemplateCreateOrConnectWithoutTriggerInput[]
    upsert?: ZapTemplateUpsertWithWhereUniqueWithoutTriggerInput | ZapTemplateUpsertWithWhereUniqueWithoutTriggerInput[]
    createMany?: ZapTemplateCreateManyTriggerInputEnvelope
    set?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    disconnect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    delete?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    update?: ZapTemplateUpdateWithWhereUniqueWithoutTriggerInput | ZapTemplateUpdateWithWhereUniqueWithoutTriggerInput[]
    updateMany?: ZapTemplateUpdateManyWithWhereWithoutTriggerInput | ZapTemplateUpdateManyWithWhereWithoutTriggerInput[]
    deleteMany?: ZapTemplateScalarWhereInput | ZapTemplateScalarWhereInput[]
  }

  export type ActionCreateNestedManyWithoutAvailableInput = {
    create?: XOR<ActionCreateWithoutAvailableInput, ActionUncheckedCreateWithoutAvailableInput> | ActionCreateWithoutAvailableInput[] | ActionUncheckedCreateWithoutAvailableInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutAvailableInput | ActionCreateOrConnectWithoutAvailableInput[]
    createMany?: ActionCreateManyAvailableInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type AppCreateNestedOneWithoutActionsInput = {
    create?: XOR<AppCreateWithoutActionsInput, AppUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AppCreateOrConnectWithoutActionsInput
    connect?: AppWhereUniqueInput
  }

  export type ZapTemplateCreateNestedManyWithoutActionInput = {
    create?: XOR<ZapTemplateCreateWithoutActionInput, ZapTemplateUncheckedCreateWithoutActionInput> | ZapTemplateCreateWithoutActionInput[] | ZapTemplateUncheckedCreateWithoutActionInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutActionInput | ZapTemplateCreateOrConnectWithoutActionInput[]
    createMany?: ZapTemplateCreateManyActionInputEnvelope
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedManyWithoutAvailableInput = {
    create?: XOR<ActionCreateWithoutAvailableInput, ActionUncheckedCreateWithoutAvailableInput> | ActionCreateWithoutAvailableInput[] | ActionUncheckedCreateWithoutAvailableInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutAvailableInput | ActionCreateOrConnectWithoutAvailableInput[]
    createMany?: ActionCreateManyAvailableInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ZapTemplateUncheckedCreateNestedManyWithoutActionInput = {
    create?: XOR<ZapTemplateCreateWithoutActionInput, ZapTemplateUncheckedCreateWithoutActionInput> | ZapTemplateCreateWithoutActionInput[] | ZapTemplateUncheckedCreateWithoutActionInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutActionInput | ZapTemplateCreateOrConnectWithoutActionInput[]
    createMany?: ZapTemplateCreateManyActionInputEnvelope
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
  }

  export type ActionUpdateManyWithoutAvailableNestedInput = {
    create?: XOR<ActionCreateWithoutAvailableInput, ActionUncheckedCreateWithoutAvailableInput> | ActionCreateWithoutAvailableInput[] | ActionUncheckedCreateWithoutAvailableInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutAvailableInput | ActionCreateOrConnectWithoutAvailableInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutAvailableInput | ActionUpsertWithWhereUniqueWithoutAvailableInput[]
    createMany?: ActionCreateManyAvailableInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutAvailableInput | ActionUpdateWithWhereUniqueWithoutAvailableInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutAvailableInput | ActionUpdateManyWithWhereWithoutAvailableInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type AppUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<AppCreateWithoutActionsInput, AppUncheckedCreateWithoutActionsInput>
    connectOrCreate?: AppCreateOrConnectWithoutActionsInput
    upsert?: AppUpsertWithoutActionsInput
    connect?: AppWhereUniqueInput
    update?: XOR<XOR<AppUpdateToOneWithWhereWithoutActionsInput, AppUpdateWithoutActionsInput>, AppUncheckedUpdateWithoutActionsInput>
  }

  export type ZapTemplateUpdateManyWithoutActionNestedInput = {
    create?: XOR<ZapTemplateCreateWithoutActionInput, ZapTemplateUncheckedCreateWithoutActionInput> | ZapTemplateCreateWithoutActionInput[] | ZapTemplateUncheckedCreateWithoutActionInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutActionInput | ZapTemplateCreateOrConnectWithoutActionInput[]
    upsert?: ZapTemplateUpsertWithWhereUniqueWithoutActionInput | ZapTemplateUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: ZapTemplateCreateManyActionInputEnvelope
    set?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    disconnect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    delete?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    update?: ZapTemplateUpdateWithWhereUniqueWithoutActionInput | ZapTemplateUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: ZapTemplateUpdateManyWithWhereWithoutActionInput | ZapTemplateUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: ZapTemplateScalarWhereInput | ZapTemplateScalarWhereInput[]
  }

  export type ActionUncheckedUpdateManyWithoutAvailableNestedInput = {
    create?: XOR<ActionCreateWithoutAvailableInput, ActionUncheckedCreateWithoutAvailableInput> | ActionCreateWithoutAvailableInput[] | ActionUncheckedCreateWithoutAvailableInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutAvailableInput | ActionCreateOrConnectWithoutAvailableInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutAvailableInput | ActionUpsertWithWhereUniqueWithoutAvailableInput[]
    createMany?: ActionCreateManyAvailableInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutAvailableInput | ActionUpdateWithWhereUniqueWithoutAvailableInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutAvailableInput | ActionUpdateManyWithWhereWithoutAvailableInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ZapTemplateUncheckedUpdateManyWithoutActionNestedInput = {
    create?: XOR<ZapTemplateCreateWithoutActionInput, ZapTemplateUncheckedCreateWithoutActionInput> | ZapTemplateCreateWithoutActionInput[] | ZapTemplateUncheckedCreateWithoutActionInput[]
    connectOrCreate?: ZapTemplateCreateOrConnectWithoutActionInput | ZapTemplateCreateOrConnectWithoutActionInput[]
    upsert?: ZapTemplateUpsertWithWhereUniqueWithoutActionInput | ZapTemplateUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: ZapTemplateCreateManyActionInputEnvelope
    set?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    disconnect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    delete?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    connect?: ZapTemplateWhereUniqueInput | ZapTemplateWhereUniqueInput[]
    update?: ZapTemplateUpdateWithWhereUniqueWithoutActionInput | ZapTemplateUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: ZapTemplateUpdateManyWithWhereWithoutActionInput | ZapTemplateUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: ZapTemplateScalarWhereInput | ZapTemplateScalarWhereInput[]
  }

  export type ZapCreateNestedOneWithoutZapRunsInput = {
    create?: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutZapRunsInput
    connect?: ZapWhereUniqueInput
  }

  export type ZapRunOutBoxCreateNestedOneWithoutZapRunInput = {
    create?: XOR<ZapRunOutBoxCreateWithoutZapRunInput, ZapRunOutBoxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: ZapRunOutBoxCreateOrConnectWithoutZapRunInput
    connect?: ZapRunOutBoxWhereUniqueInput
  }

  export type ZapRunOutBoxUncheckedCreateNestedOneWithoutZapRunInput = {
    create?: XOR<ZapRunOutBoxCreateWithoutZapRunInput, ZapRunOutBoxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: ZapRunOutBoxCreateOrConnectWithoutZapRunInput
    connect?: ZapRunOutBoxWhereUniqueInput
  }

  export type ZapUpdateOneRequiredWithoutZapRunsNestedInput = {
    create?: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutZapRunsInput
    upsert?: ZapUpsertWithoutZapRunsInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutZapRunsInput, ZapUpdateWithoutZapRunsInput>, ZapUncheckedUpdateWithoutZapRunsInput>
  }

  export type ZapRunOutBoxUpdateOneWithoutZapRunNestedInput = {
    create?: XOR<ZapRunOutBoxCreateWithoutZapRunInput, ZapRunOutBoxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: ZapRunOutBoxCreateOrConnectWithoutZapRunInput
    upsert?: ZapRunOutBoxUpsertWithoutZapRunInput
    disconnect?: ZapRunOutBoxWhereInput | boolean
    delete?: ZapRunOutBoxWhereInput | boolean
    connect?: ZapRunOutBoxWhereUniqueInput
    update?: XOR<XOR<ZapRunOutBoxUpdateToOneWithWhereWithoutZapRunInput, ZapRunOutBoxUpdateWithoutZapRunInput>, ZapRunOutBoxUncheckedUpdateWithoutZapRunInput>
  }

  export type ZapRunOutBoxUncheckedUpdateOneWithoutZapRunNestedInput = {
    create?: XOR<ZapRunOutBoxCreateWithoutZapRunInput, ZapRunOutBoxUncheckedCreateWithoutZapRunInput>
    connectOrCreate?: ZapRunOutBoxCreateOrConnectWithoutZapRunInput
    upsert?: ZapRunOutBoxUpsertWithoutZapRunInput
    disconnect?: ZapRunOutBoxWhereInput | boolean
    delete?: ZapRunOutBoxWhereInput | boolean
    connect?: ZapRunOutBoxWhereUniqueInput
    update?: XOR<XOR<ZapRunOutBoxUpdateToOneWithWhereWithoutZapRunInput, ZapRunOutBoxUpdateWithoutZapRunInput>, ZapRunOutBoxUncheckedUpdateWithoutZapRunInput>
  }

  export type ZapRunCreateNestedOneWithoutZapRunOutBoxInput = {
    create?: XOR<ZapRunCreateWithoutZapRunOutBoxInput, ZapRunUncheckedCreateWithoutZapRunOutBoxInput>
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapRunOutBoxInput
    connect?: ZapRunWhereUniqueInput
  }

  export type ZapRunUpdateOneRequiredWithoutZapRunOutBoxNestedInput = {
    create?: XOR<ZapRunCreateWithoutZapRunOutBoxInput, ZapRunUncheckedCreateWithoutZapRunOutBoxInput>
    connectOrCreate?: ZapRunCreateOrConnectWithoutZapRunOutBoxInput
    upsert?: ZapRunUpsertWithoutZapRunOutBoxInput
    connect?: ZapRunWhereUniqueInput
    update?: XOR<XOR<ZapRunUpdateToOneWithWhereWithoutZapRunOutBoxInput, ZapRunUpdateWithoutZapRunOutBoxInput>, ZapRunUncheckedUpdateWithoutZapRunOutBoxInput>
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type AppCreateNestedOneWithoutTriggerTemplatesInput = {
    create?: XOR<AppCreateWithoutTriggerTemplatesInput, AppUncheckedCreateWithoutTriggerTemplatesInput>
    connectOrCreate?: AppCreateOrConnectWithoutTriggerTemplatesInput
    connect?: AppWhereUniqueInput
  }

  export type AvailableTriggersCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<AvailableTriggersCreateWithoutTemplatesInput, AvailableTriggersUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutTemplatesInput
    connect?: AvailableTriggersWhereUniqueInput
  }

  export type AppCreateNestedOneWithoutActionTemplatesInput = {
    create?: XOR<AppCreateWithoutActionTemplatesInput, AppUncheckedCreateWithoutActionTemplatesInput>
    connectOrCreate?: AppCreateOrConnectWithoutActionTemplatesInput
    connect?: AppWhereUniqueInput
  }

  export type AvailableActionsCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<AvailableActionsCreateWithoutTemplatesInput, AvailableActionsUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutTemplatesInput
    connect?: AvailableActionsWhereUniqueInput
  }

  export type ZapCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ZapCreateWithoutTemplateInput, ZapUncheckedCreateWithoutTemplateInput> | ZapCreateWithoutTemplateInput[] | ZapUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutTemplateInput | ZapCreateOrConnectWithoutTemplateInput[]
    createMany?: ZapCreateManyTemplateInputEnvelope
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
  }

  export type ZapUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ZapCreateWithoutTemplateInput, ZapUncheckedCreateWithoutTemplateInput> | ZapCreateWithoutTemplateInput[] | ZapUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutTemplateInput | ZapCreateOrConnectWithoutTemplateInput[]
    createMany?: ZapCreateManyTemplateInputEnvelope
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AppUpdateOneRequiredWithoutTriggerTemplatesNestedInput = {
    create?: XOR<AppCreateWithoutTriggerTemplatesInput, AppUncheckedCreateWithoutTriggerTemplatesInput>
    connectOrCreate?: AppCreateOrConnectWithoutTriggerTemplatesInput
    upsert?: AppUpsertWithoutTriggerTemplatesInput
    connect?: AppWhereUniqueInput
    update?: XOR<XOR<AppUpdateToOneWithWhereWithoutTriggerTemplatesInput, AppUpdateWithoutTriggerTemplatesInput>, AppUncheckedUpdateWithoutTriggerTemplatesInput>
  }

  export type AvailableTriggersUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<AvailableTriggersCreateWithoutTemplatesInput, AvailableTriggersUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: AvailableTriggersCreateOrConnectWithoutTemplatesInput
    upsert?: AvailableTriggersUpsertWithoutTemplatesInput
    connect?: AvailableTriggersWhereUniqueInput
    update?: XOR<XOR<AvailableTriggersUpdateToOneWithWhereWithoutTemplatesInput, AvailableTriggersUpdateWithoutTemplatesInput>, AvailableTriggersUncheckedUpdateWithoutTemplatesInput>
  }

  export type AppUpdateOneRequiredWithoutActionTemplatesNestedInput = {
    create?: XOR<AppCreateWithoutActionTemplatesInput, AppUncheckedCreateWithoutActionTemplatesInput>
    connectOrCreate?: AppCreateOrConnectWithoutActionTemplatesInput
    upsert?: AppUpsertWithoutActionTemplatesInput
    connect?: AppWhereUniqueInput
    update?: XOR<XOR<AppUpdateToOneWithWhereWithoutActionTemplatesInput, AppUpdateWithoutActionTemplatesInput>, AppUncheckedUpdateWithoutActionTemplatesInput>
  }

  export type AvailableActionsUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<AvailableActionsCreateWithoutTemplatesInput, AvailableActionsUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutTemplatesInput
    upsert?: AvailableActionsUpsertWithoutTemplatesInput
    connect?: AvailableActionsWhereUniqueInput
    update?: XOR<XOR<AvailableActionsUpdateToOneWithWhereWithoutTemplatesInput, AvailableActionsUpdateWithoutTemplatesInput>, AvailableActionsUncheckedUpdateWithoutTemplatesInput>
  }

  export type ZapUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ZapCreateWithoutTemplateInput, ZapUncheckedCreateWithoutTemplateInput> | ZapCreateWithoutTemplateInput[] | ZapUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutTemplateInput | ZapCreateOrConnectWithoutTemplateInput[]
    upsert?: ZapUpsertWithWhereUniqueWithoutTemplateInput | ZapUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ZapCreateManyTemplateInputEnvelope
    set?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    disconnect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    delete?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    update?: ZapUpdateWithWhereUniqueWithoutTemplateInput | ZapUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ZapUpdateManyWithWhereWithoutTemplateInput | ZapUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ZapScalarWhereInput | ZapScalarWhereInput[]
  }

  export type ZapUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ZapCreateWithoutTemplateInput, ZapUncheckedCreateWithoutTemplateInput> | ZapCreateWithoutTemplateInput[] | ZapUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutTemplateInput | ZapCreateOrConnectWithoutTemplateInput[]
    upsert?: ZapUpsertWithWhereUniqueWithoutTemplateInput | ZapUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ZapCreateManyTemplateInputEnvelope
    set?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    disconnect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    delete?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    update?: ZapUpdateWithWhereUniqueWithoutTemplateInput | ZapUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ZapUpdateManyWithWhereWithoutTemplateInput | ZapUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ZapScalarWhereInput | ZapScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TokenStoreCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    provider: string
    updatedAt?: Date | string
    accessToken: string
    refreshToken: string
  }

  export type TokenStoreUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    provider: string
    updatedAt?: Date | string
    accessToken: string
    refreshToken: string
  }

  export type TokenStoreCreateOrConnectWithoutUserInput = {
    where: TokenStoreWhereUniqueInput
    create: XOR<TokenStoreCreateWithoutUserInput, TokenStoreUncheckedCreateWithoutUserInput>
  }

  export type TokenStoreCreateManyUserInputEnvelope = {
    data: TokenStoreCreateManyUserInput | TokenStoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    createdById: string
    apps?: AppCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    createdById: string
    apps?: AppUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type ZapCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: string | null
    actions?: ActionCreateNestedManyWithoutZapInput
    trigger?: TriggerCreateNestedOneWithoutZapInput
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput
    template?: ZapTemplateCreateNestedOneWithoutZapsInput
  }

  export type ZapUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: string | null
    templateId?: string | null
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutUserInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput>
  }

  export type ZapCreateManyUserInputEnvelope = {
    data: ZapCreateManyUserInput | ZapCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenStoreUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenStoreWhereUniqueInput
    update: XOR<TokenStoreUpdateWithoutUserInput, TokenStoreUncheckedUpdateWithoutUserInput>
    create: XOR<TokenStoreCreateWithoutUserInput, TokenStoreUncheckedCreateWithoutUserInput>
  }

  export type TokenStoreUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenStoreWhereUniqueInput
    data: XOR<TokenStoreUpdateWithoutUserInput, TokenStoreUncheckedUpdateWithoutUserInput>
  }

  export type TokenStoreUpdateManyWithWhereWithoutUserInput = {
    where: TokenStoreScalarWhereInput
    data: XOR<TokenStoreUpdateManyMutationInput, TokenStoreUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenStoreScalarWhereInput = {
    AND?: TokenStoreScalarWhereInput | TokenStoreScalarWhereInput[]
    OR?: TokenStoreScalarWhereInput[]
    NOT?: TokenStoreScalarWhereInput | TokenStoreScalarWhereInput[]
    id?: StringFilter<"TokenStore"> | string
    createdAt?: DateTimeFilter<"TokenStore"> | Date | string
    provider?: StringFilter<"TokenStore"> | string
    updatedAt?: DateTimeFilter<"TokenStore"> | Date | string
    accessToken?: StringFilter<"TokenStore"> | string
    refreshToken?: StringFilter<"TokenStore"> | string
    userId?: StringFilter<"TokenStore"> | string
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    apps?: AppUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    apps?: AppUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type ZapUpsertWithWhereUniqueWithoutUserInput = {
    where: ZapWhereUniqueInput
    update: XOR<ZapUpdateWithoutUserInput, ZapUncheckedUpdateWithoutUserInput>
    create: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput>
  }

  export type ZapUpdateWithWhereUniqueWithoutUserInput = {
    where: ZapWhereUniqueInput
    data: XOR<ZapUpdateWithoutUserInput, ZapUncheckedUpdateWithoutUserInput>
  }

  export type ZapUpdateManyWithWhereWithoutUserInput = {
    where: ZapScalarWhereInput
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyWithoutUserInput>
  }

  export type ZapScalarWhereInput = {
    AND?: ZapScalarWhereInput | ZapScalarWhereInput[]
    OR?: ZapScalarWhereInput[]
    NOT?: ZapScalarWhereInput | ZapScalarWhereInput[]
    id?: StringFilter<"Zap"> | string
    name?: StringFilter<"Zap"> | string
    description?: StringFilter<"Zap"> | string
    metadata?: JsonFilter<"Zap">
    userId?: StringFilter<"Zap"> | string
    image?: StringNullableFilter<"Zap"> | string | null
    templateId?: StringNullableFilter<"Zap"> | string | null
  }

  export type AppCreateWithoutTeamInput = {
    name: string
    description: string
    id?: string
    authMethods?: AuthMethodsCreateNestedManyWithoutAppInput
    actions?: AvailableActionsCreateNestedManyWithoutAppInput
    triggers?: AvailableTriggersCreateNestedManyWithoutAppInput
    triggerTemplates?: ZapTemplateCreateNestedManyWithoutTriggerAppInput
    actionTemplates?: ZapTemplateCreateNestedManyWithoutActionAppInput
  }

  export type AppUncheckedCreateWithoutTeamInput = {
    name: string
    description: string
    id?: string
    authMethods?: AuthMethodsUncheckedCreateNestedManyWithoutAppInput
    actions?: AvailableActionsUncheckedCreateNestedManyWithoutAppInput
    triggers?: AvailableTriggersUncheckedCreateNestedManyWithoutAppInput
    triggerTemplates?: ZapTemplateUncheckedCreateNestedManyWithoutTriggerAppInput
    actionTemplates?: ZapTemplateUncheckedCreateNestedManyWithoutActionAppInput
  }

  export type AppCreateOrConnectWithoutTeamInput = {
    where: AppWhereUniqueInput
    create: XOR<AppCreateWithoutTeamInput, AppUncheckedCreateWithoutTeamInput>
  }

  export type AppCreateManyTeamInputEnvelope = {
    data: AppCreateManyTeamInput | AppCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTeamInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    tokens?: TokenStoreCreateNestedManyWithoutUserInput
    zaps?: ZapCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    tokens?: TokenStoreUncheckedCreateNestedManyWithoutUserInput
    zaps?: ZapUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserCreateManyTeamInputEnvelope = {
    data: UserCreateManyTeamInput | UserCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type AppUpsertWithWhereUniqueWithoutTeamInput = {
    where: AppWhereUniqueInput
    update: XOR<AppUpdateWithoutTeamInput, AppUncheckedUpdateWithoutTeamInput>
    create: XOR<AppCreateWithoutTeamInput, AppUncheckedCreateWithoutTeamInput>
  }

  export type AppUpdateWithWhereUniqueWithoutTeamInput = {
    where: AppWhereUniqueInput
    data: XOR<AppUpdateWithoutTeamInput, AppUncheckedUpdateWithoutTeamInput>
  }

  export type AppUpdateManyWithWhereWithoutTeamInput = {
    where: AppScalarWhereInput
    data: XOR<AppUpdateManyMutationInput, AppUncheckedUpdateManyWithoutTeamInput>
  }

  export type AppScalarWhereInput = {
    AND?: AppScalarWhereInput | AppScalarWhereInput[]
    OR?: AppScalarWhereInput[]
    NOT?: AppScalarWhereInput | AppScalarWhereInput[]
    name?: StringFilter<"App"> | string
    description?: StringFilter<"App"> | string
    teamId?: StringFilter<"App"> | string
    id?: StringFilter<"App"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    teamId?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
  }

  export type TeamCreateWithoutAppsInput = {
    id?: string
    name: string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    createdById: string
    members?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutAppsInput = {
    id?: string
    name: string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    createdAt?: Date | string
    createdById: string
    members?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutAppsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAppsInput, TeamUncheckedCreateWithoutAppsInput>
  }

  export type AuthMethodsCreateWithoutAppInput = {
    id?: string
    metadata?: JsonNullValueInput | InputJsonValue
    availableAuth: AvailableAuthMethodsCreateNestedOneWithoutAuthMethodsInput
  }

  export type AuthMethodsUncheckedCreateWithoutAppInput = {
    id?: string
    authId: string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AuthMethodsCreateOrConnectWithoutAppInput = {
    where: AuthMethodsWhereUniqueInput
    create: XOR<AuthMethodsCreateWithoutAppInput, AuthMethodsUncheckedCreateWithoutAppInput>
  }

  export type AuthMethodsCreateManyAppInputEnvelope = {
    data: AuthMethodsCreateManyAppInput | AuthMethodsCreateManyAppInput[]
    skipDuplicates?: boolean
  }

  export type AvailableActionsCreateWithoutAppInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    actions?: ActionCreateNestedManyWithoutAvailableInput
    templates?: ZapTemplateCreateNestedManyWithoutActionInput
  }

  export type AvailableActionsUncheckedCreateWithoutAppInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    actions?: ActionUncheckedCreateNestedManyWithoutAvailableInput
    templates?: ZapTemplateUncheckedCreateNestedManyWithoutActionInput
  }

  export type AvailableActionsCreateOrConnectWithoutAppInput = {
    where: AvailableActionsWhereUniqueInput
    create: XOR<AvailableActionsCreateWithoutAppInput, AvailableActionsUncheckedCreateWithoutAppInput>
  }

  export type AvailableActionsCreateManyAppInputEnvelope = {
    data: AvailableActionsCreateManyAppInput | AvailableActionsCreateManyAppInput[]
    skipDuplicates?: boolean
  }

  export type AvailableTriggersCreateWithoutAppInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    triggers?: TriggerCreateNestedManyWithoutAvailableInput
    templates?: ZapTemplateCreateNestedManyWithoutTriggerInput
  }

  export type AvailableTriggersUncheckedCreateWithoutAppInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    triggers?: TriggerUncheckedCreateNestedManyWithoutAvailableInput
    templates?: ZapTemplateUncheckedCreateNestedManyWithoutTriggerInput
  }

  export type AvailableTriggersCreateOrConnectWithoutAppInput = {
    where: AvailableTriggersWhereUniqueInput
    create: XOR<AvailableTriggersCreateWithoutAppInput, AvailableTriggersUncheckedCreateWithoutAppInput>
  }

  export type AvailableTriggersCreateManyAppInputEnvelope = {
    data: AvailableTriggersCreateManyAppInput | AvailableTriggersCreateManyAppInput[]
    skipDuplicates?: boolean
  }

  export type ZapTemplateCreateWithoutTriggerAppInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    trigger: AvailableTriggersCreateNestedOneWithoutTemplatesInput
    actionApp: AppCreateNestedOneWithoutActionTemplatesInput
    action: AvailableActionsCreateNestedOneWithoutTemplatesInput
    zaps?: ZapCreateNestedManyWithoutTemplateInput
  }

  export type ZapTemplateUncheckedCreateWithoutTriggerAppInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerId: string
    actionAppId: string
    actionId: string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    zaps?: ZapUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ZapTemplateCreateOrConnectWithoutTriggerAppInput = {
    where: ZapTemplateWhereUniqueInput
    create: XOR<ZapTemplateCreateWithoutTriggerAppInput, ZapTemplateUncheckedCreateWithoutTriggerAppInput>
  }

  export type ZapTemplateCreateManyTriggerAppInputEnvelope = {
    data: ZapTemplateCreateManyTriggerAppInput | ZapTemplateCreateManyTriggerAppInput[]
    skipDuplicates?: boolean
  }

  export type ZapTemplateCreateWithoutActionAppInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    triggerApp: AppCreateNestedOneWithoutTriggerTemplatesInput
    trigger: AvailableTriggersCreateNestedOneWithoutTemplatesInput
    action: AvailableActionsCreateNestedOneWithoutTemplatesInput
    zaps?: ZapCreateNestedManyWithoutTemplateInput
  }

  export type ZapTemplateUncheckedCreateWithoutActionAppInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerAppId: string
    triggerId: string
    actionId: string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    zaps?: ZapUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ZapTemplateCreateOrConnectWithoutActionAppInput = {
    where: ZapTemplateWhereUniqueInput
    create: XOR<ZapTemplateCreateWithoutActionAppInput, ZapTemplateUncheckedCreateWithoutActionAppInput>
  }

  export type ZapTemplateCreateManyActionAppInputEnvelope = {
    data: ZapTemplateCreateManyActionAppInput | ZapTemplateCreateManyActionAppInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutAppsInput = {
    update: XOR<TeamUpdateWithoutAppsInput, TeamUncheckedUpdateWithoutAppsInput>
    create: XOR<TeamCreateWithoutAppsInput, TeamUncheckedCreateWithoutAppsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutAppsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutAppsInput, TeamUncheckedUpdateWithoutAppsInput>
  }

  export type TeamUpdateWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    members?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type AuthMethodsUpsertWithWhereUniqueWithoutAppInput = {
    where: AuthMethodsWhereUniqueInput
    update: XOR<AuthMethodsUpdateWithoutAppInput, AuthMethodsUncheckedUpdateWithoutAppInput>
    create: XOR<AuthMethodsCreateWithoutAppInput, AuthMethodsUncheckedCreateWithoutAppInput>
  }

  export type AuthMethodsUpdateWithWhereUniqueWithoutAppInput = {
    where: AuthMethodsWhereUniqueInput
    data: XOR<AuthMethodsUpdateWithoutAppInput, AuthMethodsUncheckedUpdateWithoutAppInput>
  }

  export type AuthMethodsUpdateManyWithWhereWithoutAppInput = {
    where: AuthMethodsScalarWhereInput
    data: XOR<AuthMethodsUpdateManyMutationInput, AuthMethodsUncheckedUpdateManyWithoutAppInput>
  }

  export type AuthMethodsScalarWhereInput = {
    AND?: AuthMethodsScalarWhereInput | AuthMethodsScalarWhereInput[]
    OR?: AuthMethodsScalarWhereInput[]
    NOT?: AuthMethodsScalarWhereInput | AuthMethodsScalarWhereInput[]
    id?: StringFilter<"AuthMethods"> | string
    appId?: StringFilter<"AuthMethods"> | string
    authId?: StringFilter<"AuthMethods"> | string
    metadata?: JsonFilter<"AuthMethods">
  }

  export type AvailableActionsUpsertWithWhereUniqueWithoutAppInput = {
    where: AvailableActionsWhereUniqueInput
    update: XOR<AvailableActionsUpdateWithoutAppInput, AvailableActionsUncheckedUpdateWithoutAppInput>
    create: XOR<AvailableActionsCreateWithoutAppInput, AvailableActionsUncheckedCreateWithoutAppInput>
  }

  export type AvailableActionsUpdateWithWhereUniqueWithoutAppInput = {
    where: AvailableActionsWhereUniqueInput
    data: XOR<AvailableActionsUpdateWithoutAppInput, AvailableActionsUncheckedUpdateWithoutAppInput>
  }

  export type AvailableActionsUpdateManyWithWhereWithoutAppInput = {
    where: AvailableActionsScalarWhereInput
    data: XOR<AvailableActionsUpdateManyMutationInput, AvailableActionsUncheckedUpdateManyWithoutAppInput>
  }

  export type AvailableActionsScalarWhereInput = {
    AND?: AvailableActionsScalarWhereInput | AvailableActionsScalarWhereInput[]
    OR?: AvailableActionsScalarWhereInput[]
    NOT?: AvailableActionsScalarWhereInput | AvailableActionsScalarWhereInput[]
    id?: StringFilter<"AvailableActions"> | string
    name?: StringFilter<"AvailableActions"> | string
    description?: StringFilter<"AvailableActions"> | string
    metadata?: JsonFilter<"AvailableActions">
    configMetadata?: JsonFilter<"AvailableActions">
    type?: StringFilter<"AvailableActions"> | string
    appId?: StringFilter<"AvailableActions"> | string
  }

  export type AvailableTriggersUpsertWithWhereUniqueWithoutAppInput = {
    where: AvailableTriggersWhereUniqueInput
    update: XOR<AvailableTriggersUpdateWithoutAppInput, AvailableTriggersUncheckedUpdateWithoutAppInput>
    create: XOR<AvailableTriggersCreateWithoutAppInput, AvailableTriggersUncheckedCreateWithoutAppInput>
  }

  export type AvailableTriggersUpdateWithWhereUniqueWithoutAppInput = {
    where: AvailableTriggersWhereUniqueInput
    data: XOR<AvailableTriggersUpdateWithoutAppInput, AvailableTriggersUncheckedUpdateWithoutAppInput>
  }

  export type AvailableTriggersUpdateManyWithWhereWithoutAppInput = {
    where: AvailableTriggersScalarWhereInput
    data: XOR<AvailableTriggersUpdateManyMutationInput, AvailableTriggersUncheckedUpdateManyWithoutAppInput>
  }

  export type AvailableTriggersScalarWhereInput = {
    AND?: AvailableTriggersScalarWhereInput | AvailableTriggersScalarWhereInput[]
    OR?: AvailableTriggersScalarWhereInput[]
    NOT?: AvailableTriggersScalarWhereInput | AvailableTriggersScalarWhereInput[]
    id?: StringFilter<"AvailableTriggers"> | string
    name?: StringFilter<"AvailableTriggers"> | string
    description?: StringFilter<"AvailableTriggers"> | string
    metadata?: JsonFilter<"AvailableTriggers">
    configMetadata?: JsonFilter<"AvailableTriggers">
    type?: StringFilter<"AvailableTriggers"> | string
    appId?: StringFilter<"AvailableTriggers"> | string
  }

  export type ZapTemplateUpsertWithWhereUniqueWithoutTriggerAppInput = {
    where: ZapTemplateWhereUniqueInput
    update: XOR<ZapTemplateUpdateWithoutTriggerAppInput, ZapTemplateUncheckedUpdateWithoutTriggerAppInput>
    create: XOR<ZapTemplateCreateWithoutTriggerAppInput, ZapTemplateUncheckedCreateWithoutTriggerAppInput>
  }

  export type ZapTemplateUpdateWithWhereUniqueWithoutTriggerAppInput = {
    where: ZapTemplateWhereUniqueInput
    data: XOR<ZapTemplateUpdateWithoutTriggerAppInput, ZapTemplateUncheckedUpdateWithoutTriggerAppInput>
  }

  export type ZapTemplateUpdateManyWithWhereWithoutTriggerAppInput = {
    where: ZapTemplateScalarWhereInput
    data: XOR<ZapTemplateUpdateManyMutationInput, ZapTemplateUncheckedUpdateManyWithoutTriggerAppInput>
  }

  export type ZapTemplateScalarWhereInput = {
    AND?: ZapTemplateScalarWhereInput | ZapTemplateScalarWhereInput[]
    OR?: ZapTemplateScalarWhereInput[]
    NOT?: ZapTemplateScalarWhereInput | ZapTemplateScalarWhereInput[]
    id?: StringFilter<"ZapTemplate"> | string
    name?: StringFilter<"ZapTemplate"> | string
    description?: StringFilter<"ZapTemplate"> | string
    category?: StringFilter<"ZapTemplate"> | string
    isPopular?: BoolFilter<"ZapTemplate"> | boolean
    createdAt?: DateTimeFilter<"ZapTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ZapTemplate"> | Date | string
    triggerAppId?: StringFilter<"ZapTemplate"> | string
    triggerId?: StringFilter<"ZapTemplate"> | string
    actionAppId?: StringFilter<"ZapTemplate"> | string
    actionId?: StringFilter<"ZapTemplate"> | string
    triggerConfig?: JsonFilter<"ZapTemplate">
    actionConfig?: JsonFilter<"ZapTemplate">
  }

  export type ZapTemplateUpsertWithWhereUniqueWithoutActionAppInput = {
    where: ZapTemplateWhereUniqueInput
    update: XOR<ZapTemplateUpdateWithoutActionAppInput, ZapTemplateUncheckedUpdateWithoutActionAppInput>
    create: XOR<ZapTemplateCreateWithoutActionAppInput, ZapTemplateUncheckedCreateWithoutActionAppInput>
  }

  export type ZapTemplateUpdateWithWhereUniqueWithoutActionAppInput = {
    where: ZapTemplateWhereUniqueInput
    data: XOR<ZapTemplateUpdateWithoutActionAppInput, ZapTemplateUncheckedUpdateWithoutActionAppInput>
  }

  export type ZapTemplateUpdateManyWithWhereWithoutActionAppInput = {
    where: ZapTemplateScalarWhereInput
    data: XOR<ZapTemplateUpdateManyMutationInput, ZapTemplateUncheckedUpdateManyWithoutActionAppInput>
  }

  export type AppCreateWithoutAuthMethodsInput = {
    name: string
    description: string
    id?: string
    team: TeamCreateNestedOneWithoutAppsInput
    actions?: AvailableActionsCreateNestedManyWithoutAppInput
    triggers?: AvailableTriggersCreateNestedManyWithoutAppInput
    triggerTemplates?: ZapTemplateCreateNestedManyWithoutTriggerAppInput
    actionTemplates?: ZapTemplateCreateNestedManyWithoutActionAppInput
  }

  export type AppUncheckedCreateWithoutAuthMethodsInput = {
    name: string
    description: string
    teamId: string
    id?: string
    actions?: AvailableActionsUncheckedCreateNestedManyWithoutAppInput
    triggers?: AvailableTriggersUncheckedCreateNestedManyWithoutAppInput
    triggerTemplates?: ZapTemplateUncheckedCreateNestedManyWithoutTriggerAppInput
    actionTemplates?: ZapTemplateUncheckedCreateNestedManyWithoutActionAppInput
  }

  export type AppCreateOrConnectWithoutAuthMethodsInput = {
    where: AppWhereUniqueInput
    create: XOR<AppCreateWithoutAuthMethodsInput, AppUncheckedCreateWithoutAuthMethodsInput>
  }

  export type AvailableAuthMethodsCreateWithoutAuthMethodsInput = {
    name: string
    provider: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type AvailableAuthMethodsUncheckedCreateWithoutAuthMethodsInput = {
    name: string
    provider: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    id?: string
  }

  export type AvailableAuthMethodsCreateOrConnectWithoutAuthMethodsInput = {
    where: AvailableAuthMethodsWhereUniqueInput
    create: XOR<AvailableAuthMethodsCreateWithoutAuthMethodsInput, AvailableAuthMethodsUncheckedCreateWithoutAuthMethodsInput>
  }

  export type AppUpsertWithoutAuthMethodsInput = {
    update: XOR<AppUpdateWithoutAuthMethodsInput, AppUncheckedUpdateWithoutAuthMethodsInput>
    create: XOR<AppCreateWithoutAuthMethodsInput, AppUncheckedCreateWithoutAuthMethodsInput>
    where?: AppWhereInput
  }

  export type AppUpdateToOneWithWhereWithoutAuthMethodsInput = {
    where?: AppWhereInput
    data: XOR<AppUpdateWithoutAuthMethodsInput, AppUncheckedUpdateWithoutAuthMethodsInput>
  }

  export type AppUpdateWithoutAuthMethodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutAppsNestedInput
    actions?: AvailableActionsUpdateManyWithoutAppNestedInput
    triggers?: AvailableTriggersUpdateManyWithoutAppNestedInput
    triggerTemplates?: ZapTemplateUpdateManyWithoutTriggerAppNestedInput
    actionTemplates?: ZapTemplateUpdateManyWithoutActionAppNestedInput
  }

  export type AppUncheckedUpdateWithoutAuthMethodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    actions?: AvailableActionsUncheckedUpdateManyWithoutAppNestedInput
    triggers?: AvailableTriggersUncheckedUpdateManyWithoutAppNestedInput
    triggerTemplates?: ZapTemplateUncheckedUpdateManyWithoutTriggerAppNestedInput
    actionTemplates?: ZapTemplateUncheckedUpdateManyWithoutActionAppNestedInput
  }

  export type AvailableAuthMethodsUpsertWithoutAuthMethodsInput = {
    update: XOR<AvailableAuthMethodsUpdateWithoutAuthMethodsInput, AvailableAuthMethodsUncheckedUpdateWithoutAuthMethodsInput>
    create: XOR<AvailableAuthMethodsCreateWithoutAuthMethodsInput, AvailableAuthMethodsUncheckedCreateWithoutAuthMethodsInput>
    where?: AvailableAuthMethodsWhereInput
  }

  export type AvailableAuthMethodsUpdateToOneWithWhereWithoutAuthMethodsInput = {
    where?: AvailableAuthMethodsWhereInput
    data: XOR<AvailableAuthMethodsUpdateWithoutAuthMethodsInput, AvailableAuthMethodsUncheckedUpdateWithoutAuthMethodsInput>
  }

  export type AvailableAuthMethodsUpdateWithoutAuthMethodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableAuthMethodsUncheckedUpdateWithoutAuthMethodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AuthMethodsCreateWithoutAvailableAuthInput = {
    id?: string
    metadata?: JsonNullValueInput | InputJsonValue
    app: AppCreateNestedOneWithoutAuthMethodsInput
  }

  export type AuthMethodsUncheckedCreateWithoutAvailableAuthInput = {
    id?: string
    appId: string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AuthMethodsCreateOrConnectWithoutAvailableAuthInput = {
    where: AuthMethodsWhereUniqueInput
    create: XOR<AuthMethodsCreateWithoutAvailableAuthInput, AuthMethodsUncheckedCreateWithoutAvailableAuthInput>
  }

  export type AuthMethodsCreateManyAvailableAuthInputEnvelope = {
    data: AuthMethodsCreateManyAvailableAuthInput | AuthMethodsCreateManyAvailableAuthInput[]
    skipDuplicates?: boolean
  }

  export type AuthMethodsUpsertWithWhereUniqueWithoutAvailableAuthInput = {
    where: AuthMethodsWhereUniqueInput
    update: XOR<AuthMethodsUpdateWithoutAvailableAuthInput, AuthMethodsUncheckedUpdateWithoutAvailableAuthInput>
    create: XOR<AuthMethodsCreateWithoutAvailableAuthInput, AuthMethodsUncheckedCreateWithoutAvailableAuthInput>
  }

  export type AuthMethodsUpdateWithWhereUniqueWithoutAvailableAuthInput = {
    where: AuthMethodsWhereUniqueInput
    data: XOR<AuthMethodsUpdateWithoutAvailableAuthInput, AuthMethodsUncheckedUpdateWithoutAvailableAuthInput>
  }

  export type AuthMethodsUpdateManyWithWhereWithoutAvailableAuthInput = {
    where: AuthMethodsScalarWhereInput
    data: XOR<AuthMethodsUpdateManyMutationInput, AuthMethodsUncheckedUpdateManyWithoutAvailableAuthInput>
  }

  export type ActionCreateWithoutZapInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    sortingOrder?: number
    available: AvailableActionsCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutZapInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    sortingOrder?: number
    actionType: string
  }

  export type ActionCreateOrConnectWithoutZapInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
  }

  export type ActionCreateManyZapInputEnvelope = {
    data: ActionCreateManyZapInput | ActionCreateManyZapInput[]
    skipDuplicates?: boolean
  }

  export type TriggerCreateWithoutZapInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    available: AvailableTriggersCreateNestedOneWithoutTriggersInput
  }

  export type TriggerUncheckedCreateWithoutZapInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    availableTriggerId: string
  }

  export type TriggerCreateOrConnectWithoutZapInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
  }

  export type UserCreateWithoutZapsInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    tokens?: TokenStoreCreateNestedManyWithoutUserInput
    team?: TeamCreateNestedOneWithoutMembersInput
  }

  export type UserUncheckedCreateWithoutZapsInput = {
    id?: string
    name: string
    password: string
    email: string
    teamId?: string | null
    image?: string | null
    tokens?: TokenStoreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutZapsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutZapsInput, UserUncheckedCreateWithoutZapsInput>
  }

  export type ZapRunCreateWithoutZapInput = {
    id?: string
    metadata?: JsonNullValueInput | InputJsonValue
    ZapRunOutBox?: ZapRunOutBoxCreateNestedOneWithoutZapRunInput
  }

  export type ZapRunUncheckedCreateWithoutZapInput = {
    id?: string
    metadata?: JsonNullValueInput | InputJsonValue
    ZapRunOutBox?: ZapRunOutBoxUncheckedCreateNestedOneWithoutZapRunInput
  }

  export type ZapRunCreateOrConnectWithoutZapInput = {
    where: ZapRunWhereUniqueInput
    create: XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput>
  }

  export type ZapRunCreateManyZapInputEnvelope = {
    data: ZapRunCreateManyZapInput | ZapRunCreateManyZapInput[]
    skipDuplicates?: boolean
  }

  export type ZapTemplateCreateWithoutZapsInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    triggerApp: AppCreateNestedOneWithoutTriggerTemplatesInput
    trigger: AvailableTriggersCreateNestedOneWithoutTemplatesInput
    actionApp: AppCreateNestedOneWithoutActionTemplatesInput
    action: AvailableActionsCreateNestedOneWithoutTemplatesInput
  }

  export type ZapTemplateUncheckedCreateWithoutZapsInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerAppId: string
    triggerId: string
    actionAppId: string
    actionId: string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type ZapTemplateCreateOrConnectWithoutZapsInput = {
    where: ZapTemplateWhereUniqueInput
    create: XOR<ZapTemplateCreateWithoutZapsInput, ZapTemplateUncheckedCreateWithoutZapsInput>
  }

  export type ActionUpsertWithWhereUniqueWithoutZapInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutZapInput, ActionUncheckedUpdateWithoutZapInput>
    create: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutZapInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutZapInput, ActionUncheckedUpdateWithoutZapInput>
  }

  export type ActionUpdateManyWithWhereWithoutZapInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutZapInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: StringFilter<"Action"> | string
    name?: StringFilter<"Action"> | string
    description?: StringFilter<"Action"> | string
    metadata?: JsonFilter<"Action">
    zapId?: StringFilter<"Action"> | string
    sortingOrder?: IntFilter<"Action"> | number
    actionType?: StringFilter<"Action"> | string
  }

  export type TriggerUpsertWithoutZapInput = {
    update: XOR<TriggerUpdateWithoutZapInput, TriggerUncheckedUpdateWithoutZapInput>
    create: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutZapInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutZapInput, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type TriggerUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    available?: AvailableTriggersUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    availableTriggerId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutZapsInput = {
    update: XOR<UserUpdateWithoutZapsInput, UserUncheckedUpdateWithoutZapsInput>
    create: XOR<UserCreateWithoutZapsInput, UserUncheckedCreateWithoutZapsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutZapsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutZapsInput, UserUncheckedUpdateWithoutZapsInput>
  }

  export type UserUpdateWithoutZapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: TokenStoreUpdateManyWithoutUserNestedInput
    team?: TeamUpdateOneWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateWithoutZapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: TokenStoreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ZapRunUpsertWithWhereUniqueWithoutZapInput = {
    where: ZapRunWhereUniqueInput
    update: XOR<ZapRunUpdateWithoutZapInput, ZapRunUncheckedUpdateWithoutZapInput>
    create: XOR<ZapRunCreateWithoutZapInput, ZapRunUncheckedCreateWithoutZapInput>
  }

  export type ZapRunUpdateWithWhereUniqueWithoutZapInput = {
    where: ZapRunWhereUniqueInput
    data: XOR<ZapRunUpdateWithoutZapInput, ZapRunUncheckedUpdateWithoutZapInput>
  }

  export type ZapRunUpdateManyWithWhereWithoutZapInput = {
    where: ZapRunScalarWhereInput
    data: XOR<ZapRunUpdateManyMutationInput, ZapRunUncheckedUpdateManyWithoutZapInput>
  }

  export type ZapRunScalarWhereInput = {
    AND?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[]
    OR?: ZapRunScalarWhereInput[]
    NOT?: ZapRunScalarWhereInput | ZapRunScalarWhereInput[]
    id?: StringFilter<"ZapRun"> | string
    metadata?: JsonFilter<"ZapRun">
    zapId?: StringFilter<"ZapRun"> | string
  }

  export type ZapTemplateUpsertWithoutZapsInput = {
    update: XOR<ZapTemplateUpdateWithoutZapsInput, ZapTemplateUncheckedUpdateWithoutZapsInput>
    create: XOR<ZapTemplateCreateWithoutZapsInput, ZapTemplateUncheckedCreateWithoutZapsInput>
    where?: ZapTemplateWhereInput
  }

  export type ZapTemplateUpdateToOneWithWhereWithoutZapsInput = {
    where?: ZapTemplateWhereInput
    data: XOR<ZapTemplateUpdateWithoutZapsInput, ZapTemplateUncheckedUpdateWithoutZapsInput>
  }

  export type ZapTemplateUpdateWithoutZapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    triggerApp?: AppUpdateOneRequiredWithoutTriggerTemplatesNestedInput
    trigger?: AvailableTriggersUpdateOneRequiredWithoutTemplatesNestedInput
    actionApp?: AppUpdateOneRequiredWithoutActionTemplatesNestedInput
    action?: AvailableActionsUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type ZapTemplateUncheckedUpdateWithoutZapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerAppId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    actionAppId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type AvailableTriggersCreateWithoutTriggersInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    app: AppCreateNestedOneWithoutTriggersInput
    templates?: ZapTemplateCreateNestedManyWithoutTriggerInput
  }

  export type AvailableTriggersUncheckedCreateWithoutTriggersInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    appId: string
    templates?: ZapTemplateUncheckedCreateNestedManyWithoutTriggerInput
  }

  export type AvailableTriggersCreateOrConnectWithoutTriggersInput = {
    where: AvailableTriggersWhereUniqueInput
    create: XOR<AvailableTriggersCreateWithoutTriggersInput, AvailableTriggersUncheckedCreateWithoutTriggersInput>
  }

  export type ZapCreateWithoutTriggerInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: string | null
    actions?: ActionCreateNestedManyWithoutZapInput
    user: UserCreateNestedOneWithoutZapsInput
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput
    template?: ZapTemplateCreateNestedOneWithoutZapsInput
  }

  export type ZapUncheckedCreateWithoutTriggerInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    userId: string
    image?: string | null
    templateId?: string | null
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutTriggerInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
  }

  export type AvailableTriggersUpsertWithoutTriggersInput = {
    update: XOR<AvailableTriggersUpdateWithoutTriggersInput, AvailableTriggersUncheckedUpdateWithoutTriggersInput>
    create: XOR<AvailableTriggersCreateWithoutTriggersInput, AvailableTriggersUncheckedCreateWithoutTriggersInput>
    where?: AvailableTriggersWhereInput
  }

  export type AvailableTriggersUpdateToOneWithWhereWithoutTriggersInput = {
    where?: AvailableTriggersWhereInput
    data: XOR<AvailableTriggersUpdateWithoutTriggersInput, AvailableTriggersUncheckedUpdateWithoutTriggersInput>
  }

  export type AvailableTriggersUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    app?: AppUpdateOneRequiredWithoutTriggersNestedInput
    templates?: ZapTemplateUpdateManyWithoutTriggerNestedInput
  }

  export type AvailableTriggersUncheckedUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    templates?: ZapTemplateUncheckedUpdateManyWithoutTriggerNestedInput
  }

  export type ZapUpsertWithoutTriggerInput = {
    update: XOR<ZapUpdateWithoutTriggerInput, ZapUncheckedUpdateWithoutTriggerInput>
    create: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutTriggerInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutTriggerInput, ZapUncheckedUpdateWithoutTriggerInput>
  }

  export type ZapUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUpdateManyWithoutZapNestedInput
    user?: UserUpdateOneRequiredWithoutZapsNestedInput
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput
    template?: ZapTemplateUpdateOneWithoutZapsNestedInput
  }

  export type ZapUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type AvailableActionsCreateWithoutActionsInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    app: AppCreateNestedOneWithoutActionsInput
    templates?: ZapTemplateCreateNestedManyWithoutActionInput
  }

  export type AvailableActionsUncheckedCreateWithoutActionsInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    appId: string
    templates?: ZapTemplateUncheckedCreateNestedManyWithoutActionInput
  }

  export type AvailableActionsCreateOrConnectWithoutActionsInput = {
    where: AvailableActionsWhereUniqueInput
    create: XOR<AvailableActionsCreateWithoutActionsInput, AvailableActionsUncheckedCreateWithoutActionsInput>
  }

  export type ZapCreateWithoutActionsInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: string | null
    trigger?: TriggerCreateNestedOneWithoutZapInput
    user: UserCreateNestedOneWithoutZapsInput
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput
    template?: ZapTemplateCreateNestedOneWithoutZapsInput
  }

  export type ZapUncheckedCreateWithoutActionsInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    userId: string
    image?: string | null
    templateId?: string | null
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutActionsInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutActionsInput, ZapUncheckedCreateWithoutActionsInput>
  }

  export type AvailableActionsUpsertWithoutActionsInput = {
    update: XOR<AvailableActionsUpdateWithoutActionsInput, AvailableActionsUncheckedUpdateWithoutActionsInput>
    create: XOR<AvailableActionsCreateWithoutActionsInput, AvailableActionsUncheckedCreateWithoutActionsInput>
    where?: AvailableActionsWhereInput
  }

  export type AvailableActionsUpdateToOneWithWhereWithoutActionsInput = {
    where?: AvailableActionsWhereInput
    data: XOR<AvailableActionsUpdateWithoutActionsInput, AvailableActionsUncheckedUpdateWithoutActionsInput>
  }

  export type AvailableActionsUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    app?: AppUpdateOneRequiredWithoutActionsNestedInput
    templates?: ZapTemplateUpdateManyWithoutActionNestedInput
  }

  export type AvailableActionsUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    templates?: ZapTemplateUncheckedUpdateManyWithoutActionNestedInput
  }

  export type ZapUpsertWithoutActionsInput = {
    update: XOR<ZapUpdateWithoutActionsInput, ZapUncheckedUpdateWithoutActionsInput>
    create: XOR<ZapCreateWithoutActionsInput, ZapUncheckedCreateWithoutActionsInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutActionsInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutActionsInput, ZapUncheckedUpdateWithoutActionsInput>
  }

  export type ZapUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    user?: UserUpdateOneRequiredWithoutZapsNestedInput
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput
    template?: ZapTemplateUpdateOneWithoutZapsNestedInput
  }

  export type ZapUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type AppCreateWithoutTriggersInput = {
    name: string
    description: string
    id?: string
    team: TeamCreateNestedOneWithoutAppsInput
    authMethods?: AuthMethodsCreateNestedManyWithoutAppInput
    actions?: AvailableActionsCreateNestedManyWithoutAppInput
    triggerTemplates?: ZapTemplateCreateNestedManyWithoutTriggerAppInput
    actionTemplates?: ZapTemplateCreateNestedManyWithoutActionAppInput
  }

  export type AppUncheckedCreateWithoutTriggersInput = {
    name: string
    description: string
    teamId: string
    id?: string
    authMethods?: AuthMethodsUncheckedCreateNestedManyWithoutAppInput
    actions?: AvailableActionsUncheckedCreateNestedManyWithoutAppInput
    triggerTemplates?: ZapTemplateUncheckedCreateNestedManyWithoutTriggerAppInput
    actionTemplates?: ZapTemplateUncheckedCreateNestedManyWithoutActionAppInput
  }

  export type AppCreateOrConnectWithoutTriggersInput = {
    where: AppWhereUniqueInput
    create: XOR<AppCreateWithoutTriggersInput, AppUncheckedCreateWithoutTriggersInput>
  }

  export type TriggerCreateWithoutAvailableInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutAvailableInput = {
    id?: string
    name: string
    description: string
    zapId: string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerCreateOrConnectWithoutAvailableInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutAvailableInput, TriggerUncheckedCreateWithoutAvailableInput>
  }

  export type TriggerCreateManyAvailableInputEnvelope = {
    data: TriggerCreateManyAvailableInput | TriggerCreateManyAvailableInput[]
    skipDuplicates?: boolean
  }

  export type ZapTemplateCreateWithoutTriggerInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    triggerApp: AppCreateNestedOneWithoutTriggerTemplatesInput
    actionApp: AppCreateNestedOneWithoutActionTemplatesInput
    action: AvailableActionsCreateNestedOneWithoutTemplatesInput
    zaps?: ZapCreateNestedManyWithoutTemplateInput
  }

  export type ZapTemplateUncheckedCreateWithoutTriggerInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerAppId: string
    actionAppId: string
    actionId: string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    zaps?: ZapUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ZapTemplateCreateOrConnectWithoutTriggerInput = {
    where: ZapTemplateWhereUniqueInput
    create: XOR<ZapTemplateCreateWithoutTriggerInput, ZapTemplateUncheckedCreateWithoutTriggerInput>
  }

  export type ZapTemplateCreateManyTriggerInputEnvelope = {
    data: ZapTemplateCreateManyTriggerInput | ZapTemplateCreateManyTriggerInput[]
    skipDuplicates?: boolean
  }

  export type AppUpsertWithoutTriggersInput = {
    update: XOR<AppUpdateWithoutTriggersInput, AppUncheckedUpdateWithoutTriggersInput>
    create: XOR<AppCreateWithoutTriggersInput, AppUncheckedCreateWithoutTriggersInput>
    where?: AppWhereInput
  }

  export type AppUpdateToOneWithWhereWithoutTriggersInput = {
    where?: AppWhereInput
    data: XOR<AppUpdateWithoutTriggersInput, AppUncheckedUpdateWithoutTriggersInput>
  }

  export type AppUpdateWithoutTriggersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutAppsNestedInput
    authMethods?: AuthMethodsUpdateManyWithoutAppNestedInput
    actions?: AvailableActionsUpdateManyWithoutAppNestedInput
    triggerTemplates?: ZapTemplateUpdateManyWithoutTriggerAppNestedInput
    actionTemplates?: ZapTemplateUpdateManyWithoutActionAppNestedInput
  }

  export type AppUncheckedUpdateWithoutTriggersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    authMethods?: AuthMethodsUncheckedUpdateManyWithoutAppNestedInput
    actions?: AvailableActionsUncheckedUpdateManyWithoutAppNestedInput
    triggerTemplates?: ZapTemplateUncheckedUpdateManyWithoutTriggerAppNestedInput
    actionTemplates?: ZapTemplateUncheckedUpdateManyWithoutActionAppNestedInput
  }

  export type TriggerUpsertWithWhereUniqueWithoutAvailableInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutAvailableInput, TriggerUncheckedUpdateWithoutAvailableInput>
    create: XOR<TriggerCreateWithoutAvailableInput, TriggerUncheckedCreateWithoutAvailableInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutAvailableInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutAvailableInput, TriggerUncheckedUpdateWithoutAvailableInput>
  }

  export type TriggerUpdateManyWithWhereWithoutAvailableInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutAvailableInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: StringFilter<"Trigger"> | string
    name?: StringFilter<"Trigger"> | string
    description?: StringFilter<"Trigger"> | string
    zapId?: StringFilter<"Trigger"> | string
    metadata?: JsonFilter<"Trigger">
    availableTriggerId?: StringFilter<"Trigger"> | string
  }

  export type ZapTemplateUpsertWithWhereUniqueWithoutTriggerInput = {
    where: ZapTemplateWhereUniqueInput
    update: XOR<ZapTemplateUpdateWithoutTriggerInput, ZapTemplateUncheckedUpdateWithoutTriggerInput>
    create: XOR<ZapTemplateCreateWithoutTriggerInput, ZapTemplateUncheckedCreateWithoutTriggerInput>
  }

  export type ZapTemplateUpdateWithWhereUniqueWithoutTriggerInput = {
    where: ZapTemplateWhereUniqueInput
    data: XOR<ZapTemplateUpdateWithoutTriggerInput, ZapTemplateUncheckedUpdateWithoutTriggerInput>
  }

  export type ZapTemplateUpdateManyWithWhereWithoutTriggerInput = {
    where: ZapTemplateScalarWhereInput
    data: XOR<ZapTemplateUpdateManyMutationInput, ZapTemplateUncheckedUpdateManyWithoutTriggerInput>
  }

  export type ActionCreateWithoutAvailableInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    sortingOrder?: number
    zap: ZapCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutAvailableInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId: string
    sortingOrder?: number
  }

  export type ActionCreateOrConnectWithoutAvailableInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutAvailableInput, ActionUncheckedCreateWithoutAvailableInput>
  }

  export type ActionCreateManyAvailableInputEnvelope = {
    data: ActionCreateManyAvailableInput | ActionCreateManyAvailableInput[]
    skipDuplicates?: boolean
  }

  export type AppCreateWithoutActionsInput = {
    name: string
    description: string
    id?: string
    team: TeamCreateNestedOneWithoutAppsInput
    authMethods?: AuthMethodsCreateNestedManyWithoutAppInput
    triggers?: AvailableTriggersCreateNestedManyWithoutAppInput
    triggerTemplates?: ZapTemplateCreateNestedManyWithoutTriggerAppInput
    actionTemplates?: ZapTemplateCreateNestedManyWithoutActionAppInput
  }

  export type AppUncheckedCreateWithoutActionsInput = {
    name: string
    description: string
    teamId: string
    id?: string
    authMethods?: AuthMethodsUncheckedCreateNestedManyWithoutAppInput
    triggers?: AvailableTriggersUncheckedCreateNestedManyWithoutAppInput
    triggerTemplates?: ZapTemplateUncheckedCreateNestedManyWithoutTriggerAppInput
    actionTemplates?: ZapTemplateUncheckedCreateNestedManyWithoutActionAppInput
  }

  export type AppCreateOrConnectWithoutActionsInput = {
    where: AppWhereUniqueInput
    create: XOR<AppCreateWithoutActionsInput, AppUncheckedCreateWithoutActionsInput>
  }

  export type ZapTemplateCreateWithoutActionInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    triggerApp: AppCreateNestedOneWithoutTriggerTemplatesInput
    trigger: AvailableTriggersCreateNestedOneWithoutTemplatesInput
    actionApp: AppCreateNestedOneWithoutActionTemplatesInput
    zaps?: ZapCreateNestedManyWithoutTemplateInput
  }

  export type ZapTemplateUncheckedCreateWithoutActionInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerAppId: string
    triggerId: string
    actionAppId: string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    zaps?: ZapUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type ZapTemplateCreateOrConnectWithoutActionInput = {
    where: ZapTemplateWhereUniqueInput
    create: XOR<ZapTemplateCreateWithoutActionInput, ZapTemplateUncheckedCreateWithoutActionInput>
  }

  export type ZapTemplateCreateManyActionInputEnvelope = {
    data: ZapTemplateCreateManyActionInput | ZapTemplateCreateManyActionInput[]
    skipDuplicates?: boolean
  }

  export type ActionUpsertWithWhereUniqueWithoutAvailableInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutAvailableInput, ActionUncheckedUpdateWithoutAvailableInput>
    create: XOR<ActionCreateWithoutAvailableInput, ActionUncheckedCreateWithoutAvailableInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutAvailableInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutAvailableInput, ActionUncheckedUpdateWithoutAvailableInput>
  }

  export type ActionUpdateManyWithWhereWithoutAvailableInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutAvailableInput>
  }

  export type AppUpsertWithoutActionsInput = {
    update: XOR<AppUpdateWithoutActionsInput, AppUncheckedUpdateWithoutActionsInput>
    create: XOR<AppCreateWithoutActionsInput, AppUncheckedCreateWithoutActionsInput>
    where?: AppWhereInput
  }

  export type AppUpdateToOneWithWhereWithoutActionsInput = {
    where?: AppWhereInput
    data: XOR<AppUpdateWithoutActionsInput, AppUncheckedUpdateWithoutActionsInput>
  }

  export type AppUpdateWithoutActionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutAppsNestedInput
    authMethods?: AuthMethodsUpdateManyWithoutAppNestedInput
    triggers?: AvailableTriggersUpdateManyWithoutAppNestedInput
    triggerTemplates?: ZapTemplateUpdateManyWithoutTriggerAppNestedInput
    actionTemplates?: ZapTemplateUpdateManyWithoutActionAppNestedInput
  }

  export type AppUncheckedUpdateWithoutActionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    authMethods?: AuthMethodsUncheckedUpdateManyWithoutAppNestedInput
    triggers?: AvailableTriggersUncheckedUpdateManyWithoutAppNestedInput
    triggerTemplates?: ZapTemplateUncheckedUpdateManyWithoutTriggerAppNestedInput
    actionTemplates?: ZapTemplateUncheckedUpdateManyWithoutActionAppNestedInput
  }

  export type ZapTemplateUpsertWithWhereUniqueWithoutActionInput = {
    where: ZapTemplateWhereUniqueInput
    update: XOR<ZapTemplateUpdateWithoutActionInput, ZapTemplateUncheckedUpdateWithoutActionInput>
    create: XOR<ZapTemplateCreateWithoutActionInput, ZapTemplateUncheckedCreateWithoutActionInput>
  }

  export type ZapTemplateUpdateWithWhereUniqueWithoutActionInput = {
    where: ZapTemplateWhereUniqueInput
    data: XOR<ZapTemplateUpdateWithoutActionInput, ZapTemplateUncheckedUpdateWithoutActionInput>
  }

  export type ZapTemplateUpdateManyWithWhereWithoutActionInput = {
    where: ZapTemplateScalarWhereInput
    data: XOR<ZapTemplateUpdateManyMutationInput, ZapTemplateUncheckedUpdateManyWithoutActionInput>
  }

  export type ZapCreateWithoutZapRunsInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: string | null
    actions?: ActionCreateNestedManyWithoutZapInput
    trigger?: TriggerCreateNestedOneWithoutZapInput
    user: UserCreateNestedOneWithoutZapsInput
    template?: ZapTemplateCreateNestedOneWithoutZapsInput
  }

  export type ZapUncheckedCreateWithoutZapRunsInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    userId: string
    image?: string | null
    templateId?: string | null
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutZapRunsInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
  }

  export type ZapRunOutBoxCreateWithoutZapRunInput = {
    id?: string
  }

  export type ZapRunOutBoxUncheckedCreateWithoutZapRunInput = {
    id?: string
  }

  export type ZapRunOutBoxCreateOrConnectWithoutZapRunInput = {
    where: ZapRunOutBoxWhereUniqueInput
    create: XOR<ZapRunOutBoxCreateWithoutZapRunInput, ZapRunOutBoxUncheckedCreateWithoutZapRunInput>
  }

  export type ZapUpsertWithoutZapRunsInput = {
    update: XOR<ZapUpdateWithoutZapRunsInput, ZapUncheckedUpdateWithoutZapRunsInput>
    create: XOR<ZapCreateWithoutZapRunsInput, ZapUncheckedCreateWithoutZapRunsInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutZapRunsInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutZapRunsInput, ZapUncheckedUpdateWithoutZapRunsInput>
  }

  export type ZapUpdateWithoutZapRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUpdateManyWithoutZapNestedInput
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    user?: UserUpdateOneRequiredWithoutZapsNestedInput
    template?: ZapTemplateUpdateOneWithoutZapsNestedInput
  }

  export type ZapUncheckedUpdateWithoutZapRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
  }

  export type ZapRunOutBoxUpsertWithoutZapRunInput = {
    update: XOR<ZapRunOutBoxUpdateWithoutZapRunInput, ZapRunOutBoxUncheckedUpdateWithoutZapRunInput>
    create: XOR<ZapRunOutBoxCreateWithoutZapRunInput, ZapRunOutBoxUncheckedCreateWithoutZapRunInput>
    where?: ZapRunOutBoxWhereInput
  }

  export type ZapRunOutBoxUpdateToOneWithWhereWithoutZapRunInput = {
    where?: ZapRunOutBoxWhereInput
    data: XOR<ZapRunOutBoxUpdateWithoutZapRunInput, ZapRunOutBoxUncheckedUpdateWithoutZapRunInput>
  }

  export type ZapRunOutBoxUpdateWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunOutBoxUncheckedUpdateWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunCreateWithoutZapRunOutBoxInput = {
    id?: string
    metadata?: JsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutZapRunsInput
  }

  export type ZapRunUncheckedCreateWithoutZapRunOutBoxInput = {
    id?: string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId: string
  }

  export type ZapRunCreateOrConnectWithoutZapRunOutBoxInput = {
    where: ZapRunWhereUniqueInput
    create: XOR<ZapRunCreateWithoutZapRunOutBoxInput, ZapRunUncheckedCreateWithoutZapRunOutBoxInput>
  }

  export type ZapRunUpsertWithoutZapRunOutBoxInput = {
    update: XOR<ZapRunUpdateWithoutZapRunOutBoxInput, ZapRunUncheckedUpdateWithoutZapRunOutBoxInput>
    create: XOR<ZapRunCreateWithoutZapRunOutBoxInput, ZapRunUncheckedCreateWithoutZapRunOutBoxInput>
    where?: ZapRunWhereInput
  }

  export type ZapRunUpdateToOneWithWhereWithoutZapRunOutBoxInput = {
    where?: ZapRunWhereInput
    data: XOR<ZapRunUpdateWithoutZapRunOutBoxInput, ZapRunUncheckedUpdateWithoutZapRunOutBoxInput>
  }

  export type ZapRunUpdateWithoutZapRunOutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutZapRunsNestedInput
  }

  export type ZapRunUncheckedUpdateWithoutZapRunOutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
    team?: TeamCreateNestedOneWithoutMembersInput
    zaps?: ZapCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    name: string
    password: string
    email: string
    teamId?: string | null
    image?: string | null
    zaps?: ZapUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    team?: TeamUpdateOneWithoutMembersNestedInput
    zaps?: ZapUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    zaps?: ZapUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppCreateWithoutTriggerTemplatesInput = {
    name: string
    description: string
    id?: string
    team: TeamCreateNestedOneWithoutAppsInput
    authMethods?: AuthMethodsCreateNestedManyWithoutAppInput
    actions?: AvailableActionsCreateNestedManyWithoutAppInput
    triggers?: AvailableTriggersCreateNestedManyWithoutAppInput
    actionTemplates?: ZapTemplateCreateNestedManyWithoutActionAppInput
  }

  export type AppUncheckedCreateWithoutTriggerTemplatesInput = {
    name: string
    description: string
    teamId: string
    id?: string
    authMethods?: AuthMethodsUncheckedCreateNestedManyWithoutAppInput
    actions?: AvailableActionsUncheckedCreateNestedManyWithoutAppInput
    triggers?: AvailableTriggersUncheckedCreateNestedManyWithoutAppInput
    actionTemplates?: ZapTemplateUncheckedCreateNestedManyWithoutActionAppInput
  }

  export type AppCreateOrConnectWithoutTriggerTemplatesInput = {
    where: AppWhereUniqueInput
    create: XOR<AppCreateWithoutTriggerTemplatesInput, AppUncheckedCreateWithoutTriggerTemplatesInput>
  }

  export type AvailableTriggersCreateWithoutTemplatesInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    app: AppCreateNestedOneWithoutTriggersInput
    triggers?: TriggerCreateNestedManyWithoutAvailableInput
  }

  export type AvailableTriggersUncheckedCreateWithoutTemplatesInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    appId: string
    triggers?: TriggerUncheckedCreateNestedManyWithoutAvailableInput
  }

  export type AvailableTriggersCreateOrConnectWithoutTemplatesInput = {
    where: AvailableTriggersWhereUniqueInput
    create: XOR<AvailableTriggersCreateWithoutTemplatesInput, AvailableTriggersUncheckedCreateWithoutTemplatesInput>
  }

  export type AppCreateWithoutActionTemplatesInput = {
    name: string
    description: string
    id?: string
    team: TeamCreateNestedOneWithoutAppsInput
    authMethods?: AuthMethodsCreateNestedManyWithoutAppInput
    actions?: AvailableActionsCreateNestedManyWithoutAppInput
    triggers?: AvailableTriggersCreateNestedManyWithoutAppInput
    triggerTemplates?: ZapTemplateCreateNestedManyWithoutTriggerAppInput
  }

  export type AppUncheckedCreateWithoutActionTemplatesInput = {
    name: string
    description: string
    teamId: string
    id?: string
    authMethods?: AuthMethodsUncheckedCreateNestedManyWithoutAppInput
    actions?: AvailableActionsUncheckedCreateNestedManyWithoutAppInput
    triggers?: AvailableTriggersUncheckedCreateNestedManyWithoutAppInput
    triggerTemplates?: ZapTemplateUncheckedCreateNestedManyWithoutTriggerAppInput
  }

  export type AppCreateOrConnectWithoutActionTemplatesInput = {
    where: AppWhereUniqueInput
    create: XOR<AppCreateWithoutActionTemplatesInput, AppUncheckedCreateWithoutActionTemplatesInput>
  }

  export type AvailableActionsCreateWithoutTemplatesInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    actions?: ActionCreateNestedManyWithoutAvailableInput
    app: AppCreateNestedOneWithoutActionsInput
  }

  export type AvailableActionsUncheckedCreateWithoutTemplatesInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
    appId: string
    actions?: ActionUncheckedCreateNestedManyWithoutAvailableInput
  }

  export type AvailableActionsCreateOrConnectWithoutTemplatesInput = {
    where: AvailableActionsWhereUniqueInput
    create: XOR<AvailableActionsCreateWithoutTemplatesInput, AvailableActionsUncheckedCreateWithoutTemplatesInput>
  }

  export type ZapCreateWithoutTemplateInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: string | null
    actions?: ActionCreateNestedManyWithoutZapInput
    trigger?: TriggerCreateNestedOneWithoutZapInput
    user: UserCreateNestedOneWithoutZapsInput
    zapRuns?: ZapRunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutTemplateInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    userId: string
    image?: string | null
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    zapRuns?: ZapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutTemplateInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutTemplateInput, ZapUncheckedCreateWithoutTemplateInput>
  }

  export type ZapCreateManyTemplateInputEnvelope = {
    data: ZapCreateManyTemplateInput | ZapCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type AppUpsertWithoutTriggerTemplatesInput = {
    update: XOR<AppUpdateWithoutTriggerTemplatesInput, AppUncheckedUpdateWithoutTriggerTemplatesInput>
    create: XOR<AppCreateWithoutTriggerTemplatesInput, AppUncheckedCreateWithoutTriggerTemplatesInput>
    where?: AppWhereInput
  }

  export type AppUpdateToOneWithWhereWithoutTriggerTemplatesInput = {
    where?: AppWhereInput
    data: XOR<AppUpdateWithoutTriggerTemplatesInput, AppUncheckedUpdateWithoutTriggerTemplatesInput>
  }

  export type AppUpdateWithoutTriggerTemplatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutAppsNestedInput
    authMethods?: AuthMethodsUpdateManyWithoutAppNestedInput
    actions?: AvailableActionsUpdateManyWithoutAppNestedInput
    triggers?: AvailableTriggersUpdateManyWithoutAppNestedInput
    actionTemplates?: ZapTemplateUpdateManyWithoutActionAppNestedInput
  }

  export type AppUncheckedUpdateWithoutTriggerTemplatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    authMethods?: AuthMethodsUncheckedUpdateManyWithoutAppNestedInput
    actions?: AvailableActionsUncheckedUpdateManyWithoutAppNestedInput
    triggers?: AvailableTriggersUncheckedUpdateManyWithoutAppNestedInput
    actionTemplates?: ZapTemplateUncheckedUpdateManyWithoutActionAppNestedInput
  }

  export type AvailableTriggersUpsertWithoutTemplatesInput = {
    update: XOR<AvailableTriggersUpdateWithoutTemplatesInput, AvailableTriggersUncheckedUpdateWithoutTemplatesInput>
    create: XOR<AvailableTriggersCreateWithoutTemplatesInput, AvailableTriggersUncheckedCreateWithoutTemplatesInput>
    where?: AvailableTriggersWhereInput
  }

  export type AvailableTriggersUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: AvailableTriggersWhereInput
    data: XOR<AvailableTriggersUpdateWithoutTemplatesInput, AvailableTriggersUncheckedUpdateWithoutTemplatesInput>
  }

  export type AvailableTriggersUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    app?: AppUpdateOneRequiredWithoutTriggersNestedInput
    triggers?: TriggerUpdateManyWithoutAvailableNestedInput
  }

  export type AvailableTriggersUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUncheckedUpdateManyWithoutAvailableNestedInput
  }

  export type AppUpsertWithoutActionTemplatesInput = {
    update: XOR<AppUpdateWithoutActionTemplatesInput, AppUncheckedUpdateWithoutActionTemplatesInput>
    create: XOR<AppCreateWithoutActionTemplatesInput, AppUncheckedCreateWithoutActionTemplatesInput>
    where?: AppWhereInput
  }

  export type AppUpdateToOneWithWhereWithoutActionTemplatesInput = {
    where?: AppWhereInput
    data: XOR<AppUpdateWithoutActionTemplatesInput, AppUncheckedUpdateWithoutActionTemplatesInput>
  }

  export type AppUpdateWithoutActionTemplatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutAppsNestedInput
    authMethods?: AuthMethodsUpdateManyWithoutAppNestedInput
    actions?: AvailableActionsUpdateManyWithoutAppNestedInput
    triggers?: AvailableTriggersUpdateManyWithoutAppNestedInput
    triggerTemplates?: ZapTemplateUpdateManyWithoutTriggerAppNestedInput
  }

  export type AppUncheckedUpdateWithoutActionTemplatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    authMethods?: AuthMethodsUncheckedUpdateManyWithoutAppNestedInput
    actions?: AvailableActionsUncheckedUpdateManyWithoutAppNestedInput
    triggers?: AvailableTriggersUncheckedUpdateManyWithoutAppNestedInput
    triggerTemplates?: ZapTemplateUncheckedUpdateManyWithoutTriggerAppNestedInput
  }

  export type AvailableActionsUpsertWithoutTemplatesInput = {
    update: XOR<AvailableActionsUpdateWithoutTemplatesInput, AvailableActionsUncheckedUpdateWithoutTemplatesInput>
    create: XOR<AvailableActionsCreateWithoutTemplatesInput, AvailableActionsUncheckedCreateWithoutTemplatesInput>
    where?: AvailableActionsWhereInput
  }

  export type AvailableActionsUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: AvailableActionsWhereInput
    data: XOR<AvailableActionsUpdateWithoutTemplatesInput, AvailableActionsUncheckedUpdateWithoutTemplatesInput>
  }

  export type AvailableActionsUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    actions?: ActionUpdateManyWithoutAvailableNestedInput
    app?: AppUpdateOneRequiredWithoutActionsNestedInput
  }

  export type AvailableActionsUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    actions?: ActionUncheckedUpdateManyWithoutAvailableNestedInput
  }

  export type ZapUpsertWithWhereUniqueWithoutTemplateInput = {
    where: ZapWhereUniqueInput
    update: XOR<ZapUpdateWithoutTemplateInput, ZapUncheckedUpdateWithoutTemplateInput>
    create: XOR<ZapCreateWithoutTemplateInput, ZapUncheckedCreateWithoutTemplateInput>
  }

  export type ZapUpdateWithWhereUniqueWithoutTemplateInput = {
    where: ZapWhereUniqueInput
    data: XOR<ZapUpdateWithoutTemplateInput, ZapUncheckedUpdateWithoutTemplateInput>
  }

  export type ZapUpdateManyWithWhereWithoutTemplateInput = {
    where: ZapScalarWhereInput
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TokenStoreCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    provider: string
    updatedAt?: Date | string
    accessToken: string
    refreshToken: string
  }

  export type ZapCreateManyUserInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: string | null
    templateId?: string | null
  }

  export type TokenStoreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type TokenStoreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type TokenStoreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUpdateManyWithoutZapNestedInput
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput
    template?: ZapTemplateUpdateOneWithoutZapsNestedInput
  }

  export type ZapUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppCreateManyTeamInput = {
    name: string
    description: string
    id?: string
  }

  export type UserCreateManyTeamInput = {
    id?: string
    name: string
    password: string
    email: string
    image?: string | null
  }

  export type AppUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    authMethods?: AuthMethodsUpdateManyWithoutAppNestedInput
    actions?: AvailableActionsUpdateManyWithoutAppNestedInput
    triggers?: AvailableTriggersUpdateManyWithoutAppNestedInput
    triggerTemplates?: ZapTemplateUpdateManyWithoutTriggerAppNestedInput
    actionTemplates?: ZapTemplateUpdateManyWithoutActionAppNestedInput
  }

  export type AppUncheckedUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    authMethods?: AuthMethodsUncheckedUpdateManyWithoutAppNestedInput
    actions?: AvailableActionsUncheckedUpdateManyWithoutAppNestedInput
    triggers?: AvailableTriggersUncheckedUpdateManyWithoutAppNestedInput
    triggerTemplates?: ZapTemplateUncheckedUpdateManyWithoutTriggerAppNestedInput
    actionTemplates?: ZapTemplateUncheckedUpdateManyWithoutActionAppNestedInput
  }

  export type AppUncheckedUpdateManyWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: TokenStoreUpdateManyWithoutUserNestedInput
    zaps?: ZapUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tokens?: TokenStoreUncheckedUpdateManyWithoutUserNestedInput
    zaps?: ZapUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthMethodsCreateManyAppInput = {
    id?: string
    authId: string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AvailableActionsCreateManyAppInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
  }

  export type AvailableTriggersCreateManyAppInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type: string
  }

  export type ZapTemplateCreateManyTriggerAppInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerId: string
    actionAppId: string
    actionId: string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type ZapTemplateCreateManyActionAppInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerAppId: string
    triggerId: string
    actionId: string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type AuthMethodsUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    availableAuth?: AvailableAuthMethodsUpdateOneRequiredWithoutAuthMethodsNestedInput
  }

  export type AuthMethodsUncheckedUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AuthMethodsUncheckedUpdateManyWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    authId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AvailableActionsUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    actions?: ActionUpdateManyWithoutAvailableNestedInput
    templates?: ZapTemplateUpdateManyWithoutActionNestedInput
  }

  export type AvailableActionsUncheckedUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    actions?: ActionUncheckedUpdateManyWithoutAvailableNestedInput
    templates?: ZapTemplateUncheckedUpdateManyWithoutActionNestedInput
  }

  export type AvailableActionsUncheckedUpdateManyWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggersUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUpdateManyWithoutAvailableNestedInput
    templates?: ZapTemplateUpdateManyWithoutTriggerNestedInput
  }

  export type AvailableTriggersUncheckedUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    triggers?: TriggerUncheckedUpdateManyWithoutAvailableNestedInput
    templates?: ZapTemplateUncheckedUpdateManyWithoutTriggerNestedInput
  }

  export type AvailableTriggersUncheckedUpdateManyWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    configMetadata?: JsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ZapTemplateUpdateWithoutTriggerAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    trigger?: AvailableTriggersUpdateOneRequiredWithoutTemplatesNestedInput
    actionApp?: AppUpdateOneRequiredWithoutActionTemplatesNestedInput
    action?: AvailableActionsUpdateOneRequiredWithoutTemplatesNestedInput
    zaps?: ZapUpdateManyWithoutTemplateNestedInput
  }

  export type ZapTemplateUncheckedUpdateWithoutTriggerAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerId?: StringFieldUpdateOperationsInput | string
    actionAppId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    zaps?: ZapUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ZapTemplateUncheckedUpdateManyWithoutTriggerAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerId?: StringFieldUpdateOperationsInput | string
    actionAppId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type ZapTemplateUpdateWithoutActionAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    triggerApp?: AppUpdateOneRequiredWithoutTriggerTemplatesNestedInput
    trigger?: AvailableTriggersUpdateOneRequiredWithoutTemplatesNestedInput
    action?: AvailableActionsUpdateOneRequiredWithoutTemplatesNestedInput
    zaps?: ZapUpdateManyWithoutTemplateNestedInput
  }

  export type ZapTemplateUncheckedUpdateWithoutActionAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerAppId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    zaps?: ZapUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ZapTemplateUncheckedUpdateManyWithoutActionAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerAppId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type AuthMethodsCreateManyAvailableAuthInput = {
    id?: string
    appId: string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AuthMethodsUpdateWithoutAvailableAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    app?: AppUpdateOneRequiredWithoutAuthMethodsNestedInput
  }

  export type AuthMethodsUncheckedUpdateWithoutAvailableAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type AuthMethodsUncheckedUpdateManyWithoutAvailableAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ActionCreateManyZapInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    sortingOrder?: number
    actionType: string
  }

  export type ZapRunCreateManyZapInput = {
    id?: string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ActionUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    sortingOrder?: IntFieldUpdateOperationsInput | number
    available?: AvailableActionsUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    sortingOrder?: IntFieldUpdateOperationsInput | number
    actionType?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    sortingOrder?: IntFieldUpdateOperationsInput | number
    actionType?: StringFieldUpdateOperationsInput | string
  }

  export type ZapRunUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    ZapRunOutBox?: ZapRunOutBoxUpdateOneWithoutZapRunNestedInput
  }

  export type ZapRunUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    ZapRunOutBox?: ZapRunOutBoxUncheckedUpdateOneWithoutZapRunNestedInput
  }

  export type ZapRunUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerCreateManyAvailableInput = {
    id?: string
    name: string
    description: string
    zapId: string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ZapTemplateCreateManyTriggerInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerAppId: string
    actionAppId: string
    actionId: string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerUpdateWithoutAvailableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutAvailableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerUncheckedUpdateManyWithoutAvailableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ZapTemplateUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    triggerApp?: AppUpdateOneRequiredWithoutTriggerTemplatesNestedInput
    actionApp?: AppUpdateOneRequiredWithoutActionTemplatesNestedInput
    action?: AvailableActionsUpdateOneRequiredWithoutTemplatesNestedInput
    zaps?: ZapUpdateManyWithoutTemplateNestedInput
  }

  export type ZapTemplateUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerAppId?: StringFieldUpdateOperationsInput | string
    actionAppId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    zaps?: ZapUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ZapTemplateUncheckedUpdateManyWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerAppId?: StringFieldUpdateOperationsInput | string
    actionAppId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type ActionCreateManyAvailableInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId: string
    sortingOrder?: number
  }

  export type ZapTemplateCreateManyActionInput = {
    id?: string
    name: string
    description: string
    category: string
    isPopular?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    triggerAppId: string
    triggerId: string
    actionAppId: string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type ActionUpdateWithoutAvailableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    sortingOrder?: IntFieldUpdateOperationsInput | number
    zap?: ZapUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutAvailableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionUncheckedUpdateManyWithoutAvailableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zapId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ZapTemplateUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    triggerApp?: AppUpdateOneRequiredWithoutTriggerTemplatesNestedInput
    trigger?: AvailableTriggersUpdateOneRequiredWithoutTemplatesNestedInput
    actionApp?: AppUpdateOneRequiredWithoutActionTemplatesNestedInput
    zaps?: ZapUpdateManyWithoutTemplateNestedInput
  }

  export type ZapTemplateUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerAppId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    actionAppId?: StringFieldUpdateOperationsInput | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
    zaps?: ZapUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type ZapTemplateUncheckedUpdateManyWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    isPopular?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triggerAppId?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    actionAppId?: StringFieldUpdateOperationsInput | string
    triggerConfig?: JsonNullValueInput | InputJsonValue
    actionConfig?: JsonNullValueInput | InputJsonValue
  }

  export type ZapCreateManyTemplateInput = {
    id?: string
    name: string
    description: string
    metadata?: JsonNullValueInput | InputJsonValue
    userId: string
    image?: string | null
  }

  export type ZapUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    image?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUpdateManyWithoutZapNestedInput
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    user?: UserUpdateOneRequiredWithoutZapsNestedInput
    zapRuns?: ZapRunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    zapRuns?: ZapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}