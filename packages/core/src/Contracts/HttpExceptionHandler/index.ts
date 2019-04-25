/*
 * @adonisjs/core
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { HttpContextContract } from '../Context'

export interface HttpExceptionHandlerContract {
  report (error: any, ctx: HttpContextContract): void
  handle (error: any, ctx: HttpContextContract): void
}
