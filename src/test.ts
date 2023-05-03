import { ExecuteCommonIntrumentK } from '@runbook/instruments'
import { JSInstrument } from "@runbook/javascript_instruments";

export const testInstrument: ExecuteCommonIntrumentK<JSInstrument> = ( context, ji ) =>
  async ( { protocol, domain, port } ) =>
    `{"summary": protocol: ${protocol}, domain: ${domain}, port: ${port}"}`