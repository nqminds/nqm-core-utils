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
  rootGroupResourceType:               "rootGroup",
  schemaResourceType:                  "schema",
  datasetResourceType:                 "dataset",
  visualisationResourceType:           "visualisation",
  groupResourceType:                   "resourceGroup",
  rawFileResourceType:                 "rawFile",
  vocabularyResourceType:              "vocabulary",
  widgetVisualisationResourceType:     "widgetVisualisation",
  timeSeriesVisualisationResourceType: "timeSeriesVisualisation",
  mapVisualisationResourceType:        "mapVisualisation",
  statusVisualisationResourceType:     "statusVisualisation",
  databotBaseType:                     "databot",                   // base of all things 'databot'
  databotResourceType:                 "databotDefinition",         // a databot definition
  databotInstancesResourceType:        "databotInstances",          // system resource storing details of running databot instances
  databotInstanceOutputResourceType:   "databotInstanceOutput",     // system resource storing databot instance output
  databotProcessesResourceType:        "databotProcesses",          // system resource storing databot process info
  activeDatabotHostsResourceType:      "activeDatabotHosts",        // system resource storing details of active databot hosts
  databotHostResourceType:             "databotHost",               // system resources that mirror hostAccountType accounts to enable sharing
  databotGroupResourceType:            "databotGroup",
  databotHostGroupResourceType:        "databotHostGroup",
  databotControllerResourceType:       "databotController",
  datasetFilterResourceType:           "datasetFilter",
  applicationBaseType:                 "applicationBase",
  applicationResourceType:             "application",
  applicationGroupResourceType:        "applicationGroup",
  applicationDataGroupResourceType:    "applicationDataGroup",
  scratchGroupResourceType:            "scratchGroup",
  rootResourceGroupResourceType:       "rootResourceGroup",
  geojsonResourceType:                 "geojson",

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

  resourceFolderPrefix: "rs.",
  resourceFolderName: "resources",

  applicationFolderPrefix: "a.",
  applicationFolderName: "applications",

  applicationDataFolderPrefix: "ad.",
  applicationDataFolderName: "application data",

  databotFolderPrefix: "db.",
  databotFolderName: "databots",

  databotHostFolderPrefix: "dh.",
  databotHostFolderName: "databot hosts",

  identityFilterPlaceholder: "@@_identity_@@",
};
