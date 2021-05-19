import { mergeTypeDefs } from '@graphql-tools/merge'

import accountTypeDefs from './account'

export default mergeTypeDefs([
  accountTypeDefs
])
