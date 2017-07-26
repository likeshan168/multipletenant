/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace ultimate.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('ultimate');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}