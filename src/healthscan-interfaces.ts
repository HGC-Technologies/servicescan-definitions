import { EIssueType } from "healthscan-db-types";

/**
 * Every section must have its corresponding type defined.
 * These types have been extracted to an external library since they are used by
 * both servicescan-api and servicescan-report projects.
 * @param issueType - the section's type
 * @param sectionConfig - configurable variables like threshold/limits, useful for performing logic on scanDetails.
 * Note: sectionConfig can also be used for other runtime-generated values that you don't want repeated in every single scanDetail entry.
 * @param scanDetails - an array of records associated with the section.
 */
interface ISectionBase {
  issueType: EIssueType;
  sectionConfig: unknown;
  scanDetails: unknown[];
}

/**
 * When defining a new section, use the section template.
 * It makes typescript enforce the required types for each section.
 */
type TSectionTemplate<T extends ISectionBase> = T;

// Naming conventions:
// T{Whatever}Section for type names, following the name of the defined EIssueType.WHATEVER

export type TSlowQueriesSection = TSectionTemplate<{
  issueType: EIssueType.SLOW_QUERIES;
  sectionConfig: {
    slowQueryThresholdMS: number;
    totalQueries: number;
  };
  scanDetails: {
    url: string;
    execTimeInMS: number;
    query: string;
    hhmmss: string;
    count: number;
    lastRunDate: string;
  }[];
}>;

export type THelloWorldSection = TSectionTemplate<{
  issueType: EIssueType.HELLO_WORLD;
  sectionConfig: {
    someThreshold: number;
    someProp: number;
    otherProp: string;
  };
  scanDetails: {
    name: string;
    lastName: string;
  }[];
}>;

export type TACLDBLookupSection = TSectionTemplate<{
  issueType: EIssueType.DATABASE_LOOKUPS_IN_ACCESS_CONTROL_RULES;
  sectionConfig: {};
  scanDetails: {
    name: string;
    id: string;
    description: string;
    URL: string;
  }[];
}>;

export type TACLSection = TSectionTemplate<{
  issueType: EIssueType.ACL;
  sectionConfig: {};
  scanDetails: {
    name: string;
    id: string;
    URL?: string;
    operation: string;
    description: string;
    groups?: Array<{
      type: string;
      name: string;
    }>;
    reasons?: Array<{
      reason: string;
    }>;
  }[];
}>;

export type TBusyFormsSection = TSectionTemplate<{
  issueType: EIssueType.BUSY_FORMS;
  sectionConfig: {};
  scanDetails: {
    formID: string;
    formName?: string;
    URL: string;
    view?: {
      viewId: string;
      viewName: string;
    };
    tableName?: string;
    totalElementCount: number;
    sections: Array<{
      sectionID: string;
      sectionName: string;
      elementCount: number;
      elementNames: Array<string>;
    }>;
  }[];
}>;

export type TDuplicateFieldsSection = TSectionTemplate<{
  issueType: EIssueType.DUPLICATE_FIELDS;
  sectionConfig: {};
  scanDetails: {
    viewName: string;
    duplicateFields: Array<string>;
    table: string;
  }[];
}>;

export type TDuplicateScriptIncludesSection = TSectionTemplate<{
  issueType: EIssueType.DUPLICATE_SCRIPT_INCLUDES;
  sectionConfig: {};
  scanDetails: {
    id: string;
    name: string;
    URL: string;
  }[];
}>;

export type TDuplicateUpdateSetsSection = TSectionTemplate<{
  issueType: EIssueType.DUPLICATE_UPDATE_SETS;
  sectionConfig: {};
  scanDetails: {
    url: string;
    updatesetName: string;
    parent: string;
    parentURL: string;
    occurrence: number;
  }[];
}>;

export type TAttachmentStatsSection = TSectionTemplate<{
  issueType: EIssueType.ATTACHMENT_STATS;
  sectionConfig: {};
  scanDetails: {
    contentType: string;
    sizeMB: number;
    count: number;
  }[];
}>;

export type TSoftwareEntitlementsSection = TSectionTemplate<{
  issueType: EIssueType.SOFTWARE_ENTITLEMENTS;
  sectionConfig: {};
  scanDetails: {
    id: string;
    name: string;
    state: string;
    licensesUsed: number;
    licensesAvailable: number;
    totalLicenses: number;
  }[];
}>;

export type TGlobalBusinessRulesSection = TSectionTemplate<{
  issueType: EIssueType.GLOBAL_BUSINESS_RULES;
  sectionConfig: {};
  scanDetails: {
    name: string;
    id: string;
    active: string;
    condition: string;
    URL: string;
  }[];
}>;

export type TGlobalUIScriptsSection = TSectionTemplate<{
  issueType: EIssueType.GLOBAL_UI_SCRIPTS;
  sectionConfig: {};
  scanDetails: {
    name: string;
    id: string;
    active: string;
    description: string;
    URL: string;
  }[];
}>;

export type TInstanceErrorLogsSection = TSectionTemplate<{
  issueType: EIssueType.INSTANCE_ERROR_LOGS;
  sectionConfig: {};
  scanDetails: {
    errorSource: string;
    errorCount: number;
    URL: string;
  }[];
}>;

export type THAMReportSection = TSectionTemplate<{
  issueType: EIssueType.HAM_REPORT;
  sectionConfig: {
    totalRecords: number;
  };
  scanDetails: {
    hardwareName: string;
    model: string;
    serialNumber: string;
    assetTag: string;
    purchaseDate: string;
    warrantyExpiryDate: string;
    location: string;
    assignedUser: string;
    status: string;
    vendor: string;
    costCenter: string;
    maintenanceSchedule: string;
  }[];
}>;

interface TableEntries {
  tableName: string;
  recordCount: number;
  URL: string;
  tableType: "NORMAL" | "CUSTOM" | "SYS" | "TASK";
}

export type TLargeTablesSection = TSectionTemplate<{
  issueType: EIssueType.LARGE_TABLES;
  sectionConfig: {
    largeTableThreshold: number;
  };
  scanDetails: TableEntries[];
}>;

interface ReportQueries {
  url: string;
  reportName: string;
  table: string;
  execTimeInMS: number;
  query: string;
  hhmmss: string;
}
export type TLongRunningReportsSection = TSectionTemplate<{
  issueType: EIssueType.LONG_RUNNING_REPORTS;
  sectionConfig: {
    longReportThresholdMS: number;
    totalQueries: number;
  };
  scanDetails: ReportQueries[];
}>;

export type TLastSystemUpgradeSection = TSectionTemplate<{
  issueType: EIssueType.LAST_SYSTEM_UPGRADE;
  sectionConfig: {
    fromVersion?: string;
    toVersion?: string;
    upgradeDate?: string;
    daysSinceUpgrade?: string;
  };
  scanDetails: unknown[]; // not using scanDetails in this section
}>;

export type TLongTitlesSection = TSectionTemplate<{
  issueType: EIssueType.LONG_TITLES;
  sectionConfig: {
    longTitleStringLength: number;
    totalRecords: number;
  };
  scanDetails: {
    title: string;
    tableName: string;
    URL: string;
  }[];
}>;

export type TInsertsInBusinessRulesSection = TSectionTemplate<{
  issueType: EIssueType.INSERTS_IN_BUSINESS_RULES;
  sectionConfig: {};
  scanDetails: {
    name: string;
    id: string;
    active: string;
    condition: string;
    URL: string;
  }[];
}>;

export type TReport3MonthsSection = TSectionTemplate<{
  issueType: EIssueType.REPORT_3_MONTHS;
  sectionConfig: {};
  scanDetails: {
    url: string;
    reportName: string;
    table: string;
    created: string;
    lastRunDate: string | undefined;
    issue: "Not run in 3 months" | "Never run";
  }[];
}>;

export type TScriptIncludeNoACLSection = TSectionTemplate<{
  issueType: EIssueType.SCRIPT_INCLUDE_NO_ACL;
  sectionConfig: {
    totalQueries: number;
  };
  scanDetails: {
    url: string;
    scriptIncludeName: string;
    sysId: string;
    clientCallable: boolean;
    active: boolean;
  }[];
}>;

export type TSlowScriptsSection = TSectionTemplate<{
  issueType: EIssueType.SLOW_SCRIPTS;
  sectionConfig: {
    execTimeThresholdMS: number;
  };
  scanDetails: {
    label: string;
    avgExecTimeInMS: number;
    URL: string;
    lastUpdateDate: string;
    lastRunDate: string;
    count: number;
  }[];
}>;

export type TTooManyChoicesSection = TSectionTemplate<{
  issueType: EIssueType.TOO_MANY_CHOICES;
  sectionConfig: {};
  scanDetails: {
    url: string;
    counts: string;
    element: string;
    tableName: string;
  }[];
}>;

export type TAdminRoleSection = TSectionTemplate<{
  issueType: EIssueType.ADMIN_ROLE_REPORT;
  sectionConfig: {
    totalAdmin: number;
  };
  scanDetails: {
    name: string;
    email: string;
    url: string;
    lastLogin: string;
  }[];
}>;

export type TUnderusedLicensesSection = TSectionTemplate<{
  issueType: EIssueType.UNDERUSED_LICENSES;
  sectionConfig: {
    threshold: number;
    totalRecords: number;
  };
  scanDetails: {
    moduleName: string;
    usagePercentage: string;
    recommendation?: string;
    expired?: boolean;
    totalLicenses?: number | null;
    totalUsed?: number | null;
    isUnderUsed?: boolean;
    pool?: boolean;
    poolLicences?: any[];
  }[];
}>;

export type TASyncAjaxMethodsSection = TSectionTemplate<{
  issueType: EIssueType.ASYNC_AJAX_METHODS;
  sectionConfig: {};
  scanDetails: {
    name: string;
    id: string;
    active: string;
    description: string;
    URL: string;
  }[];
}>;
