import type { UserConfig, Commit } from '@commitlint/types';

interface TicketCommit extends Commit {
  ticket?: string;
}

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'ticket-rule': [2, 'always'],
  },
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^((?:MR|CDAZR2)-[0-9]{1,5}(?:(-[0-9]{1,2}))?)\s(\w*)(?:\((.*)\))?: (.*)$/,
      headerCorrespondence: [
        'ticket',
        'ticket-suffix',
        'type',
        'scope',
        'subject',
      ],
    },
  },
  plugins: [
    {
      rules: {
        'ticket-rule': ({ ticket }: TicketCommit) => {
          if (!ticket) {
            return [
              false,
              "ticket number must be provided at the start of the commit, in format 'MR-XXXXX'",
            ];
          }
          return [true, ''];
        },
      },
    },
  ],
};

module.exports = Configuration;
