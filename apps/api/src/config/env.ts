import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  API_HOST: z.string().default('0.0.0.0'),
  API_PORT: z.coerce.number().default(3001),

  RAVENDB_URL: z.string().default('http://localhost:8080'),
  RAVENDB_DATABASE: z.string().default('LeadSoftDB'),

  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default('8h'),

  RECAPTCHA_SECRET_KEY: z.string().default(''),

  MAX_FILE_SIZE_MB: z.coerce.number().default(5),
  ALLOWED_IMAGE_TYPES: z.string().default('image/jpeg,image/png,image/webp'),
  REQUIRED_IMAGE_WIDTH: z.coerce.number().default(1080),
  REQUIRED_IMAGE_HEIGHT: z.coerce.number().default(1080),

  ADMIN_EMAIL: z.string().email().default('LeadIA@leadsoft.inf.br'),
  ADMIN_PASSWORD: z.string().min(6).default('Lead@1234'),

  CORS_ORIGIN: z.string().default('http://localhost:3000'),

  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

function loadEnv() {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error('❌ Invalid environment variables:');
    console.error(parsed.error.flatten().fieldErrors);
    process.exit(1);
  }

  return parsed.data;
}

export const env = loadEnv();
export type Env = z.infer<typeof envSchema>;
