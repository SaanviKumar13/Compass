import { config } from 'dotenv';
import path from 'path';
import { z } from 'zod';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envPath = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
config({ path: path.join(__dirname, '..', envPath) });
//console.log(" here", path.join(__dirname, '..', envPath))

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('test'),
  PORT: z.string().regex(/^\d+$/).optional().default('5050'),
  JWT_SECRET: z.string(),
  MONGODB_URI: z.string(),
});

const parsedSchema = envSchema.parse(process.env);

export type EnvSchemaType = z.infer<typeof envSchema>;

export default {
  NODE_ENV: parsedSchema.NODE_ENV,

  PORT: parsedSchema.PORT || 5050,

  JWT_SECRET: parsedSchema.JWT_SECRET,

  /**
   * Database the app should connect to
   */
  MONGODB_URI: parsedSchema.MONGODB_URI,


  /**
   * Used by Winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};
