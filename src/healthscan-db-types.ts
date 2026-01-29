export enum ECategory {
  UX_UI = 1,
  MANAGEABILITY = 2,
  UPGRADABILITY = 3,
  SECURITY = 4,
  PERFORMANCE = 5,
}

export const CategoryTitleMap: Record<ECategory, string> = {
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
export enum EIssueType {
  SLOW_QUERIES = 1,
  LARGE_TABLES = 2,
  LONG_TITLES = 3,
  GLOBAL_UI_SCRIPTS = 4,
  ACL = 5,
  BUSY_FORMS = 6,
  SLOW_SCRIPTS = 7,
  DATABASE_LOOKUPS_IN_ACCESS_CONTROL_RULES = 8,
  GLOBAL_BUSINESS_RULES = 9,
  INSTANCE_ERROR_LOGS = 10,
  LONG_RUNNING_REPORTS = 11,
  DUPLICATE_SCRIPT_INCLUDES = 12,
  DUPLICATE_FIELDS = 13,
  SCRIPT_INCLUDE_REPORTS = 14,
  TOO_MANY_CHOICES = 15,
  ASYNC_AJAX_METHODS = 16,
  DUPLICATE_UPDATE_SETS = 17,
  INSERTS_IN_BUSINESS_RULES = 18,
  LAST_SYSTEM_UPGRADE = 19,
  REPORT_3_MONTHS = 20,
  SCRIPT_INCLUDE_NO_ACL = 21,
  SAM_REPORT = 22,
  HAM_REPORT = 23,
  ADMIN_ROLE_REPORT = 24,
  //INSTANCE_LICENSES = 25,
  UNDERUSED_LICENSES = 26,
  //MONTHLY_REPORT=27,
  ATTACHMENT_STATS = 28,
  SOFTWARE_ENTITLEMENTS = 29,
  HELLO_WORLD = 9999,
}

//export type EIssueTypeExcludeMonthly = Exclude<EIssueType, EIssueType.MONTHLY_REPORT>;

export const IssueTypeTitleMap: Record<EIssueType, string> = {
  [EIssueType.SLOW_QUERIES]: "Slow Queries",
  [EIssueType.LARGE_TABLES]: "Large Tables",
  [EIssueType.LONG_TITLES]: "Long Titles",
  [EIssueType.GLOBAL_UI_SCRIPTS]: "Global UI Scripts",
  [EIssueType.ACL]: "ACLs",
  [EIssueType.BUSY_FORMS]: "Busy Forms",
  [EIssueType.SLOW_SCRIPTS]: "Slow Scripts",
  [EIssueType.DATABASE_LOOKUPS_IN_ACCESS_CONTROL_RULES]:
    "Database Lookups in ACLs",
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

export const CategoryToIssueTypesMap: Record<ECategory, EIssueType[]> = {
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
