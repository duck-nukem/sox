export const SERVER_CONFIG: ServerConfiguration = {
  NAME: 'SAMPLE',
  PORT: 8080,
  AUTH_HEADER_PREFIX: 'Basic',
};

export const GREETING_CONFIG = {
  font: 'block',
  align: 'left',
  colors: ['system'],
  background: 'transparent',
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: '0',
};

export interface ServerConfiguration {
  NAME: string;
  PORT: number;
  AUTH_HEADER_PREFIX: string;
}