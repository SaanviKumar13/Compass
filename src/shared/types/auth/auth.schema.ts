import { z } from 'zod';

export const AuthSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(5, { message: 'Must be 5 characters long or more' }),
  name: z.string(),
  linkedin: z.string().url({ message: 'Invalid LinkedIn URL' }),
  github: z.string().url({ message: 'Invalid GitHub URL' }), 
  phone: z.string(), 
  dob: z.string(), 
  year: z.string(), 
  degree: z.string(), 
  semester: z.string(), 
  skills: z.array(z.string()), 
  interests: z.array(z.string()), 
});

export const AuthGetSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
});

export type UserSchemaType = z.infer<typeof AuthSchema>;
export type AuthGetUserType = z.infer<typeof AuthGetSchema>;
