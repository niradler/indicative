/*
* indicative
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

/**
 * Shape of parsed rule
 */
export type ParsedRule = {
  name: string,
  args: any[],
}

/**
 * Shape of array node inside schema tree
 */
export type SchemaNodeArray = {
  type: 'array',
  rhs: ParsedRule[] | ParsedMessagesNode,
  each: {
    [index: string]: {
      rhs: ParsedRule[] | ParsedMessagesNode,
      children: ParsedSchema,
    },
  },
}

/**
 * Shape of object node inside schema tree
 */
export type SchemaNodeObject = {
  type: 'object',
  rhs: ParsedRule[] | ParsedMessagesNode,
  children: ParsedSchema,
}

/**
 * Shape of literal node inside schema tree
 */
export type SchemaNodeLiteral = {
  type: 'literal',
  rhs: ParsedRule[] | ParsedMessagesNode,
}

/**
 * User defined schema
 */
export type Schema = {
  [field: string]: string | ParsedRule[],
}

/**
 * Parsed schema tree
 */
export type ParsedSchema = {
  [field: string]: SchemaNodeArray | SchemaNodeLiteral | SchemaNodeObject,
}

/**
 * Shape of a single validation message
 */
export type MessageNode = string | ((field: string, validation: string, args: any[]) => string)

/**
 * Shape of messages
 */
export type Messages = {
  [field: string]: MessageNode,
}

/**
 * Parsed messages node for a given field
 */
export type ParsedMessagesNode = { [rule: string]: MessageNode }

/**
 * Parsed messages tree
 */
export type ParsedMessages = {
  rules: ParsedMessagesNode,
  named: {
    [field: string]: SchemaNodeArray | SchemaNodeLiteral | SchemaNodeObject,
  },
}