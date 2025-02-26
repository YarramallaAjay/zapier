import {z} from 'zod';

export const signInSchema=z.object({
    password:z.string().min(6),
    email:z.string().email()
})

export const signupSchema=z.object({
    name:z.string().min(5),
    password:z.string().min(6),
    email:z.string().email()
})

export const newZapSchema=z.object({
    name:z.string().min(3),
    description:z.string().min(6),
    triggerId:z.string(),
    metadata:z.any().optional(),
    actions:z.array(z.object({
        actionId:z.string(),
        data:z.any().optional(),
    }))
})