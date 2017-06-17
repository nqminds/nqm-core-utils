/* eslint-disable key-spacing, max-len */
export default {
  // Resource access types
  readAccess:  "r",
  writeAccess: "w",
  executeAccess: "x",

  // Share modes
  publicRWShareMode: "pw",    // public read and write
  publicROShareMode: "pr",    // public read, trusted write
  trustedShareMode:  "tr",    // trusted only

  // Event types
  resourceEventType: "Resource",
  accountEventType:  "Account",

  mongooseTypes: {
    "string": 1,
    "number": 1,
    "date": 1,
    "boolean": 1,
  },

  // Resource types (schema ids)
  vocabularyResourceType:                 "vocabulary",
  schemaResourceType:                     "schema",
  datasetResourceType:                    "dataset",
  visualisationResourceType:              "visualisation",
  groupResourceType:                      "resourceGroup",             // generic folder
  rootGroupResourceType:                  "rootGroup",                 // user root folder - holds all account resources
  rawFileResourceType:                    "rawFile",
  applicationBaseType:                    "applicationBase",
  applicationDefinitionResourceType:      "applicationDefinition",     // system resources that mirror applicationAccountType accounts to enable sharing
  databotBaseType:                        "databot",                   // base of all things 'databot'
  databotDefinitionResourceType:          "databotDefinition",         // a databot definition
  databotHostResourceType:                "databotHost",               // system resources that mirror hostAccountType accounts to enable sharing

  resourceRootGroupResourceType:          "resourceRootGroup",         // folder for all 'pure' resources (non-databot or application)
  scratchGroupResourceType:               "scratchGroup",
  datasetFilterResourceType:              "datasetFilter",
  geojsonResourceType:                    "geojson",

  widgetVisualisationResourceType:        "widgetVisualisation",
  timeSeriesVisualisationResourceType:    "timeSeriesVisualisation",
  mapVisualisationResourceType:           "mapVisualisation",
  statusVisualisationResourceType:        "statusVisualisation",

  databotRootGroupResourceType:           "databotRootGroup",
  databotDefinitionGroupResourceType:     "databotGroup",
  databotHostGroupResourceType:           "databotHostGroup",
  databotInstanceGroupResourceType:       "databotInstanceGroup",
  databotControllerResourceType:          "databotController",

  applicationRootGroupResourceType:       "applicationRootGroup",
  applicationDefinitionGroupResourceType: "applicationDefinitionGroup",
  applicationServerGroupResourceType:     "applicationServerGroup",
  applicationDataGroupResourceType:       "applicationDataGroup",

  // databot management resources
  databotInstancesResourceType:           "databotInstances",          // system resource storing details of running databot instances
  databotInstanceOutputResourceType:      "databotInstanceOutput",     // system resource storing databot instance output
  databotProcessesResourceType:           "databotProcesses",          // system resource storing databot process info
  activeDatabotHostsResourceType:         "activeDatabotHosts",        // system resource storing details of active databot hosts

  // Account types
  userAccountType:  "user",
  tokenAccountType: "token",
  hostAccountType: "host",
  applicationAccountType: "application",

  // Default schema resource
  schemasResourceId: "__schemas__",

  // Default vocabulary resource
  vocabularyResourceId: "__vocab__",

  // Databot stuff.
  npmDatabotType: "npm",
  inlineDatabotType: "script",
  zipDatabotType: "zip",
  githubDatabotType: "github",
  urlDatabotType: "url",

  browserHostType: "browser",
  serverHostType:  "server",

  databotInstancesResourceId:      "__databotInstances__",
  databotInstanceOutputResourceId: "__databotInstanceOutput__",
  databotProcessesResourceId:      "__databotProcesses__",
  activeDatabotHostsResourceId:    "__activeDatabotHosts__",

  unallocatedDatabotStatus: "unallocated",
  pendingDatabotStatus:     "pending",
  installingDatabotStatus:  "installing",
  partRunningDatabotStatus: "partRunning",
  runningDatabotStatus:     "running",
  pausedDatabotStatus:      "paused",
  stoppingDatabotStatus:    "stopping",
  completeDatabotStatus:    "complete",
  errorDatabotStatus:       "error",

  immediateDatabotInstanceRunMode: "run-now",
  alwaysDatabotInstanceRunMode:    "run-always",
  scheduledDatabotInstanceRunMode: "scheduled",

  // Privileged databots
  datasetImportDatabot:     "__datasetImport__",
  datasetCopyDatabot:       "__datasetCopy__",

  onlineHostStatus:  "online",
  offlineHostStatus: "offline",
  idleHostStatus:    "idle",
  busyHostStatus:    "busy",
  errorHostStatus:   "error",

  resourceVocabularyId:          "ResourceId",
  datasetVocabularyId:           "DatasetId",
  folderVocabularyId:            "FolderId",
  rawFileVocabularyId:           "RawFileId",
  visualisationVocabularyId:     "VisualisationId",
  schemaVocabularyId:            "SchemaId",
  databotDefinitionVocabularyId: "DatabotDefinitionId",
  urlVocabularyId:               "Url",

  // Index status
  builtIndexStatus:      "built",
  pendingIndexStatus:    "pending",
  suspendingIndexStatus: "suspending",
  suspendedIndexStatus:  "suspended",
  errorIndexStatus:      "error",

  // Authentication services
  googleAuthService:     "oauth:google",
  localAuthService:      "local",

  // Misc
  guestAccount: "...guest...",
  maxTimestamp: 8640000000000000,
  datasetStorePrefix: "dataset.",

  // Special folders
  rootFolderPrefix: "r.",
  rootFolderName: "root",

  scratchFolderPrefix: "s.",
  scratchFolderName: "scratch",
  scratchFolderAlias: "__scratch__",      // Used in code to refer to the current users scratch folder.

  resourceRootFolderPrefix: "rs.",
  resourceRootFolderName: "resources",

  applicationRootFolderPrefix: "a.",
  applicationRootFolderName: "applications",

  applicationDefinitionFolderPrefix: "adef.",
  applicationDefinitionFolderName: "application definitions",

  applicationServerFolderPrefix: "as.",
  applicationServerFolderName: "application servers",

  applicationDataFolderPrefix: "ad.",
  applicationDataFolderName: "application data",

  // For application-specific folders where app servers can store data.
  // Created as sub-folders of applicationServerFolderPrefix.
  // Will use the application name, e.g. "careshare server data".
  applicationServerDataFolderPrefix: "adat.",

  databotRootFolderPrefix: "dbr.",
  databotRootFolderName: "databots",

  databotDefinitionFolderPrefix: "db.",
  databotDefinitionFolderName: "databot definitions",

  databotHostFolderPrefix: "dh.",
  databotHostFolderName: "databot hosts",

  databotInstanceFolderPrefix: "dbi.",
  databotInstanceFolderName: "databot instances",

  // Application data ownership modes
  userOwnershipMode: "user",
  appOwnershipMode: "application",

  // Application data access modes
  impersonateAccessMode: "impersonate",
  shareAccessMode: "shared",

  // Identity filter placeholder
  identityFilterPlaceholder: "@@_identity_@@",

  // Application ids
  authenticateApplicationId: "__authenticate__",
  toolboxApplicationId: "__toolbox__",
};
