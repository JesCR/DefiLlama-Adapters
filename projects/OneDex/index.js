const { sumTokensExport } = require('../helper/sumTokens')


// contrato farms: erd1qqqqqqqqqqqqqpgq5774jcntdqkzv62tlvvhfn2y7eevpty6mvlszk3dla
module.exports = {
  timetravel: false,
  elrond: {
    tvl: sumTokensExport({ chain: 'elrond', owner: 'erd1qqqqqqqqqqqqqpgq5774jcntdqkzv62tlvvhfn2y7eevpty6mvlszk3dla', })
  }
}
