/*
* indicative
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { skippable, ensureLength } from 'indicative-utils'
import { Validation } from 'indicative-compiler'

import { RulesConfig } from '../../Contracts'

const MISSING_VALUE = 'includes:make sure to define substring to match'

/**
 * Ensures the value of field under validation contains a given substring.
 *
 * [source, js]
 * ----
 * const rules = {
 *   url: 'includes:adonisjs.com'
 * }
 *
 * // or
 * const rules = {
 *   url: [
 *     rule('includes', ['adonisjs.com'])
 *   ]
 * }
 * ----
 */
const validation: Validation = {
  async: false,

  compile (args): any[] {
    ensureLength(args, MISSING_VALUE, 1)
    return [String(args[0])]
  },

  validate: (data, field, [substring]: [string], _type, _root, config: RulesConfig) => {
    const fieldValue = data[field]
    if (skippable(fieldValue, field, config)) {
      return true
    }

    if (typeof (fieldValue) !== 'string') {
      return false
    }

    return fieldValue.includes(substring)
  },
}

export { validation as default }
