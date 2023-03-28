import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.ts']
}

export default config
