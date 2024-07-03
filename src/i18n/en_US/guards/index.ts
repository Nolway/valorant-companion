import type { BaseTranslation } from '../../i18n-types'

const en_US_guards = {
    onlyDm: {
        reply: 'This command can only be used in DMs.',
        userDm: 'You tried to use the `{commandName:string}` command in a Discord server. This command can only be used here.',
    },
} satisfies BaseTranslation;

export default en_US_guards;
