// Copyright 2017-2020 @polkadot/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {
  Address: 'LookupSource',
  AnchorData: {
    anchoredBlock: 'u64',
    docRoot: 'H256',
    id: 'H256'
  },
  Fee: {
    key: 'Hash',
    price: 'Balance'
  },
  MultiAccountData: {
    deposit: 'Balance',
    depositor: 'AccountId',
    signatories: 'Vec<AccountId>',
    threshold: 'u16'
  },
  Multiplier: 'Fixed64',
  PreCommitData: {
    expirationBlock: 'u64',
    identity: 'H256',
    signingRoot: 'H256'
  },
  Proof: {
    leafHash: 'H256',
    sortedHashes: 'H256'
  },
  StakingLedger: 'StakingLedgerTo240',
  Weight: 'u32'
};

const versioned: OverrideVersionedType[] = [
  {
    minmax: [229, 334],
    types: {
      ...sharedTypes,
      ReferendumInfo: 'ReferendumInfoTo239',
      ChainId: 'u8',
      DepositNonce: 'u64',
      ResourceId: '[u8; 32]',
      'chainbridge::ChainId': 'u8'
    }
  },
  {
    minmax: [235, undefined],
    types: {
      ...sharedTypes,
      ChainId: 'u8',
      DepositNonce: 'u64',
      ResourceId: '[u8; 32]',
      'chainbridge::ChainId': 'u8'
    }
  }
];

export default versioned;
