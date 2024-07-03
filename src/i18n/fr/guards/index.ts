import type { NamespaceGuardsTranslation } from '../../i18n-types'

const fr_FR_guards = {
  onlyDm: {
    reply: 'Cette commande ne peut être utilisée que dans les messages privés.',
    userDm: "Vous avez essayé d'utiliser la commande `{commandName}` dans le salon d'un serveur. Cette commande ne peut être utilisée que ici.",
  },
} satisfies NamespaceGuardsTranslation

export default fr_FR_guards
