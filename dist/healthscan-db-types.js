"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryToIssueTypesMap = exports.IssueTypeTitleMap = exports.EIssueType = exports.CategoryTitleMap = exports.ECategory = void 0;
var ECategory;
(function (ECategory) {
    ECategory[ECategory["UX_UI"] = 1] = "UX_UI";
    ECategory[ECategory["MANAGEABILITY"] = 2] = "MANAGEABILITY";
    ECategory[ECategory["UPGRADABILITY"] = 3] = "UPGRADABILITY";
    ECategory[ECategory["SECURITY"] = 4] = "SECURITY";
    ECategory[ECategory["PERFORMANCE"] = 5] = "PERFORMANCE";
})(ECategory || (exports.ECategory = ECategory = {}));
exports.CategoryTitleMap = {
    [ECategory.UX_UI]: "UX and UI",
    [ECategory.MANAGEABILITY]: "Manageability",
    [ECategory.UPGRADABILITY]: "Upgradability",
    [ECategory.SECURITY]: "Security",
    [ECategory.PERFORMANCE]: "Performance",
};
/**
 * @IMPORTANT
 * The numeric IDs associated with EIssueType keys are
 * directly tied to the Postgres DB `sections` table's `issue_type` column.
 *
 * Do not modify existing IDs.
 */
var EIssueType;
(function (EIssueType) {
    EIssueType[EIssueType["SLOW_QUERIES"] = 1] = "SLOW_QUERIES";
    EIssueType[EIssueType["LARGE_TABLES"] = 2] = "LARGE_TABLES";
    EIssueType[EIssueType["LONG_TITLES"] = 3] = "LONG_TITLES";
    EIssueType[EIssueType["GLOBAL_UI_SCRIPTS"] = 4] = "GLOBAL_UI_SCRIPTS";
    EIssueType[EIssueType["ACL"] = 5] = "ACL";
    EIssueType[EIssueType["BUSY_FORMS"] = 6] = "BUSY_FORMS";
    EIssueType[EIssueType["SLOW_SCRIPTS"] = 7] = "SLOW_SCRIPTS";
    EIssueType[EIssueType["DATABASE_LOOKUPS_IN_ACCESS_CONTROL_RULES"] = 8] = "DATABASE_LOOKUPS_IN_ACCESS_CONTROL_RULES";
    EIssueType[EIssueType["GLOBAL_BUSINESS_RULES"] = 9] = "GLOBAL_BUSINESS_RULES";
    EIssueType[EIssueType["INSTANCE_ERROR_LOGS"] = 10] = "INSTANCE_ERROR_LOGS";
    EIssueType[EIssueType["LONG_RUNNING_REPORTS"] = 11] = "LONG_RUNNING_REPORTS";
    EIssueType[EIssueType["DUPLICATE_SCRIPT_INCLUDES"] = 12] = "DUPLICATE_SCRIPT_INCLUDES";
    EIssueType[EIssueType["DUPLICATE_FIELDS"] = 13] = "DUPLICATE_FIELDS";
    EIssueType[EIssueType["SCRIPT_INCLUDE_REPORTS"] = 14] = "SCRIPT_INCLUDE_REPORTS";
    EIssueType[EIssueType["TOO_MANY_CHOICES"] = 15] = "TOO_MANY_CHOICES";
    EIssueType[EIssueType["ASYNC_AJAX_METHODS"] = 16] = "ASYNC_AJAX_METHODS";
    EIssueType[EIssueType["DUPLICATE_UPDATE_SETS"] = 17] = "DUPLICATE_UPDATE_SETS";
    EIssueType[EIssueType["INSERTS_IN_BUSINESS_RULES"] = 18] = "INSERTS_IN_BUSINESS_RULES";
    EIssueType[EIssueType["LAST_SYSTEM_UPGRADE"] = 19] = "LAST_SYSTEM_UPGRADE";
    EIssueType[EIssueType["REPORT_3_MONTHS"] = 20] = "REPORT_3_MONTHS";
    EIssueType[EIssueType["SCRIPT_INCLUDE_NO_ACL"] = 21] = "SCRIPT_INCLUDE_NO_ACL";
    EIssueType[EIssueType["SAM_REPORT"] = 22] = "SAM_REPORT";
    EIssueType[EIssueType["HAM_REPORT"] = 23] = "HAM_REPORT";
    EIssueType[EIssueType["ADMIN_ROLE_REPORT"] = 24] = "ADMIN_ROLE_REPORT";
    //INSTANCE_LICENSES = 25,
    EIssueType[EIssueType["UNDERUSED_LICENSES"] = 26] = "UNDERUSED_LICENSES";
    //MONTHLY_REPORT=27,
    EIssueType[EIssueType["ATTACHMENT_STATS"] = 28] = "ATTACHMENT_STATS";
    EIssueType[EIssueType["SOFTWARE_ENTITLEMENTS"] = 29] = "SOFTWARE_ENTITLEMENTS";
    EIssueType[EIssueType["HELLO_WORLD"] = 9999] = "HELLO_WORLD";
})(EIssueType || (exports.EIssueType = EIssueType = {}));
//export type EIssueTypeExcludeMonthly = Exclude<EIssueType, EIssueType.MONTHLY_REPORT>;
exports.IssueTypeTitleMap = {
    [EIssueType.SLOW_QUERIES]: "Slow Queries",
    [EIssueType.LARGE_TABLES]: "Large Tables",
    [EIssueType.LONG_TITLES]: "Long Titles",
    [EIssueType.GLOBAL_UI_SCRIPTS]: "Global UI Scripts",
    [EIssueType.ACL]: "ACLs",
    [EIssueType.BUSY_FORMS]: "Busy Forms",
    [EIssueType.SLOW_SCRIPTS]: "Slow Scripts",
    [EIssueType.DATABASE_LOOKUPS_IN_ACCESS_CONTROL_RULES]: "Database Lookups in ACLs",
    [EIssueType.GLOBAL_BUSINESS_RULES]: "Global Business Rules",
    [EIssueType.INSTANCE_ERROR_LOGS]: "Instance Error Logs",
    [EIssueType.LONG_RUNNING_REPORTS]: "Long Running Reports",
    [EIssueType.DUPLICATE_SCRIPT_INCLUDES]: "Duplicate Script Includes",
    [EIssueType.DUPLICATE_FIELDS]: "Duplicate Fields",
    [EIssueType.SCRIPT_INCLUDE_REPORTS]: "Script Includes Reports",
    [EIssueType.TOO_MANY_CHOICES]: "Too Many Choices",
    [EIssueType.ASYNC_AJAX_METHODS]: "Asynchronous AJAX Methods",
    [EIssueType.DUPLICATE_UPDATE_SETS]: "Duplicate Update Sets",
    [EIssueType.INSERTS_IN_BUSINESS_RULES]: "Inserts in Business Rules",
    [EIssueType.LAST_SYSTEM_UPGRADE]: "Last System Upgrade",
    [EIssueType.REPORT_3_MONTHS]: "Inactive Reports",
    [EIssueType.SCRIPT_INCLUDE_NO_ACL]: "Script Include Without ACL",
    [EIssueType.SAM_REPORT]: "Sofware Asset Management Report",
    [EIssueType.HAM_REPORT]: "Hardware Asset Management Report",
    [EIssueType.ADMIN_ROLE_REPORT]: "Admin Count Above Limit",
    [EIssueType.UNDERUSED_LICENSES]: "Underutilized Licenses",
    [EIssueType.ATTACHMENT_STATS]: "Attachment stats",
    [EIssueType.SOFTWARE_ENTITLEMENTS]: "Software Entitlements",
    [EIssueType.HELLO_WORLD]: "Hello World!",
};
exports.CategoryToIssueTypesMap = {
    [ECategory.UX_UI]: [
        EIssueType.LONG_TITLES,
        EIssueType.GLOBAL_UI_SCRIPTS,
        EIssueType.BUSY_FORMS,
        EIssueType.TOO_MANY_CHOICES,
        EIssueType.HELLO_WORLD,
    ],
    [ECategory.MANAGEABILITY]: [
        EIssueType.INSTANCE_ERROR_LOGS,
        EIssueType.DUPLICATE_SCRIPT_INCLUDES,
        EIssueType.DUPLICATE_FIELDS,
        EIssueType.DUPLICATE_UPDATE_SETS,
        EIssueType.SAM_REPORT,
        EIssueType.HAM_REPORT,
    ],
    [ECategory.UPGRADABILITY]: [
        EIssueType.LAST_SYSTEM_UPGRADE,
        EIssueType.REPORT_3_MONTHS,
        EIssueType.UNDERUSED_LICENSES,
        EIssueType.SOFTWARE_ENTITLEMENTS,
    ],
    [ECategory.SECURITY]: [
        EIssueType.ACL,
        EIssueType.DATABASE_LOOKUPS_IN_ACCESS_CONTROL_RULES,
        EIssueType.GLOBAL_BUSINESS_RULES,
        EIssueType.SCRIPT_INCLUDE_REPORTS,
        EIssueType.ASYNC_AJAX_METHODS,
        EIssueType.SCRIPT_INCLUDE_NO_ACL,
        EIssueType.ADMIN_ROLE_REPORT,
    ],
    [ECategory.PERFORMANCE]: [
        EIssueType.SLOW_QUERIES,
        EIssueType.SLOW_SCRIPTS,
        EIssueType.LONG_RUNNING_REPORTS,
        EIssueType.LARGE_TABLES,
        EIssueType.INSERTS_IN_BUSINESS_RULES,
        EIssueType.ATTACHMENT_STATS,
    ],
};
