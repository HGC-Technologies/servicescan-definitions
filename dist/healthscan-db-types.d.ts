export declare enum ECategory {
    UX_UI = 1,
    MANAGEABILITY = 2,
    UPGRADABILITY = 3,
    SECURITY = 4,
    PERFORMANCE = 5
}
export declare const CategoryTitleMap: Record<ECategory, string>;
/**
 * @IMPORTANT
 * The numeric IDs associated with EIssueType keys are
 * directly tied to the Postgres DB `sections` table's `issue_type` column.
 *
 * Do not modify existing IDs.
 */
export declare enum EIssueType {
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
    UNDERUSED_LICENSES = 26,
    ATTACHMENT_STATS = 28,
    SOFTWARE_ENTITLEMENTS = 29
}
export declare const IssueTypeTitleMap: Record<EIssueType, string>;
export declare const CategoryToIssueTypesMap: Record<ECategory, EIssueType[]>;
