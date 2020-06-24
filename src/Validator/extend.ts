/**
 * @module indicative
 */

/*
* indicative
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { validations } from 'indicative-rules'
import { ParsedRule } from 'indicative-parser'
import { ValidationDefination } from 'indicative-compiler'
import { validations as validationsList } from './validations'

/**
 * Extend validator by adding new rules
 */
export function extend (name: string, definition: ValidationDefination): void {
  validations[name] = definition

  /**
   * Also adding it to the validations list used to define
   * schema rules
   */
  validationsList[name] = function rule (args): ParsedRule {
    return { name, args: args || [] }
  }
}
