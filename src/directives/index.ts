import { App } from 'vue'
import { setupIsBooleanDirective } from './boolean'

export function setupGlobDirectives(app: App) {
  setupIsBooleanDirective(app)
}
