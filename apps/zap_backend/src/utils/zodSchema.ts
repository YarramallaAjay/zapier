import { z } from "zod";

export const signInSchema=z.object({
    password:z.string().min(6),
    email:z.string().email()
})

export const signupSchema=z.object({
    name:z.string().min(5),
    password:z.string().min(6),
    email:z.string().email()
})


// User Schema
export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
  teamId: z.string().uuid().nullable(),
});
 // For partial validation

// Team Schema
export const TeamSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  metadata: z.record(z.any()).optional(),
  createdById: z.string().uuid(),
});
 // For partial validation

// App Schema
export const AppSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  teamId: z.string().uuid(),
}) // For partial validation

// AvailableTriggers Schema
export const AvailableTriggersSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  metadata: z.record(z.any()).optional(),
  configMetadata: z.record(z.any()).optional(),
  type: z.string(),
  appId: z.string().uuid(),
});

// AvailableActions Schema
export const AvailableActionsSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  metadata: z.record(z.any()).optional(),
  configMetadata: z.record(z.any()).optional(),
  type: z.string(),
  appId: z.string().uuid(),
});

// Zap Schema
export const ZapSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  metadata: z.record(z.any()).optional(),
  userId: z.string(),
  actions: z.array(z.string().uuid()),
  image :z.string()// Array of action IDs
}) 

// Trigger Schema
export const TriggerSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  zapId: z.string().uuid(),
  metadata: z.record(z.any()).optional(),
  availableTriggerId: z.string().uuid(),
});

// Action Schema
export const ActionSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  metadata: z.record(z.any()).optional(),
  zapId: z.string().uuid(),
  sortingOrder: z.number(),
  actionType: z.string(),
});

// AuthMethods Schema
export const AuthMethodsSchema = z.object({
  id: z.string().uuid(),
  appId: z.string().uuid(),
  authId: z.string().uuid(),
  metadata: z.record(z.any()).optional(),
});
 // For partial validation

// AvailableAuthMethods Schema
export const AvailableAuthMethodsSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  provider: z.string(),
  description: z.string(),
  metadata: z.record(z.any()).optional(),
});
 // For partial validation

// ZapRun Schema
export const ZapRunSchema = z.object({
  id: z.string().uuid(),
  metadata: z.record(z.any()).optional(),
  zapId: z.string().uuid(),
});

// ZapRunOutBox Schema
export const ZapRunOutBoxSchema = z.object({
  id: z.string().uuid(),
  zaprunId: z.string().uuid(),
});

// TokenStore Schema
export const TokenStoreSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  provider: z.string(),
  updatedAt: z.string().datetime(),
  accessToken: z.string(),
  refreshToken: z.string(),
  userId: z.string().uuid(),
});
